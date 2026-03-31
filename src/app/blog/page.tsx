import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Blog de Landing Pages, CRO y Chatbots IA",
  description:
    "Guías y tutoriales sobre landing pages, CRO, chatbots IA y conversión. Aprende a crear páginas que convierten visitas en clientes.",
  keywords: [
    "blog conversion rate optimization",
    "blog crear landing pages",
    "blog ventas b2b ia",
    "guias seo programatico",
  ],
  alternates: {
    canonical: "https://landforge.digital/blog",
  },
  openGraph: {
    title: "Blog de Landing Pages, CRO y Chatbots IA | LandForge",
    description:
      "Guías y tutoriales sobre landing pages, CRO, chatbots IA y conversión. Aprende a crear páginas que convierten visitas en clientes.",
    url: "https://landforge.digital/blog",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog de Landing Pages, CRO y Chatbots IA | LandForge",
    description:
      "Guías y tutoriales sobre landing pages, CRO, chatbots IA y conversión. Aprende a crear páginas que convierten visitas en clientes.",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://landforge.digital" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://landforge.digital/blog" },
  ],
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Blog de Conversión y Ventas | LandForge",
  description:
    "Aprende a disparar la tasa de conversión de tus landing pages y campañas B2B. SEO Programático, Inteligencia artificial, Chatbots y SXO.",
  url: "https://landforge.digital/blog",
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: 13,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        url: "https://landforge.digital/blog/que-es-una-landing-page",
        name: "Qué es una Landing Page y Para Qué Sirve en 2026",
      },
      {
        "@type": "ListItem",
        position: 2,
        url: "https://landforge.digital/blog/como-crear-landing-page-alta-conversion",
        name: "Cómo Crear una Landing Page de Alta Conversión en 2026",
      },
      {
        "@type": "ListItem",
        position: 3,
        url: "https://landforge.digital/blog/como-aumentar-conversion-landing-page",
        name: "Cómo Aumentar la Conversión de tu Landing Page",
      },
      {
        "@type": "ListItem",
        position: 4,
        url: "https://landforge.digital/blog/chatbot-ventas-para-web",
        name: "Chatbot de Ventas para tu Web con IA: Guía Completa 2026",
      },
      {
        "@type": "ListItem",
        position: 5,
        url: "https://landforge.digital/blog/mejores-herramientas-crear-landing-pages",
        name: "Las 10 Mejores Herramientas para Crear Landing Pages en 2026",
      },
      {
        "@type": "ListItem",
        position: 6,
        url: "https://landforge.digital/blog/landing-page-para-agencias-guia",
        name: "Landing Pages para Agencias: Guía Definitiva para Escalar en 2026",
      },
      {
        "@type": "ListItem",
        position: 7,
        url: "https://landforge.digital/blog/que-es-un-chatbot-de-ventas-ia",
        name: "Qué es un Chatbot de Ventas con IA: Guía Definitiva 2026",
      },
      {
        "@type": "ListItem",
        position: 8,
        url: "https://landforge.digital/blog/ab-testing-landing-pages-guia",
        name: "A/B Testing en Landing Pages: Guía Completa para Maximizar Conversiones",
      },
      {
        "@type": "ListItem",
        position: 9,
        url: "https://landforge.digital/blog/ejemplos-landing-pages-que-convierten",
        name: "Ejemplos de Landing Pages que Convierten: Casos Reales 2026",
      },
      {
        "@type": "ListItem",
        position: 10,
        url: "https://landforge.digital/blog/como-crear-landing-page-gratis",
        name: "Cómo Crear una Landing Page Gratis: Guía Paso a Paso 2026",
      },
      {
        "@type": "ListItem",
        position: 11,
        url: "https://landforge.digital/blog/elementos-landing-page-perfecta",
        name: "Los 10 Elementos de una Landing Page Perfecta",
      },
      {
        "@type": "ListItem",
        position: 12,
        url: "https://landforge.digital/blog/cuanto-cuesta-landing-page",
        name: "Cuánto Cuesta una Landing Page en 2026: Precios y Opciones",
      },
      {
        "@type": "ListItem",
        position: 13,
        url: "https://landforge.digital/blog/mejores-chatbots-ventas-web",
        name: "Los Mejores Chatbots de Ventas para tu Web en 2026",
      },
    ],
  },
};

