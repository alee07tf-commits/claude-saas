import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Conversion Score: Analiza tu Landing con IA",
  description:
    "Analiza tu landing page en tiempo real con IA y recibe recomendaciones accionables para aumentar la conversión. Puntuación de 0 a 100 por categoría.",
  keywords: [
    "conversion score landing page",
    "analizar landing page conversion",
    "mejorar conversion landing page ia",
    "puntuacion conversion landing",
    "optimizar landing page automatico",
  ],
  alternates: {
    canonical: "https://landforge.digital/features/conversion-score",
  },
  openGraph: {
    title: "Conversion Score: Analiza tu Landing con IA",
    description:
      "Analiza tu landing page en tiempo real y recibe recomendaciones accionables para aumentar la conversión.",
    url: "https://landforge.digital/features/conversion-score",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://landforge.digital" },
    { "@type": "ListItem", position: 2, name: "Conversion Score", item: "https://landforge.digital/features/conversion-score" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿El Conversion Score funciona con cualquier landing page?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, se calcula automáticamente para toda landing generada o editada dentro de LandForge. Cada vez que creas o modificas una página, el score se recalcula al instante.",
      },
    },
    {
      "@type": "Question",
      name: "¿Se actualiza cuando hago cambios?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, en tiempo real. Cada vez que editas tu landing con Forgi Editor, el Conversion Score se recalcula automáticamente para reflejar las mejoras o cambios realizados.",
      },
    },
    {
      "@type": "Question",
      name: "¿Es diferente de Google PageSpeed?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Google PageSpeed mide exclusivamente velocidad técnica y rendimiento web. El Conversion Score de LandForge mide persuasión, UX, claridad del copy y probabilidad real de conversión.",
      },
    },
  ],
};

const softwareFeatureSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Conversion Score — LandForge",
  applicationCategory: "BusinessApplication",
  description:
    "Puntuación de conversión con IA que analiza landing pages de 0 a 100 con desglose por categoría y recomendaciones accionables.",
  featureList: [
    "Puntuación de conversión de 0 a 100",
    "Desglose por categorías: CTA, Copy, Social Proof, UX, SEO",
    "Recomendaciones accionables en tiempo real",
    "Integración directa con Forgi Editor",
    "Análisis automático al generar o editar una landing",
  ],
  offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
};

