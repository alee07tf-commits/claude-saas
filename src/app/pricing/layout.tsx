import type { Metadata } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://landforge.io";

export const metadata: Metadata = {
  title: "Precios — LandForge",
  description:
    "Planes para agencias desde €49/mes. Starter, Agency y Agency Pro. Genera landing pages con IA y chatbot Forgi sin límites. Sin permanencia.",
  alternates: {
    canonical: `${SITE_URL}/pricing`,
  },
  openGraph: {
    title: "Precios LandForge — Planes para Agencias desde €49/mes",
    description:
      "Elige tu plan: Starter €49, Agency €97 o Agency Pro €197/mes. Landing pages con IA + chatbot Forgi. Sin permanencia.",
    url: `${SITE_URL}/pricing`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Precios LandForge — Planes desde €49/mes",
    description:
      "Landing pages con IA + chatbot Forgi. Planes sin permanencia desde €49/mes.",
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
