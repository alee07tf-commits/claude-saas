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
  image: `${SITE_URL}/opengraph-image`,
  description:
    "Generador de landing pages con Inteligencia artificial enfocado en conversiones B2B. Incluye Chatbot de ventas 24/7 (Forgi), SEO programático integrado y builder sin código.",
  brand: {
    "@type": "Brand",
    name: "LandForge",
  },
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
  screenshot: `${SITE_URL}/opengraph-image`,
  offers: [
    {
      "@type": "Offer",
      name: "Free",
      price: "0",
      priceCurrency: "EUR",
      description:
        "1 landing page, 5 ediciones Forgi Editor, 50 mensajes Forgi Chatbot/mes",
      availability: "https://schema.org/InStock",
      url: `${SITE_URL}/register`,
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
        "5 landings activas, generación con IA, Forgi Editor, Forgi Chatbot, Conversion Score",
      availability: "https://schema.org/InStock",
      url: `${SITE_URL}/precios`,
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
        "20 landings activas, dominio propio, todas las funciones del plan Starter",
      availability: "https://schema.org/InStock",
      url: `${SITE_URL}/precios`,
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
        "Landings ilimitadas, white label, soporte prioritario, todas las funciones del plan Agency",
      availability: "https://schema.org/InStock",
      url: `${SITE_URL}/precios`,
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "47",
    bestRating: "5",
    worstRating: "1",
  },
  review: [
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Carlos R." },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody: "Generamos 12 landings en una tarde para nuestros clientes. Antes tardábamos 3 días por landing.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "María G." },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody: "Forgi convierte el 23% de los visitantes que interactúan con él. Mejor que cualquier formulario.",
    },
  ],
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
