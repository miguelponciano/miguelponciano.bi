import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Quicksand } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-quicksand",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ponci.bi | Dashboards Power BI & Inteligência de Dados",
  description:
    "Transforme seus dados em decisões visuais com dashboards de Power BI prontos para usar ou construídos sob medida para Logística, Finanças e Comercial.",
  keywords: [
    "Power BI",
    "Dashboards",
    "Inteligência de Dados",
    "Business Intelligence",
    "DRE Gerencial",
    "Logística",
    "Vendas",
  ],
  authors: [{ name: "Miguel Ponciano" }],
  openGraph: {
    title: "ponci.bi | Dashboards Power BI & Inteligência de Dados",
    description:
      "Dashboards de Power BI prontos para usar ou construídos sob medida para Logística, Finanças e Comercial.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${plusJakarta.variable} ${quicksand.variable} scroll-smooth`}>
      <body className="font-sans antialiased selection:bg-wollo-purple selection:text-white bg-white text-neutral-900">
        {children}
      </body>
    </html>
  );
}
