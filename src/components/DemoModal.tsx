"use client";

import { useState, useEffect } from "react";
import { X, MessageCircle } from "lucide-react";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeKey: "logistica" | "financeiro" | "comercial" | null;
  whatsappNumber?: string;
}

const portfolioDemos = {
  logistica: {
    title: "01 • Torre de Controle Logística & SLA",
    labels: ["Entregas no Prazo (OTIF)", "Lead Time Médio", "Custo Frete / Receita"],
    views: [
      { vals: ["96,8%", "2,1 dias", "4,8%"], bars: [58, 72, 65, 86, 96, 90] },
      { vals: ["97,4%", "1,8 dias", "4,4%"], bars: [64, 78, 74, 90, 98, 94] },
      { vals: ["95,9%", "2,4 dias", "5,1%"], bars: [52, 66, 60, 80, 91, 85] },
    ],
  },
  financeiro: {
    title: "02 • DRE Gerencial & Fluxo de Caixa",
    labels: ["Receita Líquida", "Margem EBITDA", "Geração de Caixa"],
    views: [
      { vals: ["R$ 842 mil", "25,9%", "R$ 218 mil"], bars: [50, 65, 62, 82, 95, 88] },
      { vals: ["R$ 490 mil", "27,4%", "R$ 134 mil"], bars: [55, 70, 68, 86, 96, 91] },
      { vals: ["R$ 352 mil", "24,1%", "R$ 84 mil"], bars: [45, 58, 54, 75, 88, 82] },
    ],
  },
  comercial: {
    title: "03 • Performance Comercial & Vendas",
    labels: ["Faturamento Mensal", "Meta Atingida", "Ticket Médio"],
    views: [
      { vals: ["R$ 1,24 mi", "108,4%", "R$ 3.850"], bars: [62, 74, 70, 88, 98, 92] },
      { vals: ["R$ 710 mil", "112,0%", "R$ 4.120"], bars: [68, 80, 76, 92, 100, 95] },
      { vals: ["R$ 530 mil", "104,2%", "R$ 3.590"], bars: [54, 66, 62, 82, 90, 86] },
    ],
  },
};

const filterTabs = ["Consolidado", "Operação Nordeste", "Operação Sudeste"];

export function DemoModal({
  isOpen,
  onClose,
  activeKey,
  whatsappNumber = "5581999999999",
}: DemoModalProps) {
  const [activeFilter, setActiveFilter] = useState(0);

  useEffect(() => {
    setActiveFilter(0);
  }, [activeKey]);

  if (!isOpen || !activeKey) return null;

  const currentData = portfolioDemos[activeKey];
  const activeView = currentData.views[activeFilter];

  const waText = encodeURIComponent(
    `Olá! Testei a demonstração do dashboard "${currentData.title}" na ponci.bi e quero saber como adquirir ou personalizar.`
  );
  const waUrl = `https://wa.me/${whatsappNumber}?text=${waText}`;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-[32px] max-w-3xl w-full overflow-hidden shadow-2xl border border-neutral-200 flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-200">
        {/* Cabeçalho do Modal */}
        <div className="px-6 py-4 bg-wollo-grayCard border-b border-neutral-200 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="px-3 py-1 rounded-full bg-wollo-purple text-white text-xs font-bold">
              DEMO INTERATIVA
            </span>
            <h3 className="font-bold text-lg text-wollo-dark">{currentData.title}</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full hover:bg-neutral-200 transition-colors text-neutral-600 hover:text-wollo-dark"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Corpo do Modal */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Seletor de Filtro */}
          <div className="flex items-center justify-between flex-wrap gap-2">
            <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider">
              Filtro por Operação:
            </span>
            <div className="flex items-center gap-2 flex-wrap">
              {filterTabs.map((tab, idx) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveFilter(idx)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    activeFilter === idx
                      ? "bg-wollo-dark text-white"
                      : "bg-white border border-neutral-300 text-neutral-700 hover:bg-neutral-100"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Cards de Métricas Reativas */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
            <div className="p-4 rounded-2xl bg-wollo-grayCard border border-neutral-200/80">
              <span className="text-[11px] font-bold uppercase text-neutral-600 block">
                {currentData.labels[0]}
              </span>
              <strong className="text-xl sm:text-2xl font-extrabold text-wollo-dark mt-1 block">
                {activeView.vals[0]}
              </strong>
            </div>
            <div className="p-4 rounded-2xl bg-wollo-grayCard border border-neutral-200/80">
              <span className="text-[11px] font-bold uppercase text-neutral-600 block">
                {currentData.labels[1]}
              </span>
              <strong className="text-xl sm:text-2xl font-extrabold text-wollo-pinkDeep mt-1 block">
                {activeView.vals[1]}
              </strong>
            </div>
            <div className="p-4 rounded-2xl bg-wollo-grayCard border border-neutral-200/80">
              <span className="text-[11px] font-bold uppercase text-neutral-600 block">
                {currentData.labels[2]}
              </span>
              <strong className="text-xl sm:text-2xl font-extrabold text-wollo-purple mt-1 block">
                {activeView.vals[2]}
              </strong>
            </div>
          </div>

          {/* Mini Gráfico de Barras Animado */}
          <div className="p-5 rounded-2xl bg-white border border-neutral-200">
            <div className="flex items-center justify-between text-xs font-bold text-neutral-500 mb-4">
              <span>Evolução por Centro de Distribuição / Canal</span>
              <span className="text-wollo-purple">● Atualizado</span>
            </div>
            <div className="h-40 flex items-end gap-3 pt-4 px-2 border-b border-neutral-100">
              {activeView.bars.map((height, i) => {
                const colors = [
                  "bg-wollo-purple",
                  "bg-wollo-purple",
                  "bg-wollo-pink",
                  "bg-wollo-pink",
                  "bg-wollo-yellow",
                  "bg-wollo-orange",
                ];
                return (
                  <div
                    key={i}
                    className={`flex-1 rounded-t-xl smooth-bar ${colors[i % colors.length]}`}
                    style={{ height: `${height}%` }}
                  />
                );
              })}
            </div>
            <div className="flex justify-between text-[11px] font-semibold text-neutral-400 mt-2 px-1">
              <span>Jan</span>
              <span>Fev</span>
              <span>Mar</span>
              <span>Abr</span>
              <span>Mai</span>
              <span>Jun</span>
            </div>
          </div>
        </div>

        {/* Rodapé do Modal */}
        <div className="px-6 py-4 bg-wollo-grayCard border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-neutral-500 font-semibold text-center sm:text-left">
            Disponível para entrega imediata em <code>.PBIX</code> ou integração personalizada.
          </span>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-wollo-purple hover:bg-wollo-purpleLight text-white text-xs font-bold flex items-center justify-center gap-2 transition-colors shadow-sm"
          >
            <MessageCircle className="w-4 h-4" />
            Quero Este Dashboard
          </a>
        </div>
      </div>
    </div>
  );
}
