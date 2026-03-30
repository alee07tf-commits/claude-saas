import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Landing Pages para Shopify con IA",
  description:
    "Genera landing pages de producto para Shopify con IA en 30 segundos. Forgi chatbot responde dudas de compradores 24/7 y reduce el abandono de carrito.",
  keywords: [
    "integrar landing page ia shopify",
    "landforge shopify integracion",
    "landing page chatbot shopify",
    "crear landing page shopify ia",
    "mejor alternativa shopify landing pages",
  ],
  alternates: {
    canonical: "https://landforge.digital/integraciones/shopify",
  },
  openGraph: {
    title: "Landing Pages para Shopify con IA | LandForge",
    description:
      "Genera landing pages de producto para Shopify con IA en 30 segundos. Forgi chatbot responde dudas de compradores 24/7 y reduce el abandono de carrito.",
    url: "https://landforge.digital/integraciones/shopify",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://landforge.digital" },
    { "@type": "ListItem", position: 2, name: "Integraciones", item: "https://landforge.digital/integraciones" },
    { "@type": "ListItem", position: 3, name: "Shopify", item: "https://landforge.digital/integraciones/shopify" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Tengo que instalar algún plugin de Shopify para usar LandForge?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. LandForge funciona independientemente de tu Shopify. Las landings se publican en su propio dominio o subdominio. Solo enlazas el CTA de la landing con tu página de producto o carrito de Shopify.",
      },
    },
    {
      "@type": "Question",
      name: "¿LandForge puede reemplazar al constructor de páginas de Shopify?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Para landing pages de conversión específicas (lanzamientos, campañas, eventos), LandForge es más eficiente. Para las páginas de producto del catálogo completo, el constructor de Shopify sigue siendo la herramienta adecuada.",
      },
    },
    {
      "@type": "Question",
      name: "¿Las landing pages de LandForge afectan al SEO de mi Shopify?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No negativamente. Las landings de LandForge tienen su propia URL independiente, por lo que no afectan al dominio principal de tu tienda Shopify.",
      },
    },
  ],
};

