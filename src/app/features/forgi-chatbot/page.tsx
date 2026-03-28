import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Forgi Chatbot: Ventas IA 24/7 en tu Web",
  description:
    "Forgi es el chatbot de ventas con IA que atiende, cualifica y convierte visitantes de tu landing 24/7. Se configura en 30 segundos. Sin código.",
  keywords: [
    "chatbot ventas ia web",
    "chatbot ia landing page",
    "asistente ventas automatico ia",
    "chatbot conversion landing page",
    "forgi chatbot landforge",
  ],
  alternates: {
    canonical: "https://landforge.digital/features/forgi-chatbot",
  },
  openGraph: {
    title: "Forgi Chatbot: Ventas IA 24/7 en tu Web",
    description:
      "Forgi es el chatbot de ventas con IA que atiende, cualifica y convierte visitantes de tu landing 24/7. Se configura en 30 segundos. Sin código.",
    url: "https://landforge.digital/features/forgi-chatbot",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Forgi necesita configuración manual o entrenamiento específico?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Forgi lee automáticamente el contenido de tu landing page al crearla y absorbe toda la información del negocio: servicios, precios, horarios, zona de actuación y FAQs. En menos de 30 segundos está listo para atender a tus visitantes sin que tengas que escribir ni una sola respuesta manualmente.",
      },
    },
    {
      "@type": "Question",
      name: "¿En qué idioma responde Forgi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Forgi detecta automáticamente el idioma del usuario y responde en consecuencia. Soporta español, inglés, francés, italiano, portugués y alemán de forma nativa, sin configuración adicional.",
      },
    },
    {
      "@type": "Question",
      name: "¿Puedo personalizar el tono y el avatar de Forgi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. En el panel de LandForge puedes cambiar el nombre del asistente, su avatar, el mensaje de bienvenida y el tono de comunicación (formal, cercano, técnico). Así Forgi encaja perfectamente con la identidad de marca de tu cliente o de tu propio negocio.",
      },
    },
    {
      "@type": "Question",
      name: "¿Dónde se guardan las conversaciones que tiene Forgi con los visitantes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Todas las conversaciones se guardan en tu panel de LandForge y puedes exportarlas en CSV. Cada lead captado por Forgi queda registrado con nombre, email y resumen de la conversación para que tu equipo de ventas pueda dar seguimiento.",
      },
    },
  ],
};

const softwareFeatureSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Forgi Chatbot — LandForge",
  applicationCategory: "BusinessApplication",
  description: "Chatbot de ventas con IA integrado en landing pages. Atiende, cualifica y convierte visitantes 24/7 sin configuración manual.",
  featureList: [
    "Entrenamiento automático con el contenido de la landing",
    "Cualificación de leads en tiempo real",
    "Soporte multiidioma nativo",
    "Historial de conversaciones exportable",
    "Personalización de nombre, avatar y tono",
  ],
  offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
};

