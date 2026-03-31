import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Landing Pages para Coaches y Formadores con IA",
  description:
    "Crea tu landing de coaching en 30 segundos con IA. Forgi cualifica prospectos antes de la llamada y filtra si encajan con tu método.",
  keywords: [
    "landing page coach ia",
    "crear pagina web coach formador",
    "captacion clientes coaching ia",
    "chatbot cualificacion coaching",
    "marketing digital coaches",
  ],
  alternates: {
    canonical: "https://landforge.digital/para/coaches",
  },
  openGraph: {
    title: "Landing Pages para Coaches y Formadores con IA",
    description:
      "Crea tu landing de coaching en 30 segundos con IA. Forgi cualifica prospectos antes de la llamada y filtra si encajan con tu método.",
    url: "https://landforge.digital/para/coaches",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://landforge.digital" },
    { "@type": "ListItem", position: 2, name: "Landing Pages para Coaches", item: "https://landforge.digital/para/coaches" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Forgi puede hacer las preguntas de cualificación de mi método de coaching?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Cuando configuras Forgi para tu programa, defines las preguntas de cualificación que tus prospectos perfectos deben responder afirmativamente. Forgi las hace de forma conversacional y natural. Solo los perfiles que cumplen tus criterios llegan a tu agenda.",
      },
    },
    {
      "@type": "Question",
      name: "¿Puedo usar LandForge para vender programas de formación grabados (cursos online)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. LandForge es ideal para crear Sales Pages de cursos y programas grabados. La IA enfatiza la transformación que logra el alumno, incluye testimonios de alumnos anteriores, sección de módulos y un CTA claro hacia el checkout. Forgi puede resolver dudas sobre el contenido del curso antes de la compra.",
      },
    },
    {
      "@type": "Question",
      name: "¿LandForge se conecta con Calendly para que Forgi agende llamadas de forma automática?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Actualmente Forgi recoge la disponibilidad del prospecto y te la envía con todos sus datos de cualificación para que tú confirmes el slot en Calendly. La integración directa con Calendly para agendado automático está en el roadmap de 2026.",
      },
    },
  ],
};

