import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { name, email, message, website } = body;

    // Honeypot anti spam
    if (website) {
      return NextResponse.json({ success: true });
    }

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 },
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 },
      );
    }

    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",

      to: "diegoesteban.ders@gmail.com",

      subject: `Nuevo mensaje de ${name}`,

      replyTo: email,

      html: `
        <h2>Nuevo mensaje desde tu portafolio</h2>

        <p><strong>Nombre:</strong> ${name}</p>

        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Mensaje:</strong></p>

        <p>${message}</p>
      `,
    });
    // Auto respuesta al usuario
    await resend.emails.send({
      from: "Diego Rivera <onboarding@resend.dev>",
      to: email,
      subject: "Recibí tu mensaje! Te responderé a la brevedad 👋",
      html: `
    <p>Hola ${name},</p>

    <p>Gracias por contactarme desde mi portafolio.</p>

    <p>Recibí tu mensaje y te responderé lo antes posible.</p>

    <br/>

    <p>Saludos,<br/>Diego</p>
  `,
    });

    return NextResponse.json(
      { success: true, message: "Message sent successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 },
    );
  }
}
