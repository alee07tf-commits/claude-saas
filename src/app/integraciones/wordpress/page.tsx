import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Landing Pages IA para WordPress",
  description:
    "Integra landing pages con IA en tu WordPress en 1 minuto. Sin plugins pesados ni romper Core Web Vitals. Alternativa a Elementor y Divi.",
  keywords: [
    "alternativa elementor landing pages",
    "landing pages wordpress sin plugin",
    "integracion landforge wordpress",
    "plugin seo landing page wordpress ia",
    "mejor que divi wordpress",
  ],
  alternates: {
    canonical: "https://landforge.digital/integraciones/wordpress",
  },
  openGraph: {
    title: "Landing Pages IA para WordPress",
    description:
      "Integra landing pages con IA en tu WordPress en 1 minuto. Sin plugins pesados ni romper Core Web Vitals. Alternativa a Elementor y Divi.",
    url: "https://landforge.digital/integraciones/wordpress",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://landforge.digital" },
    { "@type": "ListItem", position: 2, name: "Integraciones", item: "https://landforge.digital/integraciones" },
    { "@type": "ListItem", position: 3, name: "WordPress", item: "https://landforge.digital/integraciones/wordpress" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Por qué LandForge es mejor que Elementor para landing pages?",
      acceptedAnswer: { "@type": "Answer", text: "Elementor añade hasta 500KB de CSS y JS no utilizados a tu WordPress, lo que penaliza gravemente el LCP y el TBT (Core Web Vitals). LandForge genera código React limpio y optimizado que carga en menos de 1 segundo, sin theme-builder overhead." },
    },
    {
      "@type": "Question",
      name: "¿Cómo integro una landing de LandForge en mi WordPress?",
      acceptedAnswer: { "@type": "Answer", text: "Tienes dos opciones: (1) Publicas en un subdominio de landforge.app y lo conectas a WordPress con un redirect 301 desde el path de tu campaña. (2) Conectas tu propio dominio en los planes Pro o Unlimited y el subdominio de la landing se publica directamente allí." },
    },
    {
      "@type": "Question",
      name: "¿LandForge afecta al SEO del resto de mi WordPress?",
      acceptedAnswer: { "@type": "Answer", text: "No. Las landing pages de LandForge se publican en un dominio o subdominio separado y no comparten la instalación de WordPress. Tus páginas existentes, su caché y su estructura no se ven afectadas en absoluto." },
    },
  ],
};

