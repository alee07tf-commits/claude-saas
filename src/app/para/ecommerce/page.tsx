import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Landing Pages para eCommerce y Tiendas Online con IA",
  description:
    "Genera landing pages de producto ultrarrápidas para Shopify y WooCommerce. La IA crea tu embudo en 30s y Forgi evita el abandono de carrito respondiendo objeciones 24/7.",
  keywords: [
    "landing pages para ecommerce",
    "crear landing page producto dropshipping",
    "integracion shopify landing page ia",
    "chatbot ia para tiendas online",
    "landing pages conversion shopify",
  ],
  alternates: {
    canonical: "https://landforge.digital/para/ecommerce",
  },
  openGraph: {
    title: "Landing Pages para eCommerce y Tiendas Online con IA",
    description:
      "Genera landing pages de producto ultrarrápidas para Shopify y WooCommerce. La IA crea tu embudo en 30s y Forgi evita el abandono de carrito respondiendo objeciones 24/7.",
    url: "https://landforge.digital/para/ecommerce",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿LandForge funciona con Shopify y WooCommerce?",
      acceptedAnswer: { "@type": "Answer", text: "Sí. Puedes publicar la landing en tu propio dominio o en un subdominio de landforge.app. Funciona a la perfección como destino de los anuncios de TikTok Ads, Facebook Ads y Google Shopping para tus productos." },
    },
    {
      "@type": "Question",
      name: "¿LandForge carga rápido en móvil para las campañas de TikTok Ads?",
      acceptedAnswer: { "@type": "Answer", text: "Es uno de nuestros puntos fuertes. Las landings generadas en React por LandForge obtienen consistentemente puntuaciones de Core Web Vitals superiores a 90 en Google PageSpeed. El LCP (Largest Contentful Paint) suele estar por debajo de 1.5 segundos." },
    },
    {
      "@type": "Question",
      name: "¿Forgi puede responder sobre tiempos de envío y política de devoluciones?",
      acceptedAnswer: { "@type": "Answer", text: "Sí, absolutamente. Cuando generas la landing, incluyes la información de tu tienda (política de envíos, plazos, materiales del producto, países donde envías). Forgi la absorbe y responde con ese contexto exacto a cada visitante." },
    },
  ],
};

