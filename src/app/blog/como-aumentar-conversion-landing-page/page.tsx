import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cómo Aumentar la Conversión Landing Page",
  description:
    "7 tácticas CRO probadas para aumentar la conversión de tus landing pages. Titulares, CTAs, chatbots IA, social proof y Core Web Vitals.",
  keywords: [
    "como aumentar conversion landing page",
    "estrategias CRO landing pages",
    "optimizar tasa conversion landing",
    "mejorar conversion landing page 2026",
    "chatbot ventas conversion",
  ],
  alternates: {
    canonical: "https://landforge.digital/blog/como-aumentar-conversion-landing-page",
  },
  openGraph: {
    title: "Cómo Aumentar la Conversión Landing Page | LandForge",
    description:
      "7 tácticas CRO probadas para aumentar la conversión de tus landing pages. Titulares, CTAs, chatbots IA, social proof y Core Web Vitals.",
    url: "https://landforge.digital/blog/como-aumentar-conversion-landing-page",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Cómo Aumentar la Conversión de tu Landing Page en 2026",
  description: "Guía práctica con 7 tácticas CRO probadas para mejorar la tasa de conversión de landing pages B2B.",
  author: { "@type": "Person", name: "Alejandro Bethencourt", url: "https://landforge.digital/sobre-nosotros", jobTitle: "Fundador de LandForge", sameAs: "https://www.linkedin.com/in/alejandro-bethencourt-rodr%C3%ADguez/" },
  publisher: { "@type": "Organization", name: "LandForge", url: "https://landforge.digital" },
  datePublished: "2026-01-15",
  dateModified: "2026-03-27",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://landforge.digital/blog/como-aumentar-conversion-landing-page" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cuál es una buena tasa de conversión para una landing page?",
      acceptedAnswer: { "@type": "Answer", text: "La media del mercado está entre el 2% y el 5%. Una landing page bien optimizada para un nicho específico puede alcanzar entre el 10% y el 25%. Las landing pages generadas con LandForge promedian un 8-12% gracias a la estructura optimizada por IA y el chatbot Forgi que cualifica leads en tiempo real." },
    },
    {
      "@type": "Question",
      name: "¿Qué elemento de la landing page tiene más impacto en la conversión?",
      acceptedAnswer: { "@type": "Answer", text: "El headline (H1) es el elemento con mayor impacto. Un cambio de headline puede mover la tasa de conversión entre un 10% y un 50%. Le siguen el CTA (texto, color y posición), la hero section, el social proof y la velocidad de carga (Core Web Vitals)." },
    },
    {
      "@type": "Question",
      name: "¿Cómo afecta la velocidad de carga a la conversión?",
      acceptedAnswer: { "@type": "Answer", text: "Cada segundo adicional de carga reduce las conversiones un 7%. Una landing que carga en más de 3 segundos pierde el 53% de los visitantes móviles. Google premia las páginas rápidas con mejor Quality Score en Ads, reduciendo tu CPC. Las landing pages de LandForge cargan en menos de 1 segundo (LCP < 0.8s)." },
    },
    {
      "@type": "Question",
      name: "¿Un chatbot de ventas realmente mejora la conversión?",
      acceptedAnswer: { "@type": "Answer", text: "Sí. Según datos de Drift e Intercom, un chatbot de ventas con IA puede aumentar la tasa de conversión entre un 35% y un 45%. La clave es que responde instantáneamente a la duda principal del visitante, que de otro modo abandonaría la página sin contactar." },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://landforge.digital" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://landforge.digital/blog" },
    { "@type": "ListItem", position: 3, name: "Cómo Aumentar la Conversión", item: "https://landforge.digital/blog/como-aumentar-conversion-landing-page" },
  ],
};

