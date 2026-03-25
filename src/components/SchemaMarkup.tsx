const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://landforge.digital";

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
      name: "Pro",
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
      name: "Unlimited",
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
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "47",
    bestRating: "5",
    worstRating: "1",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Puedo editar la landing después de generarla?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Forgi Editor te permite seleccionar cualquier sección y pedirle cambios con lenguaje natural. También puedes editar textos directamente haciendo doble clic. Sin tocar código.",
      },
    },
    {
      "@type": "Question",
      name: "¿Necesito saber programar para usar LandForge?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Todo funciona con formularios y con Forgi. Describes lo que quieres y la IA lo hace por ti. Sin código en ningún momento.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué tipo de landing pages genera LandForge?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Landing pages de servicios, captación de leads, producto, restaurantes, clínicas, eCommerce, SaaS y más. La IA adapta estructura y copy al sector de tu negocio.",
      },
    },
    {
      "@type": "Question",
      name: "¿Puedo usarlo para mis clientes como agencia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Exactamente para eso está diseñado. Cada landing es tuya para usar con tus clientes. El plan Unlimited incluye white label para que no aparezca la marca LandForge.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué es Forgi Chatbot?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Es un asistente de ventas IA que se activa automáticamente en tu landing publicada. Se entrena con los datos de tu negocio y atiende a los visitantes 24/7, resolviendo dudas y guiándolos hacia la conversión. Sin configurar nada.",
      },
    },
    {
      "@type": "Question",
      name: "¿Dónde se publica mi landing page?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Se publica automáticamente en un subdominio gratuito tipo tu-negocio.landforge.app. En los planes Pro y Unlimited puedes conectar tu propio dominio con SSL incluido.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto tarda en generar una landing page?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Entre 30 segundos y 2 minutos dependiendo de la complejidad. El formulario de información del negocio se completa en 5 minutos máximo.",
      },
    },
  ],
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
