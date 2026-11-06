"use client";

import { useState } from "react";
import { MessageCircle, Mail, Send, CheckCircle2, AlertCircle } from "lucide-react";

interface ContactSectionProps {
  whatsappNumber?: string;
  email?: string;
  onToast: (msg: string) => void;
}

export function ContactSection({
  whatsappNumber = "5581999999999",
  email = "contato@poncibi.com.br",
  onToast,
}: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    segment: "Logística",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Erro ao enviar solicitação.");
      }

      setSuccess(true);
      onToast("Solicitação enviada com sucesso! Entraremos em contato em breve.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        segment: "Logística",
        message: "",
      });
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Erro ao enviar mensagem.";
      setError(msg);
      onToast(msg);
    } finally {
      setLoading(false);
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    onToast(`E-mail copiado: ${email}`);
  };

  const waUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Olá! Quero solicitar uma proposta para dashboard de Power BI."
  )}`;

  return (
    <section id="contato" className="py-12 px-4 sm:px-8 max-w-7xl mx-auto">
      <div className="rounded-[38px] bg-gradient-to-r from-[#6C47FF] to-[#512FEB] text-white p-8 sm:p-14 relative overflow-hidden shadow-2xl">
        {/* Elementos Decorativos */}
        <div className="absolute -right-16 -bottom-24 w-96 h-96 rounded-full border border-white/15 pointer-events-none" />
        <div className="w-4 h-4 rounded-full bg-wollo-yellow absolute top-10 right-1/3 hidden sm:block" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
          {/* Lado Esquerdo: Mensagem e CTAs Rápidos */}
          <div className="lg:col-span-6 space-y-6">
            <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-wollo-yellow" />
              Atendimento Consultivo Direto
            </span>

            <h2 className="font-bold text-3xl sm:text-5xl leading-tight tracking-tight">
              Pronto para Elevar o Nível da Sua Gestão com Power BI?
            </h2>

            <p className="text-white/85 text-base sm:text-lg font-medium leading-relaxed">
              Agende uma sessão estratégica de 20 minutos ou solicite uma proposta personalizada para os relatórios da sua empresa.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row gap-3.5">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-wollo-yellow hover:bg-wollo-yellowSoft text-wollo-dark font-bold text-sm px-7 py-4 rounded-full shadow-lg transition-all flex items-center justify-center gap-2.5 active:scale-95"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Conversar no WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={copyEmail}
                className="bg-white/15 hover:bg-white/25 text-white font-semibold text-sm px-6 py-4 rounded-full transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span>{email}</span>
              </button>
            </div>

            <div className="text-xs font-medium text-white/70 pt-2 flex items-center gap-4">
              <span>● Resposta em minutos no horário comercial</span>
              <span>● Recife • Brasil</span>
            </div>
          </div>

          {/* Lado Direito: Formulário de Contato / Lead */}
          <div className="lg:col-span-6">
            <div className="bg-white text-wollo-dark rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/20">
              <h3 className="font-bold text-xl text-wollo-dark mb-1">
                Solicitar Diagnóstico / Orçamento
              </h3>
              <p className="text-xs text-neutral-500 mb-5">
                Preencha os dados abaixo para receber um orçamento detalhado sem compromisso.
              </p>

              {success && (
                <div className="mb-4 p-3.5 rounded-2xl bg-emerald-50 text-emerald-800 text-xs font-semibold flex items-center gap-2 border border-emerald-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Mensagem recebida com sucesso! Entraremos em contato via WhatsApp/E-mail.</span>
                </div>
              )}

              {error && (
                <div className="mb-4 p-3.5 rounded-2xl bg-rose-50 text-rose-800 text-xs font-semibold flex items-center gap-2 border border-rose-200">
                  <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-[11px] font-bold text-neutral-700 uppercase mb-1">
                      Seu Nome *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: João Silva"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-xs focus:outline-none focus:border-wollo-purple focus:ring-1 focus:ring-wollo-purple"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-neutral-700 uppercase mb-1">
                      E-mail Corporativo *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="joao@empresa.com.br"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-xs focus:outline-none focus:border-wollo-purple focus:ring-1 focus:ring-wollo-purple"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-[11px] font-bold text-neutral-700 uppercase mb-1">
                      WhatsApp / Celular
                    </label>
                    <input
                      type="tel"
                      placeholder="(81) 99999-9999"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-xs focus:outline-none focus:border-wollo-purple focus:ring-1 focus:ring-wollo-purple"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-neutral-700 uppercase mb-1">
                      Área de Interesse
                    </label>
                    <select
                      value={formData.segment}
                      onChange={(e) => setFormData({ ...formData, segment: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-xs bg-white focus:outline-none focus:border-wollo-purple focus:ring-1 focus:ring-wollo-purple"
                    >
                      <option value="Logística">Logística & Transportes</option>
                      <option value="Financeiro">Financeiro & DRE</option>
                      <option value="Comercial">Comercial & Vendas</option>
                      <option value="SobMedida">Projeto Totalmente Sob Medida</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-neutral-700 uppercase mb-1">
                    Como podemos te ajudar? (Opcional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Conte sobre sua operação, sistemas atuais (ERP/Excel) ou necessidades de BI..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-xs focus:outline-none focus:border-wollo-purple focus:ring-1 focus:ring-wollo-purple resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 rounded-full bg-wollo-dark hover:bg-wollo-purple text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer disabled:opacity-70 shadow-sm"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{loading ? "Enviando..." : "Enviar Solicitação de Orçamento"}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
