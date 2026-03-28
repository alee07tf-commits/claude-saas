import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Chatbot de Ventas IA para tu Web (2026)",
  description:
    "Descubre cómo un chatbot de ventas con IA atiende, cualifica y convierte visitantes de tu web 24/7. Con casos reales y cómo activarlo en 30s.",
  keywords: [
    "chatbot ventas web ia",
    "chatbot ia landing page",
    "asistente ventas automatico web",
    "como poner chatbot ia web",
    "chatbot conversion leads ia 2026",
  ],
  alternates: {
    canonical: "https://landforge.digital/blog/chatbot-ventas-para-web",
  },
  openGraph: {
    title: "Chatbot de Ventas IA para tu Web (2026)",
    description:
      "Descubre cómo un chatbot de ventas con IA atiende, cualifica y convierte visitantes de tu web 24/7. Con casos reales y cómo activarlo en 30s.",
    url: "https://landforge.digital/blog/chatbot-ventas-para-web",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Chatbot de Ventas para tu Web con IA: Guía Completa 2026",
  description: "Cómo implementar un chatbot de ventas con IA en tu landing page para atender, cualificar y convertir leads las 24 horas.",
  author: { "@type": "Person", name: "Alejandro Bethencourt", url: "https://landforge.digital/sobre-nosotros", jobTitle: "Fundador de LandForge", sameAs: "https://www.linkedin.com/in/alejandro-bethencourt-rodr%C3%ADguez/" },
  datePublished: "2026-03-01",
  dateModified: "2026-03-25",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Qué diferencia hay entre un chatbot de ventas con IA y un chatbot de soporte normal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Un chatbot de soporte responde preguntas predefinidas con scripts estáticos. Un chatbot de ventas con IA comprende el contexto de la conversación, adapta las respuestas al perfil del visitante, hace preguntas de cualificación, detecta la intención de compra y guía activamente al usuario hacia la conversión. La diferencia en tasa de conversión puede ser de hasta 5x.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto cuesta implementar un chatbot de ventas con IA en una landing page?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Las soluciones como Drift, Intercom o Tidio pueden costar entre 50$ y 500$/mes, más el tiempo de configuración y entrenamiento. LandForge incluye Forgi, su chatbot de ventas IA, en todos los planes de forma nativa. Al crear tu landing, Forgi se entrena automáticamente con tu contenido en 30 segundos y empieza a cualificar leads desde el primer día.",
      },
    },
    {
      "@type": "Question",
      name: "¿En qué momento del proceso de compra debe activarse el chatbot de ventas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El momento óptimo depende del tipo de negocio. Para servicios de alto valor (coaching, inmobiliaria, consultoría), el chatbot debe activarse cuando el usuario lleva 30-60 segundos en la página, señal de interés real. Para eCommerce, debe activarse cuando el usuario navega a la página de producto o cuando añade al carrito sin comprar. LandForge Forgi está preconfigurado para detectar estos momentos automáticamente.",
      },
    },
  ],
};