export default function IntegracionWordPress() {
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
              Integración Nativa con WordPress — Sin Plugins Pesados
            </p>

            <h1 className="text-4xl md:text-6xl font-extrabold max-w-4xl tracking-tight leading-[1.05] mb-7">
              Landing Pages para WordPress que convierten.{" "}
              <span style={{ background: "linear-gradient(135deg, #9D4EDD, #7B2CBF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Sin matar tu SEO.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-[#6B7280] max-w-2xl leading-relaxed mb-10">
              Elementor, Divi y Beaver Builder son herramientas potentes pero destroyer de Core Web Vitals. <strong className="text-[#1A1A2E]">LandForge genera tu landing en React limpio y optimizado, la conectas a tu dominio en 1 minuto</strong>, sin tocar tu instalación de WordPress ni ningún plugin.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Link href="/register" className="px-8 py-4 rounded-xl font-bold text-lg text-white transition hover:-translate-y-1" style={{ background: "linear-gradient(135deg, #9D4EDD, #7B2CBF)", boxShadow: "0 8px 24px rgba(157,78,221,0.3)" }}>
                Conectar mi WordPress gratis →
              </Link>
              <Link href="#comparativa" className="px-8 py-4 rounded-xl border-2 border-[#E0AAFF] text-[#9D4EDD] font-bold text-lg hover:border-[#9D4EDD] transition">
                Ver comparativa con Elementor
              </Link>
            </div>
            <p className="text-sm text-[#9D4EDD]">Sin tarjeta · Tu WordPress intacto · 14 días gratis</p>

            <div className="mt-12 flex flex-wrap gap-10 justify-center">
              {[["&lt;1s", "Carga de la landing (LCP)"], ["0 plugins", "Necesarios en tu WordPress"], ["+30", "Puntos PageSpeed vs Elementor"], ["30s", "De briefing a landing publicada"]].map(([v, l]) => (
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
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Lo que Elementor le hace a tu SEO (Y nadie te cuenta)</h2>
              <p className="text-[#E0AAFF] text-lg max-w-2xl mx-auto">Elementor lo usa el 12% de todos los sitios web del mundo. Solo el 2% de ellos tiene Core Web Vitals en verde. Aquí tienes por qué.</p>
            </div>
            <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
              {[
                { icon: "🐌", title: "LCP superior a 4 segundos en móvil", text: "Los builders de WordPress cargan todos sus módulos aunque no aparezcan en la página. El resultado: tu landing de Google Ads pierde el 60% de visitantes antes de que vean el titular." },
                { icon: "📦", title: "700KB de CSS y JS sin usar", text: "Elementor carga su librería completa en cada página aunque solo uses 3 widgets. Ese bloat de código invisible penaliza tu TBT (Total Blocking Time) y hace fallar el Core Web Vitals INP." },
                { icon: "🔄", title: "Actualizaciones que rompen el diseño", text: "Cada actualización de Elementor o del tema es una ruleta rusa para tu landing. LandForge genera código estático que nunca se actualiza sin tu permiso y nunca se rompe solo." },
              ].map((item) => (
                <div key={item.title} className="bg-white/5 border border-white/10 rounded-2xl p-8">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="font-bold text-lg mb-3">{item.title}</h3>
                  <p className="text-white/60 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── 3. COMPARATIVA ── */}
          <section id="comparativa" className="px-6 py-24 bg-white">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-14">
                <h2 className="text-3xl font-extrabold">LandForge vs Elementor: Los números no mienten</h2>
                <p className="text-[#6B7280] mt-4 max-w-xl mx-auto">Misma landing, mismo hosting. Diferente herramienta de construcción.</p>
              </div>
              <div className="overflow-x-auto rounded-2xl border border-[#E0AAFF] shadow-sm">
                <table className="w-full text-left bg-white">
                  <thead>
                    <tr className="border-b border-[#E0AAFF] bg-[#FAF5FF]">
                      <th className="p-5 font-bold text-[#6B7280] text-sm">Métrica</th>
                      <th className="p-5 font-bold text-[#9D4EDD]">LandForge (React)</th>
                      <th className="p-5 font-bold text-[#6B7280]">Elementor Pro</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-sm">
                    {[
                      ["LCP (Largest Contentful Paint)", "~0.8s ✅", "3.1s - 6.2s ❌"],
                      ["TBT (Total Blocking Time)", "~30ms ✅", "350ms - 800ms ❌"],
                      ["CSS enviado al navegador", "~15KB ✅", "350-700KB ❌"],
                      ["Core Web Vitals en verde", "Sí (98% de casos) ✅", "No (solo 2% lo logra) ❌"],
                      ["Chatbot de ventas integrado", "Sí (Forgi nativo) ✅", "No (requiere plugin extra) ❌"],
                      ["Tiempo de creación por landing", "30 segundos ✅", "4-8 horas ❌"],
                    ].map(([feat, lf, el]) => (
                      <tr key={feat}>
                        <td className="p-5 font-semibold text-[#1A1A2E]">{feat}</td>
                        <td className="p-5 font-medium" dangerouslySetInnerHTML={{ __html: lf.replace("✅", '<span class="text-green-600">✅</span>').replace("❌", '<span class="text-red-500">❌</span>') }} />
                        <td className="p-5 text-[#6B7280]" dangerouslySetInnerHTML={{ __html: el.replace("✅", '<span class="text-green-600">✅</span>').replace("❌", '<span class="text-red-500">❌</span>') }} />
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* ── 4. CÓMO INTEGRAR ── */}
          <section className="px-6 py-24 bg-[#F3E8FF]">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#9D4EDD] bg-white px-4 py-1.5 rounded-full border border-[#E0AAFF] mb-4">Integración en 3 pasos</span>
                <h2 className="text-3xl font-extrabold">Conecta LandForge a tu WordPress en menos de 5 minutos</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { num: "01", title: "Genera la landing en LandForge", text: "Rellena el formulario con la información de la campaña o servicio que quieres promocionar desde tu WordPress. La IA genera la página en React en 30 segundos." },
                  { num: "02", title: "Conecta tu dominio o subdominio", text: "En el panel de LandForge, configura el dominio o el subdominio de tu WordPress (ej: landing.tudominio.com). El sistema genera los DNS necesarios en menos de 2 minutos." },
                  { num: "03", title: "Tu landing está online, WordPress intacto", text: "La landing se sirve desde la infraestructura de LandForge, no desde tu hosting de WordPress. Tu web principal no se ve afectada. Puedes enlazar desde tu WP hacia la landing con total libertad." },
                ].map((step) => (
                  <div key={step.num} className="bg-white rounded-2xl border border-[#E0AAFF] p-8">
                    <div className="text-2xl font-mono font-bold text-[#9D4EDD] mb-4">{step.num}</div>
                    <h3 className="font-bold text-lg mb-3">{step.title}</h3>
                    <p className="text-[#6B7280] leading-relaxed">{step.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── 5. FAQ ── */}
          <section className="px-6 py-24 bg-white">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-extrabold text-center mb-14">Preguntas frecuentes sobre LandForge y WordPress</h2>
              <div className="divide-y divide-gray-100">
                {[
                  { q: "¿Por qué LandForge es mejor que Elementor para landing pages?", a: "Elementor añade hasta 500KB de CSS y JS no utilizados a tu WordPress, penalizando gravemente el LCP y el TBT. LandForge genera código React limpio que carga en menos de 1 segundo." },
                  { q: "¿Cómo integro una landing de LandForge en mi WordPress?", a: "Tienes dos opciones: (1) Publicar en un subdominio de landforge.app. (2) Conectar tu propio dominio en los planes Pro o Unlimited. Tu WordPress permanece intacto en ambos casos." },
                  { q: "¿LandForge afecta al SEO del resto de mi WordPress?", a: "No. Las landing pages de LandForge se publican en un dominio o subdominio separado y no comparten la instalación de WordPress. Tus páginas existentes no se ven afectadas." },
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
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-5">Deja de luchar con Elementor. Empieza a convertir.</h2>
              <p className="text-[#E0AAFF] text-lg mb-10">Tu primera landing conectada a WordPress está a 30 segundos. Sin plugins, sin configuraciones de caché, sin romper el diseño de tu web.</p>
              <Link href="/register" className="inline-block bg-white text-[#9D4EDD] font-bold text-lg px-10 py-5 rounded-2xl hover:-translate-y-1 transition shadow-xl">
                Conectar mi WordPress gratis →
              </Link>
            </div>
          </section>

          {/* Enlazado interno */}
          <section className="px-6 py-12 bg-[#FAFAFA] border-t border-gray-100">
            <div className="max-w-5xl mx-auto">
              <h3 className="font-bold mb-5">También te puede interesar</h3>
              <div className="flex flex-wrap gap-4">
                <Link href="/comparar/landforge-vs-webflow" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">→ LandForge vs Webflow</Link>
                <Link href="/para/agencias-de-marketing" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">→ LandForge para Agencias</Link>
                <Link href="/blog/como-aumentar-conversion-landing-page" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">→ Guía CRO: Aumentar la Conversión</Link>
                <Link href="/precios" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">→ Ver precios de LandForge</Link>
                <Link href="/integraciones" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">→ Todas las integraciones</Link>
                <Link href="/integraciones/shopify" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">→ Integración con Shopify</Link>
              </div>
            </div>
          </section>

        </main>
      </div>
    </>
  );
}