export default function BlogPostAumentarConversion() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="min-h-screen bg-[#FAFAFA] text-[#1A1A2E] font-sans">
        <main>
          <article className="max-w-3xl mx-auto px-6 pt-32 pb-20">

            <div className="mb-8">
              <nav className="text-sm text-[#6B7280] mb-4 flex gap-2">
                <Link href="/" className="hover:text-[#9D4EDD]">Inicio</Link> <span>/</span>
                <Link href="/blog" className="hover:text-[#9D4EDD]">Blog</Link> <span>/</span>
                <span className="text-[#9D4EDD]">CRO Landing Pages</span>
              </nav>
              <p className="text-xs font-bold uppercase tracking-[2px] text-[#9D4EDD] mb-4">Guía CRO · MOFU · LandForge Blog</p>
              <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-6">
                Cómo aumentar la conversión de tu landing page: 7 tácticas que funcionan en 2026
              </h1>
              <p className="text-[#6B7280] text-lg leading-relaxed">
                Llevar tráfico masivo a una landing page que no convierte es quemar dinero. Si tu CPC es de 2€ y necesitas 100 visitas para 1 lead, tu coste por lead es de 200€. Esta guía te enseña las 7 tácticas CRO que están funcionando ahora mismo para reducir ese coste y multiplicar tus resultados.
              </p>
              <div className="mt-4 flex gap-4 text-sm text-[#6B7280]">
                <span>📅 Actualizado marzo 2026</span>
                <span>⏱️ 8 min de lectura</span>
                <Link href="/sobre-nosotros" className="hover:underline">✍️ Alejandro Bethencourt</Link> <span className="text-[#6B7280]">— Fundador de LandForge</span>
              </div>
            </div>

            <hr className="border-[#E0AAFF] my-10" />

            {/* ÍNDICE */}
            <div className="bg-[#F3E8FF] border border-[#E0AAFF] rounded-2xl p-6 mb-10">
              <p className="font-bold text-sm mb-3 uppercase tracking-wider text-[#9D4EDD]">En este artículo</p>
              <ol className="space-y-1.5 text-sm">
                {[
                  { label: "El fin de las páginas 'solo texto'", anchor: "#texto" },
                  { label: "Táctica 1: Headlines que convierten", anchor: "#headlines" },
                  { label: "Táctica 2: CTAs que obligan a hacer clic", anchor: "#ctas" },
                  { label: "Táctica 3: Chatbot de ventas IA (el game-changer)", anchor: "#chatbot" },
                  { label: "Táctica 4: Social proof estratégico", anchor: "#social-proof" },
                  { label: "Táctica 5: Core Web Vitals y velocidad", anchor: "#cwv" },
                  { label: "Táctica 6: Formularios mínimos", anchor: "#formularios" },
                  { label: "Táctica 7: A/B testing continuo", anchor: "#ab-testing" },
                ].map((item, i) => (
                  <li key={item.anchor}>
                    <a href={item.anchor} className="inline-flex gap-2 hover:text-[#9D4EDD] transition-colors">
                      <span className="text-[#9D4EDD] font-bold">{i + 1}.</span>{item.label}
                    </a>
                  </li>
                ))}
              </ol>
            </div>

            {/* SECCIÓN INTRO */}
            <section id="texto">
              <h2 className="text-2xl font-extrabold mb-4">El fin de las páginas &quot;solo texto&quot;</h2>
              <p className="text-[#6B7280] leading-relaxed mb-4">
                El usuario de 2026 tiene un umbral de atención extremadamente bajo. Un bloque de texto sobre &quot;Nuestra Historia&quot; o &quot;Nuestros 10 Servicios&quot; destruye tu tasa de conversión. La solución es implementar interactividad desde el segundo cero.
              </p>
              <p className="text-[#6B7280] leading-relaxed mb-4">
                Si todavía no tienes claro qué es exactamente una landing page y por qué es diferente de una web normal, empieza por nuestra <Link href="/blog/que-es-una-landing-page" className="text-[#9D4EDD] font-semibold hover:underline">guía sobre qué es una landing page</Link> y vuelve aquí después.
              </p>

              <div className="bg-[#1A1A2E] text-white rounded-2xl p-6 mb-6">
                <p className="font-bold text-[#E0AAFF] text-sm mb-3">El coste real de no optimizar:</p>
                <div className="grid grid-cols-2 gap-4">
                  {[["2-5%", "Conversión media del mercado"], ["10-25%", "Conversión de landing optimizada"], ["7%", "Caída de conversión por segundo extra de carga"], ["35-45%", "Mejora media al añadir chatbot IA"]].map(([v, l]) => (
                    <div key={l}>
                      <div className="text-2xl font-extrabold text-[#9D4EDD]">{v}</div>
                      <div className="text-white/60 text-xs mt-1">{l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* TÁCTICA 1 */}
            <section id="headlines" className="mt-12">
              <h2 className="text-2xl font-extrabold mb-4">1. Headlines que convierten: el elemento con más impacto</h2>
              <p className="text-[#6B7280] leading-relaxed mb-4">
                El headline (H1) es responsable de hasta el 50% del rendimiento de tu landing. Un buen headline debe comunicar en menos de 3 segundos: qué ofreces, para quién, y por qué ahora. La fórmula que mejor funciona en 2026:
              </p>
              <div className="bg-[#F3E8FF] border border-[#E0AAFF] rounded-xl p-5 mb-4">
                <p className="font-bold text-[#9D4EDD] text-sm mb-2">Fórmula de headline de alta conversión:</p>
                <p className="text-[#1A1A2E] font-semibold">[Resultado específico] + [para quién] + [en cuánto tiempo/sin qué dolor]</p>
                <p className="text-[#6B7280] text-sm mt-2">Ejemplo: &quot;Genera landing pages de alta conversión para tu agencia en 30 segundos, sin tocar código&quot;</p>
              </div>
              <p className="text-[#6B7280] leading-relaxed mb-4">
                LandForge aplica estas reglas automáticamente al generar tu landing con IA. Los headlines se optimizan para el sector específico de tu negocio, con copy persuasivo basado en los datos que introduces en el briefing.
              </p>
            </section>

            {/* TÁCTICA 2 */}
            <section id="ctas" className="mt-12">
              <h2 className="text-2xl font-extrabold mb-4">2. CTAs que obligan a hacer clic</h2>
              <p className="text-[#6B7280] leading-relaxed mb-4">
                Un CTA genérico como &quot;Enviar&quot; o &quot;Contactar&quot; convierte hasta un 40% menos que un CTA orientado al beneficio. Las claves:
              </p>
              <ul className="space-y-3 mb-4">
                {[
                  "Usa primera persona: 'Quiero mi landing gratis' en vez de 'Solicitar demo'",
                  "Añade urgencia real: 'Solo 3 plazas esta semana' (si es verdad)",
                  "Reduce fricción: 'Sin tarjeta de crédito · 30 segundos' bajo el botón",
                  "Contraste visual: el botón debe ser el elemento más visible de la página",
                ].map((item) => (
                  <li key={item} className="flex gap-3 items-start text-[#6B7280] text-sm">
                    <span className="text-[#9D4EDD] font-bold flex-shrink-0">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* TÁCTICA 3 */}
            <section id="chatbot" className="mt-12">
              <h2 className="text-2xl font-extrabold mb-4">3. Chatbot de ventas IA: el game-changer de conversión</h2>
              <p className="text-[#6B7280] leading-relaxed mb-4">
                El 73% de los visitantes abandona sin contactar porque no recibe respuesta inmediata a su duda principal. Un <Link href="/blog/que-es-un-chatbot-de-ventas-ia" className="text-[#9D4EDD] font-semibold hover:underline">chatbot de ventas con IA</Link> resuelve esto interceptando al visitante en el momento exacto de la duda, cualificando su interés y guiándolo hacia el formulario o la llamada.
              </p>
              <p className="text-[#6B7280] leading-relaxed mb-4">
                <Link href="/features/forgi-chatbot" className="text-[#9D4EDD] font-semibold hover:underline">Forgi, el chatbot de LandForge</Link>, se entrena automáticamente con el contenido de tu landing en 30 segundos. No necesitas configurar flujos, escribir scripts ni pagar herramientas externas como Drift o Intercom. Está incluido en todos los planes.
              </p>
              <p className="text-[#6B7280] leading-relaxed mb-4">
                Si quieres profundizar en cómo implementar un chatbot de ventas paso a paso, consulta nuestra <Link href="/blog/chatbot-ventas-para-web" className="text-[#9D4EDD] font-semibold hover:underline">guía práctica de chatbot de ventas para web</Link>.
              </p>
            </section>

            {/* TÁCTICA 4 */}
            <section id="social-proof" className="mt-12">
              <h2 className="text-2xl font-extrabold mb-4">4. Social proof estratégico (no genérico)</h2>
              <p className="text-[#6B7280] leading-relaxed mb-4">
                No basta con poner &quot;+500 clientes satisfechos&quot;. El social proof que convierte incluye datos específicos, nombres reales y resultados medibles. Lo más efectivo:
              </p>
              <ul className="space-y-3 mb-4">
                {[
                  "Testimonios con nombre, rol y resultado numérico: 'Pasamos de 3 a 12 leads/semana' — Laura M., Directora de Marketing",
                  "Logos de clientes reconocibles en el sector del visitante",
                  "Cifras de uso: '2.400 landing pages generadas este mes'",
                  "Posiciona el social proof JUSTO ENCIMA del CTA principal — no al final de la página",
                ].map((item) => (
                  <li key={item} className="flex gap-3 items-start text-[#6B7280] text-sm">
                    <span className="text-[#9D4EDD] font-bold flex-shrink-0">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* TÁCTICA 5 */}
            <section id="cwv" className="mt-12">
              <h2 className="text-2xl font-extrabold mb-4">5. Core Web Vitals: la velocidad vende</h2>
              <p className="text-[#6B7280] leading-relaxed mb-4">
                Google premia las páginas rápidas con mejor Quality Score en Ads, lo que reduce tu CPC directamente. Cada segundo de carga extra cuesta un 7% de conversiones. Las métricas clave:
              </p>
              <div className="overflow-x-auto rounded-2xl border border-[#E0AAFF] mb-4">
                <table className="w-full text-sm">
                  <thead className="bg-[#FAF5FF] border-b border-[#E0AAFF]">
                    <tr>
                      <th className="p-4 text-left font-bold text-[#6B7280]">Métrica</th>
                      <th className="p-4 text-left font-bold text-green-600">Bueno</th>
                      <th className="p-4 text-left font-bold text-red-500">Malo</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {[
                      ["LCP (Largest Contentful Paint)", "< 2.5s", "> 4s"],
                      ["INP (Interaction to Next Paint)", "< 200ms", "> 500ms"],
                      ["CLS (Cumulative Layout Shift)", "< 0.1", "> 0.25"],
                    ].map(([metric, good, bad]) => (
                      <tr key={metric}>
                        <td className="p-4 font-semibold">{metric}</td>
                        <td className="p-4 text-green-600">{good}</td>
                        <td className="p-4 text-red-500">{bad}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-[#6B7280] leading-relaxed mb-4">
                Las landing pages generadas con LandForge mantienen un LCP inferior a 1 segundo en el 95% de los casos. Si actualmente usas WordPress con Elementor o Divi, consulta nuestra <Link href="/integraciones/wordpress" className="text-[#9D4EDD] font-semibold hover:underline">guía de integración con WordPress</Link> para ver cómo mejorar sin perder tu web actual.
              </p>
            </section>

            {/* TÁCTICA 6 */}
            <section id="formularios" className="mt-12">
              <h2 className="text-2xl font-extrabold mb-4">6. Formularios mínimos: menos campos, más leads</h2>
              <p className="text-[#6B7280] leading-relaxed mb-4">
                Cada campo adicional en un formulario reduce la conversión un 11%. La regla de oro: pide solo lo que necesitas para el siguiente paso del funnel. Para una primera captación, nombre y email (o teléfono) son suficientes. Deja que <Link href="/features/forgi-chatbot" className="text-[#9D4EDD] font-semibold hover:underline">Forgi chatbot</Link> cualifique después con preguntas conversacionales naturales.
              </p>
            </section>

            {/* TÁCTICA 7 */}
            <section id="ab-testing" className="mt-12">
              <h2 className="text-2xl font-extrabold mb-4">7. A/B testing continuo: nunca dejes de optimizar</h2>
              <p className="text-[#6B7280] leading-relaxed mb-4">
                Una landing page no se optimiza una vez y se olvida. Las mejores empresas testean constantemente headlines, CTAs, imágenes y estructuras. Con LandForge puedes generar 3 variantes completas de una landing en 90 segundos — lo que antes tomaba semanas de trabajo de diseñador y copywriter.
              </p>
              <p className="text-[#6B7280] leading-relaxed mb-4">
                Para una guía completa sobre cómo hacer tests efectivos, lee nuestro artículo sobre <Link href="/blog/ab-testing-landing-pages-guia" className="text-[#9D4EDD] font-semibold hover:underline">A/B testing en landing pages</Link>. Y si quieres medir el potencial de conversión de tu landing actual, prueba el <Link href="/features/conversion-score" className="text-[#9D4EDD] font-semibold hover:underline">Conversion Score de LandForge</Link>.
              </p>
            </section>

            {/* CTA */}
            <section className="mt-14 rounded-2xl p-8" style={{ background: "linear-gradient(135deg, #9D4EDD 0%, #4C0099 100%)" }}>
              <h2 className="text-2xl font-extrabold text-white mb-4">Aplica todas estas tácticas en 30 segundos</h2>
              <p className="text-[#E0AAFF] mb-6">LandForge genera tu landing con headlines optimizados, CTAs de alta conversión, Forgi chatbot y Core Web Vitals en verde. Todo automáticamente.</p>
              <div className="flex flex-wrap gap-4">
                <Link href="/register" className="inline-block bg-white text-[#9D4EDD] font-bold px-8 py-4 rounded-2xl hover:-translate-y-1 transition shadow-xl">
                  Crear mi landing optimizada gratis →
                </Link>
                <Link href="/precios" className="inline-block border-2 border-white/30 text-white font-bold px-8 py-4 rounded-2xl hover:border-white transition">
                  Ver planes y precios →
                </Link>
              </div>
            </section>

            {/* FAQ */}
            <section className="mt-14">
              <h2 className="text-2xl font-extrabold mb-8">Preguntas frecuentes sobre conversión en landing pages</h2>
              <div className="divide-y divide-gray-100">
                {[
                  { q: "¿Cuál es una buena tasa de conversión para una landing page?", a: "La media del mercado está entre el 2% y el 5%. Una landing bien optimizada puede alcanzar entre el 10% y el 25%. Las landing pages de LandForge promedian un 8-12% gracias a la estructura optimizada por IA y Forgi chatbot." },
                  { q: "¿Qué elemento tiene más impacto en la conversión?", a: "El headline (H1). Un cambio de headline puede mover la tasa de conversión entre un 10% y un 50%. Le siguen el CTA, la hero section, el social proof y la velocidad de carga." },
                  { q: "¿Cómo afecta la velocidad de carga a la conversión?", a: "Cada segundo adicional reduce las conversiones un 7%. Una landing que carga en más de 3 segundos pierde el 53% de los visitantes móviles. Las landings de LandForge cargan en menos de 1 segundo." },
                  { q: "¿Un chatbot de ventas mejora la conversión?", a: "Sí. Según datos de Drift e Intercom, un chatbot de ventas con IA puede aumentar la conversión entre un 35% y un 45%. La clave es que responde instantáneamente a la duda principal del visitante." },
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
                <Link href="/blog/como-crear-landing-page-alta-conversion" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">→ Cómo Crear una Landing de Alta Conversión</Link>
                <Link href="/blog/ab-testing-landing-pages-guia" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">→ Guía de A/B Testing</Link>
                <Link href="/features/forgi-chatbot" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">→ Forgi Chatbot de Ventas</Link>
                <Link href="/features/conversion-score" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">→ Conversion Score</Link>
                <Link href="/para/agencias-de-marketing" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">→ LandForge para Agencias</Link>
                <Link href="/comparar/landforge-vs-webflow" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">→ LandForge vs Webflow</Link>
              </div>
            </div>

          </article>
        </main>
      </div>
    </>
  );
}
