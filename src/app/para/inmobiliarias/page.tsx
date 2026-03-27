import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Landing Pages para Inmobiliarias con IA — Capta Compradores 24/7 | LandForge",
  description:
    "Genera landing pages de inmuebles para compraventa y alquiler en 30 segundos. Forgi atiende consultas sobre precio, zona y visitas las 24 horas para que no pierdas ningún lead.",
  keywords: [
    "landing page inmobiliaria ia",
    "crear landing page inmueble",
    "captacion leads inmobiliaria ia",
    "chatbot ia agencia inmobiliaria",
    "marketing digital inmobiliarias",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Puedo crear una landing page diferente para cada inmueble?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, y es precisamente la estrategia que maximiza la conversión. En lugar de enviar el tráfico de tus anuncios a la web general de la agencia, creas una landing específica para cada propiedad: 'Piso de 3 habitaciones en Chamberí desde 320.000€'. El comprador ve exactamente lo que buscaba y las probabilidades de contacto se multiplican.",
      },
    },
    {
      "@type": "Question",
      name: "¿Forgi puede filtrar entre compradores interesados y curiosos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Puedes configurar a Forgi para que haga preguntas de cualificación: ¿Busca para vivir o invertir? ¿Tiene ya la hipoteca aprobada o está empezando? ¿Cuándo quiere mudarse? Con esas respuestas, tu equipo comercial solo atiende a los prospectos que realmente tienen capacidad de compra.",
      },
    },
    {
      "@type": "Question",
      name: "¿LandForge se integra con mi CRM inmobiliario?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "LandForge exporta los leads capturados por Forgi en CSV y también dispone de webhooks para conectar con CRMs como Salesforce, HubSpot o herramientas específicas del sector inmobiliario. La integración directa nativa con CRMs específicos del sector está en el roadmap para 2026.",
      },
    },
  ],
};