export default function EcommerceLanding() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="min-h-screen bg-[#FAFAFA] text-[#1A1A2E] font-sans">
        <main>

          {/* ── 1. HERO ── */}
          <section className="relative px-6 pt-32 pb-20 text-center flex flex-col items-center justify-center min-h-[90vh]">
            <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at 50% 30%, rgba(157,78,221,0.06) 0%, transparent 65%)" }} />

            <p className="text-xs font-bold uppercase tracking-[2px] text-[#9D4EDD] mb-5 bg-[#F3E8FF] border border-[#E0AAFF] px-4 py-1.5 rounded-full inline-block">
              Generador de Embudos IA para eCommerce y Dropshipping
            </p>

            <h1 className="text-4xl md:text-6xl font-extrabold max-w-4xl tracking-tight leading-[1.05] mb-7">
              Más ventas por visita en tu tienda.{" "}
              <span style={{ background: "linear-gradient(135deg, #9D4EDD, #7B2CBF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Sin cambiar tu Shopify.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-[#6B7280] max-w-2xl leading-relaxed mb-10">
              Enviar tráfico de campañas de pago a tu página de inicio es el error más caro del eCommerce. <strong className="text-[#1A1A2E]">Genera una landing hiper-enfocada en tu producto estrella en 30 segundos.</strong> Forgi intercepta al visitante dudoso y responde sus objeciones antes de que cierre la ventana.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Link href="/register" className="px-8 py-4 rounded-xl font-bold text-lg text-white transition hover:-translate-y-1" style={{ background: "linear-gradient(135deg, #9D4EDD, #7B2CBF)", boxShadow: "0 8px 24px rgba(157,78,221,0.3)" }}>
                Crear mi landing de producto →
              </Link>
              <Link href="#como-funciona" className="px-8 py-4 rounded-xl border-2 border-[#E0AAFF] text-[#9D4EDD] font-bold text-lg hover:border-[#9D4EDD] transition">
                Ver cómo funciona
              </Link>
            </div>
            <p className="text-sm text-[#9D4EDD]">Sin tarjeta · 14 días gratis · Compatible con Shopify, WooCommerce y Stripe</p>

            <div className="mt-12 flex flex-wrap gap-10 justify-center">
              {[["30s", "Landing de producto lista"], ["+40%", "Media de mejora en conversión"], ["&lt;1s", "Tiempo de carga en móvil"], ["24/7", "Forgi evita abandonos de carrito"]].map(([v, l]) => (
                <div key={l} className="text-center">
                  <div className="text-3xl font-extrabold text-[#9D4EDD]" dangerouslySetInnerHTML={{ __html: v }} />
                  <div className="text-sm text-[#6B7280] mt-1">{l}</div>
                </div>
              ))}
            </div>
          </section>

          {/* ── 2. DOLOR ── */}
          <section className="px-6 py-24 bg-[#1A1A2E] text-white">
            <div className="max-w-5xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Los 3 fallos que destruyen tu ROAS en eCommerce</h2>
              <p className="text-[#E0AAFF] text-lg max-w-2xl mx-auto">Un buen producto y un buen anuncio no bastan. Si tu landing no está optimizada para cerrar la compra, estás subvencionando a la competencia.</p>
            </div>
            <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
              {[
                { icon: "🐢", title: "Tu tema de Shopify carga lento en móvil", text: "El 70% del tráfico de TikTok Ads llega desde smartphone. Cada segundo de carga extra te cuesta un 20% de conversión. Los temas de Shopify cargados de apps son tu peor enemigo." },
                { icon: "🧭", title: "El menú de navegación distrae al comprador", text: "Tu tienda tiene 15 categorías de productos. El visitante entra desde un anuncio de un producto concreto y se pierde en el menú. Una landing product-specific elimina todas las distracciones." },
                { icon: "❓", title: "Las objeciones de última hora se quedan sin respuesta", text: "¿Envían a mi país? ¿Cuándo llega? ¿Puedo devolver? Si no contestas en tiempo real, el carrito se abandona. El 70% de los carritos de eCommerce se abandonan antes del checkout." },
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
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#9D4EDD] bg-[#F3E8FF] px-4 py-1.5 rounded-full border border-[#E0AAFF] mb-4">Tu nuevo flujo de venta</span>
                <h2 className="text-3xl md:text-4xl font-extrabold">De anuncio a venta cerrada. Sin fricciones.</h2>
              </div>
              <div className="flex flex-col gap-10">
                {[
                  { num: "01", title: "Describe tu producto y campaña", text: "Dile a LandForge el nombre del producto, sus beneficios principales, el público al que apunta el anuncio y el tono (urgencia, exclusividad, oferta limitada). Si tienes la URL del producto en Shopify, la IA la analiza directamente.", badge: "Análisis automático de tu producto" },
                  { num: "02", title: "Landing de alta conversión en 30 segundos", text: "La IA genera una página sin menú de navegación, con el producto como protagonista absoluto, prueba social específica (reviews del producto), garantías de envío y devolución y un CTA único y claro hacia el checkout.", badge: "Zero distraction design, máxima conversión" },
                  { num: "03", title: "Forgi anti-abandono de carrito", text: "Cuando el usuario lleva 45 segundos mirando la página sin hacer clic, Forgi se activa y pregunta si tiene alguna duda. Responde sobre tallas, materiales, plazos de envío y política de devoluciones. Cierra la venta antes de que cierre el navegador.", badge: "Recuperación de carritos antes de que abandonen" },
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

          {/* ── 4. SOCIAL PROOF ── */}
          <section className="px-6 py-24 bg-[#F3E8FF]">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-extrabold text-center mb-16">Usuarios de eCommerce que han probado LandForge</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  { text: "Teníamos un ROAS de 1.8x enviando el tráfico de TikTok a la homepage. Creamos una landing específica para la campaña en LandForge y en 3 semanas el ROAS subió a 3.4x. Sin tocar el anuncio.", name: "Sergio V.", role: "Emprendedor eCommerce, Madrid", result: "→ ROAS de 1.8x a 3.4x en 3 semanas" },
                  { text: "Forgi nos soluciona el problema de los clientes que no compran porque no saben si enviamos a Canarias. Ahora Forgi lo responde automáticamente y hemos bajado la tasa de rebote en un 35%.", name: "Laura P.", role: "Gestora de tienda online, Sevilla", result: "→ 35% menos tasa de rebote en product pages" },
                ].map((t) => (
                  <div key={t.name} className="bg-white rounded-2xl border border-[#E0AAFF] p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex gap-0.5 text-[#FFB800] mb-4">{"★★★★★".split("").map((s, i) => <span key={i}>{s}</span>)}</div>
                      <p className="text-[#6B7280] italic leading-relaxed mb-4">"{t.text}"</p>
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-[#9D4EDD] bg-[#F3E8FF] px-3 py-1.5 rounded-lg inline-block mb-3">{t.result}</div>
                      <div className="font-bold text-sm">{t.name}</div>
                      <div className="text-xs text-[#6B7280]">{t.role}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── 5. FAQ ── */}
          <section className="px-6 py-24 bg-white">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-extrabold text-center mb-14">Preguntas frecuentes de tiendas online sobre LandForge</h2>
              <div className="divide-y divide-gray-100">
                {[
                  { q: "¿LandForge funciona con Shopify y WooCommerce?", a: "Sí. Puedes publicar la landing en tu propio dominio o en un subdominio de landforge.app, usarla perfectamente como destino de anuncios de TikTok Ads, Facebook Ads y Google Shopping." },
                  { q: "¿LandForge carga rápido en móvil para las campañas de TikTok Ads?", a: "Las landings generadas en React por LandForge obtienen consistentemente puntuaciones de Core Web Vitals superiores a 90 en Google PageSpeed. El LCP suele estar por debajo de 1.5 segundos." },
                  { q: "¿Forgi puede responder sobre tiempos de envío y política de devoluciones?", a: "Sí. Cuando generas la landing, incluyes la información de tu tienda. Forgi la absorbe y responde con ese contexto exacto a cada visitante, 24 horas al día." },
                ].map((faq) => (
                  <details key={faq.q} className="group py-5">
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

          {/* ── 6. CTA ── */}
          <section className="px-6 py-24 text-center" style={{ background: "linear-gradient(135deg, #9D4EDD 0%, #4C0099 100%)" }}>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-5">Tu próximo producto puede tener una landing lista hoy</h2>
              <p className="text-[#E0AAFF] text-lg mb-10">Deja de enviar tráfico caro a tu homepage. Crea en 30 segundos la landing específica del producto que quieres vender esta semana.</p>
              <Link href="/register" className="inline-block bg-white text-[#9D4EDD] font-bold text-lg px-10 py-5 rounded-2xl hover:-translate-y-1 transition shadow-xl">
                Optimizar mis ventas ahora →
              </Link>
            </div>
          </section>

          {/* Enlazado interno */}
          <section className="px-6 py-12 bg-[#FAFAFA] border-t border-gray-100">
            <div className="max-w-5xl mx-auto">
              <h3 className="font-bold text-[#1A1A2E] mb-5">Más casos de uso de LandForge</h3>
              <div className="flex flex-wrap gap-4">
                <Link href="/para/agencias-de-marketing" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">→ LandForge para Agencias</Link>
                <Link href="/integraciones/wordpress" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">→ Integración con WordPress</Link>
                <Link href="/blog/como-aumentar-conversion-landing-page" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">→ Guía: Cómo aumentar la conversión</Link>
              </div>
            </div>
          </section>

        </main>
      </div>
    </>
  );
}
