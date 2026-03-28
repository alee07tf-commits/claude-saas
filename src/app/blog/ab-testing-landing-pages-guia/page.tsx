import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "A/B Testing en Landing Pages: Guía Completa para Maximizar Conversiones",
  description: "Aprende cómo hacer A/B testing en landing pages paso a paso. Herramientas, framework de priorización ICE, ejemplos reales y errores comunes. Guía 2026.",
  openGraph: {
    title: "A/B Testing en Landing Pages: Guía Completa para Maximizar Conversiones",
    description: "Guía definitiva de A/B testing para landing pages: proceso paso a paso, herramientas comparadas, casos de éxito y framework ICE para priorizar tests.",
    type: "article", publishedTime: "2026-03-18T08:00:00Z", modifiedTime: "2026-03-27T10:00:00Z", authors: ["Alejandro Bethencourt"],
  },
  alternates: { canonical: "https://landforge.digital/blog/ab-testing-landing-pages-guia" },
};

const articleSchema = {
  "@context": "https://schema.org", "@type": "Article",
  headline: "A/B Testing en Landing Pages: Guía Completa para Maximizar Conversiones",
  author: { "@type": "Person", name: "Alejandro Bethencourt", url: "https://landforge.digital/sobre-nosotros", jobTitle: "Fundador de LandForge", sameAs: "https://www.linkedin.com/in/alejandro-bethencourt-rodr%C3%ADguez/" },
  publisher: { "@type": "Organization", name: "LandForge", url: "https://landforge.digital" },
  datePublished: "2026-03-18", dateModified: "2026-03-27",
  description: "Guía completa de A/B testing para landing pages: proceso, herramientas, framework ICE, casos reales y errores comunes.",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://landforge.digital/blog/ab-testing-landing-pages-guia" },
};

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
  { "@type": "Question", name: "¿Cuánto tiempo debe durar un A/B test en una landing page?", acceptedAnswer: { "@type": "Answer", text: "Un A/B test debe durar como mínimo 2 semanas completas (para capturar variaciones por día de la semana) y necesita al menos 100 conversiones por variante para alcanzar significancia estadística del 95%. Detener un test antes de tiempo es uno de los errores más comunes." } },
  { "@type": "Question", name: "¿Qué elemento de una landing page debo testear primero?", acceptedAnswer: { "@type": "Answer", text: "El headline (H1) es el elemento con mayor impacto en conversiones. Según estudios, un cambio de headline puede mover la tasa de conversión entre un 10% y un 50%. Después del headline, prioriza el CTA (texto, color y posición) y la hero section." } },
  { "@type": "Question", name: "¿Cuántas variantes debo testear a la vez en un A/B test?", acceptedAnswer: { "@type": "Answer", text: "Lo ideal es testear solo 2 variantes (A y B) con un único cambio entre ellas. Si testeas más de un elemento simultáneamente, no podrás atribuir los resultados a un cambio específico. Para tests con múltiples variantes, necesitas un test multivariante y significativamente más tráfico." } },
  { "@type": "Question", name: "¿Puedo hacer A/B testing con poco tráfico?", acceptedAnswer: { "@type": "Answer", text: "Sí, pero necesitas ajustar tu estrategia. Con poco tráfico, enfócate en cambios grandes (no microajustes), usa tests secuenciales en lugar de simultáneos, y acepta niveles de confianza del 90% en lugar del 95%. Herramientas como LandForge permiten generar variantes completas con IA en segundos, facilitando la iteración rápida." } },
  { "@type": "Question", name: "¿Google Optimize sigue disponible para A/B testing?", acceptedAnswer: { "@type": "Answer", text: "No. Google Optimize fue descontinuado en septiembre de 2023. Las alternativas principales en 2026 son VWO, Optimizely, AB Tasty y Unbounce (con su función SmartTraffic). LandForge está desarrollando funcionalidades nativas de A/B testing para Q2 2026." } },
] };

const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
  { "@type": "ListItem", position: 1, name: "Inicio", item: "https://landforge.digital" },
  { "@type": "ListItem", position: 2, name: "Blog", item: "https://landforge.digital/blog" },
  { "@type": "ListItem", position: 3, name: "A/B Testing en Landing Pages", item: "https://landforge.digital/blog/ab-testing-landing-pages-guia" },
] };

function StatBox({ stat, label }: { stat: string; label: string }) {
  return (
    <div className="bg-[#1A1A2E] text-white rounded-2xl p-6 flex flex-col items-center text-center">
      <span className="text-3xl font-extrabold text-[#E0AAFF]">{stat}</span>
      <span className="mt-2 text-sm text-gray-300 leading-snug">{label}</span>
    </div>
  );
}

function CaseCard({ title, result, description }: { title: string; result: string; description: string }) {
  return (
    <div className="bg-[#FAF5FF] border border-[#E0AAFF] rounded-xl p-5">
      <p className="font-bold text-[#1A1A2E] mb-1">{title}</p>
      <p className="text-[#9D4EDD] font-extrabold text-lg mb-2">{result}</p>
      <p className="text-sm text-[#6B7280] leading-relaxed">{description}</p>
    </div>
  );
}

