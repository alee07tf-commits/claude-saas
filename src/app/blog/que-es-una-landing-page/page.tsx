import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Qué es una Landing Page y Para Qué Sirve en 2026 | Guía Completa",
  description:
    "Aprende qué es una landing page, para qué sirve, qué diferencia a una landing page de una web normal y cómo crear una que convierta visitas en clientes. Guía completa 2026.",
  keywords: [
    "que es una landing page",
    "para que sirve una landing page",
    "diferencia landing page web",
    "tipos de landing pages",
    "como funciona una landing page",
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Qué es una Landing Page y Para Qué Sirve en 2026",
  description:
    "Guía completa sobre qué es una landing page, sus tipos, diferencias con una web corporativa y cómo crear una de alta conversión.",
  author: { "@type": "Organization", name: "LandForge" },
  datePublished: "2026-03-01",
  dateModified: "2026-03-25",
  image: "https://landforge.digital/og-que-es-landing-page.jpg",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cuál es la diferencia entre una landing page y una página web?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Una página web corporativa tiene múltiples objetivos: presentar la empresa, mostrar todos sus servicios, generar confianza y facilitar el contacto. Una landing page tiene un único objetivo: conseguir que el visitante realice una acción concreta (dejar sus datos, comprar un producto, reservar una cita). Por eso la landing page elimina todo elemento de distracción — menú de navegación, links secundarios — y centra al visitante en esa única acción.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuándo necesito una landing page y no simplemente una web?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Necesitas una landing page cuando tienes un objetivo de conversión específico y estás invirtiendo dinero o tiempo en traer tráfico hacia ese objetivo: campañas de Google Ads, Facebook Ads, un lanzamiento de producto, una promoción de temporada, la captación de emails para una lista. En todos estos casos, enviar el tráfico a tu web corporativa general es un error que te cuesta conversión y dinero.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuántos elementos debe tener una landing page para convertir mejor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Los estudios de CRO (Conversion Rate Optimization) muestran que las landing pages con un solo CTA (Call to Action) convierten entre un 266% más que las que tienen múltiples opciones. La regla es: un objetivo, un CTA, sin menú de navegación, y todos los demás elementos de la página orientados a apoyar esa única acción.",
      },
    },
  ],
};

