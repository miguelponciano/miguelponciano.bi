import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    if (!process.env.DATABASE_URL) {
      return NextResponse.json({
        connected: false,
        error: "A variável de ambiente DATABASE_URL não está definida no container.",
      });
    }

    // Testa consulta ao PostgreSQL
    const [leadsCount, productsCount, ordersCount] = await Promise.all([
      prisma.lead.count().catch(() => -1),
      prisma.product.count().catch(() => -1),
      prisma.order.count().catch(() => -1),
    ]);

    return NextResponse.json({
      connected: true,
      database: "PostgreSQL (Vertra Cloud)",
      tabelas: {
        Lead: leadsCount >= 0 ? `${leadsCount} registro(s)` : "Tabela ainda não criada",
        Product: productsCount >= 0 ? `${productsCount} produto(s)` : "Tabela ainda não criada",
        Order: ordersCount >= 0 ? `${ordersCount} pedido(s)` : "Tabela ainda não criada",
      },
      status: "Banco de dados operacional e vinculado com sucesso!",
    });
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : "Erro desconhecido";
    return NextResponse.json({
      connected: false,
      error: msg,
    });
  }
}