export default function InmobiliariasLanding() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="min-h-screen bg-[#FAFAFA] text-[#1A1A2E] font-sans">
        <main>

          {/* ── 1. HERO ── */}
          <section className="relative px-6 pt-32 pb-20 text-center flex flex-col items-center justify-center min-h-[90vh]">
            <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at 50% 30%, rgba(157,78,221,0.06) 0%, transparent 65%)" }} />
            <p className="text-xs font-bold uppercase tracking-[2px] text-[#9D4EDD] mb-5 bg-[#F3E8FF] border border-[#E0AAFF] px-4 py-1.5 rounded-full inline-block">
              Landing Pages IA para Agencias Inmobiliarias
            </p>
            <h1 className="text-4xl md:text-6xl font-extrabold max-w-4xl tracking-tight leading-[1.05] mb-7">
              Cada inmueble, su propia landing.{" "}
              <span style={{ background: "linear-gradient(135deg, #9D4EDD, #7B2CBF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Cada lead, cualificado.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-[#6B7280] max-w-2xl leading-relaxed mb-10">
              El 80% del tráfico de portales y Google Ads llega a páginas genéricas de agencia. <strong className="text-[#1A1A2E]">Crea una landing específica por inmueble en 30 segundos</strong> y deja que Forgi atienda las consultas de precio, zona y visitas a cualquier hora.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Link href="/register" className="px-8 py-4 rounded-xl font-bold text-lg text-white transition hover:-translate-y-1" style={{ background: "linear-gradient(135deg, #9D4EDD, #7B2CBF)", boxShadow: "0 8px 24px rgba(157,78,221,0.3)" }}>
                Crear landing de mi inmueble →
              </Link>
              <Link href="#demo" className="px-8 py-4 rounded-xl border-2 border-[#E0AAFF] text-[#9D4EDD] font-bold text-lg hover:border-[#9D4EDD] transition">
                Ver demo inmobiliaria
              </Link>
            </div>
            <p className="text-sm text-[#9D4EDD]">Sin tarjeta · 14 días gratis · Publica en tu dominio</p>
            <div className="mt-12 flex flex-wrap gap-10 justify-center">
              {[["30s", "Landing por inmueble"], ["+55%", "Más leads que la web de agencia"], ["24/7", "Forgi atiende visitas"], ["0€", "Para empezar hoy"]].map(([v, l]) => (
                <div key={l} className="text-center">
                  <div className="text-3xl font-extrabold text-[#9D4EDD]">{v}</div>
                  <div className="text-sm text-[#6B7280] mt-1">{l}</div>
                </div>
              ))}
            </div>
          </section>

          {/* ── 2. DOLOR ── */}
          <section className="px-6 py-24 bg-[#1A1A2E] text-white">
            <div className="max-w-5xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6">El comprador de piso no espera. Y se va a la competencia.</h2>
              <p className="text-[#E0AAFF] text-lg max-w-2xl mx-auto">El ciclo de decisión inmobiliaria puede durar meses, pero la decisión de contactar a una agencia se toma en segundos.</p>
            </div>
            <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
              {[
                { icon: "🏚️", title: "La web de tu agencia confunde al comprador", text: "El prospecto entra desde un anuncio de 'piso en Chamberí' y llega a tu web con 120 inmuebles, filtros y un menú de navegación. Se pierde. Cierra. Se va a Idealista." },
                { icon: "🌙", title: "Las consultas de noche se pierden", text: "El 34% de las consultas inmobiliarias se producen entre las 20:00 y las 23:00. Si nadie responde sobre precio o disponibilidad, ese lead caliente se enfría en minutos." },
                { icon: "🎯", title: "No cualificas al lead antes de la visita", text: "Preparas la visita, apartas tiempo y el comprador no tiene hipoteca aprobada o el piso sale de su presupuesto. Forgi lo descubre antes de que llegues al portal." },
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
              <div style={{ borderRadius: "16px", overflow: "hidden", border: "1px solid #E0AAFF", boxShadow: "0 24px 64px rgba(157,78,221,0.14)", position: "relative", paddingBottom: "56.25%", height: 0, background: "#000" }}>
                <iframe
                  src="https://www.youtube.com/embed/MRS2BdlK8gs?autoplay=1&mute=1&loop=1&playlist=MRS2BdlK8gs&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
                  title="Demo de LandForge"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none", borderRadius: "16px" }}
                />
              </div>
            </div>
          </section>

          {/* ── 3. CÓMO FUNCIONA ── */}
          <section id="como-funciona" className="px-6 py-24 bg-white">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-extrabold">De anuncio en Google a visita agendada en el mismo día</h2>
              </div>
              <div className="flex flex-col gap-10">
                {[
                  { num: "01", title: "Describe el inmueble en 30 segundos", text: "Nombre del inmueble, precio, superficie, zona, número de habitaciones, puntos clave (terraza, garaje, reforma reciente). La IA genera la landing enfocada en ese inmueble específico.", badge: "Diseño específico por propiedad" },
                  { num: "02", title: "Landing de propiedad publicada instantáneamente", text: "Sin menú de tu web, sin 120 propiedades de distracción. Solo el piso que el comprador quiere, con galería, características clave, precio, zona en mapa y CTA de contacto directo.", badge: "Máxima tasa de conversión por inmueble" },
                  { num: "03", title: "Forgi cualifica y agenda la visita", text: "Cuando alguien llega a la landing a las 21:30, Forgi pregunta si busca para vivir o invertir, el presupuesto máximo, si ya tiene hipoteca y cuándo puede visitar. Solo los leads cualificados llegan a tu agenda.", badge: "Tu tiempo solo para cierres reales" },
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
              <h2 className="text-3xl font-extrabold text-center mb-16">Agencias inmobiliarias que venden más con LandForge</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  { text: "Creamos landings específicas para las 5 propiedades de más valor de nuestra cartera y enviamos el tráfico de Google Ads allí. Las solicitudes de visita subieron un 55% respecto a enviar el tráfico a la web de la agencia.", name: "Fernando A.", role: "Director Comercial — Inmobiliaria Arcos, Madrid", result: "→ +55% en solicitudes de visita desde campañas" },
                  { text: "Le dimos acceso a Forgi para atender consultas nocturnas y fines de semana. En el primer mes capturó 22 leads cualificados que ningún comercial hubiera podido atender. Cerramos 3 operaciones directamente de esos leads.", name: "Carmen R.", role: "Gerente — Grupo Residencial Valencia", result: "→ 22 leads cualificados sin intervención del equipo" },
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
              <h2 className="text-3xl font-extrabold text-center mb-14">Preguntas frecuentes de agencias inmobiliarias sobre LandForge</h2>
              <div className="divide-y divide-gray-100">
                {[
                  { q: "¿Puedo crear una landing diferente para cada inmueble?", a: "Sí, y es la estrategia que maximiza la conversión. Una landing específica para cada propiedad convierte mucho mejor que la web general de la agencia, porque el comprador ve exactamente lo que buscaba." },
                  { q: "¿Forgi puede filtrar compradores interesados de simple curiosos?", a: "Sí. Configuras a Forgi para que pregunte si busca para vivir o invertir, si tiene la hipoteca aprobada y cuándo quiere mudarse. Tu equipo solo atiende prospectos con capacidad real de compra." },
                  { q: "¿LandForge se integra con mi CRM inmobiliario?", a: "LandForge exporta los leads en CSV y dispone de webhooks para conectar con CRMs como Salesforce y HubSpot. La integración directa con CRMs específicos del sector está en el roadmap para 2026." },
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
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-5">Tu próxima venta empieza con una landing específica</h2>
              <p className="text-[#E0AAFF] text-lg mb-10">Crea la landing de tu propiedad estrella en 30 segundos y empieza a recibir solicitudes de visita cualificadas hoy mismo.</p>
              <Link href="/register" className="inline-block bg-white text-[#9D4EDD] font-bold text-lg px-10 py-5 rounded-2xl hover:-translate-y-1 transition shadow-xl">
                Crear mi primera landing inmobiliaria →
              </Link>
            </div>
          </section>

          <section className="px-6 py-12 bg-[#FAFAFA] border-t border-gray-100">
            <div className="max-w-5xl mx-auto">
              <h3 className="font-bold mb-5">Más sectores con LandForge</h3>
              <div className="flex flex-wrap gap-4">
                <Link href="/para/clinicas-dentales" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">→ Clínicas Dentales</Link>
                <Link href="/para/abogados" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">→ Despachos de Abogados</Link>
                <Link href="/features/forgi-chatbot" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">→ Forgi Chatbot 24/7</Link>
              </div>
            </div>
          </section>

        </main>
      </div>
    </>
  );
}
