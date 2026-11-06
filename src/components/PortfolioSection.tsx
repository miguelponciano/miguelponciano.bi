"use client";

import { Sparkles, Eye, MessageCircle, Truck, DollarSign, BarChart3, Check } from "lucide-react";

interface PortfolioSectionProps {
  onOpenDemo: (key: "logistica" | "financeiro" | "comercial") => void;
  whatsappNumber?: string;
}

export function PortfolioSection({
  onOpenDemo,
  whatsappNumber = "5581999999999",
}: PortfolioSectionProps) {
  const getWhatsappLink = (title: string) => {
    const text = `Olá! Gostei do dashboard "${title}" na ponci.bi e quero saber como adquirir ou personalizar para minha empresa.`;
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="portfolio" className="py-16 sm:py-24 px-4 sm:px-8 max-w-7xl mx-auto">
      {/* Cabeçalho */}
      <div className="flex flex-col items-center text-center mb-14">
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-wollo-purple mb-3">
          <Sparkles className="w-4 h-4" />
          Catálogo Interativo
        </div>
        <h2 className="font-bold text-4xl sm:text-6xl text-wollo-dark tracking-tight flex flex-wrap items-center justify-center gap-3">
          <span>Dashboards</span>
          <span className="yellow-pill-highlight bg-wollo-yellow px-5 py-1 rounded-full text-wollo-dark font-black tracking-normal shadow-sm">
            Prontos & Sob Medida
          </span>
        </h2>
        <p className="mt-4 text-neutral-500 font-medium max-w-xl text-sm sm:text-base">
          Escolha um modelo abaixo e clique em <strong>"Ver Demonstração"</strong> para simular filtros e métricas ao vivo antes de decidir.
        </p>
      </div>

      {/* Grid de 3 Cards Campeões */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* CARD 01: LOGÍSTICA */}
        <article className="portfolio-card bg-wollo-grayCard rounded-[36px] p-7 sm:p-8 border border-neutral-200/80 flex flex-col justify-between relative group">
          <div>
            <div className="flex items-center justify-between mb-5">
              <span className="text-xs font-extrabold text-neutral-600 tracking-wider">01 • LOGÍSTICA</span>
              <span className="bg-wollo-purple/10 text-wollo-purple text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                <Truck className="w-3.5 h-3.5" />
                Operacional
              </span>
            </div>

            <h3 className="font-bold text-2xl text-wollo-dark leading-snug">
              Torre de Controle Logística & SLA
            </h3>

            <p className="mt-3 text-sm text-neutral-500 leading-relaxed font-medium">
              Monitore entregas no prazo (OTIF), frete fracionado vs. dedicado, lead time de ponta a ponta e custos por transportadora.
            </p>

            <div className="my-6 p-4 rounded-2xl bg-white border border-neutral-200/70 shadow-sm space-y-2.5">
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-neutral-500">Métricas Chave</span>
                <span className="text-wollo-dark font-bold">OTIF • OTD • SLA • R$/kg</span>
              </div>
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-neutral-500">Formato</span>
                <span className="text-wollo-purple font-bold">Arquivo .PBIX 100% Editável</span>
              </div>
            </div>

            <ul className="space-y-2 text-xs font-semibold text-neutral-600 mb-6">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                Alerta de pedidos em atraso em tempo real
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                Custo de frete por rota e filial
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                Planilha modelo em Excel inclusa
              </li>
            </ul>
          </div>

          <div className="pt-4 border-t border-neutral-200/70 flex flex-col gap-2.5">
            <button
              type="button"
              onClick={() => onOpenDemo("logistica")}
              className="w-full py-3 rounded-full bg-wollo-purple hover:bg-wollo-purpleLight text-white font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm"
            >
              <Eye className="w-4 h-4" />
              Ver Demonstração Ao Vivo
            </button>
            <a
              href={getWhatsappLink("Torre de Controle Logística")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-full bg-white hover:bg-neutral-100 text-neutral-700 font-semibold text-xs text-center border border-neutral-300 transition-colors flex items-center justify-center gap-1.5"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
              Tirar Dúvidas / Comprar
            </a>
          </div>
        </article>

        {/* CARD 02: FINANCEIRO */}
        <article className="portfolio-card bg-wollo-grayCard rounded-[36px] p-7 sm:p-8 border border-neutral-200/80 flex flex-col justify-between relative group">
          <div>
            <div className="flex items-center justify-between mb-5">
              <span className="text-xs font-extrabold text-neutral-600 tracking-wider">02 • FINANCEIRO</span>
              <span className="bg-wollo-pink/20 text-wollo-pinkDeep text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                <DollarSign className="w-3.5 h-3.5" />
                Executivo
              </span>
            </div>

            <h3 className="font-bold text-2xl text-wollo-dark leading-snug">
              DRE Gerencial & Fluxo de Caixa
            </h3>

            <p className="mt-3 text-sm text-neutral-500 leading-relaxed font-medium">
              Visão consolidada de receitas, custos fixos/variáveis, margem de contribuição, EBITDA e projeção de liquidez de 30 a 90 dias.
            </p>

            <div className="my-6 p-4 rounded-2xl bg-white border border-neutral-200/70 shadow-sm space-y-2.5">
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-neutral-500">Métricas Chave</span>
                <span className="text-wollo-dark font-bold">EBITDA • Margem Líq. • DRE</span>
              </div>
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-neutral-500">Formato</span>
                <span className="text-wollo-pinkDeep font-bold">DAX Aberto & Hierárquico</span>
              </div>
            </div>

            <ul className="space-y-2 text-xs font-semibold text-neutral-600 mb-6">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                DRE estruturado com abertura em drill-down
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                Controle diário de entradas vs. saídas
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                Conexão com ERP ou arquivo Excel
              </li>
            </ul>
          </div>

          <div className="pt-4 border-t border-neutral-200/70 flex flex-col gap-2.5">
            <button
              type="button"
              onClick={() => onOpenDemo("financeiro")}
              className="w-full py-3 rounded-full bg-wollo-dark hover:bg-neutral-800 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm"
            >
              <Eye className="w-4 h-4" />
              Ver Demonstração Ao Vivo
            </button>
            <a
              href={getWhatsappLink("DRE Gerencial & Fluxo de Caixa")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-full bg-white hover:bg-neutral-100 text-neutral-700 font-semibold text-xs text-center border border-neutral-300 transition-colors flex items-center justify-center gap-1.5"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
              Tirar Dúvidas / Comprar
            </a>
          </div>
        </article>

        {/* CARD 03: COMERCIAL */}
        <article className="portfolio-card bg-wollo-grayCard rounded-[36px] p-7 sm:p-8 border border-neutral-200/80 flex flex-col justify-between relative group">
          <div>
            <div className="flex items-center justify-between mb-5">
              <span className="text-xs font-extrabold text-neutral-600 tracking-wider">03 • COMERCIAL</span>
              <span className="bg-wollo-yellow text-wollo-dark text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                <BarChart3 className="w-3.5 h-3.5" />
                Vendas & Metas
              </span>
            </div>

            <h3 className="font-bold text-2xl text-wollo-dark leading-snug">
              Performance Comercial & Vendas
            </h3>

            <p className="mt-3 text-sm text-neutral-500 leading-relaxed font-medium">
              Acompanhe metas por vendedor, curva ABC de clientes e produtos, ticket médio, churn de carteira e positivação por região.
            </p>

            <div className="my-6 p-4 rounded-2xl bg-white border border-neutral-200/70 shadow-sm space-y-2.5">
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-neutral-500">Métricas Chave</span>
                <span className="text-wollo-dark font-bold">Curva ABC • Ticket Médio • % Meta</span>
              </div>
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-neutral-500">Formato</span>
                <span className="text-wollo-dark font-bold">Filtros Dinâmicos de Período</span>
              </div>
            </div>

            <ul className="space-y-2 text-xs font-semibold text-neutral-600 mb-6">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                Ranking de vendedores com comissões
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                Identificação de clientes inativos (Churn)
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                Design limpo e direto para diretoria
              </li>
            </ul>
          </div>

          <div className="pt-4 border-t border-neutral-200/70 flex flex-col gap-2.5">
            <button
              type="button"
              onClick={() => onOpenDemo("comercial")}
              className="w-full py-3 rounded-full bg-wollo-purple hover:bg-wollo-purpleLight text-white font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm"
            >
              <Eye className="w-4 h-4" />
              Ver Demonstração Ao Vivo
            </button>
            <a
              href={getWhatsappLink("Performance Comercial & Vendas")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-full bg-white hover:bg-neutral-100 text-neutral-700 font-semibold text-xs text-center border border-neutral-300 transition-colors flex items-center justify-center gap-1.5"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
              Tirar Dúvidas / Comprar
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