const toolRows = [
  { name: "VWO", best: "Equipos de CRO medianos", price: "~199 $/mes", highlight: "Heatmaps + tests integrados", featured: false },
  { name: "Optimizely", best: "Enterprise / alto tráfico", price: "Personalizado", highlight: "Motor estadístico avanzado", featured: false },
  { name: "Unbounce", best: "Landing pages dedicadas", price: "~99 $/mes", highlight: "SmartTraffic (IA de distribución)", featured: false },
  { name: "AB Tasty", best: "eCommerce europeo", price: "~Personalizado", highlight: "Personalización + tests", featured: false },
  { name: "LandForge", best: "Iteración rápida con IA", price: "Gratis / 49 \u20AC/mes", highlight: "Genera 3 variantes en 90 s", featured: true },
];

const footerLinks = [
  { href: "/blog/como-aumentar-conversion-landing-page", label: "Cómo aumentar conversión" },
  { href: "/blog/como-crear-landing-page-alta-conversion", label: "Crear landing de alta conversión" },
  { href: "/features/conversion-score", label: "Conversion Score" },
  { href: "/features/forgi-chatbot", label: "Chatbot Forgi" },
  { href: "/comparar/landforge-vs-unbounce", label: "LandForge vs Unbounce" },
  { href: "/para/clinicas-dentales", label: "Para clínicas dentales" },
  { href: "/para/startups-saas", label: "Para startups SaaS" },
  { href: "/para/ecommerce", label: "Para eCommerce" },
  { href: "/precios", label: "Planes y precios" },
];

