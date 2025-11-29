import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: Request) {
  try {
    const { name, phone, email, issue } = await req.json()

    console.log("[v0] Contact form submission received:", { name, phone, email: email || "not provided" })

    // Validação básica
    if (!name || !phone || !issue) {
      console.log("[v0] Validation failed: missing required fields")
      return NextResponse.json({ ok: false, error: "Campos obrigatórios faltando" }, { status: 400 })
    }

    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error("[v0] Missing SMTP configuration in environment variables")
      return NextResponse.json({ ok: false, error: "Configuração de email não encontrada" }, { status: 500 })
    }

    console.log("[v0] Creating nodemailer transport with:", {
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      user: process.env.SMTP_USER,
    })

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    try {
      await transporter.verify()
      console.log("[v0] SMTP connection verified successfully")
    } catch (verifyError) {
      console.error("[v0] SMTP verification failed:", verifyError)
      return NextResponse.json({ ok: false, error: "Erro de conexão com servidor de email" }, { status: 500 })
    }

    const mailOptions = {
      from: `"Site Richard Wollyce" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO || "mail@richardwollyce.com",
      replyTo: email || undefined,
      subject: "Novo contato pelo site richardwollyce.com",
      text: `
Nome: ${name}
Telefone: ${phone}
Email: ${email || "não informado"}

Descrição do problema:
${issue}
      `,
      html: `
        <h2>Novo contato pelo site</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Telefone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email || "não informado"}</p>
        <p><strong>Descrição do problema:</strong></p>
        <p>${issue.replace(/\n/g, "<br>")}</p>
      `,
    }

    console.log("[v0] Sending email to:", mailOptions.to)
    await transporter.sendMail(mailOptions)
    console.log("[v0] Email sent successfully")

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("[v0] Error sending email:", error)
    return NextResponse.json({ ok: false, error: "Erro ao enviar email" }, { status: 500 })
  }
}