export default function BlogIndex() {
  const posts = [
    {
      title: "¿Qué es una Landing Page? Guía completa 2026",
      slug: "que-es-una-landing-page",
      category: "Conceptos",
      date: "Marzo 2026",
      excerpt: "Aprende qué es una landing page, para qué sirve y por qué es la herramienta más potente para convertir visitas en clientes. Guía con ejemplos reales.",
    },
    {
      title: "Cómo Crear una Landing Page de Alta Conversión en 2026",
      slug: "como-crear-landing-page-alta-conversion",
      category: "CRO & SXO",
      date: "Marzo 2026",
      excerpt: "Guía paso a paso para construir landing pages que convierten: estructura, copywriting, velocidad, A/B testing y errores que debes evitar.",
    },
    {
      title: "Cómo Aumentar la Conversión de tu Landing Page",
      slug: "como-aumentar-conversion-landing-page",
      category: "CRO & Inteligencia Artificial",
      date: "Marzo 2026",
      excerpt: "Aprende paso a paso cómo subir la tasa de conversión en tus landing pages B2B con herramientas sin código, SEO y Chatbots de Inteligencia Artificial.",
    },
    {
      title: "Chatbot de Ventas para tu Web: Guía Completa 2026",
      slug: "chatbot-ventas-para-web",
      category: "IA & Ventas",
      date: "Marzo 2026",
      excerpt: "Descubre cómo un chatbot IA puede atender a tus clientes 24/7, responder objeciones y cerrar ventas mientras tú duermes.",
    },
    {
      title: "Las 10 Mejores Herramientas para Crear Landing Pages en 2026",
      slug: "mejores-herramientas-crear-landing-pages",
      category: "Herramientas",
      date: "Marzo 2026",
      excerpt: "Comparativa actualizada de las 10 mejores herramientas para crear landing pages en 2026. Analizamos precio, facilidad de uso, IA, conversión y para quién es cada una.",
    },
    {
      title: "Landing Pages para Agencias: Guía Definitiva para Escalar en 2026",
      slug: "landing-page-para-agencias-guia",
      category: "Agencias & Escalado",
      date: "Marzo 2026",
      excerpt: "Cómo crear, entregar y escalar landing pages como agencia de marketing. Automatización con IA, white label, pricing para clientes y flujo de trabajo profesional.",
    },
    {
      title: "Qué es un Chatbot de Ventas con IA: Guía Definitiva 2026",
      slug: "que-es-un-chatbot-de-ventas-ia",
      category: "IA & Ventas",
      date: "Marzo 2026",
      excerpt: "Descubre qué es un chatbot de ventas con inteligencia artificial, cómo funciona, tipos, beneficios y cómo implementarlo en tu web para multiplicar tus leads cualificados.",
    },
    {
      title: "A/B Testing en Landing Pages: Guía Completa para Maximizar Conversiones",
      slug: "ab-testing-landing-pages-guia",
      category: "CRO & Testing",
      date: "Marzo 2026",
      excerpt: "Aprende cómo hacer A/B testing en landing pages paso a paso. Herramientas, framework de priorización ICE, ejemplos reales y errores comunes.",
    },
    {
      title: "Ejemplos de Landing Pages que Convierten: Casos Reales 2026",
      slug: "ejemplos-landing-pages-que-convierten",
      category: "CRO & Ejemplos",
      date: "Marzo 2026",
      excerpt: "Analizamos landing pages reales con tasas de conversión superiores al 20%. Qué hacen bien, qué copiar y cómo aplicarlo a tu negocio.",
    },
    {
      title: "Cómo Crear una Landing Page Gratis: Guía Paso a Paso 2026",
      slug: "como-crear-landing-page-gratis",
      category: "Guías & Tutoriales",
      date: "Marzo 2026",
      excerpt: "Crea tu primera landing page sin gastar un euro. Herramientas gratuitas, plantillas y trucos para que convierta desde el día 1.",
    },
    {
      title: "Los 10 Elementos de una Landing Page Perfecta",
      slug: "elementos-landing-page-perfecta",
      category: "CRO & Estructura",
      date: "Marzo 2026",
      excerpt: "Los 10 elementos imprescindibles que toda landing page necesita para maximizar conversiones: hero, CTA, social proof, urgencia y más.",
    },
    {
      title: "Cuánto Cuesta una Landing Page en 2026: Precios y Opciones",
      slug: "cuanto-cuesta-landing-page",
      category: "Precios & Herramientas",
      date: "Marzo 2026",
      excerpt: "Desglose completo de precios: freelance, agencia, builders o IA. Cuánto invertir según tu negocio y cómo ahorrar sin perder calidad.",
    },
    {
      title: "Los Mejores Chatbots de Ventas para tu Web en 2026",
      slug: "mejores-chatbots-ventas-web",
      category: "IA & Chatbots",
      date: "Marzo 2026",
      excerpt: "Ranking de los mejores chatbots de ventas con IA para webs y landing pages. Comparativa de funcionalidades, precios y tasas de conversión.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#1A1A2E] font-sans">
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="collection-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <main className="max-w-6xl mx-auto px-6 pt-32 pb-24">
        <header className="mb-16 border-b border-gray-200 pb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-sm font-bold text-blue-700 uppercase tracking-wider mb-6">
            Centro de Recursos TOFU
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
            Blog de Conversión y Ventas
          </h1>
          <p className="text-xl text-[#6B7280] max-w-2xl">
            Tácticas probadas para vender más y gastar menos iluminando el rastro hacia tus embudos de venta. 
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <article key={i} className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-[#E0AAFF] transition duration-300 p-8 flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold text-[#9D4EDD] uppercase tracking-wider mb-4">
                  {post.category} • {post.date}
                </div>
                <h2 className="text-xl font-bold mb-4 leading-snug hover:text-[#9D4EDD] cursor-pointer">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="text-[#6B7280] leading-relaxed mb-8">
                  {post.excerpt}
                </p>
              </div>
              <Link href={`/blog/${post.slug}`} className="font-bold text-[#1A1A2E] hover:text-[#9D4EDD] inline-flex items-center gap-2">
                Leer artículo completo →
              </Link>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
