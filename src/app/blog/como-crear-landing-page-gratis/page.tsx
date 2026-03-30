import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Crear Landing Page Gratis: 5 Formas Sin Codigo",
  description:
    "Aprende a crear una landing page gratis sin programar. Comparamos 5 herramientas gratuitas y te mostramos cual es la mejor opcion en 2026.",
  keywords: [
    "crear landing page gratis",
    "landing page gratis sin programar",
    "herramientas landing page gratuitas",
    "hacer landing page sin codigo",
    "landing page gratis 2026",
  ],
  alternates: {
    canonical: "/blog/como-crear-landing-page-gratis",
  },
  openGraph: {
    title: "Crear Landing Page Gratis: 5 Formas Sin Codigo | LandForge",
    description:
      "Aprende a crear una landing page gratis sin programar. Comparamos 5 herramientas gratuitas y te mostramos cual es la mejor opcion en 2026.",
    url: "/blog/como-crear-landing-page-gratis",
    type: "article",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://landforge.digital" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://landforge.digital/blog" },
    { "@type": "ListItem", position: 3, name: "Crear Landing Page Gratis", item: "https://landforge.digital/blog/como-crear-landing-page-gratis" },
  ],
};

const blogPostingSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Crear Landing Page Gratis: 5 Formas Sin Codigo en 2026",
  description:
    "Guia practica con 5 metodos para crear landing pages gratis sin programar. Comparativa detallada de herramientas gratuitas.",
  author: {
    "@type": "Person",
    name: "Alejandro Bethencourt",
    url: "https://landforge.digital/sobre-nosotros",
    jobTitle: "Fundador de LandForge",
    sameAs: "https://www.linkedin.com/in/alejandro-bethencourt-rodr%C3%ADguez/",
  },
  datePublished: "2026-03-29",
  dateModified: "2026-03-29",
  image: "https://landforge.digital/og-crear-landing-gratis.jpg",
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
      name: "¿Es posible crear una landing page profesional gratis?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Si, es posible crear una landing page profesional gratis con herramientas como LandForge (plan Free), Carrd o Google Sites. La clave esta en elegir una herramienta que ofrezca plantillas optimizadas para conversion y no solo un editor generico. LandForge genera el copy y la estructura con IA, lo que permite obtener resultados profesionales sin experiencia en diseno ni copywriting.",
      },
    },
    {
      "@type": "Question",
      name: "¿Que limitaciones tienen las herramientas gratuitas para landing pages?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Las principales limitaciones de los planes gratuitos son: dominio personalizado (suelen usar subdominios del proveedor), numero de paginas (generalmente 1-3), analiticas avanzadas (solo metricas basicas), integraciones con terceros (limitadas o inexistentes) y eliminacion de la marca del proveedor. Para un proyecto serio, eventualmente necesitaras un plan de pago.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cual es la mejor herramienta gratuita para crear landing pages?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "LandForge es la mejor opcion gratuita en 2026 porque es la unica que genera el copy, la estructura y activa un chatbot de ventas con IA. Su plan Free permite crear 1 landing page completa sin tarjeta de credito. Carrd es una buena alternativa si solo necesitas una pagina estatica simple.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuando vale la pena pagar por un builder de landing pages?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Vale la pena pagar cuando necesitas mas de 1-2 landing pages, cuando quieres tu propio dominio, cuando necesitas A/B testing, cuando quieres integraciones con tu CRM o email marketing, o cuando tu negocio depende de la conversion de esas paginas. El coste de un builder (desde 49 euros al mes) se amortiza con la primera conversion adicional que consigues.",
      },
    },
  ],
};

