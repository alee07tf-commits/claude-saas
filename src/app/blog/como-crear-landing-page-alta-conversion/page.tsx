import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cómo Crear una Landing Page (2026)",
  description:
    "Guía paso a paso para crear landing pages que convierten. Estructura, copywriting, CTA, velocidad de carga y chatbot de ventas. Con ejemplos reales.",
  keywords: [
    "como crear landing page alta conversion",
    "crear landing page que convierte",
    "estructura landing page perfecta",
    "landing page alta conversion 2026",
    "guia landing page conversion",
  ],
  alternates: {
    canonical: "https://landforge.digital/blog/como-crear-landing-page-alta-conversion",
  },
  openGraph: {
    title: "Cómo Crear una Landing Page (2026) | LandForge",
    description:
      "Guía paso a paso para crear landing pages que convierten. Estructura, copywriting, CTA, velocidad de carga y chatbot de ventas. Con ejemplos reales.",
    url: "https://landforge.digital/blog/como-crear-landing-page-alta-conversion",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Cómo Crear una Landing Page de Alta Conversión en 2026 (Guía Completa)",
  description: "Guía paso a paso con la estructura exacta para crear landing pages que convierten: copywriting, CTA, velocidad y chatbot IA.",
  author: { "@type": "Person", name: "Alejandro Bethencourt", url: "https://landforge.digital/sobre-nosotros", jobTitle: "Fundador de LandForge", sameAs: "https://www.linkedin.com/in/alejandro-bethencourt-rodr%C3%ADguez/" },
  datePublished: "2026-02-15",
  dateModified: "2026-03-25",
  image: "https://landforge.digital/og-image.png",
  publisher: { "@type": "Organization", name: "LandForge", logo: { "@type": "ImageObject", url: "https://landforge.digital/logo.png" } },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cuál es la estructura ideal de una landing page de alta conversión?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La estructura óptima tiene 7 secciones: 1) Hero con propuesta de valor clara y CTA visible, 2) Social proof (logos, números, testimonios), 3) Sección del problema (pain points), 4) Solución y beneficios (cómo funciona), 5) Comparativa o diferenciadores vs alternativas, 6) Testimonios detallados con resultado específico, 7) CTA final con garantía o reducción de riesgo. Esta estructura sigue el modelo AIDA adaptado para SaaS y servicios B2B.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuántos CTAs debe tener una landing page?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Una landing page de alta conversión debe tener un único CTA dominante que se repita 3-4 veces a lo largo de la página (hero, tras los beneficios, tras testimonios y en el footer). Tener múltiples CTAs diferentes (reservar una demo Y suscribirse Y descargar) genera confusión y diluye la conversión. El principio es: una página, una acción.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto tiempo tarda en crearse una landing page de alta conversión?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Con un desarrollador web y diseñador: 1-2 semanas. Con un constructor visual como Elementor: 1-3 días. Con LandForge y su IA generativa: 30 segundos para la landing base + 1 hora para revisiones. El tiempo de construcción no es el cuello de botella; el cuello de botella es el copywriting y la definición de la propuesta de valor, que LandForge también ayuda a definir con su encuesta inteligente.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://landforge.digital" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://landforge.digital/blog" },
    { "@type": "ListItem", position: 3, name: "Cómo crear una landing page de alta conversión", item: "https://landforge.digital/blog/como-crear-landing-page-alta-conversion" },
  ],
};

