import type { Metadata } from "next";
import Script from "next/script";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://landforge.digital";

const pricingFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cuánto cuesta LandForge?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "LandForge tiene 3 planes: Free (€0/mes, 1 landing), Pro (€49/mes, 10 landings + dominio propio) y Unlimited (€97/mes, todo ilimitado + white label). Los planes de pago incluyen 14 días de prueba gratis, sin tarjeta.",
      },
    },
    {
      "@type": "Question",
      name: "¿Hay contrato de permanencia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Puedes cancelar en cualquier momento sin penalización. No pedimos tarjeta de crédito para el plan Free.",
      },
    },
    {
      "@type": "Question",
      name: "¿Puedo cambiar de plan cuando quiera?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Puedes hacer upgrade o downgrade de tu plan en cualquier momento desde el panel de control.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué incluye el plan Free de LandForge?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El plan Free incluye 1 landing page completa generada con IA, publicación en subdominio gratuito, Forgi Editor (5 ediciones), Forgi Chatbot (50 mensajes/mes) y Conversion Score. Sin tarjeta de crédito.",
      },
    },
    {
      "@type": "Question",
      name: "¿Puedo usar LandForge para las landing pages de mis clientes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, está diseñado para agencias. El plan Unlimited incluye white label para eliminar la marca LandForge y presentarlo como tu propia herramienta.",
      },
    },
  ],
};

export const metadata: Metadata = {
  title: "Precios para Agencias | Landing Pages con IA desde €49/mes — LandForge",
  description:
    "Planes LandForge desde €49/mes para agencias y freelancers. Genera landing pages con IA, Forgi Editor y chatbot de ventas 24/7. 14 días gratis, sin tarjeta.",
  alternates: {
    canonical: `${SITE_URL}/pricing`,
  },
  openGraph: {
    title: "Precios LandForge — Landing Pages con IA para Agencias desde €49/mes",
    description:
      "Plan Pro €49/mes o Unlimited €97/mes. Landing pages con IA + chatbot de ventas Forgi. 14 días gratis, sin permanencia.",
    url: `${SITE_URL}/pricing`,
    siteName: "LandForge",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Precios LandForge — Landing Pages con IA desde €49/mes",
    description:
      "Landing pages con IA + chatbot Forgi. Plan Pro €49/mes. 14 días gratis, sin tarjeta.",
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script
        id="schema-pricing-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingFaqSchema) }}
      />
      {children}
    </>
  );
}