export default function ABTestingLandingPagesGuia() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <article className="max-w-3xl mx-auto px-6 pt-32 pb-20">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-xs text-[#6B7280] mb-6 flex gap-1">
          <Link href="/" className="hover:text-[#9D4EDD]">Inicio</Link><span>/</span>
          <Link href="/blog" className="hover:text-[#9D4EDD]">Blog</Link><span>/</span>
          <span className="text-[#9D4EDD]">A/B Testing Landing Pages</span>
        </nav>

        <p className="text-xs font-semibold uppercase tracking-widest text-[#9D4EDD] mb-3">Guía CRO &middot; MOFU &middot; LandForge Blog</p>

        <h1 className="text-4xl md:text-5xl font-extrabold text-[#1A1A2E] leading-tight mb-6">
          A/B Testing en Landing Pages: Guía Completa para Maximizar Conversiones
        </h1>

        <p className="text-lg text-[#6B7280] leading-relaxed mb-6">
          Tienes una landing page publicada, llegan visitas... pero la tasa de conversión no mejora. El problema casi nunca es el tráfico: es que no estás testeando. El <strong>A/B testing</strong> es el método científico del marketing digital &mdash; y en esta guía vas a aprender exactamente cómo aplicarlo a tus landing pages, qué elementos priorizar, qué herramientas usar en 2026 y cómo interpretar los resultados sin necesitar un título en estadística.
        </p>

        <div className="flex flex-wrap gap-4 text-xs text-[#6B7280] mb-10 border-b border-[#E0AAFF] pb-6">
          <Link href="/sobre-nosotros" className="hover:underline">✍️ Alejandro Bethencourt</Link> <span className="text-[#6B7280]">— Fundador de LandForge</span>
          <span>Publicado: 18 mar 2026</span>
          <span>Actualizado: 27 mar 2026</span>
          <span>Lectura: ~18 min</span>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 mb-12">
          <StatBox stat="44 %" label="de empresas no hacen A/B testing en sus landing pages" />
          <StatBox stat="3.2x" label="más conversiones obtienen los equipos que testean sistemáticamente" />
          <StatBox stat="14 días" label="tiempo mínimo recomendado para un test con significancia" />
        </div>

        {/* TOC */}
        <nav className="bg-[#F3E8FF] border border-[#E0AAFF] rounded-2xl p-6 mb-12">
          <p className="font-bold text-[#1A1A2E] mb-3">Contenido de la guía</p>
          <ol className="list-decimal list-inside space-y-2 text-sm text-[#7B2CBF]">
            <li><a href="#que-es" className="hover:underline">Qué es el A/B testing y por qué importa en landing pages</a></li>
            <li><a href="#que-testear" className="hover:underline">Qué elementos testear (framework de priorización ICE)</a></li>
            <li><a href="#proceso" className="hover:underline">Proceso paso a paso: 7 etapas del A/B test perfecto</a></li>
            <li><a href="#significancia" className="hover:underline">Significancia estadística explicada de forma simple</a></li>
            <li><a href="#herramientas" className="hover:underline">Mejores herramientas de A/B testing en 2026</a></li>
            <li><a href="#ejemplos" className="hover:underline">3 casos reales con resultados medibles</a></li>
            <li><a href="#industrias" className="hover:underline">A/B testing por industria</a></li>
            <li><a href="#errores" className="hover:underline">5 errores de A/B testing que arruinan tus resultados</a></li>
            <li><a href="#faq" className="hover:underline">Preguntas frecuentes</a></li>
          </ol>
        </nav>

        {/* S1: Que es */}
        <section id="que-es" className="mb-14">
          <h2 className="text-2xl font-extrabold text-[#1A1A2E] mb-4">1. Qué es el A/B testing y por qué importa en landing pages</h2>
          <p className="text-[#6B7280] leading-relaxed mb-4">
            El <strong>A/B testing</strong> (también llamado <em>split testing</em>) consiste en mostrar dos versiones de una misma página a segmentos aleatorios de tu tráfico y medir cuál genera más conversiones. La <strong>variante A</strong> es tu página actual (control) y la <strong>variante B</strong> es la versión modificada con un cambio específico.
          </p>
          <p className="text-[#6B7280] leading-relaxed mb-4">
            Piénsalo como un experimento de laboratorio: cambias <em>una sola variable</em>, mantienes todo lo demás constante y observas el resultado. Si la variante B obtiene una tasa de conversión significativamente mayor, tienes un ganador.
          </p>
          <p className="text-[#6B7280] leading-relaxed mb-4">
            &iquest;Por qué es especialmente crítico en <strong>landing pages</strong> y no en cualquier página web? Porque una landing page tiene un único objetivo de conversión. No hay menú de navegación distrayendo, no hay 15 páginas internas compitiendo por la atención. Cada elemento &mdash; headline, CTA, hero section, formulario &mdash; impacta directamente en si el visitante convierte o no. Un cambio en el título <em>above the fold</em> puede mover tu conversión entre un 10&nbsp;% y un 50&nbsp;%.
          </p>
          <p className="text-[#6B7280] leading-relaxed">
            Si quieres entender los fundamentos de <Link href="/blog/como-aumentar-conversion-landing-page" className="text-[#9D4EDD] underline hover:text-[#7B2CBF]">cómo aumentar la conversión de una landing page</Link>, te recomendamos leer nuestra guía complementaria. El A/B testing es la herramienta que convierte esas estrategias teóricas en mejoras medibles.
          </p>
        </section>

        {/* S2: Que testear */}
        <section id="que-testear" className="mb-14">
          <h2 className="text-2xl font-extrabold text-[#1A1A2E] mb-4">2. Qué elementos testear: framework de priorización ICE</h2>
          <p className="text-[#6B7280] leading-relaxed mb-4">
            No todos los elementos de una landing page tienen el mismo impacto en conversiones. Testear el color de un botón antes que el headline es como cambiar el tapizado de un coche con el motor roto. Para priorizar correctamente, usa el <strong>framework ICE</strong>:
          </p>
          <ul className="list-disc list-inside text-[#6B7280] leading-relaxed space-y-1 mb-6">
            <li><strong>Impact (Impacto)</strong> &mdash; &iquest;Cuánto moverá la métrica si funciona? (1-10)</li>
            <li><strong>Confidence (Confianza)</strong> &mdash; &iquest;Qué tan seguro estoy de que funcionará? (1-10)</li>
            <li><strong>Ease (Facilidad)</strong> &mdash; &iquest;Qué tan fácil es implementarlo? (1-10)</li>
          </ul>
          <p className="text-[#6B7280] leading-relaxed mb-6">Suma las tres puntuaciones y divide entre 3. Prioriza los tests con mayor puntuación ICE. Aquí tienes los elementos ordenados por impacto típico:</p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border border-[#E0AAFF] rounded-2xl overflow-hidden">
              <thead className="bg-[#F3E8FF] text-[#1A1A2E]">
                <tr>
                  <th className="text-left p-3 font-bold">Prioridad</th>
                  <th className="text-left p-3 font-bold">Elemento</th>
                  <th className="text-left p-3 font-bold">Impacto típico</th>
                  <th className="text-left p-3 font-bold">ICE medio</th>
                </tr>
              </thead>
              <tbody className="text-[#6B7280]">
                {[
                  ["1","Headline (H1)","10-50 % cambio en conversión","8.7"],
                  ["2","CTA (texto + color + posición)","5-35 % cambio","8.3"],
                  ["3","Hero section (imagen/video)","5-25 % cambio","7.5"],
                  ["4","Social proof (posición y tipo)","5-20 % cambio","7.2"],
                  ["5","Longitud del formulario","5-30 % cambio","6.8"],
                  ["6","Presentación de precios","3-15 % cambio","6.0"],
                ].map(([pri,el,impact,ice]) => (
                  <tr key={pri} className="border-t border-[#E0AAFF]">
                    <td className="p-3 font-bold text-[#9D4EDD]">{pri}</td>
                    <td className="p-3">{el}</td><td className="p-3">{impact}</td><td className="p-3">{ice}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[#6B7280] leading-relaxed">
            Antes de diseñar tu primer test, necesitas una landing page bien estructurada. Si aún no tienes una, consulta nuestra guía sobre <Link href="/blog/como-crear-landing-page-alta-conversion" className="text-[#9D4EDD] underline hover:text-[#7B2CBF]">cómo crear una landing page de alta conversión</Link> como punto de partida.
          </p>
        </section>

        {/* S3: Proceso */}
        <section id="proceso" className="mb-14">
          <h2 className="text-2xl font-extrabold text-[#1A1A2E] mb-4">3. Proceso paso a paso: las 7 etapas del A/B test perfecto</h2>

          <h3 className="text-lg font-bold text-[#1A1A2E] mt-6 mb-2">Paso 1: Define tu hipótesis</h3>
          <p className="text-[#6B7280] leading-relaxed mb-4">
            Una hipótesis de A/B test sigue esta estructura: <em>&laquo;Si cambio [elemento X] de [versión actual] a [versión nueva], entonces [métrica Y] aumentará porque [razón Z]&raquo;</em>. Ejemplo: &laquo;Si cambio el headline de &lsquo;Bienvenido a nuestra clínica&rsquo; a &lsquo;Sonríe sin complejos desde la primera consulta&rsquo;, entonces la tasa de solicitud de cita aumentará porque comunica un beneficio emocional directo&raquo;.
          </p>

          <h3 className="text-lg font-bold text-[#1A1A2E] mt-6 mb-2">Paso 2: Elige tu métrica principal</h3>
          <p className="text-[#6B7280] leading-relaxed mb-4">
            Cada test necesita <strong>una única métrica primaria</strong>. Para landing pages suele ser la tasa de conversión (formulario enviado, clic en CTA, reserva completada). Puedes tener métricas secundarias (tiempo en página, scroll depth, click map) pero la decisión de ganador se basa en la primaria. LandForge incluye un <Link href="/features/conversion-score" className="text-[#9D4EDD] underline hover:text-[#7B2CBF]">Conversion Score</Link> que analiza automáticamente los factores clave de conversión de tu landing y te sugiere qué mejorar antes de lanzar el test.
          </p>

          <h3 className="text-lg font-bold text-[#1A1A2E] mt-6 mb-2">Paso 3: Crea la variante</h3>
          <p className="text-[#6B7280] leading-relaxed mb-4">
            Regla de oro: <strong>cambia un solo elemento por test</strong>. Si cambias el headline y el CTA a la vez, no sabrás cuál produjo el efecto. Crear una variante manualmente puede llevar horas de diseño y desarrollo. Con LandForge, puedes generar variantes completas de tu landing con IA en aproximadamente 30 segundos &mdash; lo que significa que en 90 segundos tienes 3 versiones listas para testear, en lugar de invertir 3 horas construyendo una sola variante a mano.
          </p>

          <h3 className="text-lg font-bold text-[#1A1A2E] mt-6 mb-2">Paso 4: Configura la división de tráfico</h3>
          <p className="text-[#6B7280] leading-relaxed mb-4">
            Lo estándar es un split 50/50: la mitad de tus visitantes ve la variante A y la otra mitad la B. Si tienes poco tráfico, mantener 50/50 es crítico para alcanzar significancia estadística lo antes posible. Solo en casos de alto riesgo (ecommerce con muchas ventas) puede tener sentido un split 90/10 para limitar la exposición de la variante experimental.
          </p>

          <h3 className="text-lg font-bold text-[#1A1A2E] mt-6 mb-2">Paso 5: Ejecuta el test</h3>
          <p className="text-[#6B7280] leading-relaxed mb-4">
            Lanza el test y <strong>no lo toques</strong>. El error más común es mirar los resultados al segundo día y declarar un ganador. Necesitas un mínimo de 14 días (para capturar variaciones por día de la semana) y al menos 100 conversiones por variante. Si tu herramienta te muestra un heatmap o un scroll map, úsalos como datos complementarios, no como criterio de decisión.
          </p>

          <h3 className="text-lg font-bold text-[#1A1A2E] mt-6 mb-2">Paso 6: Analiza los resultados</h3>
          <p className="text-[#6B7280] leading-relaxed mb-4">
            Compara la tasa de conversión de ambas variantes y verifica que la diferencia sea estadísticamente significativa (al menos 95&nbsp;% de nivel de confianza, o confidence interval). Si la variante B gana con significancia, tienes un ganador. Si no hay diferencia significativa, el test es &laquo;inconcluso&raquo; &mdash; no &laquo;fallido&raquo;. Aprendiste que ese elemento no es el cuello de botella.
          </p>

          <h3 className="text-lg font-bold text-[#1A1A2E] mt-6 mb-2">Paso 7: Implementa y documenta</h3>
          <p className="text-[#6B7280] leading-relaxed">
            Si hay ganador, implementa la variante ganadora como nueva versión base. Luego documenta: qué testeaste, la hipótesis, los números, el resultado y lo que aprendiste. Este repositorio de aprendizajes es oro para tu equipo. El siguiente test debe partir de la nueva base, no del original.
          </p>
        </section>

        {/* S4: Significancia */}
        <section id="significancia" className="mb-14">
          <h2 className="text-2xl font-extrabold text-[#1A1A2E] mb-4">4. Significancia estadística explicada de forma simple</h2>
          <p className="text-[#6B7280] leading-relaxed mb-4">
            Cuando dices que un resultado tiene <strong>95&nbsp;% de significancia estadística</strong>, lo que realmente significa es: &laquo;Si repitiéramos este experimento 100 veces, en 95 de esas veces obtendríamos el mismo resultado. Solo hay un 5&nbsp;% de probabilidad de que la diferencia sea por azar&raquo;.
          </p>
          <p className="text-[#6B7280] leading-relaxed mb-4">
            Para alcanzar ese nivel de confianza necesitas suficiente <strong>sample size</strong> (tamaño de muestra). La fórmula exacta depende de tu tasa de conversión actual y del tamaño del efecto que quieres detectar, pero como regla práctica:
          </p>
          <div className="bg-[#1A1A2E] text-white rounded-2xl p-6 mb-6">
            <p className="text-sm text-gray-300 mb-3">Regla rápida de tamaño de muestra</p>
            <ul className="space-y-2 text-sm">
              <li>&bull; Tasa de conversión actual <strong>2-5 %</strong> &rarr; necesitas ~<strong>2 500 visitantes</strong> por variante</li>
              <li>&bull; Tasa de conversión actual <strong>5-10 %</strong> &rarr; necesitas ~<strong>1 500 visitantes</strong> por variante</li>
              <li>&bull; Tasa de conversión actual <strong>10-20 %</strong> &rarr; necesitas ~<strong>800 visitantes</strong> por variante</li>
            </ul>
            <p className="text-xs text-gray-400 mt-3">Basado en detectar un cambio relativo del 20 % con 95 % de confianza y 80 % de poder estadístico.</p>
          </div>
          <p className="text-[#6B7280] leading-relaxed mb-4">
            <strong>&iquest;Cuánto tiempo ejecutar el test?</strong> Divide el tamaño de muestra necesario entre tu tráfico diario. Si necesitas 2 500 visitantes por variante (5 000 en total) y recibes 200 visitas diarias, necesitarás 25 días. Nunca menos de 14 días, incluso si alcanzas el tamaño de muestra antes.
          </p>
          <p className="text-[#6B7280] leading-relaxed">
            <strong>Errores comunes con la significancia:</strong> detener el test cuando ves un pico favorable (el &laquo;peeking problem&raquo;), no esperar suficientes conversiones, testear demasiados elementos a la vez (test multivariante sin el tráfico necesario), y confundir significancia estadística con significancia práctica &mdash; un aumento del 0,1&nbsp;% puede ser &laquo;estadísticamente significativo&raquo; con suficiente muestra, pero no merece la pena implementarlo.
          </p>
        </section>

        {/* S5: Herramientas */}
        <section id="herramientas" className="mb-14">
          <h2 className="text-2xl font-extrabold text-[#1A1A2E] mb-4">5. Mejores herramientas de A/B testing en 2026</h2>
          <p className="text-[#6B7280] leading-relaxed mb-6">
            Google Optimize fue durante años la herramienta gratuita de referencia, pero fue descontinuada en septiembre de 2023. El ecosistema ha evolucionado. Aquí tienes las opciones relevantes en 2026:
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border border-[#E0AAFF] rounded-2xl overflow-hidden">
              <thead className="bg-[#F3E8FF] text-[#1A1A2E]">
                <tr>
                  <th className="text-left p-3 font-bold">Herramienta</th>
                  <th className="text-left p-3 font-bold">Mejor para</th>
                  <th className="text-left p-3 font-bold">Precio desde</th>
                  <th className="text-left p-3 font-bold">Destacado</th>
                </tr>
              </thead>
              <tbody className="text-[#6B7280]">
                {toolRows.map((t) => (
                  <tr key={t.name} className={`border-t border-[#E0AAFF] ${t.featured ? "bg-[#FAF5FF]" : ""}`}>
                    <td className={`p-3 font-bold ${t.featured ? "text-[#9D4EDD]" : ""}`}>{t.name}</td>
                    <td className="p-3">{t.best}</td><td className="p-3">{t.price}</td><td className="p-3">{t.highlight}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-[#FAF5FF] border border-[#E0AAFF] rounded-xl p-5 mb-4">
            <p className="font-bold text-[#1A1A2E] mb-2">El enfoque LandForge: iteración rápida en lugar de tests lentos</p>
            <p className="text-sm text-[#6B7280] leading-relaxed mb-3">
              Las herramientas tradicionales de A/B testing asumen que ya tienes la landing page construida y que crear una variante implica modificar manualmente el HTML, el copy o el diseño. Con LandForge, la lógica se invierte: generas la landing completa con IA en 30 segundos. Eso significa que puedes crear 3 variantes completas en 90 segundos &mdash; cada una con diferente headline, estructura de social proof o enfoque de CTA &mdash; y publicarlas para medir cuál funciona mejor.
            </p>
            <p className="text-sm text-[#6B7280] leading-relaxed">
              <strong>Transparencia:</strong> la funcionalidad nativa de A/B testing en LandForge está en desarrollo para Q2 2026. Actualmente, el enfoque consiste en generar múltiples variantes y publicarlas en URLs independientes para medir resultados con tu herramienta de analytics. Consulta nuestros <Link href="/precios" className="text-[#9D4EDD] underline hover:text-[#7B2CBF]">planes y precios</Link> para ver qué opciones se ajustan a tu volumen de tests.
            </p>
          </div>
          <p className="text-[#6B7280] leading-relaxed">
            Si estás comparando opciones de landing page builders con capacidades de testing, puedes revisar nuestra <Link href="/comparar/landforge-vs-unbounce" className="text-[#9D4EDD] underline hover:text-[#7B2CBF]">comparativa LandForge vs Unbounce</Link> donde analizamos en detalle las diferencias de enfoque, incluyendo SmartTraffic vs generación con IA.
          </p>
        </section>

        {/* S6: Ejemplos */}
        <section id="ejemplos" className="mb-14">
          <h2 className="text-2xl font-extrabold text-[#1A1A2E] mb-4">6. 3 casos reales de A/B testing con resultados medibles</h2>
          <p className="text-[#6B7280] leading-relaxed mb-6">La teoría está bien, pero los números convencen. Aquí tienes tres casos reales de A/B testing aplicado a landing pages:</p>
          <div className="space-y-4 mb-6">
            <CaseCard title="Caso 1: Cambio de CTA en clínica dental" result="+34 % conversiones" description="Se testeó el texto del botón CTA: la variante A decía 'Solicitar información' y la variante B decía 'Reservar mi plaza gratis'. La variante B generó un 34 % más de solicitudes de cita. La clave: el CTA pasaba de genérico a específico, incluía la palabra 'gratis' y creaba urgencia con 'plaza'." />
            <CaseCard title="Caso 2: Eliminar navegación en landing page SaaS" result="+28 % formularios completados" description="Una startup SaaS eliminó completamente el menú de navegación superior de su landing page de registro. El resultado: un 28 % más de formularios completados. Sin menú, no había 'escape' — el visitante solo tenía dos opciones: registrarse o irse. La atención se concentró en el formulario." />
            <CaseCard title="Caso 3: Chatbot Forgi activado a los 45 segundos" result="+41 % captura de leads" description="En una landing page de servicios inmobiliarios, se activó un chatbot conversacional (Forgi) a los 45 segundos de permanencia. Los visitantes que interactuaron con el chatbot tuvieron un 41 % más de probabilidad de dejar sus datos de contacto. El chatbot resolvía dudas inmediatas sin necesidad de formulario." />
          </div>
          <p className="text-[#6B7280] leading-relaxed">
            El caso 3 es especialmente relevante: los chatbots conversacionales están cambiando las reglas del A/B testing. En lugar de testear variaciones estáticas, puedes testear el <em>momento</em> y el <em>mensaje</em> de la interacción. Descubre cómo funciona el <Link href="/features/forgi-chatbot" className="text-[#9D4EDD] underline hover:text-[#7B2CBF]">chatbot Forgi de LandForge</Link> y cómo puede aumentar la captura de leads en tus landing pages.
          </p>

          <div className="bg-[#1A1A2E] text-white rounded-2xl p-6 mt-6">
            <p className="text-sm font-bold text-[#E0AAFF] mb-2">Lección clave de estos 3 casos</p>
            <p className="text-sm text-gray-300 leading-relaxed">
              Los cambios que más mueven la aguja no son cosméticos &mdash; son
              cambios en la <strong>propuesta de valor</strong> (caso 1), en la
              <strong> estructura de la página</strong> (caso 2) o en el
              <strong> modelo de interacción</strong> (caso 3). Si tu primer A/B test
              va a ser sobre el color de un botón, replantea tu hipótesis.
            </p>
          </div>
        </section>

        {/* S7: Industrias */}
        <section id="industrias" className="mb-14">
          <h2 className="text-2xl font-extrabold text-[#1A1A2E] mb-4">7. A/B testing por industria: qué funciona en cada sector</h2>

          <h3 className="text-lg font-bold text-[#1A1A2E] mt-6 mb-2">Clínicas dentales</h3>
          <p className="text-[#6B7280] leading-relaxed mb-4">
            En el sector dental, los tests con mayor impacto suelen involucrar el CTA (pasar de &laquo;Pedir cita&raquo; a &laquo;Reservar consulta gratuita&raquo;), imágenes de resultados reales (antes/después) y la posición del teléfono de contacto. La confianza es clave: testea la ubicación de reseñas de Google y sellos de calidad. Si tienes una clínica dental, nuestra <Link href="/para/clinicas-dentales" className="text-[#9D4EDD] underline hover:text-[#7B2CBF]">solución especializada para clínicas</Link> incluye plantillas optimizadas para este tipo de tests.
          </p>

          <h3 className="text-lg font-bold text-[#1A1A2E] mt-6 mb-2">SaaS y startups</h3>
          <p className="text-[#6B7280] leading-relaxed mb-4">
            Para productos SaaS, prioriza testear la propuesta de valor del headline (beneficio vs funcionalidad), el tipo de social proof (logos de clientes vs métricas de uso vs testimonios) y la fricción del formulario (email solo vs email + nombre + empresa). Un CTA como &laquo;Empieza gratis&raquo; suele superar a &laquo;Solicitar demo&raquo; en fases tempranas. Revisa nuestra página <Link href="/para/startups-saas" className="text-[#9D4EDD] underline hover:text-[#7B2CBF]">LandForge para startups SaaS</Link> para plantillas orientadas a conversión.
          </p>

          <h3 className="text-lg font-bold text-[#1A1A2E] mt-6 mb-2">eCommerce</h3>
          <p className="text-[#6B7280] leading-relaxed mb-4">
            En eCommerce, los tests más rentables están en la página de producto como landing page: imágenes de producto (lifestyle vs fondo blanco), posición del botón de compra, información de envío visible above the fold, y urgencia (&laquo;Quedan 3 unidades&raquo;). También funciona testear la longitud de descripción: corta con bullets vs larga y detallada. Explora nuestras <Link href="/para/ecommerce" className="text-[#9D4EDD] underline hover:text-[#7B2CBF]">soluciones para eCommerce</Link> si necesitas landing pages de producto optimizadas.
          </p>

          <h3 className="text-lg font-bold text-[#1A1A2E] mt-6 mb-2">Inmobiliarias</h3>
          <p className="text-[#6B7280] leading-relaxed mb-4">
            El sector inmobiliario se beneficia de testear el tipo de contenido visual (fotos profesionales vs tours virtuales), la cantidad de información del formulario (solo email vs formulario completo con presupuesto) y la presentación de precios (rango vs precio exacto vs &laquo;consultar&raquo;). Los chatbots conversacionales han demostrado ser especialmente efectivos en este sector, como vimos en el caso 3.
          </p>

          <h3 className="text-lg font-bold text-[#1A1A2E] mt-6 mb-2">Agencias de marketing</h3>
          <p className="text-[#6B7280] leading-relaxed">
            Las agencias necesitan landing pages para captar clientes y para sus propios clientes. Los tests más efectivos suelen ser en el formato de social proof (casos de éxito con números vs logos de clientes vs premios), el formato de propuesta (paquetes cerrados vs &laquo;presupuesto personalizado&raquo;) y el tipo de CTA (agendar llamada vs descargar portfolio vs empezar gratis).
          </p>
        </section>

        {/* S8: Errores */}
        <section id="errores" className="mb-14">
          <h2 className="text-2xl font-extrabold text-[#1A1A2E] mb-4">8. 5 errores de A/B testing que arruinan tus resultados</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-[#1A1A2E] mb-1">Error 1: Testear demasiados elementos a la vez</h3>
              <p className="text-[#6B7280] leading-relaxed">Si cambias el headline, el CTA, la imagen y el formulario en la misma variante, &iquest;cómo sabes qué causó la mejora (o el empeoramiento)? Un test A/B clásico requiere un único cambio. Si quieres testear múltiples combinaciones, necesitas un test multivariante &mdash; y mucho más tráfico.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#1A1A2E] mb-1">Error 2: Tamaño de muestra insuficiente</h3>
              <p className="text-[#6B7280] leading-relaxed">&laquo;Tengo 50 visitas por variante y la B gana por 3 puntos, ya tenemos ganador&raquo;. No. Con 50 visitas, la variación es enorme. Necesitas cientos o miles de visitantes por variante para que el resultado sea fiable. Usa un calculador de sample size antes de lanzar cada test.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#1A1A2E] mb-1">Error 3: Ignorar la experiencia móvil</h3>
              <p className="text-[#6B7280] leading-relaxed">Un CTA que funciona en desktop puede ser invisible en móvil. Más del 60&nbsp;% del tráfico web es móvil, pero muchos A/B tests solo se diseñan pensando en pantallas grandes. Siempre segmenta los resultados por dispositivo &mdash; podrías encontrar que la variante B gana en móvil pero pierde en desktop.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#1A1A2E] mb-1">Error 4: No documentar los aprendizajes</h3>
              <p className="text-[#6B7280] leading-relaxed">El valor real del A/B testing no es el test individual, sino el conocimiento acumulado. Si no documentas qué testeaste, por qué, y qué aprendiste, acabarás repitiendo tests o tomando decisiones sin contexto. Crea un repositorio de tests (un simple spreadsheet sirve) con: fecha, hipótesis, variantes, resultados y conclusiones.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#1A1A2E] mb-1">Error 5: Testear cambios cosméticos en lugar de estructurales</h3>
              <p className="text-[#6B7280] leading-relaxed">Cambiar el color del botón de azul a verde rara vez mueve la aguja. Los tests con mayor impacto son los que cambian la <em>propuesta de valor</em>, la <em>estructura de la página</em> o el <em>flujo de conversión</em>. Antes de testear microdetalles, asegúrate de que la arquitectura de tu landing es sólida.</p>
            </div>
          </div>
        </section>

        {/* Resumen */}
        <section className="mb-14">
          <div className="bg-[#F3E8FF] border border-[#E0AAFF] rounded-2xl p-6">
            <h2 className="text-xl font-extrabold text-[#1A1A2E] mb-3">
              Resumen: tu checklist de A/B testing
            </h2>
            <ol className="list-decimal list-inside space-y-2 text-sm text-[#6B7280] leading-relaxed">
              <li>Formula una hipótesis clara antes de tocar cualquier elemento.</li>
              <li>Prioriza con ICE: headline &gt; CTA &gt; hero &gt; social proof.</li>
              <li>Cambia <strong>un solo elemento</strong> por test.</li>
              <li>Ejecuta al menos 14 días y espera 100+ conversiones por variante.</li>
              <li>No declares ganador sin 95&nbsp;% de significancia estadística.</li>
              <li>Documenta cada test en un repositorio de aprendizajes.</li>
              <li>Itera: el ganador se convierte en el nuevo control para el siguiente test.</li>
            </ol>
          </div>
        </section>

        {/* CTA */}
        <section className="mb-14">
          <div className="bg-gradient-to-br from-[#7B2CBF] to-[#9D4EDD] rounded-2xl p-8 text-center text-white">
            <h2 className="text-2xl font-extrabold mb-3">Deja de adivinar. Empieza a testear.</h2>
            <p className="text-purple-100 mb-6 max-w-lg mx-auto leading-relaxed">
              Con LandForge generas 3 variantes de tu landing en 90 segundos con IA. Publica, mide y quédate con la que convierte más. Sin necesidad de diseñador, sin semanas de espera.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/precios" className="inline-block bg-white text-[#7B2CBF] font-bold px-6 py-3 rounded-xl hover:bg-purple-50 transition">Ver planes desde 0 &euro;</Link>
              <Link href="/blog/como-crear-landing-page-alta-conversion" className="inline-block border border-white/40 text-white font-bold px-6 py-3 rounded-xl hover:bg-white/10 transition">Leer guía de creación</Link>
            </div>
          </div>
        </section>

        {/* S9: FAQ */}
        <section id="faq" className="mb-14">
          <h2 className="text-2xl font-extrabold text-[#1A1A2E] mb-6">Preguntas frecuentes sobre A/B testing en landing pages</h2>
          <div className="space-y-3">
            <details className="group border border-[#E0AAFF] rounded-xl overflow-hidden">
              <summary className="cursor-pointer px-5 py-4 font-semibold text-[#1A1A2E] bg-[#FAF5FF] group-open:bg-[#F3E8FF] transition">&iquest;Cuánto tiempo debe durar un A/B test en una landing page?</summary>
              <div className="px-5 py-4 text-sm text-[#6B7280] leading-relaxed">Un mínimo de 14 días completos para capturar variaciones por día de la semana (el comportamiento del lunes es distinto al del sábado). Además, necesitas al menos 100 conversiones por variante para alcanzar significancia estadística del 95&nbsp;%. Si tu tráfico es bajo, el test puede necesitar 4-6 semanas. Nunca detengas un test antes de alcanzar ambos criterios.</div>
            </details>
            <details className="group border border-[#E0AAFF] rounded-xl overflow-hidden">
              <summary className="cursor-pointer px-5 py-4 font-semibold text-[#1A1A2E] bg-[#FAF5FF] group-open:bg-[#F3E8FF] transition">&iquest;Qué elemento de mi landing page debo testear primero?</summary>
              <div className="px-5 py-4 text-sm text-[#6B7280] leading-relaxed">El headline (H1). Es lo primero que ve el visitante y tiene el mayor impacto potencial en conversiones (entre 10&nbsp;% y 50&nbsp;% de cambio). Después del headline, prioriza el CTA (texto, color y posición) y la hero section. Usa el framework ICE de la sección 2 de esta guía para puntuar tus ideas de test y priorizar por impacto.</div>
            </details>
            <details className="group border border-[#E0AAFF] rounded-xl overflow-hidden">
              <summary className="cursor-pointer px-5 py-4 font-semibold text-[#1A1A2E] bg-[#FAF5FF] group-open:bg-[#F3E8FF] transition">&iquest;Cuántas variantes debo testear a la vez?</summary>
              <div className="px-5 py-4 text-sm text-[#6B7280] leading-relaxed">Para un A/B test clásico, solo 2 variantes: control (A) y variante (B), con un único cambio entre ellas. Si quieres probar más combinaciones, necesitas un test multivariante, lo que requiere significativamente más tráfico. Con herramientas como LandForge puedes generar múltiples variantes rápidamente, pero ejecútalas como tests secuenciales si no tienes el tráfico para un multivariante.</div>
            </details>
            <details className="group border border-[#E0AAFF] rounded-xl overflow-hidden">
              <summary className="cursor-pointer px-5 py-4 font-semibold text-[#1A1A2E] bg-[#FAF5FF] group-open:bg-[#F3E8FF] transition">&iquest;Puedo hacer A/B testing con poco tráfico?</summary>
              <div className="px-5 py-4 text-sm text-[#6B7280] leading-relaxed">Sí, pero con ajustes. Enfócate en cambios grandes y estructurales (no microajustes), usa tests secuenciales (una variante durante 2 semanas, luego la otra) en lugar de simultáneos, y acepta niveles de confianza del 90&nbsp;% en vez del 95&nbsp;%. También puedes usar la estrategia de iteración rápida: genera múltiples variantes con LandForge, lanza cada una durante un periodo, y quédate con la de mejor rendimiento.</div>
            </details>
            <details className="group border border-[#E0AAFF] rounded-xl overflow-hidden">
              <summary className="cursor-pointer px-5 py-4 font-semibold text-[#1A1A2E] bg-[#FAF5FF] group-open:bg-[#F3E8FF] transition">&iquest;Google Optimize sigue disponible para A/B testing?</summary>
              <div className="px-5 py-4 text-sm text-[#6B7280] leading-relaxed">No. Google Optimize fue descontinuado oficialmente en septiembre de 2023. Las alternativas principales en 2026 son VWO (ideal para equipos medianos), Optimizely (enterprise), AB Tasty (eCommerce europeo) y Unbounce (con SmartTraffic para landing pages). LandForge está desarrollando funcionalidades nativas de A/B testing para Q2 2026, mientras tanto permite la iteración rápida mediante generación de variantes con IA.</div>
            </details>
          </div>
        </section>

        {/* Internal links footer */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-[#1A1A2E] mb-4">Sigue explorando</h2>
          <div className="flex flex-wrap gap-3">
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href} className="inline-block bg-[#F3E8FF] text-[#7B2CBF] text-sm font-medium px-4 py-2 rounded-full hover:bg-[#E0AAFF] transition">
                {link.label}
              </Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