export default function ConversionScorePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareFeatureSchema) }} />

      <div className="min-h-screen bg-[#FAFAFA] text-[#1A1A2E] font-sans">
        <main>

          {/* ── 1. HERO ── */}
          <section className="relative px-6 pt-32 pb-20 text-center flex flex-col items-center justify-center min-h-[90vh]">
            <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at 50% 30%, rgba(157,78,221,0.07) 0%, transparent 65%)" }} />

            <p className="text-xs font-bold uppercase tracking-[2px] text-[#9D4EDD] mb-5 bg-[#F3E8FF] border border-[#E0AAFF] px-4 py-1.5 rounded-full inline-block">
              Feature — Conversion Score
            </p>

            <h1 className="text-4xl md:text-6xl font-extrabold max-w-4xl tracking-tight leading-[1.05] mb-7">
              Conversion Score: Tu Landing Page,{" "}
              <span style={{ background: "linear-gradient(135deg, #9D4EDD, #7B2CBF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Analizada por IA en Tiempo Real
              </span>
            </h1>

            <p className="text-lg md:text-xl text-[#6B7280] max-w-2xl leading-relaxed mb-10">
              Cada landing que generas en LandForge recibe una puntuación de conversión de 0 a 100 con recomendaciones específicas para mejorarla. <strong className="text-[#1A1A2E]">Sin consultores, sin guesswork.</strong>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Link href="/register" className="px-8 py-4 rounded-xl font-bold text-lg text-white transition hover:-translate-y-1" style={{ background: "linear-gradient(135deg, #9D4EDD, #7B2CBF)", boxShadow: "0 8px 24px rgba(157,78,221,0.3)" }}>
                Genera tu primera landing →
              </Link>
              <Link href="#como-funciona" className="px-8 py-4 rounded-xl border-2 border-[#E0AAFF] text-[#9D4EDD] font-bold text-lg hover:border-[#9D4EDD] transition">
                Ver cómo funciona
              </Link>
            </div>
            <p className="text-sm text-[#9D4EDD]">Sin tarjeta · 14 días gratis · Score incluido en todos los planes</p>

            <div className="mt-12 flex flex-wrap gap-10 justify-center">
              {[["0-100", "Puntuación de conversión"], ["8", "Categorías analizadas"], ["1 clic", "Para aplicar mejoras"], ["Tiempo real", "Se actualiza al editar"]].map(([v, l]) => (
                <div key={l} className="text-center">
                  <div className="text-3xl font-extrabold text-[#9D4EDD]">{v}</div>
                  <div className="text-sm text-[#6B7280] mt-1">{l}</div>
                </div>
              ))}
            </div>
          </section>

          {/* ── 2. CÓMO FUNCIONA ── */}
          <section id="como-funciona" className="px-6 py-24 bg-white">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#9D4EDD] bg-[#F3E8FF] px-4 py-1.5 rounded-full border border-[#E0AAFF] mb-4">Cómo funciona</span>
                <h2 className="text-3xl md:text-4xl font-extrabold">De generar tu landing a optimizarla en 3 pasos</h2>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    step: "01",
                    title: "Genera tu landing",
                    text: "Crea tu landing page con LandForge como siempre. El Conversion Score se calcula automáticamente en cuanto se genera la página.",
                    icon: "🚀",
                  },
                  {
                    step: "02",
                    title: "Revisa el desglose",
                    text: "Cada categoría (CTA, Copy, Social Proof, UX, SEO...) tiene su puntuación individual. Sabes exactamente dónde estás fuerte y dónde mejorar.",
                    icon: "📊",
                  },
                  {
                    step: "03",
                    title: "Aplica las mejoras",
                    text: "Cada recomendación es accionable. Con un clic en Forgi Editor puedes ejecutar la mejora sugerida sin tocar código ni redactar nada.",
                    icon: "✅",
                  },
                ].map((s) => (
                  <div key={s.step} className="bg-[#FAFAFA] border border-gray-100 rounded-2xl p-8 text-center hover:border-[#E0AAFF] transition">
                    <div className="text-4xl mb-4">{s.icon}</div>
                    <div className="text-xs font-bold text-[#9D4EDD] uppercase tracking-widest mb-2">Paso {s.step}</div>
                    <h3 className="font-extrabold text-xl mb-3">{s.title}</h3>
                    <p className="text-[#6B7280] leading-relaxed text-sm">{s.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── 3. QUÉ ANALIZA ── */}
          <section className="px-6 py-24 bg-[#1A1A2E] text-white">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#E0AAFF] bg-white/5 px-4 py-1.5 rounded-full border border-white/10 mb-4">Qué analiza</span>
                <h2 className="text-3xl md:text-4xl font-extrabold mb-4">8 categorías que determinan si tu landing convierte</h2>
                <p className="text-[#E0AAFF] max-w-2xl mx-auto">Cada criterio recibe su propia puntuación y recomendaciones específicas. Así sabes exactamente qué mejorar y por qué.</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    icon: "🎯",
                    title: "CTA Clarity",
                    text: "¿El botón principal es visible y el texto es accionable? Analiza posición, color, contraste y microcopy del CTA.",
                  },
                  {
                    icon: "✍️",
                    title: "Copy Quality",
                    text: "¿El headline comunica el beneficio en 3 segundos? Evalúa claridad, propuesta de valor y poder de persuasión del texto.",
                  },
                  {
                    icon: "⭐",
                    title: "Social Proof",
                    text: "¿Hay testimonios, logos o números de confianza? Mide la presencia y calidad de elementos de prueba social.",
                  },
                  {
                    icon: "📱",
                    title: "Mobile UX",
                    text: "¿La experiencia en móvil es fluida? Verifica que botones, textos y formularios funcionen bien en pantallas pequeñas.",
                  },
                  {
                    icon: "⚡",
                    title: "Page Speed",
                    text: "¿La landing carga en menos de 2 segundos? Detecta imágenes pesadas, scripts bloqueantes y oportunidades de mejora.",
                  },
                  {
                    icon: "📝",
                    title: "Form Friction",
                    text: "¿El formulario tiene el mínimo de campos necesarios? Cada campo extra reduce la conversión un 7% de media.",
                  },
                  {
                    icon: "👁️",
                    title: "Visual Hierarchy",
                    text: "¿La estructura visual guía la mirada hacia la conversión? Analiza espaciado, contraste y flujo de lectura.",
                  },
                  {
                    icon: "🔍",
                    title: "SEO Basics",
                    text: "¿Title, meta description y H1 están optimizados? Verifica los fundamentos SEO para que tu landing también posicione.",
                  },
                ].map((c) => (
                  <div key={c.title} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#9D4EDD]/50 hover:bg-white/10 transition">
                    <div className="text-3xl mb-3">{c.icon}</div>
                    <h3 className="font-bold text-sm mb-2">{c.title}</h3>
                    <p className="text-white/60 text-xs leading-relaxed">{c.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── 4. BENEFICIOS ── */}
          <section className="px-6 py-24 bg-[#F3E8FF]">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#9D4EDD] bg-white px-4 py-1.5 rounded-full border border-[#E0AAFF] mb-4">Beneficios</span>
                <h2 className="text-3xl md:text-4xl font-extrabold">Optimiza tu landing sin depender de nadie</h2>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    icon: "🧠",
                    title: "No necesitas un consultor CRO",
                    text: "La IA hace el trabajo de análisis por ti. Recibes el mismo tipo de auditoría que una agencia CRO cobraría 2.000€, pero en tiempo real y dentro de tu herramienta.",
                  },
                  {
                    icon: "⚡",
                    title: "Mejoras con un clic",
                    text: "Las recomendaciones no son teóricas. Se aplican directamente en Forgi Editor con un solo clic. Cambias el CTA, reescribes el headline o añades social proof sin salir de LandForge.",
                  },
                  {
                    icon: "📚",
                    title: "Aprende mientras optimizas",
                    text: "Cada recomendación explica el por qué, no solo el qué. Con el tiempo, tu equipo internaliza las buenas prácticas de conversión sin necesidad de formación externa.",
                  },
                ].map((b) => (
                  <div key={b.title} className="bg-white rounded-2xl border border-[#E0AAFF] p-8 hover:shadow-lg transition">
                    <div className="text-4xl mb-4">{b.icon}</div>
                    <h3 className="font-extrabold text-xl mb-3">{b.title}</h3>
                    <p className="text-[#6B7280] leading-relaxed text-sm">{b.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── 5. FAQ ── */}
          <section className="px-6 py-24 bg-white">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-extrabold text-center mb-14">Preguntas frecuentes sobre Conversion Score</h2>
              <div className="divide-y divide-gray-100">
                {[
                  {
                    q: "¿El Conversion Score funciona con cualquier landing page?",
                    a: "Sí, se calcula automáticamente para toda landing generada o editada dentro de LandForge. Cada vez que creas o modificas una página, el score se recalcula al instante.",
                  },
                  {
                    q: "¿Se actualiza cuando hago cambios?",
                    a: "Sí, en tiempo real. Cada vez que editas tu landing con Forgi Editor, el Conversion Score se recalcula automáticamente para reflejar las mejoras o cambios realizados.",
                  },
                  {
                    q: "¿Es diferente de Google PageSpeed?",
                    a: "Sí. Google PageSpeed mide exclusivamente velocidad técnica y rendimiento web. El Conversion Score de LandForge mide persuasión, UX, claridad del copy y probabilidad real de conversión. Son complementarios, no sustitutos.",
                  },
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
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-5">Genera tu primera landing y descubre su Conversion Score</h2>
              <p className="text-[#E0AAFF] text-lg mb-10">Deja de adivinar qué funciona. Crea tu landing, recibe tu puntuación y aplica las mejoras con un clic. Así de simple.</p>
              <Link href="/register" className="inline-block bg-white text-[#9D4EDD] font-bold text-lg px-10 py-5 rounded-2xl hover:-translate-y-1 transition shadow-xl">
                Crear mi landing gratis →
              </Link>
            </div>
          </section>

          {/* ── Enlazado interno ── */}
          <section className="px-6 py-12 bg-[#FAFAFA] border-t border-gray-100">
            <div className="max-w-5xl mx-auto">
              <h3 className="font-bold mb-5">Más funcionalidades de LandForge</h3>
              <div className="flex flex-wrap gap-4">
                <Link href="/features/forgi-editor" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">→ Forgi Editor: Edita con IA</Link>
                <Link href="/features/forgi-chatbot" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">→ Forgi Chatbot: Asistente de Ventas IA</Link>
                <Link href="/blog/como-aumentar-conversion-landing-page" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">→ Cómo aumentar la conversión de tu landing</Link>
                <Link href="/para/agencias-de-marketing" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">→ LandForge para Agencias</Link>
              </div>
            </div>
          </section>

        </main>
      </div>
    </>
  );
}
