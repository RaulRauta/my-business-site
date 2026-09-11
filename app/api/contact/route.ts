import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const MAX_FIELD_LENGTH = 120;
const MAX_MESSAGE_LENGTH = 3000;
const MAX_BODY_BYTES = 10_000;
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_REQUESTS = 3;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^\+?[0-9\s().-]{7,24}$/;

type RateLimitEntry = {
  count: number;
  resetAt: number;
};

const rateLimitStore = new Map<string, RateLimitEntry>();

function asString(value: unknown, maxLength = MAX_FIELD_LENGTH) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function jsonResponse(
  body: { success: boolean; message?: string },
  init?: ResponseInit,
) {
  return NextResponse.json(body, {
    ...init,
    headers: {
      "Cache-Control": "no-store, max-age=0",
      ...(init?.headers ?? {}),
    },
  });
}

function getClientIp(req: Request) {
  const forwardedFor = req.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() || "unknown";
  }

  return req.headers.get("x-real-ip") || "unknown";
}

function isAllowedOrigin(req: Request) {
  const origin = req.headers.get("origin");
  if (!origin) return true;

  const host = req.headers.get("host");
  if (!host) return false;

  try {
    const originUrl = new URL(origin);
    return originUrl.host === host || originUrl.host === "flowcraftstudio.app";
  } catch {
    return false;
  }
}

function isRateLimited(ip: string) {
  const now = Date.now();
  const current = rateLimitStore.get(ip);

  for (const [key, entry] of rateLimitStore.entries()) {
    if (entry.resetAt <= now) {
      rateLimitStore.delete(key);
    }
  }

  if (!current || current.resetAt <= now) {
    rateLimitStore.set(ip, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS,
    });
    return false;
  }

  current.count += 1;
  return current.count > RATE_LIMIT_MAX_REQUESTS;
}

export async function POST(req: Request) {
  try {
    if (!isAllowedOrigin(req)) {
      return jsonResponse(
        { success: false, message: "Request origin is not allowed." },
        { status: 403 },
      );
    }

    const contentType = req.headers.get("content-type") || "";
    if (!contentType.toLowerCase().includes("application/json")) {
      return jsonResponse(
        { success: false, message: "Unsupported request format." },
        { status: 415 },
      );
    }

    const contentLength = Number(req.headers.get("content-length") || 0);
    if (contentLength > MAX_BODY_BYTES) {
      return jsonResponse(
        { success: false, message: "Message is too large." },
        { status: 413 },
      );
    }

    const clientIp = getClientIp(req);
    if (isRateLimited(clientIp)) {
      return jsonResponse(
        { success: false, message: "Too many requests. Please try again later." },
        { status: 429 },
      );
    }

    const rawBody = await req.text();
    if (rawBody.length > MAX_BODY_BYTES) {
      return jsonResponse(
        { success: false, message: "Message is too large." },
        { status: 413 },
      );
    }

    let body: Record<string, unknown>;
    try {
      body = JSON.parse(rawBody) as Record<string, unknown>;
    } catch {
      return jsonResponse(
        { success: false, message: "Invalid request body." },
        { status: 400 },
      );
    }

    const name = asString(body.name);
    const email = asString(body.email);
    const phone = asString(body.phone);
    const business = asString(body.business);
    const service = asString(body.service);
    const selectedPackage = asString(body.selectedPackage);
    const message = asString(body.message, MAX_MESSAGE_LENGTH);

    if (
      !name ||
      !EMAIL_PATTERN.test(email) ||
      !PHONE_PATTERN.test(phone) ||
      !message
    ) {
      return jsonResponse(
        {
          success: false,
          message: "Please send a valid name, email, phone and message.",
        },
        { status: 400 },
      );
    }

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error("CONTACT_ERROR: missing email credentials");
      return jsonResponse(
        { success: false, message: "Message could not be sent." },
        { status: 500 },
      );
    }

    const safe = {
      name: escapeHtml(name),
      email: escapeHtml(email),
      phone: escapeHtml(phone || "-"),
      business: escapeHtml(business || "-"),
      selectedPackage: escapeHtml(selectedPackage || "-"),
      service: escapeHtml(service || "-"),
      message: escapeHtml(message).replace(/\n/g, "<br />"),
    };

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Website Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `New website message from ${name}`,
      html: `
  <h2>Mesaj nou</h2>

  <p><b>Nume:</b> ${safe.name}</p>
  <p><b>Email:</b> ${safe.email}</p>
  <p><b>Telefon:</b> ${safe.phone}</p>
  <p><b>Business:</b> ${safe.business}</p>

  <p><b>Pachet selectat:</b> ${safe.selectedPackage}</p>
  <p><b>Service:</b> ${safe.service}</p>

  <p><b>Mesaj:</b></p>
  <p>${safe.message}</p>
`,
    });

    return jsonResponse({ success: true });
  } catch (error) {
    console.error("CONTACT_ERROR:", error);

    return jsonResponse(
      { success: false, message: "Message could not be sent." },
      { status: 500 },
    );
  }
}
