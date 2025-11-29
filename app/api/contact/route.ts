import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const { name, phone, email, issue } = await req.json();

        // Validação básica
        if (!name || !phone || !issue) {
            return NextResponse.json(
                { ok: false, error: "Campos obrigatórios faltando" },
                { status: 400 }
            );
        }

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT) || 587,
            secure: Number(process.env.SMTP_PORT) === 465,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        await transporter.sendMail({
            from: `"Site Richard Wollyce" <${process.env.SMTP_USER}>`,
            to: process.env.CONTACT_TO,
            // se o usuário informar email, você pode responder direto para ele
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
        });

        return NextResponse.json({ ok: true });
    } catch (error) {
        console.error("Erro ao enviar email", error);
        return NextResponse.json(
            { ok: false, error: "Erro ao enviar email" },
            { status: 500 }
        );
    }
}