export default function QueEsLandingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="min-h-screen bg-[#FAFAFA] text-[#1A1A2E] font-sans">
        <main>

          {/* ── HERO ── */}
          <article className="max-w-3xl mx-auto px-6 pt-32 pb-20">

            <div className="mb-8">
              <p className="text-xs font-bold uppercase tracking-[2px] text-[#9D4EDD] mb-4">Guía SEO · TOFU · LandForge Blog</p>
              <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-6">
                Qué es una landing page y para qué sirve en 2026: Guía completa con ejemplos
              </h1>
              <p className="text-[#6B7280] text-lg leading-relaxed">
                Si estás invirtiendo en publicidad online o en SEO y tu tráfico llega a tu página de inicio, estás perdiendo entre el 60% y el 90% de tu presupuesto. Esta guía te explica qué es una landing page, qué la diferencia de una web normal y cómo crear una que convierta de verdad.
              </p>
              <div className="mt-4 flex gap-4 text-sm text-[#6B7280]">
                <span>📅 Marzo 2026</span>
                <span>⏱️ 8 min de lectura</span>
                <span>✍️ LandForge Team</span>
              </div>
            </div>

            <hr className="border-[#E0AAFF] my-10" />

            {/* ÍNDICE */}
            <div className="bg-[#F3E8FF] border border-[#E0AAFF] rounded-2xl p-6 mb-10">
              <p className="font-bold text-sm mb-3 uppercase tracking-wider text-[#9D4EDD]">Contenido de este artículo</p>
              <ol className="space-y-1.5 text-sm">
                {[
                  { label: "Qué es una landing page (definición clara)", anchor: "#definicion" },
                  { label: "Para qué sirve: Los 5 usos más comunes", anchor: "#para-que-sirve" },
                  { label: "Diferencia entre landing page y web corporativa", anchor: "#diferencia" },
                  { label: "Tipos de landing pages según el funnel", anchor: "#tipos" },
                  { label: "Qué debe tener una landing page para convertir", anchor: "#elementos" },
                  { label: "Cómo crear una landing page en 30 segundos con IA", anchor: "#crear-con-ia" },
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
            <section id="definicion">
              <h2 className="text-2xl font-extrabold mb-4">1. Qué es una landing page (definición clara)</h2>
              <p className="text-[#6B7280] leading-relaxed mb-4">Una <strong className="text-[#1A1A2E]">landing page</strong> (también llamada «página de aterrizaje» en español) es una página web diseñada con un único objetivo: conseguir que el visitante realice una acción concreta.</p>
              <p className="text-[#6B7280] leading-relaxed mb-4">A diferencia de una página web corporativa, una landing page:</p>
              <ul className="space-y-2 mb-6">
                {["No tiene menú de navegación (para no distraer al visitante)", "Está centrada en un único producto, servicio u oferta", "Tiene un único CTA (Call to Action) prominente", "Está diseñada para una audiencia y un mensaje específicos"].map((item) => (
                  <li key={item} className="flex gap-3 text-[#6B7280]"><span className="text-[#9D4EDD] font-bold flex-shrink-0">→</span>{item}</li>
                ))}
              </ul>
              <div className="bg-[#1A1A2E] text-white rounded-2xl p-6 mb-6">
                <p className="font-bold text-[#E0AAFF] text-sm mb-2">Ejemplo real:</p>
                <p className="text-white/80 text-sm leading-relaxed">Una empresa de seguros de coche lanza un anuncio en Google: «Seguro de coche desde 19€/mes». Si el usuario hace clic y llega a <em>la homepage de la aseguradora</em>, verá todos sus productos (hogar, vida, viaje, empresa) y probablemente saldrá sin contratar nada. Si llega a <em>una landing page específica</em> que solo habla del seguro de coche a 19€/mes con un formulario de cotización, la probabilidad de conversión se multiplica.</p>
              </div>
            </section>

            {/* SECCIÓN 2 */}
            <section id="para-que-sirve" className="mt-12">
              <h2 className="text-2xl font-extrabold mb-4">2. Para qué sirve una landing page: Los 5 usos más comunes</h2>
              <div className="space-y-6">
                {[
                  { num: "01", title: "Captación de leads (generación de contactos)", text: "El uso más extendido. La landing ofrece algo de valor (una guía, una consulta gratuita, un descuento) a cambio del email y el nombre del visitante. El lead entra en un flujo de email marketing para ser convertido en cliente." },
                  { num: "02", title: "Venta directa de productos o servicios", text: "Muy utilizada en eCommerce y lanzamientos de infoproductos. La landing presenta el producto, demuestra su valor y lleva al visitante directamente al checkout sin pasar por el catálogo completo." },
                  { num: "03", title: "Destino de campañas de publicidad (PPC)", text: "Google Ads, Meta Ads o TikTok Ads siempre deben apuntar a una landing page específica, no a la homepage. La coincidencia entre el mensaje del anuncio y el de la landing (message match) es clave para maximizar el Quality Score y reducir el coste por clic." },
                  { num: "04", title: "Reserva de citas o demos", text: "Muy usada por SaaS, clínicas, consultoras y coaches. La landing presenta el producto o servicio y su único CTA es «Reservar una demo» o «Agendar una consulta gratuita»." },
                  { num: "05", title: "Validación de ideas de negocio", text: "Antes de construir un producto o servicio completo, las startups crean una landing page con una lista de espera. Si el tráfico convierte, el mercado tiene interés real. Si no convierte, el coste de validación ha sido mínimo." },
                ].map((item) => (
                  <div key={item.num} className="flex gap-5">
                    <span className="font-mono font-bold text-2xl text-[#9D4EDD] flex-shrink-0">{item.num}</span>
                    <div>
                      <h3 className="font-bold mb-1">{item.title}</h3>
                      <p className="text-[#6B7280] leading-relaxed text-sm">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* SECCIÓN 3 */}
            <section id="diferencia" className="mt-12">
              <h2 className="text-2xl font-extrabold mb-4">3. Diferencia entre landing page y web corporativa</h2>
              <div className="overflow-x-auto rounded-2xl border border-[#E0AAFF]">
                <table className="w-full text-sm">
                  <thead className="bg-[#FAF5FF] border-b border-[#E0AAFF]">
                    <tr>
                      <th className="p-4 text-left font-bold text-[#6B7280]">Característica</th>
                      <th className="p-4 text-left font-bold text-[#9D4EDD]">Landing Page</th>
                      <th className="p-4 text-left font-bold text-[#6B7280]">Web Corporativa</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {[
                      ["Objetivo", "Único (conversión específica)", "Múltiple (informar, posicionar, captar)"],
                      ["Menú de navegación", "No (elimina distracción)", "Sí (navegación completa)"],
                      ["Número de CTAs", "1 (máxima claridad)", "Varios (diversas acciones)"],
                      ["Audiencia objetivo", "Segmento muy específico", "Audiencia general"],
                      ["Longitud", "Lo necesario para convencer", "Variable"],
                      ["Tasa de conversión típica", "2% - 15%", "0.1% - 1%"],
                    ].map(([c, l, w]) => (
                      <tr key={c}>
                        <td className="p-4 font-semibold">{c}</td>
                        <td className="p-4 text-[#6B7280]">{l}</td>
                        <td className="p-4 text-[#6B7280]">{w}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECCIÓN 4 */}
            <section id="tipos" className="mt-12">
              <h2 className="text-2xl font-extrabold mb-6">4. Tipos de landing pages según el funnel</h2>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { tipo: "TOFU", name: "Lead Magnet", desc: "Ofrece algo gratuito (guía, checklist, mini-curso) a cambio del email. Para usuarios que aún no conocen el producto.", color: "border-blue-200 bg-blue-50" },
                  { tipo: "MOFU", name: "Comparativa / Alternativa", desc: "Para usuarios que ya saben lo que quieren y están evaluando opciones. Posiciona tu solución frente a la competencia.", color: "border-yellow-200 bg-yellow-50" },
                  { tipo: "BOFU", name: "Sales Page / Product Page", desc: "Para usuarios con intención de compra alta. Elimina la última fricción y lleva directo al pago o al contacto.", color: "border-green-200 bg-green-50" },
                ].map((t) => (
                  <div key={t.tipo} className={`rounded-2xl border p-5 ${t.color}`}>
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-500 block mb-2">{t.tipo}</span>
                    <h3 className="font-bold mb-2">{t.name}</h3>
                    <p className="text-sm text-[#6B7280] leading-relaxed">{t.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* SECCIÓN 5 */}
            <section id="elementos" className="mt-12">
              <h2 className="text-2xl font-extrabold mb-6">5. Qué debe tener una landing page para convertir</h2>
              <div className="space-y-4">
                {[
                  { icon: "🎯", title: "Headline orientado al beneficio del visitante", text: "El H1 no habla del producto. Habla de la transformación que el visitante va a experimentar. «Más pacientes para tu clínica dental, sin Google Ads» en lugar de «Software de marketing para clínicas»." },
                  { icon: "💢", title: "Agravar el dolor antes de ofrecer la solución", text: "Antes de presentar tu producto, la landing debe hacer que el visitante diga «esto me pasa a mí». Cuanto más real y específico sea el dolor descrito, mayor la conexión emocional." },
                  { icon: "✅", title: "Prueba social específica y verificable", text: "No «200+ clientes satisfechos». Sí «Clínica Dental Sonrisa Madrid: de 4 semanas para crear una landing a 10 minutos con LandForge». Resultados concretos de personas reales." },
                  { icon: "❓", title: "FAQ que elimina las objeciones de compra", text: "Las preguntas frecuentes bien escritas no son informativas: son la respuesta a las razones por las que el visitante NO compraría. Anticípate a cada objeción y resuélvela." },
                  { icon: "🚀", title: "Un único CTA claro y repetido", text: "El CTA debe describir exactamente lo que ocurre al hacer clic («Reservar mi consulta gratuita»), no ser genérico («Enviar»). Repetirlo al menos 3 veces en la página: arriba, al medio y al final." },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 p-5 bg-white rounded-2xl border border-gray-100">
                    <span className="text-2xl flex-shrink-0">{item.icon}</span>
                    <div>
                      <h3 className="font-bold mb-1">{item.title}</h3>
                      <p className="text-[#6B7280] text-sm leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* SECCIÓN 6 — CTA NATIVO */}
            <section id="crear-con-ia" className="mt-14 rounded-2xl p-8 text-center" style={{ background: "linear-gradient(135deg, #9D4EDD 0%, #4C0099 100%)" }}>
              <h2 className="text-2xl font-extrabold text-white mb-4">6. Cómo crear una landing page en 30 segundos con IA</h2>
              <p className="text-[#E0AAFF] mb-6 max-w-lg mx-auto">Si has llegado hasta aquí, ya sabes exactamente qué necesita una landing page para convertir. Ahora LandForge la construye por ti: describe tu negocio, y la IA genera el copy, la estructura y activa el chatbot Forgi en segundos.</p>
              <Link href="/register" className="inline-block bg-white text-[#9D4EDD] font-bold text-lg px-8 py-4 rounded-2xl hover:-translate-y-1 transition shadow-xl">
                Crear mi landing gratis →
              </Link>
            </section>

            {/* FAQ VISIBLE */}
            <section className="mt-14">
              <h2 className="text-2xl font-extrabold mb-8">Preguntas frecuentes sobre landing pages</h2>
              <div className="divide-y divide-gray-100">
                {[
                  { q: "¿Cuál es la diferencia entre una landing page y una página web?", a: "Una página web tiene múltiples objetivos. Una landing page tiene un único objetivo: conseguir que el visitante realice una acción concreta. Por eso elimina el menú de navegación y todos los elementos de distracción." },
                  { q: "¿Cuándo necesito una landing page y no una web?", a: "Cuando tienes un objetivo de conversión específico y estás invirtiendo en tráfico (Google Ads, Meta Ads, SEO, email). Enviar ese tráfico a tu homepage es un error que te cuesta conversión y dinero." },
                  { q: "¿Cuántos elementos debe tener una landing page para convertir?", a: "Lo mínimo necesario para convencer. Un único CTA convierte un 266% más que varios. La regla: un objetivo, un CTA, sin menú de navegación." },
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
              <p className="font-bold text-sm text-[#6B7280] mb-4">Artículos relacionados</p>
              <div className="flex flex-wrap gap-3">
                <Link href="/blog/como-aumentar-conversion-landing-page" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">→ Cómo Aumentar la Conversión de tu Landing</Link>
                <Link href="/features/forgi-chatbot" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">→ Chatbot de Ventas IA: Forgi</Link>
                <Link href="/comparar/landforge-vs-webflow" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">→ LandForge vs Webflow</Link>
              </div>
            </div>

          </article>
        </main>
      </div>
    </>
  );
}
