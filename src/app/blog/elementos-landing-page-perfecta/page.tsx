import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Los 12 Elementos de una Landing Page Perfecta",
  description:
    "Descubre los 12 elementos esenciales que toda landing page necesita para convertir. Guia con ejemplos, errores comunes y checklist.",
  keywords: [
    "elementos de una landing page",
    "partes de una landing page",
    "estructura landing page",
    "anatomia de una landing page",
    "que debe tener una landing page",
  ],
  alternates: {
    canonical: "/blog/elementos-landing-page-perfecta",
  },
  openGraph: {
    title: "Los 12 Elementos de una Landing Page Perfecta | LandForge",
    description:
      "Descubre los 12 elementos esenciales que toda landing page necesita para convertir. Guia con ejemplos, errores comunes y checklist.",
    url: "/blog/elementos-landing-page-perfecta",
    type: "article",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://landforge.digital" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://landforge.digital/blog" },
    { "@type": "ListItem", position: 3, name: "Elementos de una Landing Page Perfecta", item: "https://landforge.digital/blog/elementos-landing-page-perfecta" },
  ],
};

const blogPostingSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Los 12 Elementos de una Landing Page Perfecta en 2026",
  description:
    "Guia completa sobre los 12 elementos esenciales de una landing page: headline, CTA, prueba social, formulario, FAQ y mas. Con ejemplos y errores comunes.",
  author: {
    "@type": "Person",
    name: "Alejandro Bethencourt",
    url: "https://landforge.digital/sobre-nosotros",
    jobTitle: "Fundador de LandForge",
    sameAs: "https://www.linkedin.com/in/alejandro-bethencourt-rodr%C3%ADguez/",
  },
  datePublished: "2026-03-29",
  dateModified: "2026-03-29",
  image: "https://landforge.digital/og-elementos-landing-page.jpg",
  publisher: {
    "@type": "Organization",
    name: "LandForge",
    url: "https://landforge.digital",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cuantas secciones debe tener una landing page?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Una landing page efectiva suele tener entre 5 y 12 secciones, dependiendo del producto y el nivel de conciencia de la audiencia. Lo minimo recomendable es: hero con headline y CTA, seccion de beneficios, prueba social, explicacion del producto y CTA final. Para productos de ticket alto o audiencias frias, necesitaras mas secciones para construir confianza.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cual es el elemento mas importante de una landing page?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El headline es el elemento mas critico. El 80% de los visitantes solo lee el headline antes de decidir si sigue leyendo o abandona la pagina. Un headline que comunica el beneficio principal en menos de 10 palabras puede duplicar o triplicar la tasa de conversion respecto a uno generico.",
      },
    },
    {
      "@type": "Question",
      name: "¿Necesito incluir todas las secciones en mi landing page?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No necesariamente. Los 5 elementos imprescindibles son: headline con beneficio, CTA claro, al menos una forma de prueba social, seccion de beneficios y formulario o boton de accion. El resto (FAQ, garantia, urgencia, thank you page) mejoran la conversion pero no son obligatorios para empezar.",
      },
    },
    {
      "@type": "Question",
      name: "¿Como se si mi landing page esta completa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tu landing esta completa cuando un visitante puede responder estas 4 preguntas sin salir de la pagina: que es esto, por que me importa, por que deberia confiar, y que hago ahora. Si falta la respuesta a cualquiera de estas preguntas, te falta un elemento critico.",
      },
    },
  ],
};

