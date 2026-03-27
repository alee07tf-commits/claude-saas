import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Diseño Web y Landing Pages para Abogados con IA | LandForge",
  description:
    "Capta más prospectos para tu despacho legal sin programar. La IA genera tu web jurídica en 30s y Forgi atiende primeras consultas legales 24/7, cualificando casos antes de tu intervención.",
  keywords: [
    "crear landing page abogados",
    "captacion clientes despacho legal",
    "marketing digital abogados ia",
    "chatbot ia abogados primeras consultas",
    "web para despacho de abogados",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Forgi puede cualificar casos legales y filtar prospectos no relevantes?",
      acceptedAnswer: { "@type": "Answer", text: "Sí. Entrenamos a Forgi con las especialidades de tu despacho (Laboral, Divorcios, Penal, etc.) para que cuando un usuario llegue a tu landing, el chatbot detecte si el caso entra dentro de tu área de práctica antes de comprometer tu tiempo en una primera consulta." },
    },
    {
      "@type": "Question",
      name: "¿La landing cumple la normativa del Consejo General de la Abogacía respecto a publicidad?",
      acceptedAnswer: { "@type": "Answer", text: "LandForge genera el contenido bajo tus indicaciones. El control del copy final es siempre tuyo. Te recomendamos adaptar el texto a las normas deontológicas de tu colegio de abogados antes de publicar, como harías con cualquier otro material publicitario." },
    },
    {
      "@type": "Question",
      name: "¿Puedo tener landing pages distintas para cada área de práctica?",
      acceptedAnswer: { "@type": "Answer", text: "Sí, y es la estrategia que más impacto tiene en conversión. Una landing para 'Abogado de Divorcios Madrid' y otra para 'Abogado Laboral Barcelona' atraen tráfico mucho más cualificado que una web corporativa genérica." },
    },
  ],
};

