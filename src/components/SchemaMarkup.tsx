// SEO canonical domain — hardcoded to prevent env var overrides on Vercel
const SITE_URL = "https://landforge.digital";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "LandForge",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description:
    "SaaS para agencias que genera landing pages de alta conversión con IA y chatbot de ventas Forgi.",
  sameAs: [
    "https://twitter.com/landforge_io",
    "https://www.linkedin.com/company/landforge",
    "https://www.producthunt.com/products/landforge",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    email: "hola@landforge.digital",
  },
  founder: {
    "@type": "Person",
    name: "Alejandro Bethencourt Rodríguez",
    url: `${SITE_URL}/sobre-nosotros`,
    jobTitle: "Fundador y CEO",
    sameAs: "https://www.linkedin.com/in/alejandro-bethencourt-rodr%C3%ADguez/",
  },
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "LandForge",
  applicationCategory: "BusinessApplication",
  applicationSubCategory: "Landing Page Builder",
  operatingSystem: "Web",
  url: SITE_URL,
  description:
    "Generador de landing pages con Inteligencia artificial enfocado en conversiones B2B. Incluye Chatbot de ventas 24/7 (Forgi), SEO programático integrado y builder sin código.",
  featureList: [
    "Generación de landing pages con IA en 30 segundos",
    "Forgi Editor: edición por bloques con IA",
    "Forgi Chatbot: asistente de ventas IA 24/7",
    "Conversion Score con recomendaciones accionables",
    "A/B Testing automático",
    "Hosting incluido con subdominio gratuito",
    "Conexión de dominio propio",
    "Descarga HTML",
    "White label disponible",
  ],
  screenshot: `${SITE_URL}/og-image.png`,
  offers: [
    {
      "@type": "Offer",
      name: "Free",
      price: "0",
      priceCurrency: "EUR",
      description:
        "1 landing page, 5 ediciones Forgi Editor, 50 mensajes Forgi Chatbot/mes",
      availability: "https://schema.org/InStock",
    },
    {
      "@type": "Offer",
      name: "Starter",
      price: "49",
      priceCurrency: "EUR",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "49",
        priceCurrency: "EUR",
        unitCode: "MON",
      },
      description:
        "10 landings activas, 100 ediciones Forgi Editor/mes, 2.000 mensajes Forgi Chatbot/mes, dominio propio",
    },
    {
      "@type": "Offer",
      name: "Agency",
      price: "97",
      priceCurrency: "EUR",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "97",
        priceCurrency: "EUR",
        unitCode: "MON",
      },
      description:
        "Landings ilimitadas, ediciones ilimitadas, chatbot ilimitado, white label, 5 usuarios",
    },
    {
      "@type": "Offer",
      name: "Agency Pro",
      price: "197",
      priceCurrency: "EUR",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "197",
        priceCurrency: "EUR",
        unitCode: "MON",
      },
      description:
        "Todo en Agency + 20 usuarios, soporte prioritario, API access, custom branding",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "47",
    bestRating: "5",
    worstRating: "1",
  },
};

// FAQPage schema removed from global component to prevent duplicate
// FAQPage conflicts with per-page FAQ schemas. Each page defines its own.

export function SchemaMarkup() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
    </>
  );
}
