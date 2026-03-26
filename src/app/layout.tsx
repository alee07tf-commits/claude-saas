import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SchemaMarkup } from "@/components/SchemaMarkup";
import ForgiChatWidget from "@/components/ForgiChatWidget";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://landforge.digital";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "LandForge: Generador de Landing Pages con IA para Agencias",
    template: "%s | LandForge",
  },
  description:
    "Crea páginas de aterrizaje de alta conversión en 30s. Nuestro Chatbot IA (Forgi) diseña, atiende a tus clientes 24/7 y cierra ventas sin tocar código.",
  keywords: [
    "generador de landing pages con IA",
    "crear landing page con Inteligencia Artificial",
    "generador de landing pages para agencias",
    "mejor alternativa a leadpages con IA",
    "creador de embudos de venta sin código",
    "chatbots de IA para landing pages",
    "software landing pages agencias",
    "Forgi chatbot",
  ],
  authors: [{ name: "LandForge", url: SITE_URL }],
  creator: "ZappyApps",
  publisher: "ZappyApps",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: SITE_URL,
    siteName: "LandForge",
    title: "Generador de Landing Pages con IA | LandForge — Para Agencias",
    description:
      "Genera landing pages de alta conversión con IA en 30 segundos. Forgi edita y vende por ti 24/7. Prueba gratis, sin tarjeta.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "LandForge — Generador de Landing Pages con IA para Agencias",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Generador de Landing Pages con IA | LandForge",
    description:
      "Genera landing pages de alta conversión con IA en 30 segundos. Forgi edita y vende por ti 24/7. Prueba gratis.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: SITE_URL,
  },
  verification: {
    google: "us_XVp55NflCdbjuEdvb3gcRAVD37DTsdy5ey3GgDiU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <SchemaMarkup />
        {children}
        <ForgiChatWidget />
      </body>
    </html>
  );
}