const pasos = [
  {
    num: "01",
    title: "Define la Propuesta de Valor Única (UVP) antes de escribir una sola letra",
    content: "El error número uno en landing pages es empezar a diseñar antes de tener el UVP claro. Tu UVP responde en una frase: ¿qué haces, para quién y cuál es el beneficio concreto? Mala UVP: 'Somos una agencia de marketing digital con 10 años de experiencia'. Buena UVP: 'Creamos landing pages que generan un 40% más de leads para clínicas dentales, en 7 días.'",
    tip: "Fórmula: [Acción] + [Resultado concreto y medible] + [Para quién] + [En qué tiempo o con qué diferencial]",
  },
  {
    num: "02",
    title: "Estructura el Hero con la fórmula H1 Dual (SEO + CRO)",
    content: "El hero es la sección más importante: el 60% de los usuarios no hace scroll si el hero no les engancha. La técnica del H1 Dual (BigSEO Módulo 57) consiste en usar un título principal con la keyword SEO (para Google) y un subtítulo orientado al beneficio emocional (para el usuario). Ejemplo: H1: 'Generador de Landing Pages con IA' (keyword SEO). Subtítulo: 'Tu landing lista para vender en 30 segundos. Sin código. Con chatbot de ventas incluido.'",
    tip: "El CTA debe estar visible sin hacer scroll en el 80% de los dispositivos. Usa Analytics para verificar.",
  },
  {
    num: "03",
    title: "El Social Proof debe aparecer en los primeros 3 scrolls",
    content: "La prueba social (testimonios, logos de clientes, valoraciones, número de usuarios, prensa) no debe reservarse para el final de la página. En landing pages de alta conversión, el social proof aparece inmediatamente después del hero, antes de hablar de funcionalidades. Por qué: el usuario aún no confía en ti. Los datos sociales activan la heurística de 'si otros lo usan, debe funcionar' antes de que el escéptico interno tome el control.",
    tip: "Un testimonio con nombre, foto, empresa y resultado concreto ('Pasé de 3% a 12% de conversión en 6 semanas') vale 10 veces más que 50 estrellas sin contexto.",
  },
  {
    num: "04",
    title: "Copywriting de dolor antes de solución (framework PAS)",
    content: "El framework PAS (Problema → Agitación → Solución) es la estructura de copy más efectiva para landing pages de servicios y SaaS. Primero describes el problema con el lenguaje exacto que usa el cliente ('Pasas horas en Canva y la landing sigue pareciendo de 2015'). Luego agitas las consecuencias ('Mientras tanto, cada visita que se va sin convertir es dinero que regales a la competencia'). Solo entonces presentas la solución.",
    tip: "Usa las palabras exactas de tus clientes reales en los testimonios. El mejor copy no se inventa, se copia directamente de la boca del cliente.",
  },
  {
    num: "05",
    title: "Velocidad de carga: el factor invisible que destruye conversiones",
    content: "Cada segundo adicional de carga reduce la conversión un 7% (Google, 2023). Una landing que tarda 4 segundos en cargar puede estar perdiendo el 21% de sus posibles conversiones antes de que el usuario vea una sola letra del copy. Checklist técnico: imágenes en WebP con lazy load, fuentes cargadas con next/font, scripts de terceros diferidos con strategy='lazyOnload', sin render-blocking JS en el critical path.",
    tip: "Objetivo: LCP < 2.5 segundos. Verifica con PageSpeed Insights antes de lanzar cualquier campaña de tráfico.",
  },
  {
    num: "06",
    title: "Chatbot de ventas IA: el factor diferencial que el 90% aún no usa",
    content: "El 73% de los visitantes abandona sin contactar porque su duda principal no está respondida en la landing. Un chatbot de ventas IA (entrenado con el contenido de tu negocio, no un bot genérico) actúa como ese vendedor que siempre está disponible: responde en segundos sobre precio, proceso, casos de uso específicos y objeciones comunes. Esto solo puede funcionar si el chatbot tiene contexto real del negocio, no si lanza respuestas predefinidas.",
    tip: "LandForge activa Forgi automáticamente en cada landing, entrenado con el contenido del negocio. Sin configuración adicional.",
  },
  {
    num: "07",
    title: "CTA final con reducción de riesgo percibido",
    content: "El último CTA de la landing debe ir acompañado de elementos que eliminen el riesgo percibido: garantía de devolución, prueba gratuita sin tarjeta, cancelación en cualquier momento, precio transparente. Mala fórmula: 'Contratar ahora — 299€/mes'. Buena fórmula: 'Empezar gratis — 14 días de prueba, sin tarjeta, cancela cuando quieras'. La reducción de riesgo puede aumentar la conversión un 30-50% en el CTA final.",
    tip: "La línea de texto bajo el botón principal ('Sin tarjeta · Cancela cuando quieras') es una de las mejores inversiones de copywriting que puedes hacer.",
  },
];