export default function ShopifyIntegracion() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="min-h-screen bg-[#FAFAFA] text-[#1A1A2E] font-sans">
        <main>

          {/* ── 1. HERO ── */}
          <section className="relative px-6 pt-32 pb-20 text-center flex flex-col items-center justify-center min-h-[90vh]">
            <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at 50% 30%, rgba(157,78,221,0.06) 0%, transparent 65%)" }} />
            <p className="text-xs font-bold uppercase tracking-[2px] text-[#9D4EDD] mb-5 bg-[#F3E8FF] border border-[#E0AAFF] px-4 py-1.5 rounded-full inline-block">
              Integración — LandForge + Shopify
            </p>
            <h1 className="text-4xl md:text-6xl font-extrabold max-w-4xl tracking-tight leading-[1.05] mb-7">
              Landing Page Shopify:{" "}
              <span style={{ background: "linear-gradient(135deg, #9D4EDD, #7B2CBF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Más Ventas por Visita con IA
              </span>
            </h1>
            <p className="text-lg md:text-xl text-[#6B7280] max-w-2xl leading-relaxed mb-10">
              Una landing page Shopify específica convierte entre un 8-15%, frente al 1-2% de las páginas de producto estándar. <strong className="text-[#1A1A2E]">Crea tu landing page para Shopify de producto, colección o campaña en 30 segundos</strong> con chatbot IA que resuelve dudas de talla, envío y devoluciones antes de que el comprador abandone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Link href="/register" className="px-8 py-4 rounded-xl font-bold text-lg text-white transition hover:-translate-y-1" style={{ background: "linear-gradient(135deg, #9D4EDD, #7B2CBF)", boxShadow: "0 8px 24px rgba(157,78,221,0.3)" }}>
                Crear mi primera landing para Shopify →
              </Link>
              <Link href="#como-funciona" className="px-8 py-4 rounded-xl border-2 border-[#E0AAFF] text-[#9D4EDD] font-bold text-lg hover:border-[#9D4EDD] transition">
                Ver cómo funciona
              </Link>
            </div>
            <p className="text-sm text-[#9D4EDD]">Sin plugins · Sin tocar el código · En 30 segundos</p>
            <div className="mt-12 flex flex-wrap gap-10 justify-center">
              {[["1-2%", "CR medio de página de producto Shopify"], ["8-15%", "CR medio de landing LandForge"], ["30s", "Para crear la landing de tu campaña"], ["0€", "Para empezar hoy"]].map(([v, l]) => (
                <div key={l} className="text-center">
                  <div className="text-3xl font-extrabold text-[#9D4EDD]">{v}</div>
                  <div className="text-sm text-[#6B7280] mt-1">{l}</div>
                </div>
              ))}
            </div>
          </section>

          {/* ── 2. CUÁNDO USARLA ── */}
          <section className="px-6 py-24 bg-[#1A1A2E] text-white">
            <div className="max-w-5xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Cuándo necesitas una landing page además de tu tienda Shopify</h2>
            </div>
            <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
              {[
                { icon: "📣", title: "Campañas de Meta o Google Ads", text: "Nunca envíes el tráfico de un anuncio de Google Ads a tu homepage de Shopify. Crea una landing específica para esa campaña con el mismo mensaje y un único CTA. El ROAS puede mejorar un 40-60%." },
                { icon: "🚀", title: "Lanzamiento de un nuevo producto", text: "Una página de producto de Shopify no está diseñada para el hype de un lanzamiento. Una landing de pre-lanzamiento con cuenta atrás, beneficios, precios de early bird y Forgi para resolver dudas convierte 5x más." },
                { icon: "🎁", title: "Ofertas y eventos estacionales", text: "Black Friday, Rebajas de enero, San Valentín. Crea landings específicas para cada evento con el copy, la urgencia y el diseño adaptado al momento. En 30 segundos, sin tocar el código de tu Shopify." },
              ].map((item) => (
                <div key={item.title} className="bg-white/5 border border-white/10 rounded-2xl p-8">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="font-bold text-lg mb-3">{item.title}</h3>
                  <p className="text-white/60 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── 3. CÓMO FUNCIONA ── */}
          <section id="como-funciona" className="px-6 py-24 bg-white">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-extrabold">Cómo conectar LandForge con tu tienda Shopify</h2>
              </div>
              <div className="flex flex-col gap-10">
                {[
                  { num: "01", title: "Crea la landing de tu producto o campaña en LandForge", text: "Describe el producto, sus beneficios clave, el precio, las opciones disponibles (tallas, colores), los plazos de envío y la política de devoluciones. La IA genera la landing específica con copy optimizado.", badge: "Landing lista en 30 segundos" },
                  { num: "02", title: "El CTA conecta directamente con tu Shopify", text: "El botón de compra de la landing enlaza directamente a la página de producto o al carrito de tu Shopify. El usuario convierte en LandForge pero compra en tu checkout de Shopify, con toda la seguridad y las integraciones que ya tienes.", badge: "Sin duplicar el proceso de pago" },
                  { num: "03", title: "Forgi resuelve las dudas antes del clic de compra", text: "¿Este tejido es transpirable? ¿Llega antes de Navidad? ¿Puedo devolver si no es mi talla? Forgi responde estas preguntas que frena el 60% de los abandonos de carrito antes de que ocurran.", badge: "Menos carritos abandonados" },
                ].map((step) => (
                  <div key={step.num} className="flex gap-8 items-start">
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center font-mono font-bold text-xl border border-[#E0AAFF] bg-[#F3E8FF] text-[#9D4EDD]">{step.num}</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-[#6B7280] leading-relaxed mb-3">{step.text}</p>
                      <span className="inline-block text-xs font-semibold text-[#9D4EDD] bg-[#F3E8FF] px-3 py-1 rounded-full">✓ {step.badge}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── 4. FAQ ── */}
          <section className="px-6 py-24 bg-[#F3E8FF]">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-extrabold text-center mb-14">Preguntas frecuentes sobre LandForge y Shopify</h2>
              <div className="divide-y divide-gray-100">
                {[
                  { q: "¿Tengo que instalar algún plugin de Shopify para usar LandForge?", a: "No. LandForge funciona independientemente de tu Shopify. Las landings se publican en su propio dominio o subdominio. Solo enlazas el CTA de la landing con tu página de producto o carrito de Shopify." },
                  { q: "¿LandForge puede reemplazar al constructor de páginas de Shopify?", a: "Para landing pages de conversión específicas (lanzamientos, campañas, eventos), LandForge es más eficiente. Para las páginas de producto del catálogo completo, el constructor de Shopify sigue siendo la herramienta adecuada." },
                  { q: "¿Las landing pages de LandForge afectan al SEO de mi Shopify?", a: "No negativamente. Las landings de LandForge tienen su propia URL independiente, por lo que no afectan al dominio principal de tu tienda Shopify." },
                ].map((faq) => (
                  <details key={faq.q} className="group py-5 bg-white px-6 rounded-xl mb-2">
                    <summary className="flex justify-between items-center cursor-pointer list-none font-semibold text-[#1A1A2E]">
                      <span>{faq.q}</span>
                      <span className="text-[#9D4EDD] ml-4 group-open:rotate-45 transition-transform flex-shrink-0 text-xl">+</span>
                    </summary>
                    <p className="mt-4 text-[#6B7280] leading-relaxed">{faq.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>

          {/* ── 5. CTA ── */}
          <section className="px-6 py-24 text-center" style={{ background: "linear-gradient(135deg, #9D4EDD 0%, #4C0099 100%)" }}>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-5">Multiplica el ROAS de tus campañas de Shopify</h2>
              <p className="text-[#E0AAFF] text-lg mb-10">Crea la landing de tu próxima campaña en 30 segundos. Sin plugins. Sin tocar el código.</p>
              <Link href="/register" className="inline-block bg-white text-[#9D4EDD] font-bold text-lg px-10 py-5 rounded-2xl hover:-translate-y-1 transition shadow-xl">
                Crear landing para mi Shopify →
              </Link>
            </div>
          </section>

          {/* Enlazado interno */}
          <section className="px-6 py-12 bg-[#FAFAFA] border-t border-gray-100">
            <div className="max-w-5xl mx-auto">
              <h3 className="font-bold mb-5">Más integraciones y recursos</h3>
              <div className="flex flex-wrap gap-4">
                <Link href="/integraciones/wordpress" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">→ LandForge + WordPress</Link>
                <Link href="/para/ecommerce" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">→ LandForge para eCommerce</Link>
                <Link href="/features/forgi-chatbot" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">→ Forgi Chatbot: Menos Abandonos</Link>
                <Link href="/blog/chatbot-ventas-para-web" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">→ Guía Chatbot de Ventas</Link>
                <Link href="/precios" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">→ Ver precios de LandForge</Link>
                <Link href="/integraciones" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">→ Todas las integraciones</Link>
              </div>
            </div>
          </section>

        </main>
      </div>
    </>
  );
}
