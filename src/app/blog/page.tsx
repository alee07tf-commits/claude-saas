import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog sobre CRO, Ventas B2B y Generación de Landing Pages | LandForge",
  description:
    "Aprende a disparar la tasa de conversión de tus landing pages y campañas B2B. SEO Programático, Inteligencia artificial, Chatbots y SXO.",
  keywords: [
    "blog conversion rate optimization",
    "blog crear landing pages",
    "blog ventas b2b ia",
    "guias seo programatico",
  ],
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
      title: "Chatbot de Ventas para tu Web: Guía Completa 2026",
      slug: "chatbot-ventas-para-web",
      category: "IA & Ventas",
      date: "Marzo 2026",
      excerpt: "Descubre cómo un chatbot IA puede atender a tus clientes 24/7, responder objeciones y cerrar ventas mientras tú duermes.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#1A1A2E] font-sans">
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
