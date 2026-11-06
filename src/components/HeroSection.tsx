"use client";

import { useEffect, useState } from "react";
import { Play, TrendingUp } from "lucide-react";

interface HeroSectionProps {
  onOpenDemo: (key: "logistica" | "financeiro" | "comercial") => void;
}

export function HeroSection({ onOpenDemo }: HeroSectionProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="inicio" className="pt-32 sm:pt-36 pb-16 px-4 sm:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="font-sans font-bold text-4xl sm:text-6xl lg:text-[64px] text-wollo-dark tracking-tight leading-[1.08]">
          Transforme seus Dados em Decisões Visuais
        </h1>
        <p className="mt-5 text-base sm:text-lg text-neutral-500 font-medium max-w-xl mx-auto">
          Dashboards de Power BI prontos para usar ou construídos sob medida para Logística, Finanças e Comercial.
        </p>

        {/* Dupla de Botões */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
          <a
            href="#portfolio"
            className="bg-wollo-purple hover:bg-wollo-purpleLight text-white font-semibold text-sm px-7 py-3.5 rounded-full shadow-lg shadow-wollo-purple/25 transition-all transform hover:-translate-y-0.5"
          >
            Ver Portfólio Ao Vivo
          </a>
          <a
            href="#contato"
            className="bg-white hover:bg-neutral-50 text-wollo-dark border border-neutral-300 font-semibold text-sm px-7 py-3.5 rounded-full transition-all"
          >
            Solicitar Sob Medida
          </a>
        </div>
      </div>

      {/* Cartões Sobrepostos Inclinados (Amarelo + Rosa + Roxo Principal) */}
      <div
        id="hero-cards"
        className={`hero-stack-wrapper relative mt-14 sm:mt-16 mx-auto max-w-5xl pt-6 ${
          isScrolled ? "aligned" : ""
        }`}
      >
        {/* Camada Amarela Traseira */}
        <div className="hero-card-yellow absolute inset-x-4 -top-2 h-64 sm:h-80 rounded-[36px] bg-wollo-yellow pointer-events-none" />

        {/* Camada Rosa Intermediária */}
        <div className="hero-card-pink absolute inset-x-2 top-1 h-64 sm:h-80 rounded-[36px] bg-wollo-pink pointer-events-none" />

        {/* Card Roxo Principal */}
        <div className="hero-card-purple relative rounded-[36px] bg-wollo-purple text-white p-6 sm:p-10 lg:p-12 overflow-hidden shadow-2xl">
          {/* Círculos Decorativos */}
          <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full border border-white/20 pointer-events-none" />
          <div className="absolute -bottom-32 right-12 w-96 h-96 rounded-full border border-white/15 pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Coluna Esquerda */}
            <div className="lg:col-span-5 space-y-4">
              <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide">
                <span className="w-2 h-2 rounded-full bg-wollo-yellow" />
                Power BI Plug & Play
              </span>
              <h2 className="font-bold text-2xl sm:text-3xl leading-tight">
                Clareza total da sua operação em segundos, sem planilhas lentas.
              </h2>
              <p className="text-white/80 text-sm leading-relaxed">
                Clique nos botões abaixo ou explore nossos 3 modelos campeões com simulador interativo.
              </p>
              <div className="pt-2 flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => onOpenDemo("logistica")}
                  className="bg-wollo-yellow hover:bg-wollo-yellowSoft text-wollo-dark font-bold text-xs px-4 py-2.5 rounded-full transition-transform active:scale-95 flex items-center gap-1.5 cursor-pointer shadow-md"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  Testar Torre Logística
                </button>
                <button
                  type="button"
                  onClick={() => onOpenDemo("financeiro")}
                  className="bg-white/15 hover:bg-white/25 text-white font-semibold text-xs px-4 py-2.5 rounded-full transition-colors cursor-pointer"
                >
                  Testar DRE Financeiro
                </button>
              </div>
            </div>

            {/* Coluna Direita: Widgets Gráficos */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Card Flutuante 1: OTIF */}
              <div className="bg-[#3B1EC4]/90 border border-white/15 rounded-3xl p-5 shadow-xl transform hover:-translate-y-1 transition-all">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-white/75">SLA de Entregas (OTIF)</span>
                  <span className="bg-wollo-yellow text-wollo-dark text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                    +14,2%
                  </span>
                </div>
                <div className="text-3xl font-extrabold tracking-tight mb-4">96,8%</div>
                <div className="flex items-end gap-2 h-20 pt-2">
                  <div className="flex-1 bg-white/25 rounded-t-lg h-[45%]" />
                  <div className="flex-1 bg-white/25 rounded-t-lg h-[60%]" />
                  <div className="flex-1 bg-white/25 rounded-t-lg h-[55%]" />
                  <div className="flex-1 bg-wollo-pink rounded-t-lg h-[80%]" />
                  <div className="flex-1 bg-wollo-yellow rounded-t-lg h-[98%]" />
                </div>
              </div>

              {/* Card Flutuante 2: Financeiro & ETL */}
              <div className="bg-white text-wollo-dark rounded-3xl p-5 shadow-xl flex flex-col justify-between transform hover:-translate-y-1 transition-all">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-xs font-bold text-neutral-400 uppercase">Margem Líquida</span>
                    <div className="text-2xl font-extrabold text-wollo-dark mt-0.5">R$ 842 mil</div>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-wollo-pink to-wollo-orange flex items-center justify-center text-white shadow-md transform rotate-6">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                </div>

                <div className="my-4 space-y-2">
                  <div className="flex items-center justify-between text-xs font-semibold">
                    <span className="text-neutral-500">Automação ETL</span>
                    <span className="text-wollo-purple font-bold">100% Automático</span>
                  </div>
                  <div className="w-full h-2.5 bg-neutral-100 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-wollo-purple via-wollo-pink to-wollo-yellow w-[92%] rounded-full" />
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-neutral-100 text-[11px] font-semibold text-neutral-500">
                  <span>Integração SQL / ERP / Excel</span>
                  <span className="text-emerald-600 font-bold">● Online</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
