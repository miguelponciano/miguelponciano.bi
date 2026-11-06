"use client";

import Link from "next/link";
import { MessageCircle, Mail } from "lucide-react";

interface FooterProps {
  whatsappNumber?: string;
  email?: string;
  onToast: (msg: string) => void;
}

export function Footer({
  whatsappNumber = "5581999999999",
  email = "contato@poncibi.com.br",
  onToast,
}: FooterProps) {
  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    onToast(`E-mail copiado: ${email}`);
  };

  const waUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <footer className="max-w-7xl mx-auto px-4 sm:px-8 mt-12 pt-6 pb-12 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs sm:text-sm font-semibold text-neutral-600 border-t border-neutral-100">
      <div className="flex items-center gap-2">
        <span className="font-rounded font-bold text-lg text-wollo-dark">
          ponci<span className="text-wollo-purple">.</span>bi
        </span>
        <span className="text-neutral-400 font-normal">
          © 2026 Todos os direitos reservados.
        </span>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
        <Link href="#inicio" className="hover:text-wollo-purple transition-colors">
          Início
        </Link>
        <Link href="#portfolio" className="hover:text-wollo-purple transition-colors">
          Portfólio
        </Link>
        <Link href="#contato" className="hover:text-wollo-purple transition-colors">
          Contato
        </Link>
      </div>

      <div className="flex items-center gap-3 text-wollo-dark">
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="w-8 h-8 rounded-full bg-neutral-100 hover:bg-wollo-purple hover:text-white flex items-center justify-center transition-colors"
        >
          <MessageCircle className="w-4 h-4" />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="w-8 h-8 rounded-full bg-neutral-100 hover:bg-wollo-purple hover:text-white flex items-center justify-center transition-colors"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
          </svg>
        </a>
        <button
          type="button"
          onClick={copyEmail}
          aria-label="Copiar E-mail"
          className="w-8 h-8 rounded-full bg-neutral-100 hover:bg-wollo-purple hover:text-white flex items-center justify-center transition-colors cursor-pointer"
        >
          <Mail className="w-4 h-4" />
        </button>
      </div>
    </footer>
  );
}
