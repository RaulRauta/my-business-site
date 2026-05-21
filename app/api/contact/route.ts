import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const MAX_FIELD_LENGTH = 120;
const MAX_MESSAGE_LENGTH = 3000;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const name = asString(body.name);
    const email = asString(body.email);
    const phone = asString(body.phone);
    const business = asString(body.business);
    const service = asString(body.service);
    const selectedPackage = asString(body.selectedPackage);
    const message = asString(body.message, MAX_MESSAGE_LENGTH);

    if (!name || !EMAIL_PATTERN.test(email) || !message) {
      return NextResponse.json(
        { success: false, message: "Please send a valid name, email and message." },
        { status: 400 },
      );
    }

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error("CONTACT_ERROR: missing email credentials");
      return NextResponse.json(
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

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("CONTACT_ERROR:", error);

    return NextResponse.json(
      { success: false, message: "Message could not be sent." },
      { status: 500 },
    );
  }
}
