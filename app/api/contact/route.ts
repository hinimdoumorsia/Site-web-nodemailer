import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Champs manquants" }, { status: 400 });
  }

  // ✉️ Configure le transport SMTP ici (exemple avec Gmail ou Resend)
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  // 📩 Mail à toi
  await transporter.sendMail({
    from: email,
    to: process.env.SMTP_USER,
    subject: `Message de ${name}`,
    text: message,
  });

  // 📩 Mail automatique au client
  await transporter.sendMail({
    from: process.env.SMTP_USER,
    to: email,
    subject: "Confirmation de réception",
    text: `Bonjour ${name},\n\nMerci pour votre message ! Je vous répondrai dès que possible.\n\nVotre message :\n"${message}"\n\nBien à vous,\nMorsia`,
  });

  return NextResponse.json({ success: true });
}
