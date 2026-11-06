"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";

interface NavbarProps {
  whatsappNumber?: string;
}

export function Navbar({ whatsappNumber = "5581999999999" }: NavbarProps) {
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Olá! Vi o site da ponci.bi e gostaria de conversar sobre um dashboard."
  )}`;

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-8 py-4 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo Estilo Wollo */}
        <Link href="#inicio" className="flex items-center gap-1.5 group">
          <span className="font-rounded font-bold text-2xl sm:text-3xl tracking-tight text-wollo-dark">
            ponci<span className="text-wollo-purple">.</span>bi
          </span>
        </Link>

        {/* Pílula Branca Flutuante Central */}
        <nav
          aria-label="Navegação Principal"
          className="hidden md:flex items-center gap-1 wollo-nav-pill px-3 py-1.5 rounded-full"
        >
          <a
            href="#inicio"
            className="px-4 py-1.5 rounded-full text-xs lg:text-sm font-semibold text-neutral-700 hover:text-wollo-purple hover:bg-neutral-100/80 transition-colors"
          >
            Início
          </a>
          <a
            href="#portfolio"
            className="px-4 py-1.5 rounded-full text-xs lg:text-sm font-semibold text-neutral-700 hover:text-wollo-purple hover:bg-neutral-100/80 transition-colors"
          >
            Portfólio
          </a>
          <a
            href="#contato"
            className="px-4 py-1.5 rounded-full text-xs lg:text-sm font-semibold text-neutral-700 hover:text-wollo-purple hover:bg-neutral-100/80 transition-colors"
          >
            Contato
          </a>
        </nav>

        {/* Botão de Ação à Direita */}
        <div className="flex items-center gap-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-wollo-dark hover:bg-wollo-purple text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-full transition-all shadow-sm flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Falar no WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  );
}
