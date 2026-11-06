"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { DemoModal } from "@/components/DemoModal";
import { Toast } from "@/components/Toast";

type DemoKey = "logistica" | "financeiro" | "comercial";

export default function Home() {
  const [activeDemo, setActiveDemo] = useState<DemoKey | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const openDemo = (key: DemoKey) => {
    setActiveDemo(key);
  };

  const closeDemo = () => {
    setActiveDemo(null);
  };

  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5581999999999";
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contato@poncibi.com.br";

  return (
    <main className="min-h-screen bg-white text-wollo-dark">
      {/* Barra de Navegação */}
      <Navbar whatsappNumber={whatsappNumber} />

      {/* Hero com Cartões 3D */}
      <HeroSection onOpenDemo={openDemo} />

      {/* Catálogo de Dashboards */}
      <PortfolioSection onOpenDemo={openDemo} whatsappNumber={whatsappNumber} />

      {/* Seção de Contato e Formulário de Lead */}
      <ContactSection
        whatsappNumber={whatsappNumber}
        email={contactEmail}
        onToast={showToast}
      />

      {/* Rodapé */}
      <Footer
        whatsappNumber={whatsappNumber}
        email={contactEmail}
        onToast={showToast}
      />

      {/* Modal Simulador Interativo */}
      <DemoModal
        isOpen={Boolean(activeDemo)}
        onClose={closeDemo}
        activeKey={activeDemo}
        whatsappNumber={whatsappNumber}
      />

      {/* Feedback Toast */}
      <Toast message={toastMessage} />
    </main>
  );
}