export default function CoachesLanding() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="min-h-screen bg-[#FAFAFA] text-[#1A1A2E] font-sans">
        <main>

          {/* ── 1. HERO ── */}
          <section className="relative px-6 pt-32 pb-20 text-center flex flex-col items-center justify-center min-h-[90vh]">
            <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at 50% 30%, rgba(157,78,221,0.06) 0%, transparent 65%)" }} />

            <nav aria-label="Breadcrumb" className="text-xs text-[#6B7280] mb-6 flex gap-1">
              <Link href="/" className="hover:text-[#9D4EDD]">Inicio</Link><span>/</span>
              <Link href="/para" className="hover:text-[#9D4EDD]">Soluciones</Link><span>/</span>
              <span className="text-[#9D4EDD]">Coaches</span>
            </nav>

            <p className="text-xs font-bold uppercase tracking-[2px] text-[#9D4EDD] mb-5 bg-[#F3E8FF] border border-[#E0AAFF] px-4 py-1.5 rounded-full inline-block">
              Captación de Clientes para Coaches y Formadores
            </p>
            <h1 className="text-4xl md:text-6xl font-extrabold max-w-4xl tracking-tight leading-[1.05] mb-7">
              Landing Page para Coaches:{" "}
              <span style={{ background: "linear-gradient(135deg, #9D4EDD, #7B2CBF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Llena tu Agenda de Clientes con IA
              </span>
            </h1>
            <p className="text-lg md:text-xl text-[#6B7280] max-w-2xl leading-relaxed mb-10">
              Una landing page para coaches profesionales capta leads cualificados y filtra a quienes no encajan con tu método antes de que lleguen a tu agenda. Las llamadas de descubrimiento con perfiles erróneos son el mayor coste oculto del coaching. <strong className="text-[#1A1A2E]">LandForge crea la landing de tu programa en 30 segundos</strong> y Forgi cualifica a los interesados automáticamente.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Link href="/register" className="px-8 py-4 rounded-xl font-bold text-lg text-white transition hover:-translate-y-1" style={{ background: "linear-gradient(135deg, #9D4EDD, #7B2CBF)", boxShadow: "0 8px 24px rgba(157,78,221,0.3)" }}>
                Crear mi página de coaching →
              </Link>
              <Link href="#como-funciona" className="px-8 py-4 rounded-xl border-2 border-[#E0AAFF] text-[#9D4EDD] font-bold text-lg hover:border-[#9D4EDD] transition">
                Ver cómo funciona
              </Link>
            </div>
            <p className="text-sm text-[#9D4EDD]">Sin tarjeta · 14 días gratis · Primera landing en 30 segundos</p>
          </section>

          {/* ── 2. DOLOR ── */}
          <section className="px-6 py-24 bg-[#1A1A2E] text-white">
            <div className="max-w-5xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Qué hace especial una landing page para coaches frente a una web genérica</h2>
              <p className="text-[#E0AAFF] text-lg max-w-2xl mx-auto">Cuando consigues visibilidad y los prospectos llegan, el cuello de botella se convierte en tu propia disponibilidad para atenderlos y filtrarlos.</p>
            </div>
            <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
              {[
                { icon: "📅", title: "Llamadas de descubrimiento con perfiles erróneos", text: "Dedicas 45 minutos a una llamada con alguien que no tiene presupuesto para tu programa, no tiene el problema que tú resuelves o no está en el momento adecuado para comprometerse." },
                { icon: "📝", title: "Una web genérica que no refleja tu transformación", text: "Una web de 'coach profesional' con secciones de 'Sobre mí' y 'Servicios' no convierte. El prospecto necesita ver claramente su problema, la solución y el resultado antes de dar el paso." },
                { icon: "⏰", title: "Prospectos que preguntan lo mismo que ya está en la web", text: "¿Cuándo empieza el próximo programa? ¿Cuántas horas son? ¿Hay soporte en la comunidad? Forgi responde estas preguntas el primer día, liberando horas de tu agenda cada semana." },
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
                <h2 className="text-3xl md:text-4xl font-extrabold">De visitante interesado a cliente ideal cualificado</h2>
              </div>
              <div className="flex flex-col gap-10">
                {[
                  { num: "01", title: "Describe tu método y tu cliente ideal", text: "Cuéntale a LandForge qué transformación ofreces, a quién va dirigido, cuánto dura el programa y cuál es la principal objeción que suelen tener los prospectos. La IA construye la Sales Page con ese contexto.", badge: "Copy orientado a la transformación, no al coach" },
                  { num: "02", title: "Sales Page que convierte curiosos en demanda real", text: "La landing enfatiza el 'antes y después' de tu programa, incluye testimonios reales de alumnos anteriores, detalla el contenido sin spoilear y tiene un único CTA: solicitar la llamada de descubrimiento.", badge: "Estructura de Sales Page de alta conversión" },
                  { num: "03", title: "Forgi cualifica antes de que lleguen a tu agenda", text: "Cuando el interesado llega a la landing, Forgi le pregunta cuál es su situación actual, qué ha intentado antes y si puede comprometerse con el proceso. Solo los perfiles ideales avanzan a la llamada contigo.", badge: "Tu tiempo solo para clientes que van a cerrar" },
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
              <h2 className="text-3xl font-extrabold text-center mb-16">Usuarios del mundo coaching que han probado LandForge</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  { text: "Antes de LandForge, el 50% de mis llamadas de descubrimiento eran con personas que al final no tenían presupuesto o no estaban motivadas. Ahora Forgi las filtra antes y el 80% de mis llamadas son con prospectos que ya quieren cerrar.", name: "Marta J.", role: "Coach de negocios, Madrid", result: "→ Tasa de cierre de llamadas del 30% al 80%" },
                  { text: "Lancé el programa de enero con una Sales Page creada en LandForge. 48 horas después, Forgi había cualificado 34 solicitudes de llamada. Cerré 12 plazas en 2 semanas sin publicidad de pago, solo con mi comunidad de Instagram.", name: "Daniel P.", role: "Coach de productividad, Barcelona", result: "→ 12 plazas cerradas sin publicidad en 2 semanas" },
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
              <h2 className="text-3xl font-extrabold text-center mb-14">Preguntas frecuentes de coaches sobre LandForge</h2>
              <div className="divide-y divide-gray-100">
                {[
                  { q: "¿Forgi puede hacer las preguntas de cualificación de mi método?", a: "Sí. Cuando configuras Forgi para tu programa, defines las preguntas que tus prospectos ideales deben responder. Forgi las hace de forma conversacional y natural." },
                  { q: "¿Puedo usar LandForge para vender cursos online grabados?", a: "Sí. LandForge es ideal para Sales Pages de cursos. La IA enfatiza la transformación del alumno, incluye testimonios y Forgi puede resolver dudas sobre el contenido antes de la compra." },
                  { q: "¿LandForge se conecta con Calendly para agendar llamadas?", a: "Actualmente Forgi recoge la disponibilidad y te la envía con los datos de cualificación para que confirmes el slot en Calendly. La integración directa está en el roadmap de 2026." },
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
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-5">Tu próximo programa lleno de clientes ideales</h2>
              <p className="text-[#E0AAFF] text-lg mb-10">Crea tu Sales Page en 30 segundos y activa Forgi para que cualifique a tus prospectos mientras tú haces lo que mejor sabes hacer. Revisa nuestros <Link href="/precios" className="text-white font-semibold underline underline-offset-2 hover:text-[#F3E8FF] transition">planes y precios</Link> para coaches.</p>
              <Link href="/register" className="inline-block bg-white text-[#9D4EDD] font-bold text-lg px-10 py-5 rounded-2xl hover:-translate-y-1 transition shadow-xl">
                Crear mi página de coaching gratis →
              </Link>
            </div>
          </section>

          <section className="px-6 py-12 bg-[#FAFAFA] border-t border-gray-100">
            <div className="max-w-5xl mx-auto">
              <h3 className="font-bold mb-5">Más casos de uso</h3>
              <div className="flex flex-wrap gap-4">
                <Link href="/para/abogados" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">→ LandForge para Abogados</Link>
                <Link href="/para/ecommerce" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">→ LandForge para eCommerce</Link>
                <Link href="/para/agencias-de-marketing" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">→ Agencias de Marketing</Link>
                <Link href="/features/forgi-chatbot" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">→ Forgi Chatbot 24/7</Link>
                <Link href="/blog/como-aumentar-conversion-landing-page" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">→ Guia CRO: Aumentar la Conversión</Link>
              </div>
            </div>
          </section>

        </main>
      </div>
    </>
  );
}