export default function AbogadosLanding() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="min-h-screen bg-[#FAFAFA] text-[#1A1A2E] font-sans">
        <main>

          {/* ── 1. HERO ── */}
          <section className="relative px-6 pt-32 pb-20 text-center flex flex-col items-center justify-center min-h-[90vh]">
            <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at 50% 30%, rgba(157,78,221,0.06) 0%, transparent 65%)" }} />

            <p className="text-xs font-bold uppercase tracking-[2px] text-[#9D4EDD] mb-5 bg-[#F3E8FF] border border-[#E0AAFF] px-4 py-1.5 rounded-full inline-block">
              Plataforma de Captación Legal para Despachos de Abogados
            </p>

            <h1 className="text-4xl md:text-6xl font-extrabold max-w-4xl tracking-tight leading-[1.05] mb-7">
              Tu despacho de abogados captando nuevos casos.{" "}
              <span style={{ background: "linear-gradient(135deg, #9D4EDD, #7B2CBF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Mientras duermes.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-[#6B7280] max-w-2xl leading-relaxed mb-10">
              Dile a LandForge tu área de práctica jurídica: Laboral, Divorcios, Penal, Mercantil. <strong className="text-[#1A1A2E]">En 30 segundos la IA crea una landing sobria, profesional y diseñada para generar confianza</strong>, con Forgi cualificando casos nuevos las 24 horas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Link href="/register" className="px-8 py-4 rounded-xl font-bold text-lg text-white transition hover:-translate-y-1" style={{ background: "linear-gradient(135deg, #9D4EDD, #7B2CBF)", boxShadow: "0 8px 24px rgba(157,78,221,0.3)" }}>
                Generar web para mi Despacho →
              </Link>
              <Link href="#demo" className="px-8 py-4 rounded-xl border-2 border-[#E0AAFF] text-[#9D4EDD] font-bold text-lg hover:border-[#9D4EDD] transition">
                Ver demo de despacho
              </Link>
            </div>
            <p className="text-sm text-[#9D4EDD]">Sin tarjeta · 14 días gratis · Cumple normativa RGPD</p>
          </section>

          {/* ── 2. DOLOR ── */}
          <section className="px-6 py-24 bg-[#1A1A2E] text-white">
            <div className="max-w-5xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6">El prospecto legal no espera. Y tú tampoco puedes atenderlo siempre.</h2>
              <p className="text-[#E0AAFF] text-lg max-w-2xl mx-auto">El 60% de los usuarios que buscan "abogado de divorcios Madrid" o "abogado laboral Barcelona" contact al primer despacho que les responde. No al mejor. Al más rápido.</p>
            </div>
            <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
              {[
                { icon: "📞", title: "Llamadas perdidas fuera de horario", text: "La urgencia de un despido improcedente o una separación no entiende de horarios de oficina. Si no tienes un canal de respuesta automático, ese caso va al despacho de la competencia que sí lo tiene." },
                { icon: "🌐", title: "Una web corporativa que no convierte", text: "Una web de 15 páginas con 'Áreas de Práctica', 'Nuestro Equipo' y 'Contacto' no vende servicios jurídicos. El prospecto quiere saber si puedes ayudarle en su problema específico, hoy, y de forma directa." },
                { icon: "⏳", title: "Primeras consultas que no se convierten en clientes", text: "Atiendes consultas gratuitas durante 1 hora y la mitad de los casos no son tu especialidad o el cliente no puede pagarte. Forgi filtra antes de que inviertas tu tiempo." },
              ].map((item) => (
                <div key={item.title} className="bg-white/5 border border-white/10 rounded-2xl p-8">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="font-bold text-lg mb-3">{item.title}</h3>
                  <p className="text-white/60 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── DEMO VIDEO ── */}
          <section id="demo" className="px-6 py-24 bg-[#FAFAFA]">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#9D4EDD] bg-[#F3E8FF] px-4 py-1.5 rounded-full border border-[#E0AAFF] mb-4">Demo</span>
                <h2 className="text-3xl font-extrabold">Mira cómo funciona LandForge</h2>
              </div>
              <div style={{ borderRadius: "16px", overflow: "hidden", border: "1px solid #E0AAFF", boxShadow: "0 24px 64px rgba(157,78,221,0.14)" }}>
                <video src="/demo-landforge.mp4" autoPlay muted loop playsInline disablePictureInPicture controlsList="nodownload nofullscreen noremoteplayback" style={{ width: "100%", height: "auto", display: "block", borderRadius: "16px", pointerEvents: "none" }} />
              </div>
            </div>
          </section>

          {/* ── 3. CÓMO FUNCIONA ── */}
          <section id="como-funciona" className="px-6 py-24 bg-white">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#9D4EDD] bg-[#F3E8FF] px-4 py-1.5 rounded-full border border-[#E0AAFF] mb-4">Tu nuevo modelo de captación legal</span>
                <h2 className="text-3xl md:text-4xl font-extrabold">De búsqueda legal en Google a expediente abierto en tu despacho</h2>
              </div>
              <div className="flex flex-col gap-10">
                {[
                  { num: "01", title: "Describe tu área jurídica y zona geográfica", text: "Cuéntale a LandForge en qué especializas tu práctica: Derecho Laboral en Madrid, Divorcios en Barcelona, Derecho Penal en Valencia. La IA adapta el tono y el copy al tipo de prospecto que busca ese servicio.", badge: "Copy jurídico orientado a generar confianza" },
                  { num: "02", title: "Landing sobria y de alta autoridad en 30 segundos", text: "El sector jurídico requiere un diseño que transmita confianza, profesionalidad y solidez. La IA construye una estructura que posiciona a tu despacho como autoridad: credenciales, área de práctica, proceso de trabajo y testimonios de clientes.", badge: "Diseño que transmite autoridad jurídica" },
                  { num: "03", title: "Forgi recibe y cualifica los prospectos", text: "Forgi pregunta al prospecto sobre su situación: ¿Qué tipo de problema tiene? ¿Cuánto tiempo lleva con el conflicto? Si el caso es de tu especialidad, facilita el contacto directo. Si no lo es, lo dirige amablemente a otro recurso.", badge: "Solo llegas a los casos que valen la pena" },
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
              <h2 className="text-3xl font-extrabold text-center mb-16">Usuarios del sector legal que han probado LandForge</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  { text: "Tenía una web de empresa genérica que no aparecía en Google. Creé una landing específica para 'abogado de divorcios en Sevilla' con LandForge y en 6 semanas empecé a recibir consultas orgánicas desde Google.", name: "Jorge M.", role: "Abogado independiente, Sevilla", result: "→ Primeras consultas orgánicas en 6 semanas" },
                  { text: "El mayor beneficio es que Forgi descarta los casos que no son mi especialidad sin que yo tenga que hacer una llamada. Solo me llegan casos de derecho laboral que además pueden permitirse mis honorarios.", name: "Patricia L.", role: "Abogada laboralista, Madrid", result: "→ 60% menos de llamadas no cualificadas" },
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
              <h2 className="text-3xl font-extrabold text-center mb-14">Preguntas frecuentes de despachos de abogados sobre LandForge</h2>
              <div className="divide-y divide-gray-100">
                {[
                  { q: "¿Forgi puede cualificar casos legales y filtrar prospectos no relevantes?", a: "Sí. Entrenamos a Forgi con las especialidades de tu despacho para que detecte si el caso entra dentro de tu área de práctica antes de comprometer tu tiempo en una primera consulta." },
                  { q: "¿La landing cumple la normativa del Consejo General de la Abogacía?", a: "LandForge genera el contenido bajo tus indicaciones. El control del copy final es siempre tuyo. Te recomendamos adaptar el texto a las normas deontológicas de tu colegio antes de publicar." },
                  { q: "¿Puedo tener landing pages distintas para cada área de práctica?", a: "Sí, y es la estrategia que más impacto tiene en conversión. Una landing para 'Abogado de Divorcios Madrid' y otra para 'Abogado Laboral Barcelona' atraen tráfico mucho más cualificado." },
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
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-5">Tu próximo cliente está buscando un abogado en Google ahora mismo</h2>
              <p className="text-[#E0AAFF] text-lg mb-10">¿Le va a encontrar tu landing o la de la competencia? Crea la tuya en 30 segundos y empieza a recibir consultas cualificadas esta semana.</p>
              <Link href="/register" className="inline-block bg-white text-[#9D4EDD] font-bold text-lg px-10 py-5 rounded-2xl hover:-translate-y-1 transition shadow-xl">
                Crear mi web de captación legal →
              </Link>
            </div>
          </section>

          {/* Enlazado interno */}
          <section className="px-6 py-12 bg-[#FAFAFA] border-t border-gray-100">
            <div className="max-w-5xl mx-auto">
              <h3 className="font-bold mb-5">Más sectores con LandForge</h3>
              <div className="flex flex-wrap gap-4">
                <Link href="/para/clinicas-dentales" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">→ Clínicas Dentales</Link>
                <Link href="/para/agencias-de-marketing" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">→ Agencias de Marketing</Link>
                <Link href="/comparar/landforge-vs-webflow" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">→ LandForge vs Webflow</Link>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
