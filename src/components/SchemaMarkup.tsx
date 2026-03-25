const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://landforge.io";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "LandForge",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description:
    "SaaS para agencias que genera landing pages con IA y chatbot de ventas Forgi.",
  sameAs: [],
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "LandForge",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: SITE_URL,
  description:
    "Genera landing pages de alta conversión con Inteligencia Artificial en segundos. Incluye chatbot de ventas Forgi integrado.",
  offers: [
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
        "5 Landings activas, 10 Generaciones AI al mes, 30 Ediciones Forgi, 500 Mensajes Chatbot",
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
        "20 Landings activas, 50 Generaciones AI al mes, 200 Ediciones Forgi, 3000 Mensajes Chatbot",
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
        "Landings Ilimitadas, Generaciones AI Ilimitadas, Ediciones Forgi Ilimitadas, Chatbot Ilimitado",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "47",
  },
};

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