export default function ComoCrearLandingPageGratis() {
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
              <p className="text-xs font-bold uppercase tracking-[2px] text-[#9D4EDD] mb-4">TOFU Informacional · LandForge Blog</p>
              <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-6">
                Como Crear una Landing Page Gratis: 5 Formas Sin Codigo en 2026
              </h1>
              <p className="text-[#6B7280] text-lg leading-relaxed">
                <strong className="text-[#1A1A2E]">Crear una landing page gratis</strong> y sin programar ya no es un sueno: en 2026 tienes al menos 5 herramientas que te permiten hacerlo. Pero no todas son iguales. Algunas te dan un editor basico; otras generan el copy por ti con inteligencia artificial. En esta guia comparamos las 5 mejores opciones gratuitas para que elijas la que se adapta a tu proyecto.
              </p>
              <div className="mt-4 flex gap-4 text-sm text-[#6B7280]">
                <span>Marzo 2026</span>
                <span>10 min de lectura</span>
                <Link href="/sobre-nosotros" className="hover:underline">Alejandro Bethencourt</Link> <span className="text-[#6B7280]">— Fundador de LandForge</span>
              </div>
            </div>

            <hr className="border-[#E0AAFF] my-10" />

            {/* INDICE */}
            <div className="bg-[#F3E8FF] border border-[#E0AAFF] rounded-2xl p-6 mb-10">
              <p className="font-bold text-sm mb-3 uppercase tracking-wider text-[#9D4EDD]">Contenido de este articulo</p>
              <ol className="space-y-1.5 text-sm">
                {[
                  { label: "¿Se puede crear una landing profesional gratis?", anchor: "#se-puede" },
                  { label: "LandForge Free: landing con IA en 30 segundos", anchor: "#landforge" },
                  { label: "Carrd: paginas simples y rapidas", anchor: "#carrd" },
                  { label: "Google Sites: la opcion de Google", anchor: "#google-sites" },
                  { label: "HTML templates gratuitos", anchor: "#html-templates" },
                  { label: "Canva: diseno visual sin codigo", anchor: "#canva" },
                  { label: "Tabla comparativa de las 5 herramientas", anchor: "#comparativa" },
                  { label: "Cuando vale la pena pagar", anchor: "#cuando-pagar" },
                  { label: "Preguntas frecuentes", anchor: "#faq" },
                ].map((item, i) => (
                  <li key={item.anchor}>
                    <a href={item.anchor} className="inline-flex gap-2 hover:text-[#9D4EDD] transition-colors">
                      <span className="text-[#9D4EDD] font-bold">{i + 1}.</span>{item.label}
                    </a>
                  </li>
                ))}
              </ol>
            </div>

            {/* SECCION 1 */}
            <section id="se-puede">
              <h2 className="text-2xl font-extrabold mb-4">1. ¿Se puede crear una landing page profesional gratis?</h2>
              <p className="text-[#6B7280] leading-relaxed mb-4">
                La respuesta corta: si, pero con matices. Una <strong className="text-[#1A1A2E]">landing page gratis sin programar</strong> puede ser perfectamente funcional para validar una idea, captar los primeros leads o lanzar una campana de bajo presupuesto.
              </p>
              <p className="text-[#6B7280] leading-relaxed mb-4">
                Lo que no puedes esperar de una herramienta 100% gratuita es: dominio propio (usaras un subdominio tipo tunombre.carrd.co), analiticas avanzadas, A/B testing, o integraciones con CRM. Pero para empezar, es mas que suficiente.
              </p>
              <div className="bg-[#1A1A2E] text-white rounded-2xl p-6 mb-6">
                <p className="font-bold text-[#E0AAFF] text-sm mb-2">Dato clave:</p>
                <p className="text-white/80 text-sm leading-relaxed">El 68% de las startups que validan su idea lo hacen con una landing page gratuita antes de invertir en desarrollo. No necesitas un sitio perfecto — necesitas un sitio que convierta lo suficiente para demostrar demanda.</p>
              </div>
              <p className="text-[#6B7280] leading-relaxed mb-4">
                Veamos las 5 formas de <strong className="text-[#1A1A2E]">hacer una landing page sin codigo</strong>, ordenadas de mejor a peor opcion segun nuestra experiencia.
              </p>
            </section>

            {/* SECCION 2 — LANDFORGE */}
            <section id="landforge" className="mt-12">
              <h2 className="text-2xl font-extrabold mb-4">2. LandForge Free: genera tu landing con IA en 30 segundos</h2>
              <div className="bg-[#FAF5FF] border border-[#E0AAFF] rounded-2xl p-6 mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-[#9D4EDD] text-white text-xs font-bold px-3 py-1 rounded-full">RECOMENDADO</span>
                  <span className="text-sm text-[#6B7280]">Plan gratuito disponible</span>
                </div>
                <p className="text-[#6B7280] leading-relaxed mb-4">
                  LandForge es un generador de landing pages con inteligencia artificial. A diferencia de los builders tradicionales donde tu tienes que disenar y escribir todo, con LandForge describes tu negocio en un parrafo y la IA genera la estructura completa: headline, beneficios, prueba social, FAQ y CTA.
                </p>
                <p className="text-[#6B7280] leading-relaxed mb-4">
                  Ademas, el <Link href="/features/forgi-editor" className="text-[#9D4EDD] font-semibold hover:underline">editor Forgi</Link> permite editar cada seccion despues de la generacion, y el chatbot de ventas Forgi se activa automaticamente para atender a tus visitantes 24/7.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                  <p className="text-xs font-bold text-green-700 mb-2">Pros</p>
                  <ul className="space-y-1.5 text-sm text-[#6B7280]">
                    <li className="flex gap-2"><span className="text-green-600 font-bold">+</span>IA genera copy y estructura automaticamente</li>
                    <li className="flex gap-2"><span className="text-green-600 font-bold">+</span>Chatbot de ventas incluido gratis</li>
                    <li className="flex gap-2"><span className="text-green-600 font-bold">+</span>1 landing completa en el plan Free</li>
                    <li className="flex gap-2"><span className="text-green-600 font-bold">+</span>No necesitas experiencia en diseno ni copywriting</li>
                    <li className="flex gap-2"><span className="text-green-600 font-bold">+</span>Optimizada para conversion desde el inicio</li>
                  </ul>
                </div>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <p className="text-xs font-bold text-amber-700 mb-2">Contras</p>
                  <ul className="space-y-1.5 text-sm text-[#6B7280]">
                    <li className="flex gap-2"><span className="text-amber-600 font-bold">-</span>Solo 1 landing en el plan Free</li>
                    <li className="flex gap-2"><span className="text-amber-600 font-bold">-</span>Dominio propio requiere plan de pago (desde 49€/mes)</li>
                    <li className="flex gap-2"><span className="text-amber-600 font-bold">-</span>A/B testing solo en planes superiores</li>
                  </ul>
                </div>
              </div>

              <p className="text-[#6B7280] leading-relaxed mb-4">
                <strong className="text-[#1A1A2E]">Ideal para:</strong> emprendedores, freelancers y agencias que quieren una landing profesional en minutos sin tocar codigo. Si necesitas mas landing pages o funciones avanzadas, consulta los <Link href="/precios" className="text-[#9D4EDD] font-semibold hover:underline">planes de pago desde 49€/mes</Link>.
              </p>
            </section>

            {/* SECCION 3 — CARRD */}
            <section id="carrd" className="mt-12">
              <h2 className="text-2xl font-extrabold mb-4">3. Carrd: paginas simples y rapidas</h2>
              <p className="text-[#6B7280] leading-relaxed mb-4">
                Carrd es un builder minimalista que permite crear paginas de una sola seccion (one-page) de forma gratuita. Es extremadamente simple: eliges una plantilla, editas el texto y publicas. No tiene IA, no genera copy, y las opciones de diseno son limitadas.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                  <p className="text-xs font-bold text-green-700 mb-2">Pros</p>
                  <ul className="space-y-1.5 text-sm text-[#6B7280]">
                    <li className="flex gap-2"><span className="text-green-600 font-bold">+</span>Gratuito para 3 paginas</li>
                    <li className="flex gap-2"><span className="text-green-600 font-bold">+</span>Interfaz ultra simple</li>
                    <li className="flex gap-2"><span className="text-green-600 font-bold">+</span>Paginas ligeras y rapidas</li>
                    <li className="flex gap-2"><span className="text-green-600 font-bold">+</span>Buenas plantillas basicas</li>
                  </ul>
                </div>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <p className="text-xs font-bold text-amber-700 mb-2">Contras</p>
                  <ul className="space-y-1.5 text-sm text-[#6B7280]">
                    <li className="flex gap-2"><span className="text-amber-600 font-bold">-</span>Sin IA ni generacion automatica de copy</li>
                    <li className="flex gap-2"><span className="text-amber-600 font-bold">-</span>Sin chatbot ni integraciones avanzadas</li>
                    <li className="flex gap-2"><span className="text-amber-600 font-bold">-</span>Subdominio carrd.co en plan Free</li>
                    <li className="flex gap-2"><span className="text-amber-600 font-bold">-</span>Sin formularios avanzados ni A/B testing</li>
                  </ul>
                </div>
              </div>

              <p className="text-[#6B7280] leading-relaxed mb-4">
                <strong className="text-[#1A1A2E]">Ideal para:</strong> paginas personales, portfolios simples o landing pages de una sola seccion. Para una comparativa mas detallada, lee <Link href="/comparar/landforge-vs-carrd" className="text-[#9D4EDD] font-semibold hover:underline">LandForge vs Carrd</Link>.
              </p>
            </section>

            {/* SECCION 4 — GOOGLE SITES */}
            <section id="google-sites" className="mt-12">
              <h2 className="text-2xl font-extrabold mb-4">4. Google Sites: la opcion gratuita de Google</h2>
              <p className="text-[#6B7280] leading-relaxed mb-4">
                Google Sites es el builder gratuito de Google. Es 100% gratis sin limites de paginas y se integra con Google Workspace. Pero no fue disenado para landing pages de conversion: no tiene formularios nativos optimizados, el diseno es generico y no hay ninguna funcionalidad de CRO.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                  <p className="text-xs font-bold text-green-700 mb-2">Pros</p>
                  <ul className="space-y-1.5 text-sm text-[#6B7280]">
                    <li className="flex gap-2"><span className="text-green-600 font-bold">+</span>100% gratuito sin limites</li>
                    <li className="flex gap-2"><span className="text-green-600 font-bold">+</span>Integracion nativa con Google Workspace</li>
                    <li className="flex gap-2"><span className="text-green-600 font-bold">+</span>Dominio propio gratuito (via Google Domains)</li>
                    <li className="flex gap-2"><span className="text-green-600 font-bold">+</span>Hosting incluido en Google</li>
                  </ul>
                </div>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <p className="text-xs font-bold text-amber-700 mb-2">Contras</p>
                  <ul className="space-y-1.5 text-sm text-[#6B7280]">
                    <li className="flex gap-2"><span className="text-amber-600 font-bold">-</span>Diseno generico, no pensado para conversion</li>
                    <li className="flex gap-2"><span className="text-amber-600 font-bold">-</span>Sin formularios de captacion avanzados</li>
                    <li className="flex gap-2"><span className="text-amber-600 font-bold">-</span>Sin analiticas de conversion</li>
                    <li className="flex gap-2"><span className="text-amber-600 font-bold">-</span>Aspecto poco profesional para negocios</li>
                  </ul>
                </div>
              </div>

              <p className="text-[#6B7280] leading-relaxed mb-4">
                <strong className="text-[#1A1A2E]">Ideal para:</strong> proyectos internos de empresa, documentacion publica o paginas informativas donde la conversion no es el objetivo principal.
              </p>
            </section>

            {/* SECCION 5 — HTML TEMPLATES */}
            <section id="html-templates" className="mt-12">
              <h2 className="text-2xl font-extrabold mb-4">5. HTML templates gratuitos: la opcion tecnica</h2>
              <p className="text-[#6B7280] leading-relaxed mb-4">
                Plataformas como HTML5 UP, TemplateMo o Start Bootstrap ofrecen plantillas HTML/CSS gratuitas que puedes descargar y subir a cualquier hosting. Es la opcion mas flexible pero requiere conocimientos tecnicos minimos para editar el codigo y desplegar.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                  <p className="text-xs font-bold text-green-700 mb-2">Pros</p>
                  <ul className="space-y-1.5 text-sm text-[#6B7280]">
                    <li className="flex gap-2"><span className="text-green-600 font-bold">+</span>Control total del codigo</li>
                    <li className="flex gap-2"><span className="text-green-600 font-bold">+</span>Sin dependencia de terceros</li>
                    <li className="flex gap-2"><span className="text-green-600 font-bold">+</span>Carga ultra rapida (HTML estatico)</li>
                    <li className="flex gap-2"><span className="text-green-600 font-bold">+</span>Diseno profesional (las buenas plantillas)</li>
                  </ul>
                </div>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <p className="text-xs font-bold text-amber-700 mb-2">Contras</p>
                  <ul className="space-y-1.5 text-sm text-[#6B7280]">
                    <li className="flex gap-2"><span className="text-amber-600 font-bold">-</span>Requiere saber editar HTML/CSS</li>
                    <li className="flex gap-2"><span className="text-amber-600 font-bold">-</span>Necesitas hosting propio (Netlify, Vercel o similar)</li>
                    <li className="flex gap-2"><span className="text-amber-600 font-bold">-</span>Sin formularios backend (hay que integrar servicios)</li>
                    <li className="flex gap-2"><span className="text-amber-600 font-bold">-</span>Sin analiticas ni A/B testing integrado</li>
                  </ul>
                </div>
              </div>

              <p className="text-[#6B7280] leading-relaxed mb-4">
                <strong className="text-[#1A1A2E]">Ideal para:</strong> desarrolladores o personas con conocimientos tecnicos que quieren control total y no les importa dedicar mas tiempo a la configuracion.
              </p>
            </section>

            {/* SECCION 6 — CANVA */}
            <section id="canva" className="mt-12">
              <h2 className="text-2xl font-extrabold mb-4">6. Canva: diseno visual sin codigo</h2>
              <p className="text-[#6B7280] leading-relaxed mb-4">
                Canva Websites es una funcionalidad reciente que permite crear paginas web simples desde el editor de diseno de Canva. La ventaja es el drag-and-drop visual con miles de elementos graficos. La desventaja es que no esta pensado para conversion: no hay formularios nativos, no hay A/B testing y el SEO es muy limitado.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                  <p className="text-xs font-bold text-green-700 mb-2">Pros</p>
                  <ul className="space-y-1.5 text-sm text-[#6B7280]">
                    <li className="flex gap-2"><span className="text-green-600 font-bold">+</span>Editor visual intuitivo</li>
                    <li className="flex gap-2"><span className="text-green-600 font-bold">+</span>Miles de elementos graficos y fotos stock</li>
                    <li className="flex gap-2"><span className="text-green-600 font-bold">+</span>Publicacion gratuita con subdominio</li>
                    <li className="flex gap-2"><span className="text-green-600 font-bold">+</span>Buenas plantillas de diseno</li>
                  </ul>
                </div>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <p className="text-xs font-bold text-amber-700 mb-2">Contras</p>
                  <ul className="space-y-1.5 text-sm text-[#6B7280]">
                    <li className="flex gap-2"><span className="text-amber-600 font-bold">-</span>No pensado para landing pages de conversion</li>
                    <li className="flex gap-2"><span className="text-amber-600 font-bold">-</span>SEO muy limitado (sin meta tags avanzados)</li>
                    <li className="flex gap-2"><span className="text-amber-600 font-bold">-</span>Sin formularios de captacion nativos</li>
                    <li className="flex gap-2"><span className="text-amber-600 font-bold">-</span>Carga lenta por exceso de elementos graficos</li>
                  </ul>
                </div>
              </div>

              <p className="text-[#6B7280] leading-relaxed mb-4">
                <strong className="text-[#1A1A2E]">Ideal para:</strong> presentaciones visuales, portfolios o paginas donde el diseno importa mas que la conversion.
              </p>
            </section>

            {/* SECCION 7 — TABLA COMPARATIVA */}
            <section id="comparativa" className="mt-12">
              <h2 className="text-2xl font-extrabold mb-4">7. Herramientas landing page gratuitas: tabla comparativa</h2>
              <p className="text-[#6B7280] leading-relaxed mb-4">
                Para que puedas decidir de un vistazo, aqui tienes la comparativa de las 5 <strong className="text-[#1A1A2E]">herramientas para crear landing pages gratis</strong>:
              </p>
              <div className="overflow-x-auto rounded-2xl border border-[#E0AAFF] mb-6">
                <table className="w-full text-sm">
                  <thead className="bg-[#FAF5FF] border-b border-[#E0AAFF]">
                    <tr>
                      <th className="p-3 text-left font-bold text-[#9D4EDD]">Herramienta</th>
                      <th className="p-3 text-left font-bold text-[#6B7280]">IA</th>
                      <th className="p-3 text-left font-bold text-[#6B7280]">Chatbot</th>
                      <th className="p-3 text-left font-bold text-[#6B7280]">CRO</th>
                      <th className="p-3 text-left font-bold text-[#6B7280]">Dificultad</th>
                      <th className="p-3 text-left font-bold text-[#6B7280]">Paginas gratis</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {[
                      ["LandForge", "Si", "Si", "Si", "Muy facil", "1"],
                      ["Carrd", "No", "No", "No", "Facil", "3"],
                      ["Google Sites", "No", "No", "No", "Facil", "Ilimitadas"],
                      ["HTML Templates", "No", "No", "No", "Media-Alta", "Ilimitadas"],
                      ["Canva", "Parcial", "No", "No", "Facil", "5"],
                    ].map(([tool, ia, chat, cro, diff, pages]) => (
                      <tr key={tool} className={tool === "LandForge" ? "bg-[#FAF5FF]" : ""}>
                        <td className="p-3 font-semibold">{tool}</td>
                        <td className={`p-3 ${ia === "Si" ? "text-green-600 font-bold" : "text-[#6B7280]"}`}>{ia}</td>
                        <td className={`p-3 ${chat === "Si" ? "text-green-600 font-bold" : "text-[#6B7280]"}`}>{chat}</td>
                        <td className={`p-3 ${cro === "Si" ? "text-green-600 font-bold" : "text-[#6B7280]"}`}>{cro}</td>
                        <td className="p-3 text-[#6B7280]">{diff}</td>
                        <td className="p-3 text-[#6B7280]">{pages}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-[#6B7280] leading-relaxed mb-4">
                Para un analisis mas profundo de todas las herramientas del mercado (no solo las gratuitas), lee nuestra guia completa de <Link href="/blog/mejores-herramientas-crear-landing-pages" className="text-[#9D4EDD] font-semibold hover:underline">mejores herramientas para crear landing pages</Link>.
              </p>
            </section>

            {/* SECCION 8 — CUANDO PAGAR */}
            <section id="cuando-pagar" className="mt-12">
              <h2 className="text-2xl font-extrabold mb-4">8. Cuando vale la pena pagar por un builder de landing pages</h2>
              <p className="text-[#6B7280] leading-relaxed mb-4">
                Las herramientas gratuitas son perfectas para empezar, pero llega un momento en que necesitas mas. Estas son las senales de que es hora de pasar a un plan de pago:
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "Necesitas mas de 1-2 landing pages activas simultaneamente",
                  "Quieres usar tu propio dominio (sin subdominio del proveedor)",
                  "Necesitas A/B testing para optimizar la conversion",
                  "Quieres integrar con tu CRM, email marketing o Google Ads",
                  "Tu negocio depende directamente de la conversion de esas paginas",
                  "Necesitas analiticas avanzadas (heatmaps, scroll depth, embudos)",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-[#6B7280]"><span className="text-[#9D4EDD] font-bold flex-shrink-0">→</span>{item}</li>
                ))}
              </ul>
              <div className="bg-[#1A1A2E] text-white rounded-2xl p-6 mb-6">
                <p className="font-bold text-[#E0AAFF] text-sm mb-2">La cuenta es simple:</p>
                <p className="text-white/80 text-sm leading-relaxed">Si una landing page te genera un solo cliente adicional al mes, y ese cliente vale mas de 49€, el plan Starter de LandForge se paga solo desde el primer dia. Un plan Agency a 97€/mes con multiples landings y chatbot incluido tiene un ROI aun mayor para agencias que gestionan clientes.</p>
              </div>
              <p className="text-[#6B7280] leading-relaxed">
                Consulta todos los <Link href="/precios" className="text-[#9D4EDD] font-semibold hover:underline">planes y precios de LandForge</Link> para encontrar el que se ajusta a tu negocio. Desde el plan Free hasta Agency Pro a 197€/mes.
              </p>
            </section>

            {/* CTA NATIVO */}
            <section className="mt-14 rounded-2xl p-8 text-center" style={{ background: "linear-gradient(135deg, #9D4EDD 0%, #4C0099 100%)" }}>
              <h2 className="text-2xl font-extrabold text-white mb-4">Crea tu primera landing page gratis ahora</h2>
              <p className="text-[#E0AAFF] mb-6 max-w-lg mx-auto">
                Describe tu negocio y LandForge genera la estructura, el copy y activa el chatbot de ventas Forgi automaticamente. Sin tarjeta de credito, sin codigo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/register" className="inline-block bg-white text-[#9D4EDD] font-bold text-lg px-8 py-4 rounded-2xl hover:-translate-y-1 transition shadow-xl">
                  Crear mi landing gratis
                </Link>
                <Link href="/precios" className="inline-block border-2 border-white text-white font-bold text-lg px-8 py-4 rounded-2xl hover:-translate-y-1 transition">
                  Ver planes y precios
                </Link>
              </div>
            </section>

            {/* FAQ VISIBLE */}
            <section id="faq" className="mt-14">
              <h2 className="text-2xl font-extrabold mb-8">Preguntas frecuentes sobre landing pages gratis</h2>
              <div className="divide-y divide-gray-100">
                {[
                  { q: "¿Es posible crear una landing page profesional gratis?", a: "Si. Herramientas como LandForge (plan Free) permiten crear una landing profesional con IA, chatbot incluido y optimizacion de conversion sin pagar nada. La clave esta en elegir una herramienta pensada para conversion, no un editor generico." },
                  { q: "¿Que limitaciones tienen las herramientas gratuitas?", a: "Las principales limitaciones son: dominio personalizado (usaras subdominios), numero de paginas (1-3 generalmente), analiticas avanzadas limitadas e integraciones con terceros reducidas. Para un proyecto serio, eventualmente necesitaras un plan de pago." },
                  { q: "¿Cual es la mejor herramienta gratuita para crear una landing?", a: "LandForge es la mejor opcion gratuita en 2026 porque genera copy y estructura con IA, incluye chatbot de ventas y esta optimizada para conversion. Carrd es una alternativa solida para paginas estaticas simples." },
                  { q: "¿Cuando vale la pena pagar por una herramienta?", a: "Cuando necesitas mas de 1-2 landing pages, dominio propio, A/B testing, integraciones con CRM o tu negocio depende de la conversion. El coste (desde 49€/mes en LandForge) se amortiza con la primera conversion adicional." },
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
                <Link href="/precios" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">Planes y Precios (Plan Free)</Link>
                <Link href="/blog/mejores-herramientas-crear-landing-pages" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">Mejores Herramientas Landing Pages</Link>
                <Link href="/features/forgi-editor" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">Forgi Editor: Crea con IA</Link>
                <Link href="/comparar/landforge-vs-carrd" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">LandForge vs Carrd</Link>
              </div>
            </div>

          </article>
        </main>
      </div>
    </>
  );
}