export default function ComoCrearLandingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="min-h-screen bg-[#FAFAFA] text-[#1A1A2E] font-sans">
        <main>
          <article className="max-w-3xl mx-auto px-6 pt-32 pb-20">

            {/* Breadcrumb visible */}
            <nav className="text-xs text-[#6B7280] mb-8 flex items-center gap-2">
              <Link href="/" className="hover:text-[#9D4EDD] transition">Inicio</Link>
              <span>›</span>
              <Link href="/blog" className="hover:text-[#9D4EDD] transition">Blog</Link>
              <span>›</span>
              <span className="text-[#1A1A2E]">Cómo crear landing page alta conversión</span>
            </nav>

            {/* HERO DEL ARTÍCULO */}
            <div className="mb-10">
              <p className="text-xs font-bold uppercase tracking-[2px] text-[#9D4EDD] mb-4">Guía Definitiva · TOFU · Prioridad Alta</p>
              <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-6">
                Cómo crear una landing page de alta conversión en 2026: la guía definitiva con IA
              </h1>
              <p className="text-lg text-[#6B7280] leading-relaxed mb-6">
                El 73% de las landing pages convierte por debajo del 2%. Las que superan el 10% no tienen un secreto misterioso: siguen una estructura concreta, aplican un copywriting basado en datos reales del cliente y reducen la fricción técnica al mínimo. Esta guía te da exactamente eso.
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-[#6B7280]">
                <span>📅 Febrero 2026 (actualizado Marzo 2026)</span>
                <span>⏱️ 10 min de lectura</span>
                <Link href="/sobre-nosotros" className="hover:underline">✍️ Alejandro Bethencourt</Link> <span className="text-[#6B7280]">— Fundador de LandForge</span>
              </div>
            </div>

            {/* ÍNDICE */}
            <div className="bg-[#F3E8FF] border border-[#E0AAFF] rounded-2xl p-6 mb-12">
              <p className="font-bold text-sm mb-3 uppercase tracking-wider text-[#9D4EDD]">Lo que aprenderás en esta guía</p>
              <ol className="space-y-1.5 text-sm">
                {pasos.map((p, i) => (
                  <li key={p.num}>
                    <a href={`#paso-${p.num}`} className="inline-flex gap-2 hover:text-[#9D4EDD] transition-colors">
                      <span className="text-[#9D4EDD] font-bold">{i + 1}.</span>{p.title}
                    </a>
                  </li>
                ))}
              </ol>
            </div>

            {/* MÉTRICAS CLAVE */}
            <div className="bg-[#1A1A2E] text-white rounded-2xl p-8 mb-12">
              <p className="font-bold text-[#E0AAFF] text-sm mb-6 uppercase tracking-wider">Los datos que debes conocer antes de empezar</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  ["2.35%", "CR medio de landing pages B2B"],
                  ["11.45%", "CR del top 25% de landing pages"],
                  ["73%", "Usuarios que abandonan sin contactar"],
                  ["30s", "Tiempo para crear landing con LandForge IA"],
                ].map(([v, l]) => (
                  <div key={l} className="text-center">
                    <div className="text-2xl font-extrabold text-[#9D4EDD] mb-1">{v}</div>
                    <div className="text-white/60 text-xs">{l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* LOS 7 PASOS */}
            <div className="space-y-14">
              {pasos.map((paso) => (
                <section key={paso.num} id={`paso-${paso.num}`}>
                  <div className="flex gap-5 items-start mb-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center font-mono font-bold text-lg border-2 border-[#9D4EDD] bg-[#F3E8FF] text-[#9D4EDD]">
                      {paso.num}
                    </div>
                    <h2 className="text-xl font-extrabold leading-tight pt-1.5">{paso.title}</h2>
                  </div>
                  <p className="text-[#6B7280] leading-relaxed mb-4">{paso.content}</p>
                  <div className="bg-[#F3E8FF] border border-[#E0AAFF] rounded-xl px-5 py-3.5">
                    <span className="text-xs font-extrabold text-[#9D4EDD] uppercase tracking-wider">💡 Pro Tip: </span>
                    <span className="text-sm text-[#6B7280]">{paso.tip}</span>
                  </div>
                </section>
              ))}
            </div>

            {/* SECCIÓN CTA — INTEGRADA EN EL CONTENIDO */}
            <section className="mt-16 rounded-2xl p-8" style={{ background: "linear-gradient(135deg, #9D4EDD 0%, #4C0099 100%)" }}>
              <h2 className="text-2xl font-extrabold text-white mb-4">¿Y si la IA hiciera todo esto automáticamente?</h2>
              <p className="text-[#E0AAFF] leading-relaxed mb-6">LandForge aplica todos estos principios (UVP claro, H1 Dual, social proof, PAS, velocidad, chatbot IA) en cada landing que genera. En 30 segundos, sin tener que leer esta guía cada vez.</p>
              <ol className="space-y-2 text-[#E0AAFF] text-sm mb-6">
                <li><span className="text-white font-bold">1.</span> Completa la encuesta de tu negocio (5 minutos)</li>
                <li><span className="text-white font-bold">2.</span> La IA genera la landing aplicando todos los pasos de esta guía</li>
                <li><span className="text-white font-bold">3.</span> Forgi se activa como chatbot de ventas entrenado con tu contenido</li>
                <li><span className="text-white font-bold">4.</span> Publicas y empiezas a recibir leads</li>
              </ol>
              <Link href="/register" className="inline-block bg-white text-[#9D4EDD] font-bold text-lg px-8 py-4 rounded-2xl hover:-translate-y-1 transition shadow-xl">
                Crear mi landing de alta conversión →
              </Link>
            </section>

            {/* FAQ */}
            <section className="mt-14">
              <h2 className="text-2xl font-extrabold mb-8">Preguntas frecuentes sobre landing pages de alta conversión</h2>
              <div className="divide-y divide-gray-100">
                {[
                  { q: "¿Cuál es la estructura ideal de una landing page de alta conversión?", a: "7 secciones: Hero (UVP + CTA), Social Proof, Dolor/Problema, Solución/Beneficios, Comparativa, Testimonios con resultado y CTA Final con reducción de riesgo." },
                  { q: "¿Cuántos CTAs debe tener una landing page?", a: "Un único CTA dominante repetido 3-4 veces. Múltiples CTAs diferentes diluyen la conversión. Una página, una acción." },
                  { q: "¿Cuánto tiempo tarda en crearse una landing page de alta conversión?", a: "Con desarrollador: 1-2 semanas. Con Elementor: 1-3 días. Con LandForge IA: 30 segundos. El cuello de botella no es la construcción, es la definición del UVP y el copy, que LandForge también ayuda a definir." },
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
                <Link href="/blog/que-es-una-landing-page" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">→ Qué es una Landing Page</Link>
                <Link href="/blog/chatbot-ventas-para-web" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">→ Chatbot de Ventas para tu Web</Link>
                <Link href="/features/forgi-chatbot" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">→ Forgi Chatbot IA</Link>
                <Link href="/blog/como-aumentar-conversion-landing-page" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">→ Aumentar Conversión Landing</Link>
              </div>
            </div>

          </article>
        </main>
      </div>
    </>
  );
}