export default function ForgiChatbotPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareFeatureSchema) }} />

      <div className="min-h-screen bg-[#FAFAFA] text-[#1A1A2E] font-sans">
        <main>

          {/* ── 1. HERO ── */}
          <section className="relative px-6 pt-32 pb-20 text-center flex flex-col items-center justify-center min-h-[90vh]">
            <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at 50% 30%, rgba(157,78,221,0.07) 0%, transparent 65%)" }} />

            <p className="text-xs font-bold uppercase tracking-[2px] text-[#9D4EDD] mb-5 bg-[#F3E8FF] border border-[#E0AAFF] px-4 py-1.5 rounded-full inline-block">
              Feature — Forgi Chatbot IA
            </p>

            <h1 className="text-4xl md:text-6xl font-extrabold max-w-4xl tracking-tight leading-[1.05] mb-7">
              Chatbot de Ventas IA que nunca duerme.{" "}
              <span style={{ background: "linear-gradient(135deg, #9D4EDD, #7B2CBF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                70% menos de leads perdidos.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-[#6B7280] max-w-2xl leading-relaxed mb-10">
              El 73% de los visitantes de una landing page abandona sin contactar porque tiene una duda sin resolver. <strong className="text-[#1A1A2E]">Forgi se activa automáticamente, responde esa duda y convierte al visitante en lead cualificado</strong> — a las 3am si hace falta.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Link href="/register" className="px-8 py-4 rounded-xl font-bold text-lg text-white transition hover:-translate-y-1" style={{ background: "linear-gradient(135deg, #9D4EDD, #7B2CBF)", boxShadow: "0 8px 24px rgba(157,78,221,0.3)" }}>
                Probar Forgi gratis →
              </Link>
              <Link href="#como-funciona" className="px-8 py-4 rounded-xl border-2 border-[#E0AAFF] text-[#9D4EDD] font-bold text-lg hover:border-[#9D4EDD] transition">
                Cómo funciona
              </Link>
            </div>
            <p className="text-sm text-[#9D4EDD]">Sin tarjeta · 14 días gratis · Se configura solo en 30 segundos</p>

            <div className="mt-12 flex flex-wrap gap-10 justify-center">
              {[["70%", "Reducción de leads perdidos"], ["30s", "Tiempo de configuración"], ["24/7", "Atención sin descanso"], ["+35%", "Media de mejora en conversión"]].map(([v, l]) => (
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
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#9D4EDD] bg-[#F3E8FF] px-4 py-1.5 rounded-full border border-[#E0AAFF] mb-4">Forgi en acción</span>
                <h2 className="text-3xl md:text-4xl font-extrabold">Así convierte Forgi un visitante en cliente</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Demo mock */}
                <div className="bg-[#1A1A2E] rounded-2xl p-6 shadow-2xl">
                  <div className="flex items-center gap-2 mb-5">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <span className="text-white/40 text-xs ml-3 font-mono">landforge.app/mi-cliente</span>
                  </div>
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#9D4EDD] to-[#7B2CBF] flex-shrink-0 flex items-center justify-center text-white text-xs font-bold">F</div>
                      <div className="bg-white/10 rounded-xl rounded-tl-none p-3 text-white text-sm max-w-xs">
                        👋 ¡Hola! Soy Forgi. ¿Tienes alguna pregunta sobre nuestras clínicas o tratamientos?
                      </div>
                    </div>
                    <div className="flex gap-3 flex-row-reverse">
                      <div className="w-8 h-8 rounded-full bg-gray-600 flex-shrink-0 flex items-center justify-center text-white text-xs">U</div>
                      <div className="bg-[#9D4EDD]/30 rounded-xl rounded-tr-none p-3 text-white text-sm max-w-xs">
                        ¿Cuánto cuesta un Invisalign?
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#9D4EDD] to-[#7B2CBF] flex-shrink-0 flex items-center justify-center text-white text-xs font-bold">F</div>
                      <div className="bg-white/10 rounded-xl rounded-tl-none p-3 text-white text-sm max-w-xs">
                        💜 El precio del Invisalign en nuestra clínica depende del caso. Los tratamientos parciales arrancan desde 1.800€. ¿Quieres que te reserve una valoración gratuita esta semana?
                      </div>
                    </div>
                    <div className="flex gap-3 flex-row-reverse">
                      <div className="w-8 h-8 rounded-full bg-gray-600 flex-shrink-0 flex items-center justify-center text-white text-xs">U</div>
                      <div className="bg-[#9D4EDD]/30 rounded-xl rounded-tr-none p-3 text-white text-sm max-w-xs">
                        Sí, me interesa el jueves por la tarde
                      </div>
                    </div>
                    <div className="bg-green-500/20 border border-green-500/30 rounded-xl p-3 text-green-400 text-xs font-semibold text-center">
                      ✅ Lead cualificado capturado automáticamente
                    </div>
                  </div>
                </div>

                {/* Features list */}
                <div className="space-y-6">
                  {[
                    { icon: "🧠", title: "Se entrena solo con tu landing", text: "Lee el contenido de tu página y absorbe toda la información del negocio: precios, servicios, horarios, zona de actuación. Sin que escribas ni una sola respuesta." },
                    { icon: "⏱️", title: "Detecta visitantes indecisos", text: "Cuando un usuario lleva 45 segundos mirando sin hacer clic, Forgi se activa proactivamente y ofrece ayuda. No espera a que el usuario abandone." },
                    { icon: "📋", title: "Cualifica y agenda citas", text: "Forgi pregunta, filtra y recoge los datos del prospecto. El lead llega a tu CRM con nombre, email, interés concreto y disponibilidad horaria." },
                    { icon: "🌍", title: "Multiidioma automático", text: "Detecta el idioma del visitante y responde en su lengua sin configuración adicional. Español, inglés, francés, portugués y más." },
                  ].map((f) => (
                    <div key={f.title} className="flex gap-4">
                      <div className="text-3xl flex-shrink-0">{f.icon}</div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">{f.title}</h3>
                        <p className="text-[#6B7280] leading-relaxed text-sm">{f.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ── 3. CASOS DE USO POR SECTOR ── */}
          <section className="px-6 py-24 bg-[#1A1A2E] text-white">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Forgi se adapta a cualquier sector</h2>
                <p className="text-[#E0AAFF]">Un Forgi diferente en cada landing, entrenado con los datos específicos de cada negocio.</p>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { sector: "🦷 Clínicas Dentales", use: "Responde sobre precios de Invisalign, horarios de urgencias y seguros médicos. Agenda valoraciones gratuitas automáticamente.", link: "/para/clinicas-dentales" },
                  { sector: "⚖️ Despachos de Abogados", use: "Cualifica casos legales según especialidad jurídica antes de que el abogado invierta tiempo en una primera consulta.", link: "/para/abogados" },
                  { sector: "🛒 eCommerce", use: "Responde sobre plazos de envío, política de devoluciones y disponibilidad de tallas, reduciendo el abandono de carrito.", link: "/para/ecommerce" },
                  { sector: "🏠 Agencias Inmobiliarias", use: "Filtra compradores de inversores, responde sobre zonas y precios, y agenda visitas a los inmuebles disponibles.", link: "/para/inmobiliarias" },
                  { sector: "📣 Agencias de Marketing", use: "Cualifica el presupuesto y tipo de servicio del prospecto antes de que el account manager dedique tiempo a una propuesta.", link: "/para/agencias-de-marketing" },
                  { sector: "🎓 Coaches y Formadores", use: "Explica el programa, filtra si el prospecto es el perfil correcto y gestiona las inscripciones a llamadas de descubrimiento.", link: "/para/coaches" },
                ].map((c) => (
                  <Link key={c.sector} href={c.link} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#9D4EDD]/50 hover:bg-white/10 transition group">
                    <div className="text-2xl mb-3">{c.sector.split(" ")[0]}</div>
                    <h3 className="font-bold mb-2 text-sm">{c.sector.substring(c.sector.indexOf(" ") + 1)}</h3>
                    <p className="text-white/60 text-xs leading-relaxed">{c.use}</p>
                    <span className="inline-block mt-3 text-[#E0AAFF] text-xs group-hover:text-white transition">Ver caso de uso →</span>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* ── 4. SOCIAL PROOF ── */}
          <section className="px-6 py-24 bg-[#F3E8FF]">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-extrabold text-center mb-16">Usuarios que han probado Forgi Chatbot en sus negocios</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  { text: "Antes de Forgi, perdíamos el 60% de las consultas nocturnas porque nadie respondía. Ahora Forgi atiende a las 2 de la mañana, cualifica si el caso es urgente o no, y recoge sus datos. Por la mañana tenemos 5-6 leads cualificados esperando.", name: "Marcos F.", role: "Director de clínica, Madrid", result: "→ De 0 a 5-6 leads nocturnos cualificados/día" },
                  { text: "Lo que más me sorprendió es que no tuve que configurar absolutamente nada. Creé la landing de mi negocio, Forgi leyó el contenido y al 4to día ya estaba cualificando prospectos con las preguntas exactas que yo mismo les haría.", name: "Sandra M.", role: "Consultora de marketing, Barcelona", result: "→ Configurado en 0 minutos. Operativo en 30 segundos" },
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
              <h2 className="text-3xl font-extrabold text-center mb-14">Preguntas frecuentes sobre Forgi Chatbot</h2>
              <div className="divide-y divide-gray-100">
                {[
                  { q: "¿Forgi necesita configuración manual o entrenamiento específico?", a: "No. Forgi lee automáticamente el contenido de tu landing page al crearla y absorbe toda la información del negocio: servicios, precios, horarios y FAQs. En 30 segundos está listo." },
                  { q: "¿En qué idioma responde Forgi?", a: "Forgi detecta automáticamente el idioma del usuario y responde en consecuencia. Soporta español, inglés, francés, italiano, portugués y alemán de forma nativa." },
                  { q: "¿Puedo personalizar el tono y el avatar de Forgi?", a: "Sí. Puedes cambiar el nombre, avatar, mensaje de bienvenida y tono de comunicación (formal, cercano, técnico) para que encaje con tu identidad de marca." },
                  { q: "¿Dónde se guardan las conversaciones?", a: "Todas las conversaciones se guardan en tu panel de LandForge y puedes exportarlas en CSV. Cada lead queda registrado con nombre, email y resumen de la conversación." },
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
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-5">Tu landing, vendiendo mientras duermes</h2>
              <p className="text-[#E0AAFF] text-lg mb-10">Activa Forgi hoy y deja de perder el 73% de leads por falta de respuesta inmediata. Tu primer chatbot de ventas en 30 segundos.</p>
              <Link href="/register" className="inline-block bg-white text-[#9D4EDD] font-bold text-lg px-10 py-5 rounded-2xl hover:-translate-y-1 transition shadow-xl">
                Activar Forgi gratis →
              </Link>
            </div>
          </section>

          {/* Enlazado interno */}
          <section className="px-6 py-12 bg-[#FAFAFA] border-t border-gray-100">
            <div className="max-w-5xl mx-auto">
              <h3 className="font-bold mb-5">Más funcionalidades de LandForge</h3>
              <div className="flex flex-wrap gap-4">
                <Link href="/features/forgi-editor" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">→ Forgi Editor: Edita con IA</Link>
                <Link href="/para/agencias-de-marketing" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">→ LandForge para Agencias</Link>
                <Link href="/comparar/landforge-vs-webflow" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">→ LandForge vs Webflow</Link>
              </div>
            </div>
          </section>

        </main>
      </div>
    </>
  );
}
