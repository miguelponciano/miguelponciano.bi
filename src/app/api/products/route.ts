import { NextResponse } from "next/server";

export async function GET() {
  const products = [
    {
      id: "prod-logistica",
      slug: "torre-logistica",
      title: "Torre de Controle Logística & SLA",
      category: "Logística",
      description:
        "Monitore entregas no prazo (OTIF), frete fracionado vs. dedicado, lead time e custos por transportadora.",
      metrics: ["OTIF", "OTD", "SLA", "R$/kg"],
      price: 297.0,
      format: "Arquivo .PBIX 100% Editável",
      readyToDeliver: true,
    },
    {
      id: "prod-financeiro",
      slug: "dre-financeiro",
      title: "DRE Gerencial & Fluxo de Caixa",
      category: "Financeiro",
      description:
        "Visão consolidada de receitas, custos fixos/variáveis, margem de contribuição, EBITDA e projeção de liquidez.",
      metrics: ["EBITDA", "Margem Líquida", "DRE", "Fluxo de Caixa"],
      price: 347.0,
      format: "DAX Aberto & Hierárquico",
      readyToDeliver: true,
    },
    {
      id: "prod-comercial",
      slug: "performance-comercial",
      title: "Performance Comercial & Vendas",
      category: "Comercial",
      description:
        "Acompanhe metas por vendedor, curva ABC de clientes e produtos, ticket médio, churn de carteira e positivação.",
      metrics: ["Curva ABC", "Ticket Médio", "% Meta", "Positivação"],
      price: 297.0,
      format: "Filtros Dinâmicos de Período",
      readyToDeliver: true,
    },
  ];

  return NextResponse.json({ products });
}
