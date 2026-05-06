import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, phone, business, service, selectedPackage, message } =
      body;

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

  <p><b>Nume:</b> ${name}</p>
  <p><b>Email:</b> ${email}</p>
  <p><b>Telefon:</b> ${phone}</p>
  <p><b>Business:</b> ${business}</p>

  <p><b>Pachet selectat:</b> ${selectedPackage || "-"}</p>
  <p><b>Service:</b> ${service || "-"}</p>

  <p><b>Mesaj:</b></p>
  <p>${message}</p>
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