export default function ElementosLandingPagePerfecta() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="min-h-screen bg-[#FAFAFA] text-[#1A1A2E] font-sans">
        <main>
          <article className="max-w-3xl mx-auto px-6 pt-32 pb-20">

            {/* ── HERO ── */}
            <div className="mb-8">
              <p className="text-xs font-bold uppercase tracking-[2px] text-[#9D4EDD] mb-4">TOFU Educacional · LandForge Blog</p>
              <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-6">
                Los 12 Elementos de una Landing Page Perfecta: Anatomia Completa
              </h1>
              <p className="text-[#6B7280] text-lg leading-relaxed">
                Cada <strong className="text-[#1A1A2E]">elemento de una landing page</strong> tiene una funcion especifica: convencer, generar confianza o eliminar objeciones. Si falta uno, la pagina pierde efectividad. Si sobra uno, distrae al visitante. En esta guia te explicamos los 12 elementos esenciales, por que importa cada uno, y los errores que arruinan su efecto.
              </p>
              <div className="mt-4 flex gap-4 text-sm text-[#6B7280]">
                <span>Marzo 2026</span>
                <span>11 min de lectura</span>
                <Link href="/sobre-nosotros" className="hover:underline">Alejandro Bethencourt</Link> <span className="text-[#6B7280]">— Fundador de LandForge</span>
              </div>
            </div>

            <hr className="border-[#E0AAFF] my-10" />

            {/* INDICE */}
            <div className="bg-[#F3E8FF] border border-[#E0AAFF] rounded-2xl p-6 mb-10">
              <p className="font-bold text-sm mb-3 uppercase tracking-wider text-[#9D4EDD]">Los 12 elementos</p>
              <ol className="space-y-1.5 text-sm grid md:grid-cols-2 gap-x-6">
                {[
                  { label: "Headline (titular)", anchor: "#headline" },
                  { label: "Subheadline", anchor: "#subheadline" },
                  { label: "Hero image o video", anchor: "#hero-image" },
                  { label: "Seccion de beneficios", anchor: "#beneficios" },
                  { label: "Prueba social", anchor: "#prueba-social" },
                  { label: "CTA (Call to Action)", anchor: "#cta" },
                  { label: "Formulario de captacion", anchor: "#formulario" },
                  { label: "Urgencia y escasez", anchor: "#urgencia" },
                  { label: "Garantia", anchor: "#garantia" },
                  { label: "FAQ (Preguntas frecuentes)", anchor: "#faq-seccion" },
                  { label: "Footer minimo", anchor: "#footer" },
                  { label: "Thank You Page", anchor: "#thank-you" },
                ].map((item, i) => (
                  <li key={item.anchor}>
                    <a href={item.anchor} className="inline-flex gap-2 hover:text-[#9D4EDD] transition-colors">
                      <span className="text-[#9D4EDD] font-bold">{i + 1}.</span>{item.label}
                    </a>
                  </li>
                ))}
              </ol>
            </div>

            {/* INTRO */}
            <section>
              <h2 className="text-2xl font-extrabold mb-4">Estructura de una landing page: por que importa el orden</h2>
              <p className="text-[#6B7280] leading-relaxed mb-4">
                La <strong className="text-[#1A1A2E]">estructura de una landing page</strong> no es aleatoria. Sigue una secuencia psicologica: captar atencion, generar interes, construir confianza, eliminar objeciones y provocar la accion. Si alteras esta secuencia o te saltas un paso, pierdes conversion.
              </p>
              <p className="text-[#6B7280] leading-relaxed mb-4">
                Los 12 elementos que vamos a ver estan ordenados de arriba a abajo, exactamente como deben aparecer en tu landing. Si quieres ver como se aplican en la practica, consulta nuestros <Link href="/blog/ejemplos-landing-pages-que-convierten" className="text-[#9D4EDD] font-semibold hover:underline">15 ejemplos de landing pages que convierten</Link>.
              </p>
            </section>

            {/* ELEMENTO 1 — HEADLINE */}
            <section id="headline" className="mt-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[#9D4EDD] text-white font-bold text-sm w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">1</span>
                <h2 className="text-2xl font-extrabold">Headline: el titular que decide si se quedan o se van</h2>
              </div>
              <p className="text-[#6B7280] leading-relaxed mb-3">
                El headline es el <strong className="text-[#1A1A2E]">elemento mas importante de tu landing page</strong>. El 80% de los visitantes solo lee el titulo antes de decidir si sigue leyendo. Si tu headline no comunica el beneficio principal en menos de 10 palabras, has perdido la mayoria de tu trafico antes de empezar.
              </p>
              <div className="bg-white rounded-2xl border border-gray-100 p-5 mb-3">
                <p className="text-xs font-bold text-green-700 mb-2">Ejemplo que funciona:</p>
                <p className="text-[#1A1A2E] font-bold text-lg">&laquo;Mas pacientes para tu clinica dental, sin Google Ads&raquo;</p>
                <p className="text-[#6B7280] text-sm mt-1">Beneficio claro + audiencia especifica + diferenciador</p>
              </div>
              <div className="bg-white rounded-2xl border border-gray-100 p-5 mb-3">
                <p className="text-xs font-bold text-red-600 mb-2">Error comun:</p>
                <p className="text-[#1A1A2E] font-bold text-lg">&laquo;La mejor solucion de marketing digital para tu negocio&raquo;</p>
                <p className="text-[#6B7280] text-sm mt-1">Generico, sin beneficio concreto, podria ser de cualquier empresa</p>
              </div>
            </section>

            {/* ELEMENTO 2 — SUBHEADLINE */}
            <section id="subheadline" className="mt-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[#9D4EDD] text-white font-bold text-sm w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">2</span>
                <h2 className="text-2xl font-extrabold">Subheadline: la expansion del beneficio</h2>
              </div>
              <p className="text-[#6B7280] leading-relaxed mb-3">
                El subheadline amplifica el headline. Si el headline es la promesa, el subheadline es el &laquo;como&raquo;. Debe ser mas largo (1-2 frases) y anadir contexto sin repetir lo mismo. Un buen subheadline responde la pregunta natural que genera el headline.
              </p>
              <div className="bg-white rounded-2xl border border-gray-100 p-5 mb-3">
                <p className="text-xs font-bold text-green-700 mb-2">Ejemplo:</p>
                <p className="text-[#1A1A2E] font-semibold">Headline: &laquo;Crea landing pages que convierten en 30 segundos&raquo;</p>
                <p className="text-[#6B7280] text-sm mt-1">Subheadline: &laquo;Describe tu negocio y nuestra IA genera la estructura, el copy y activa un chatbot de ventas automaticamente. Sin programar.&raquo;</p>
              </div>
              <div className="bg-white rounded-2xl border border-gray-100 p-5 mb-3">
                <p className="text-xs font-bold text-red-600 mb-2">Error comun:</p>
                <p className="text-[#6B7280] text-sm">Repetir el headline con otras palabras, o incluir un parrafo de 5 lineas que nadie va a leer.</p>
              </div>
            </section>

            {/* ELEMENTO 3 — HERO IMAGE */}
            <section id="hero-image" className="mt-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[#9D4EDD] text-white font-bold text-sm w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">3</span>
                <h2 className="text-2xl font-extrabold">Hero image o video: muestra, no cuentes</h2>
              </div>
              <p className="text-[#6B7280] leading-relaxed mb-3">
                El hero visual es lo primero que ve el visitante junto con el headline. Puede ser una captura real del producto, un video de demostracion, o una imagen que represente la transformacion del cliente. Las fotos de stock genericas destruyen la credibilidad.
              </p>
              <div className="bg-white rounded-2xl border border-gray-100 p-5 mb-3">
                <p className="text-xs font-bold text-green-700 mb-2">Lo que funciona:</p>
                <p className="text-[#6B7280] text-sm">Screenshot real del producto en uso, video demo de 30 segundos, foto del resultado final (antes/despues).</p>
              </div>
              <div className="bg-white rounded-2xl border border-gray-100 p-5 mb-3">
                <p className="text-xs font-bold text-red-600 mb-2">Error comun:</p>
                <p className="text-[#6B7280] text-sm">Usar fotos de stock de personas sonriendo frente a un ordenador. El visitante detecta el stock instantaneamente y pierde confianza.</p>
              </div>
            </section>

            {/* ELEMENTO 4 — BENEFICIOS */}
            <section id="beneficios" className="mt-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[#9D4EDD] text-white font-bold text-sm w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">4</span>
                <h2 className="text-2xl font-extrabold">Seccion de beneficios: que gana el visitante</h2>
              </div>
              <p className="text-[#6B7280] leading-relaxed mb-3">
                No confundas caracteristicas con beneficios. Una caracteristica es &laquo;editor drag-and-drop&raquo;. Un beneficio es &laquo;crea tu landing page sin programar en 30 segundos&raquo;. Los beneficios hablan de la transformacion del usuario; las caracteristicas hablan del producto.
              </p>
              <p className="text-[#6B7280] leading-relaxed mb-3">
                Lo ideal es presentar 3-5 beneficios en un formato visual facil de escanear: iconos + titulo corto + descripcion de una linea. El visitante debe poder entender el valor de tu producto en 5 segundos de escaneo visual.
              </p>
              <div className="bg-white rounded-2xl border border-gray-100 p-5 mb-3">
                <p className="text-xs font-bold text-red-600 mb-2">Error comun:</p>
                <p className="text-[#6B7280] text-sm">Listar 15 caracteristicas tecnicas en parrafos densos. El visitante no lee — escanea. Si no puede escanear tus beneficios, no los ve.</p>
              </div>
            </section>

            {/* ELEMENTO 5 — PRUEBA SOCIAL */}
            <section id="prueba-social" className="mt-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[#9D4EDD] text-white font-bold text-sm w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">5</span>
                <h2 className="text-2xl font-extrabold">Prueba social: por que deberian confiar en ti</h2>
              </div>
              <p className="text-[#6B7280] leading-relaxed mb-3">
                La prueba social es el elemento que transforma la promesa en evidencia. Sin ella, tu landing page es una declaracion de intenciones. Con ella, es una demostracion de resultados.
              </p>
              <p className="text-[#6B7280] leading-relaxed mb-3">
                Tipos de prueba social ordenados por efectividad: 1) Testimonios con nombre, foto y resultado numerico. 2) Logos de clientes conocidos. 3) Metricas de uso (10.000+ usuarios). 4) Menciones en medios. 5) Valoraciones y estrellas.
              </p>
              <div className="bg-white rounded-2xl border border-gray-100 p-5 mb-3">
                <p className="text-xs font-bold text-red-600 mb-2">Error comun:</p>
                <p className="text-[#6B7280] text-sm">&laquo;200+ clientes satisfechos&raquo; sin nombres, sin fotos, sin resultados. Si no es verificable, no genera confianza.</p>
              </div>
            </section>

            {/* ELEMENTO 6 — CTA */}
            <section id="cta" className="mt-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[#9D4EDD] text-white font-bold text-sm w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">6</span>
                <h2 className="text-2xl font-extrabold">CTA (Call to Action): el boton que define la conversion</h2>
              </div>
              <p className="text-[#6B7280] leading-relaxed mb-3">
                El CTA es la accion que quieres que el visitante realice. Debe ser un unico boton con un texto que describa exactamente lo que pasa al hacer clic. Las landing pages con un solo CTA convierten un 266% mas que las que tienen varios.
              </p>
              <div className="grid md:grid-cols-2 gap-3 mb-3">
                <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                  <p className="text-xs font-bold text-green-700 mb-2">CTAs que convierten</p>
                  <ul className="space-y-1 text-sm text-[#6B7280]">
                    <li>&laquo;Reservar mi consulta gratuita&raquo;</li>
                    <li>&laquo;Crear mi landing gratis&raquo;</li>
                    <li>&laquo;Descargar la guia ahora&raquo;</li>
                    <li>&laquo;Empezar mi prueba de 14 dias&raquo;</li>
                  </ul>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                  <p className="text-xs font-bold text-red-600 mb-2">CTAs que no funcionan</p>
                  <ul className="space-y-1 text-sm text-[#6B7280]">
                    <li>&laquo;Enviar&raquo;</li>
                    <li>&laquo;Contactar&raquo;</li>
                    <li>&laquo;Saber mas&raquo;</li>
                    <li>&laquo;Haz clic aqui&raquo;</li>
                  </ul>
                </div>
              </div>
              <p className="text-[#6B7280] leading-relaxed mb-3">
                La regla de oro: repite el CTA al menos 3 veces en la pagina (arriba, al medio y al final). No es repetitivo — es accesibilidad. El visitante debe poder actuar sin tener que buscar el boton.
              </p>
            </section>

            {/* ELEMENTO 7 — FORMULARIO */}
            <section id="formulario" className="mt-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[#9D4EDD] text-white font-bold text-sm w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">7</span>
                <h2 className="text-2xl font-extrabold">Formulario de captacion: menos campos, mas conversion</h2>
              </div>
              <p className="text-[#6B7280] leading-relaxed mb-3">
                Cada campo adicional en tu formulario reduce la conversion entre un 10% y un 25%. Para la mayoria de landing pages, email es suficiente. Si necesitas nombre, anade un segundo campo. Mas de 3 campos requiere una justificacion muy solida.
              </p>
              <div className="bg-[#1A1A2E] text-white rounded-2xl p-6 mb-3">
                <p className="font-bold text-[#E0AAFF] text-sm mb-2">Dato de conversion:</p>
                <p className="text-white/80 text-sm leading-relaxed">Reducir un formulario de 6 campos a 3 campos puede aumentar la conversion un 66%. Reducirlo de 3 a 1 puede anadir otro 30%. Si no necesitas absolutamente un dato, no lo pidas.</p>
              </div>
              <div className="bg-white rounded-2xl border border-gray-100 p-5 mb-3">
                <p className="text-xs font-bold text-red-600 mb-2">Error comun:</p>
                <p className="text-[#6B7280] text-sm">Pedir telefono, empresa, cargo, presupuesto y mensaje en un formulario de captacion inicial. Esos datos los pides despues, cuando el lead ya esta cualificado.</p>
              </div>
            </section>

            {/* ELEMENTO 8 — URGENCIA */}
            <section id="urgencia" className="mt-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[#9D4EDD] text-white font-bold text-sm w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">8</span>
                <h2 className="text-2xl font-extrabold">Urgencia y escasez: el empujon final</h2>
              </div>
              <p className="text-[#6B7280] leading-relaxed mb-3">
                La urgencia y la escasez activan el sesgo de aversion a la perdida: el miedo a perder algo es mas potente que el deseo de ganarlo. Pero tiene que ser real. La urgencia falsa (un countdown timer que se reinicia cada vez) destruye la confianza.
              </p>
              <p className="text-[#6B7280] leading-relaxed mb-3">
                Formas legitimas de urgencia: oferta con fecha de expiracion real, numero limitado de plazas (si es verdad), bonus temporales, subida de precio programada. Si no tienes urgencia real, no la inventes — mejor refuerza los beneficios.
              </p>
              <div className="bg-white rounded-2xl border border-gray-100 p-5 mb-3">
                <p className="text-xs font-bold text-red-600 mb-2">Error comun:</p>
                <p className="text-[#6B7280] text-sm">Countdown timers que se reinician cada vez que visitas la pagina. El visitante lo nota y pierde toda la confianza que has construido.</p>
              </div>
            </section>

            {/* ELEMENTO 9 — GARANTIA */}
            <section id="garantia" className="mt-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[#9D4EDD] text-white font-bold text-sm w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">9</span>
                <h2 className="text-2xl font-extrabold">Garantia: eliminar el riesgo percibido</h2>
              </div>
              <p className="text-[#6B7280] leading-relaxed mb-3">
                La garantia invierte el riesgo: en lugar de que el comprador asuma todo el riesgo, lo asume el vendedor. Esto reduce drasticamente la barrera de compra, especialmente para productos o servicios de ticket alto.
              </p>
              <p className="text-[#6B7280] leading-relaxed mb-3">
                Tipos de garantia efectivos: devolucion de dinero (30 o 60 dias), prueba gratuita sin tarjeta, garantia de resultados (&laquo;si no consigues X, te devolvemos el dinero&raquo;). Cuanto mas especifica sea la garantia, mas confianza genera.
              </p>
              <div className="bg-white rounded-2xl border border-gray-100 p-5 mb-3">
                <p className="text-xs font-bold text-red-600 mb-2">Error comun:</p>
                <p className="text-[#6B7280] text-sm">No incluir garantia. El visitante siempre piensa &laquo;¿y si no funciona?&raquo;. Si no contestas esa pregunta, la respuesta que se da a si mismo es &laquo;mejor no arriesgo&raquo;.</p>
              </div>
            </section>

            {/* ELEMENTO 10 — FAQ */}
            <section id="faq-seccion" className="mt-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[#9D4EDD] text-white font-bold text-sm w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">10</span>
                <h2 className="text-2xl font-extrabold">FAQ: resuelve las ultimas objeciones</h2>
              </div>
              <p className="text-[#6B7280] leading-relaxed mb-3">
                La seccion de FAQ no es informativa: es el ultimo muro entre tu visitante y la conversion. Cada pregunta debe corresponder a una objecion real de compra. &laquo;¿Cuanto tarda el envio?&raquo; es informativa. &laquo;¿Que pasa si no funciona para mi negocio?&raquo; es una objecion.
              </p>
              <p className="text-[#6B7280] leading-relaxed mb-3">
                Las mejores FAQ se construyen a partir de las preguntas reales que hacen los clientes antes de comprar. Si no tienes esas preguntas, piensa en las razones por las que alguien NO compraria y responde a cada una. Para landing pages creadas con LandForge, el <Link href="/features/conversion-score" className="text-[#9D4EDD] font-semibold hover:underline">Conversion Score</Link> te indica si tu FAQ esta bien construida.
              </p>
            </section>

            {/* ELEMENTO 11 — FOOTER */}
            <section id="footer" className="mt-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[#9D4EDD] text-white font-bold text-sm w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">11</span>
                <h2 className="text-2xl font-extrabold">Footer minimo: legal sin distracciones</h2>
              </div>
              <p className="text-[#6B7280] leading-relaxed mb-3">
                El footer de una landing page no es igual al footer de una web corporativa. Debe ser minimo: copyright, enlace a politica de privacidad, terminos y condiciones, y datos de contacto basicos. Nada mas. Sin navegacion secundaria, sin redes sociales (que sacarian al visitante de la pagina).
              </p>
              <div className="bg-white rounded-2xl border border-gray-100 p-5 mb-3">
                <p className="text-xs font-bold text-red-600 mb-2">Error comun:</p>
                <p className="text-[#6B7280] text-sm">Copiar el footer completo de la web corporativa con 20 links, iconos de redes sociales y un mapa del sitio. Cada link adicional es una via de escape para el visitante.</p>
              </div>
            </section>

            {/* ELEMENTO 12 — THANK YOU */}
            <section id="thank-you" className="mt-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[#9D4EDD] text-white font-bold text-sm w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">12</span>
                <h2 className="text-2xl font-extrabold">Thank You Page: la conversion no termina en el formulario</h2>
              </div>
              <p className="text-[#6B7280] leading-relaxed mb-3">
                La pagina de agradecimiento es el elemento mas infravalorado de una landing page. No es solo un &laquo;gracias, te contactaremos&raquo;. Es una oportunidad para: 1) Confirmar que la accion se ha completado. 2) Establecer expectativas de siguiente paso. 3) Ofrecer una accion secundaria (compartir, agendar, comprar un upgrade).
              </p>
              <p className="text-[#6B7280] leading-relaxed mb-3">
                Ademas, la Thank You Page es donde colocas el pixel de conversion de Google Ads, Meta Ads o cualquier plataforma de publicidad. Sin ella, no puedes medir el ROI de tus campanas.
              </p>
              <div className="bg-white rounded-2xl border border-gray-100 p-5 mb-3">
                <p className="text-xs font-bold text-red-600 mb-2">Error comun:</p>
                <p className="text-[#6B7280] text-sm">Un simple alert de &laquo;Formulario enviado&raquo; sin pagina de agradecimiento dedicada. Pierdes la oportunidad de reforzar la decision del usuario y de trackear la conversion.</p>
              </div>
            </section>

            {/* CHECKLIST */}
            <section className="mt-12">
              <h2 className="text-2xl font-extrabold mb-4">Checklist: ¿tu landing page esta completa?</h2>
              <p className="text-[#6B7280] leading-relaxed mb-4">
                Usa esta checklist rapida. Si marcas todos los puntos, tu landing tiene las <strong className="text-[#1A1A2E]">partes de una landing page</strong> necesarias para convertir:
              </p>
              <div className="bg-[#FAF5FF] border border-[#E0AAFF] rounded-2xl p-6 mb-6">
                <ul className="space-y-2 text-sm">
                  {[
                    "Headline orientado al beneficio, no al producto",
                    "Subheadline que explica el como",
                    "Imagen o video real (no stock)",
                    "3-5 beneficios en formato escaneable",
                    "Al menos 1 forma de prueba social verificable",
                    "CTA unico, claro, repetido 3 veces",
                    "Formulario con los campos minimos necesarios",
                    "Elemento de urgencia o escasez (si es real)",
                    "Garantia visible",
                    "FAQ que responde objeciones de compra",
                    "Footer minimo sin distracciones",
                    "Thank You Page con siguiente paso y pixel de conversion",
                  ].map((item) => (
                    <li key={item} className="flex gap-3 text-[#6B7280]"><span className="text-[#9D4EDD] font-bold flex-shrink-0">□</span>{item}</li>
                  ))}
                </ul>
              </div>
              <p className="text-[#6B7280] leading-relaxed mb-4">
                Si quieres saber como implementar todo esto paso a paso, nuestra guia de <Link href="/blog/como-crear-landing-page-alta-conversion" className="text-[#9D4EDD] font-semibold hover:underline">como crear una landing page de alta conversion</Link> cubre el proceso completo. Y si quieres aprender a optimizar la que ya tienes, lee <Link href="/blog/como-aumentar-conversion-landing-page" className="text-[#9D4EDD] font-semibold hover:underline">como aumentar la conversion de tu landing page</Link>.
              </p>
            </section>

            {/* CTA NATIVO */}
            <section className="mt-14 rounded-2xl p-8 text-center" style={{ background: "linear-gradient(135deg, #9D4EDD 0%, #4C0099 100%)" }}>
              <h2 className="text-2xl font-extrabold text-white mb-4">Crea una landing con los 12 elementos en 30 segundos</h2>
              <p className="text-[#E0AAFF] mb-6 max-w-lg mx-auto">
                LandForge genera automaticamente todos los elementos: headline, beneficios, prueba social, CTA, FAQ y chatbot de ventas. Describe tu negocio y la IA hace el resto.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/register" className="inline-block bg-white text-[#9D4EDD] font-bold text-lg px-8 py-4 rounded-2xl hover:-translate-y-1 transition shadow-xl">
                  Crear mi landing gratis
                </Link>
                <Link href="/precios" className="inline-block border-2 border-white text-white font-bold text-lg px-8 py-4 rounded-2xl hover:-translate-y-1 transition">
                  Ver planes desde 49€/mes
                </Link>
              </div>
            </section>

            {/* FAQ VISIBLE */}
            <section id="faq" className="mt-14">
              <h2 className="text-2xl font-extrabold mb-8">Preguntas frecuentes sobre elementos de una landing page</h2>
              <div className="divide-y divide-gray-100">
                {[
                  { q: "¿Cuantas secciones debe tener una landing page?", a: "Entre 5 y 12, dependiendo del producto y la audiencia. Lo minimo: hero con headline y CTA, beneficios, prueba social, explicacion del producto y CTA final. Para productos caros o audiencias frias, necesitaras mas secciones para construir confianza." },
                  { q: "¿Cual es el elemento mas importante?", a: "El headline. El 80% de los visitantes solo lee el titulo antes de decidir si sigue. Un headline que comunica el beneficio en menos de 10 palabras puede duplicar la conversion respecto a uno generico." },
                  { q: "¿Necesito incluir todos los 12 elementos?", a: "Los 5 imprescindibles son: headline con beneficio, CTA claro, prueba social, beneficios y formulario. El resto mejora la conversion pero no es obligatorio para empezar. Anade mas elementos segun vayas optimizando." },
                  { q: "¿Como se si mi landing page esta completa?", a: "Tu landing esta completa cuando el visitante puede responder estas 4 preguntas sin salir: que es esto, por que me importa, por que deberia confiar, y que hago ahora. Si falta alguna respuesta, te falta un elemento." },
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
              <p className="font-bold text-sm text-[#6B7280] mb-4">Articulos relacionados</p>
              <div className="flex flex-wrap gap-3">
                <Link href="/blog/como-crear-landing-page-alta-conversion" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">Como Crear Landing de Alta Conversion</Link>
                <Link href="/blog/como-aumentar-conversion-landing-page" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">Como Aumentar la Conversion</Link>
                <Link href="/features/conversion-score" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">Conversion Score de LandForge</Link>
                <Link href="/precios" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">Planes y Precios</Link>
              </div>
            </div>

          </article>
        </main>
      </div>
    </>
  );
}
