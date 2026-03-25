import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SchemaMarkup } from "@/components/SchemaMarkup";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://landforge.io";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "LandForge — Genera Landing Pages con IA para Agencias",
    template: "%s | LandForge",
  },
  description:
    "LandForge es el SaaS para agencias que genera landing pages de alta conversión con Inteligencia Artificial en segundos. Incluye chatbot de ventas Forgi integrado.",
  keywords: [
    "landing page con IA",
    "generador de landing pages",
    "software para agencias",
    "landing page automatizada",
    "SaaS agencias marketing",
    "crear landing page",
    "chatbot ventas",
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
    title: "LandForge — Genera Landing Pages con IA para Agencias",
    description:
      "Genera landing pages de alta conversión con IA en segundos. Incluye chatbot de ventas Forgi. Planes desde €49/mes.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "LandForge — Generador de Landing Pages con IA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LandForge — Genera Landing Pages con IA para Agencias",
    description:
      "Genera landing pages de alta conversión con IA en segundos. Incluye chatbot Forgi. Planes desde €49/mes.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: SITE_URL,
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
      </body>
    </html>
  );
}
