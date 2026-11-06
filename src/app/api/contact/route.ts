import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, company, segment, message } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Nome e e-mail são obrigatórios." },
        { status: 400 }
      );
    }

    // Grava no banco de dados se o banco estiver configurado
    try {
      if (process.env.DATABASE_URL) {
        await prisma.lead.create({
          data: {
            name,
            email,
            phone: phone || null,
            company: company || null,
            segment: segment || null,
            message: message || null,
            source: "site_formulario",
          },
        });
      } else {
        console.log("[Novo Lead recebido sem DATABASE_URL configurado]:", {
          name,
          email,
          phone,
          company,
          segment,
          message,
        });
      }
    } catch (dbError) {
      console.warn("Aviso: Falha ao salvar no banco (verifique DATABASE_URL):", dbError);
    }

    return NextResponse.json({
      success: true,
      message: "Lead registrado com sucesso! Entraremos em contato em breve.",
    });
  } catch (error) {
    console.error("Erro no endpoint /api/contact:", error);
    return NextResponse.json(
      { error: "Ocorreu um erro interno ao processar sua solicitação." },
      { status: 500 }
    );
  }
}