export default function ChatbotVentasArticle() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="min-h-screen bg-[#FAFAFA] text-[#1A1A2E] font-sans">
        <main>
          <article className="max-w-3xl mx-auto px-6 pt-32 pb-20">

            <div className="mb-8">
              <p className="text-xs font-bold uppercase tracking-[2px] text-[#9D4EDD] mb-4">Guía SEO · TOFU · LandForge Blog</p>
              <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-6">
                Chatbot de ventas para tu web con IA: La guía definitiva 2026
              </h1>
              <p className="text-[#6B7280] text-lg leading-relaxed">
                El 73% de los visitantes de una web abandona sin contactar porque no recibe respuesta inmediata a su duda principal. Un chatbot de ventas con IA es la única solución que opera las 24 horas sin coste de personal adicional. Esta guía te explica cómo funciona, cuáles son los mejores para landing pages y cómo activarlo en 30 segundos.
              </p>
              <div className="mt-4 flex gap-4 text-sm text-[#6B7280]">
                <span>📅 Marzo 2026</span>
                <span>⏱️ 7 min de lectura</span>
                <Link href="/sobre-nosotros" className="hover:underline">✍️ Alejandro Bethencourt</Link> <span className="text-[#6B7280]">— Fundador de LandForge</span>
              </div>
            </div>

            <hr className="border-[#E0AAFF] my-10" />

            {/* ÍNDICE */}
            <div className="bg-[#F3E8FF] border border-[#E0AAFF] rounded-2xl p-6 mb-10">
              <p className="font-bold text-sm mb-3 uppercase tracking-wider text-[#9D4EDD]">En este artículo</p>
              <ol className="space-y-1.5 text-sm">
                {[
                  { label: "Por qué el 73% de tus visitantes se van sin contactar", anchor: "#problema" },
                  { label: "Qué es un chatbot de ventas con IA (vs chatbot de soporte)", anchor: "#que-es" },
                  { label: "Cuándo y cómo activar el chatbot para máxima conversión", anchor: "#cuando" },
                  { label: "Los mejores chatbots de ventas para landing pages en 2026", anchor: "#mejores" },
                  { label: "Cómo activar Forgi en tu landing en 30 segundos", anchor: "#forgi" },
                ].map((item, i) => (
                  <li key={item.anchor}>
                    <a href={item.anchor} className="inline-flex gap-2 hover:text-[#9D4EDD] transition-colors">
                      <span className="text-[#9D4EDD] font-bold">{i + 1}.</span>{item.label}
                    </a>
                  </li>
                ))}
              </ol>
            </div>

            {/* SECCIÓN 1 */}
            <section id="problema">
              <h2 className="text-2xl font-extrabold mb-4">1. Por qué el 73% de tus visitantes se van sin contactar</h2>
              <p className="text-[#6B7280] leading-relaxed mb-4">Imagina que tienes una tienda física con 100 personas que entran cada día. 73 de ellas entran, miran y se van sin comprar nada ni hablar con nadie. ¿Cuál sería tu reacción? Probablemente pondrías a un vendedor en la puerta para dar la bienvenida y resolver dudas.</p>
              <p className="text-[#6B7280] leading-relaxed mb-4">En tu landing page pasa exactamente lo mismo, solo que sin ese vendedor. El visitante llega buscando algo concreto, tiene una duda que no encuentra respondida en la página y se va. El chatbot de ventas con IA es ese vendedor que nunca duerme.</p>

              <div className="bg-[#1A1A2E] text-white rounded-2xl p-6 mb-6">
                <p className="font-bold text-[#E0AAFF] text-sm mb-3">Los datos que nadie quiere ver:</p>
                <div className="grid grid-cols-2 gap-4">
                  {[["73%", "Abandonan sin contactar"], ["5 min", "Ventana para convertir al lead caliente"], ["100x", "Más probable cerrar si respondes en 1 min vs 1 hora"], ["0€", "Coste adicional de Forgi en LandForge"]].map(([v, l]) => (
                    <div key={l}>
                      <div className="text-2xl font-extrabold text-[#9D4EDD]">{v}</div>
                      <div className="text-white/60 text-xs mt-1">{l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* SECCIÓN 2 */}
            <section id="que-es" className="mt-12">
              <h2 className="text-2xl font-extrabold mb-4">2. Qué es un chatbot de ventas con IA (y por qué no es lo mismo que un chatbot de soporte)</h2>
              <div className="overflow-x-auto rounded-2xl border border-[#E0AAFF] mb-6">
                <table className="w-full text-sm">
                  <thead className="bg-[#FAF5FF] border-b border-[#E0AAFF]">
                    <tr>
                      <th className="p-4 text-left font-bold text-[#6B7280]">Aspecto</th>
                      <th className="p-4 text-left font-bold text-red-500">Chatbot de Soporte Clásico</th>
                      <th className="p-4 text-left font-bold text-[#9D4EDD]">Chatbot de Ventas con IA</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {[
                      ["Cómo funciona", "Árbol de decisión fijo (si → entonces)", "IA que comprende contexto y adapta respuestas"],
                      ["Objetivo", "Resolver dudas post-compra", "Convertir visitantes en leads cualificados"],
                      ["Entrenamiento", "Manual: escribes cada respuesta", "Automático: lee tu landing page y negocio"],
                      ["Cualificación de leads", "No (solo responde)", "Sí: hace preguntas de cualificación activamente"],
                      ["Tasa de conversión", "Igual o peor que sin chatbot", "Mejora media del 35%"],
                    ].map(([a, b, c]) => (
                      <tr key={a}>
                        <td className="p-4 font-semibold">{a}</td>
                        <td className="p-4 text-[#6B7280]">{b}</td>
                        <td className="p-4 text-[#6B7280]">{c}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECCIÓN 3 */}
            <section id="cuando" className="mt-12">
              <h2 className="text-2xl font-extrabold mb-4">3. Cuándo y cómo activar el chatbot para máxima conversión</h2>
              <p className="text-[#6B7280] leading-relaxed mb-4">El momento de activación del chatbot es crítico. Un chatbot que interrumpe demasiado pronto molesta. Uno que espera demasiado no ayuda. La regla del Master en conversión es:</p>
              <div className="space-y-4 mb-6">
                {[
                  { trigger: "🕐 30-45 segundos en la página", explain: "Señal de interés real. El visitante está leyendo, no ha rebotado. El chatbot aparece con un saludo no intrusivo: '¿Hay algo en lo que te pueda ayudar?'" },
                  { trigger: "📜 Scroll al 60% de la página", explain: "Ha leído el contenido principal. Probablemente tiene dudas sobre precio, proceso o comparativa con la competencia. Momento perfecto para ofrecer ayuda proactiva." },
                  { trigger: "🚪 Intención de salida (exit intent)", explain: "El cursor se mueve hacia la barra de dirección o el botón de cierre. Última oportunidad: 'Antes de irte, ¿puedo resolver alguna duda rápida sobre el precio?'" },
                ].map((t) => (
                  <div key={t.trigger} className="bg-[#F3E8FF] border border-[#E0AAFF] rounded-xl p-5">
                    <div className="font-bold mb-2">{t.trigger}</div>
                    <p className="text-[#6B7280] text-sm leading-relaxed">{t.explain}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* SECCIÓN 4 */}
            <section id="mejores" className="mt-12">
              <h2 className="text-2xl font-extrabold mb-6">4. Los mejores chatbots de ventas para landing pages en 2026</h2>
              <div className="space-y-4">
                {[
                  { rank: "01", name: "Forgi — LandForge", price: "Incluido en todos los planes (0€ extra)", desc: "El único chatbot entrenado automáticamente con el contenido de tu landing page en 30 segundos. Sin configuración. Sin scripts. Incluye cualificación de leads, multiidioma y exportación de conversaciones.", best: "El mejor para landing pages por tasa de conversión y velocidad de activación", highlight: true },
                  { rank: "02", name: "Drift", price: "Desde 2.500$/año (plan Essentials)", desc: "El referente del sector para empresas B2B de alto ticket. Muy potente en integración con CRMs como Salesforce, pero precio prohibitivo para pymes y agencias. Configuración compleja.", best: "Para empresas enterprise con CRM Salesforce", highlight: false },
                  { rank: "03", name: "Tidio", price: "Desde 29$/mes", desc: "Buena alternativa económica con chatbot básico de IA. Fácil de instalar en cualquier web. Limitaciones en cualificación de leads y en el entrenamiento automático con el contenido del negocio.", best: "Para webs de eCommerce con presupuesto ajustado", highlight: false },
                ].map((item) => (
                  <div key={item.name} className={`rounded-2xl border p-6 ${item.highlight ? "border-[#9D4EDD] bg-[#FAF5FF]" : "border-gray-200 bg-white"}`}>
                    <div className="flex items-start justify-between flex-wrap gap-2 mb-3">
                      <div className="flex items-center gap-3">
                        <span className="font-mono font-bold text-xl text-[#9D4EDD]">{item.rank}</span>
                        <h3 className="font-extrabold">{item.name}</h3>
                        {item.highlight && <span className="text-xs bg-[#9D4EDD] text-white px-2 py-0.5 rounded-full">⭐ Mejor opción</span>}
                      </div>
                      <span className="text-sm font-bold text-[#9D4EDD]">{item.price}</span>
                    </div>
                    <p className="text-[#6B7280] text-sm leading-relaxed mb-2">{item.desc}</p>
                    <p className="text-xs font-semibold text-[#9D4EDD]">✓ {item.best}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* SECCIÓN 5 — CTA NATIVO */}
            <section id="forgi" className="mt-14 rounded-2xl p-8" style={{ background: "linear-gradient(135deg, #9D4EDD 0%, #4C0099 100%)" }}>
              <h2 className="text-2xl font-extrabold text-white mb-4">5. Cómo activar Forgi en tu landing en 30 segundos</h2>
              <ol className="space-y-3 text-[#E0AAFF] text-sm mb-6">
                <li className="flex gap-3"><span className="font-bold text-white flex-shrink-0">1.</span>Crea tu cuenta gratuita en LandForge</li>
                <li className="flex gap-3"><span className="font-bold text-white flex-shrink-0">2.</span>Describe tu negocio con la encuesta inteligente (5 minutos)</li>
                <li className="flex gap-3"><span className="font-bold text-white flex-shrink-0">3.</span>LandForge genera tu landing + activa Forgi automáticamente entrenado con tu contenido</li>
                <li className="flex gap-3"><span className="font-bold text-white flex-shrink-0">4.</span>Publica y empieza a recibir leads cualificados desde el primer día</li>
              </ol>
              <Link href="/register" className="inline-block bg-white text-[#9D4EDD] font-bold text-lg px-8 py-4 rounded-2xl hover:-translate-y-1 transition shadow-xl">
                Activar Forgi gratis →
              </Link>
            </section>

            {/* FAQ visible */}
            <section className="mt-14">
              <h2 className="text-2xl font-extrabold mb-8">Preguntas frecuentes sobre chatbots de ventas con IA</h2>
              <div className="divide-y divide-gray-100">
                {[
                  { q: "¿Qué diferencia hay entre un chatbot de ventas con IA y uno de soporte normal?", a: "Un chatbot de soporte usa scripts estáticos. Un chatbot de ventas con IA comprende contexto, adapta respuestas, hace preguntas de cualificación y guía activamente al usuario hacia la conversión. La diferencia en tasa de conversión puede ser de hasta 5x." },
                  { q: "¿Cuánto cuesta implementar un chatbot de ventas IA?", a: "Drift y similares cuestan entre 50$ y 500$/mes más configuración. LandForge incluye Forgi en todos los planes de forma nativa, entrenado automáticamente en 30 segundos." },
                  { q: "¿Cuándo debe activarse el chatbot de ventas?", a: "Para servicios de alto valor: a los 30-60 segundos de estar en la página. Para eCommerce: al navegar a producto o al añadir al carrito sin comprar. Forgi detecta estos momentos automáticamente." },
                ].map((faq) => (
                  <details key={faq.q} className="group py-5">
                    <summary className="flex justify-between items-center cursor-pointer list-none font-semibold">
                      <span>{faq.q}</span>
                      <span className="text-[#9D4EDD] ml-4 group-open:rotate-45 transition-transform flex-shrink-0 text-xl">+</span>
                    </summary>
                    <p className="mt-4 text-[#6B7280] leading-relaxed">{faq.a}</p>
                  </details>
                ))}
              </div>
            </section>

            {/* ENLAZADO INTERNO */}
            <div className="mt-12 pt-8 border-t border-gray-100">
              <p className="font-bold text-sm text-[#6B7280] mb-4">Artículos y páginas relacionadas</p>
              <div className="flex flex-wrap gap-3">
                <Link href="/features/forgi-chatbot" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">→ Forgi Chatbot: Cómo Funciona</Link>
                <Link href="/blog/que-es-una-landing-page" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">→ Qué es una Landing Page</Link>
                <Link href="/blog/como-aumentar-conversion-landing-page" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">→ Cómo Aumentar la Conversión</Link>
                <Link href="/para/clinicas-dentales" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">→ Forgi para Clínicas Dentales</Link>
              </div>
            </div>

          </article>
        </main>
      </div>
    </>
  );
}
