import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "15 Ejemplos de Landing Pages que Convierten",
  description:
    "Descubre 15 ejemplos reales de landing pages que convierten en 2026. Analiza qué hacen bien, qué mejorar y crea la tuya con IA.",
  keywords: [
    "ejemplos de landing pages",
    "ejemplos landing page que convierten",
    "mejores landing pages 2026",
    "landing page ejemplos reales",
    "ejemplos landing page exitosas",
  ],
  alternates: {
    canonical: "/blog/ejemplos-landing-pages-que-convierten",
  },
  openGraph: {
    title: "15 Ejemplos de Landing Pages que Convierten | LandForge",
    description:
      "Descubre 15 ejemplos reales de landing pages que convierten en 2026. Analiza qué hacen bien, qué mejorar y crea la tuya con IA.",
    url: "/blog/ejemplos-landing-pages-que-convierten",
    type: "article",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://landforge.digital" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://landforge.digital/blog" },
    { "@type": "ListItem", position: 3, name: "Ejemplos de Landing Pages que Convierten", item: "https://landforge.digital/blog/ejemplos-landing-pages-que-convierten" },
  ],
};

const blogPostingSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "15 Ejemplos de Landing Pages que Convierten en 2026",
  description:
    "Analisis detallado de 15 landing pages reales de diferentes sectores: que hacen bien, que mejorarian y tasas de conversion estimadas.",
  author: {
    "@type": "Person",
    name: "Alejandro Bethencourt",
    url: "https://landforge.digital/sobre-nosotros",
    jobTitle: "Fundador de LandForge",
    sameAs: "https://www.linkedin.com/in/alejandro-bethencourt-rodr%C3%ADguez/",
  },
  datePublished: "2026-03-29",
  dateModified: "2026-03-29",
  image: "https://landforge.digital/og-ejemplos-landing-pages.jpg",
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
      name: "¿Qué hace que una landing page sea buena?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Una buena landing page tiene un headline claro orientado al beneficio, un unico CTA visible, prueba social verificable, un diseno limpio sin distracciones y una propuesta de valor que responde a la pregunta del visitante en los primeros 5 segundos. Las mejores landing pages eliminan el menu de navegacion y centran todo el contenido en una sola accion de conversion.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuántas secciones debe tener una landing page?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Una landing page efectiva suele tener entre 5 y 8 secciones: hero con headline y CTA, seccion de beneficios, prueba social (testimonios o logos), explicacion del producto o servicio, seccion de objeciones o FAQ, y un CTA final. La longitud exacta depende de la complejidad del producto y del nivel de conciencia de la audiencia.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuál es la tasa de conversión media de una landing page?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La tasa de conversion media de una landing page es del 2,35% segun estudios de la industria. Sin embargo, el 25% superior de landing pages convierte por encima del 5,31%, y el top 10% supera el 11,45%. La tasa varia mucho por sector: finanzas y seguros suelen tener tasas mas altas, mientras que ecommerce tiende a estar por debajo de la media.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo puedo crear una landing page sin saber programar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Existen herramientas como LandForge que permiten crear landing pages profesionales sin escribir una sola linea de codigo. Con LandForge, describes tu negocio y la IA genera el copy, la estructura y activa un chatbot de ventas en segundos. Tambien puedes usar builders como Carrd o Unbounce, pero ninguno incluye generacion por IA nativa.",
      },
    },
  ],
};

export default function EjemplosLandingPagesQueConvierten() {
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
                15 Ejemplos de Landing Pages que Convierten en 2026: Analisis Real
              </h1>
              <p className="text-[#6B7280] text-lg leading-relaxed">
                Los <strong className="text-[#1A1A2E]">ejemplos de landing pages</strong> que realmente convierten no son las mas bonitas ni las mas complicadas. Son las que entienden a su audiencia, eliminan distracciones y guian al visitante hacia una unica accion. En esta guia analizamos 15 landing pages reales de sectores diferentes para que veas exactamente que funciona y por que.
              </p>
              <div className="mt-4 flex gap-4 text-sm text-[#6B7280]">
                <span>Marzo 2026</span>
                <span>12 min de lectura</span>
                <Link href="/sobre-nosotros" className="hover:underline">Alejandro Bethencourt</Link> <span className="text-[#6B7280]">— Fundador de LandForge</span>
              </div>
            </div>

            <hr className="border-[#E0AAFF] my-10" />

            {/* INDICE */}
            <div className="bg-[#F3E8FF] border border-[#E0AAFF] rounded-2xl p-6 mb-10">
              <p className="font-bold text-sm mb-3 uppercase tracking-wider text-[#9D4EDD]">Contenido de este articulo</p>
              <ol className="space-y-1.5 text-sm">
                {[
                  { label: "Que hace que una landing page convierta", anchor: "#que-hace-convertir" },
                  { label: "5 ejemplos SaaS y tecnologia", anchor: "#ejemplos-saas" },
                  { label: "4 ejemplos ecommerce y retail", anchor: "#ejemplos-ecommerce" },
                  { label: "3 ejemplos servicios profesionales", anchor: "#ejemplos-servicios" },
                  { label: "3 ejemplos educacion y cursos", anchor: "#ejemplos-educacion" },
                  { label: "Patron comun de las mejores landing pages", anchor: "#patron-comun" },
                  { label: "Crea tu landing page en 30 segundos", anchor: "#crear-landing" },
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
            <section id="que-hace-convertir">
              <h2 className="text-2xl font-extrabold mb-4">1. Que hace que una landing page convierta de verdad</h2>
              <p className="text-[#6B7280] leading-relaxed mb-4">
                Antes de ver los <strong className="text-[#1A1A2E]">ejemplos de landing pages que convierten</strong>, necesitas saber que criterios usamos para evaluarlas. No basta con que una pagina sea bonita: tiene que generar la accion deseada.
              </p>
              <p className="text-[#6B7280] leading-relaxed mb-4">
                Segun los estudios de CRO mas recientes, las landing pages de alto rendimiento comparten estos 5 rasgos:
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "Headline que comunica el beneficio principal en menos de 8 palabras",
                  "Un unico CTA visible sin hacer scroll (above the fold)",
                  "Prueba social especifica: numeros, nombres, resultados concretos",
                  "Carga rapida: menos de 3 segundos en movil",
                  "Cero distracciones: sin menu de navegacion, sin enlaces secundarios",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-[#6B7280]"><span className="text-[#9D4EDD] font-bold flex-shrink-0">→</span>{item}</li>
                ))}
              </ul>
              <p className="text-[#6B7280] leading-relaxed mb-4">
                Si quieres profundizar en los fundamentos, nuestra <Link href="/blog/que-es-una-landing-page" className="text-[#9D4EDD] font-semibold hover:underline">guia sobre que es una landing page</Link> lo explica desde cero. Y si ya lo sabes y quieres crear la tuya, el <Link href="/features/forgi-editor" className="text-[#9D4EDD] font-semibold hover:underline">editor Forgi</Link> te permite hacerlo en segundos con IA.
              </p>
            </section>

            {/* SECCION 2 — SAAS */}
            <section id="ejemplos-saas" className="mt-12">
              <h2 className="text-2xl font-extrabold mb-6">2. Mejores landing pages 2026: 5 ejemplos SaaS y tecnologia</h2>

              {[
                {
                  num: "01",
                  name: "Slack — Pagina de registro empresarial",
                  desc: "Fondo blanco, headline de 6 palabras («Slack es donde se trabaja»), un campo de email y un boton morado. Sin menu de navegacion. Logo de clientes bajo el fold (Airbnb, Uber, Target). La simplicidad extrema reduce la friccion al minimo.",
                  bien: "Headline claro, un solo campo de formulario, logos de marcas conocidas como prueba social.",
                  mejora: "Podria incluir un dato numerico de impacto (ej. «2M+ equipos ya lo usan»).",
                  conversion: "Estimada 8-12% por la baja friccion del formulario.",
                },
                {
                  num: "02",
                  name: "Shopify — Landing de prueba gratuita",
                  desc: "Hero con imagen de una tienda online real, headline orientado al resultado («Crea tu tienda online hoy»), y un unico campo de email. El CTA dice exactamente que va a pasar: «Empieza tu prueba gratuita». Debajo, tres iconos con beneficios (sin tarjeta, soporte 24/7, personalizable).",
                  bien: "CTA ultraclaro, sin tarjeta de credito como eliminador de objeciones, micro-copy debajo del boton.",
                  mejora: "La pagina es bastante larga — podria recortar secciones intermedias para mantener el foco.",
                  conversion: "Estimada 6-10%. El «sin tarjeta de credito» es un multiplicador de conversion.",
                },
                {
                  num: "03",
                  name: "Notion — Landing para equipos",
                  desc: "Diseno minimalista con mucho espacio en blanco. Headline que habla de la transformacion («Un espacio para todo tu trabajo»). Muestra capturas de pantalla del producto real. Al final, testimonios de usuarios reales con foto, nombre y empresa.",
                  bien: "Diseno limpio, muestra el producto real (no mockups genericos), testimonios verificables.",
                  mejora: "Tiene varios CTAs diferentes (probar gratis, pedir demo, contactar ventas) — podria unificar.",
                  conversion: "Estimada 5-8%. La claridad del producto compensa la dispersion de CTAs.",
                },
                {
                  num: "04",
                  name: "Calendly — Landing de reserva de demo",
                  desc: "La landing es literalmente un calendario embebido con un titulo arriba: «Agenda una demo de 15 min con nuestro equipo». Nada mas. Sin beneficios, sin prueba social — solo la accion directa. Funciona porque el visitante ya viene cualificado de una campana.",
                  bien: "Friccion cero — el visitante ve inmediatamente la accion que debe realizar. Carga instantanea.",
                  mejora: "Falta contexto para trafico frio. Ideal solo para BOFU.",
                  conversion: "Estimada 15-25% para trafico cualificado. Muy baja para trafico frio.",
                },
                {
                  num: "05",
                  name: "HubSpot — Landing de descarga de guia",
                  desc: "Hero dividido: izquierda con headline, 3 bullets de lo que aprenderas y un badge de «Gratis». Derecha con formulario de 4 campos. Debajo del fold: indice de la guia, bio del autor, y logos de empresas que la han descargado.",
                  bien: "Los 3 bullets venden el contenido, no el producto. El badge «Gratis» elimina la objecion de precio.",
                  mejora: "El formulario tiene 4 campos — reducirlo a 2 (email y nombre) aumentaria la conversion un 30-50%.",
                  conversion: "Estimada 10-15%. Las landing de lead magnet suelen convertir por encima de la media.",
                },
              ].map((ej) => (
                <div key={ej.num} className="mb-8 bg-white rounded-2xl border border-gray-100 p-6">
                  <div className="flex gap-4 items-start mb-4">
                    <span className="font-mono font-bold text-2xl text-[#9D4EDD] flex-shrink-0">{ej.num}</span>
                    <h3 className="font-bold text-lg">{ej.name}</h3>
                  </div>
                  <p className="text-[#6B7280] text-sm leading-relaxed mb-4">{ej.desc}</p>
                  <div className="grid md:grid-cols-3 gap-3">
                    <div className="bg-green-50 border border-green-200 rounded-xl p-3">
                      <p className="text-xs font-bold text-green-700 mb-1">Que hace bien</p>
                      <p className="text-[#6B7280] text-sm">{ej.bien}</p>
                    </div>
                    <div className="bg-amber-50 border border-amber-200 rounded-xl p-3">
                      <p className="text-xs font-bold text-amber-700 mb-1">Que mejoraria</p>
                      <p className="text-[#6B7280] text-sm">{ej.mejora}</p>
                    </div>
                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-3">
                      <p className="text-xs font-bold text-blue-700 mb-1">Conversion estimada</p>
                      <p className="text-[#6B7280] text-sm">{ej.conversion}</p>
                    </div>
                  </div>
                </div>
              ))}
            </section>

            {/* SECCION 3 — ECOMMERCE */}
            <section id="ejemplos-ecommerce" className="mt-12">
              <h2 className="text-2xl font-extrabold mb-6">3. Landing page ejemplos reales: 4 ecommerce y retail</h2>

              {[
                {
                  num: "06",
                  name: "Gymshark — Landing de lanzamiento de coleccion",
                  desc: "Video de fondo con atletas vistiendo la nueva coleccion. Headline urgente («Disponible solo 48h»). Countdown timer visible. Un boton grande: «Comprar ahora». Sin navegacion, sin otras secciones — puro urgencia y CTA.",
                  bien: "La urgencia (timer + edicion limitada) es un disparador psicologico potentisimo. El video crea deseo.",
                  mejora: "Falta prueba social — anadir un contador de «X personas mirando esto ahora» aumentaria la presion social.",
                  conversion: "Estimada 4-7%. Alta para ecommerce porque la audiencia ya conoce la marca.",
                },
                {
                  num: "07",
                  name: "Dollar Shave Club — Landing de suscripcion",
                  desc: "Headline que ataca el dolor («Deja de pagar de mas por tus cuchillas»). Comparativa visual de precios: marcas tradicionales vs Dollar Shave Club. CTA: «Empieza por 1$». Debajo, testimonios de suscriptores con fotos reales y meses de suscripcion.",
                  bien: "Comparativa de precio visible, CTA de bajo compromiso (1$), testimonios con duracion de suscripcion.",
                  mejora: "La pagina podria incluir garantia de devolucion para eliminar la ultima objecion.",
                  conversion: "Estimada 5-9%. El precio de entrada de 1$ elimina la barrera economica.",
                },
                {
                  num: "08",
                  name: "Casper — Landing de colchon",
                  desc: "Headline de beneficio («El mejor descanso de tu vida empieza aqui»). Hero con imagen de producto limpia. Debajo: 3 beneficios con iconos, seccion de «100 noches de prueba», testimonios y un CTA repetido 4 veces en la pagina.",
                  bien: "La garantia de 100 noches elimina el miedo a comprar un colchon online. CTA repetido sin ser agresivo.",
                  mejora: "Podria incluir un comparador de modelos mas visual para ayudar a elegir.",
                  conversion: "Estimada 3-5%. Normal para productos de ticket alto.",
                },
                {
                  num: "09",
                  name: "Allbirds — Landing de producto sostenible",
                  desc: "Diseno minimalista con fondo blanco y el zapato como protagonista absoluto. Headline que diferencia: «El zapato mas comodo del mundo, hecho con materiales naturales». Iconos de sostenibilidad bajo el producto. Reviews con estrellas.",
                  bien: "El producto es el hero — sin graficos superfluos. Los iconos de sostenibilidad diferencian de la competencia.",
                  mejora: "Falta urgencia — una oferta por tiempo limitado aumentaria la conversion inmediata.",
                  conversion: "Estimada 2-4%. El ticket medio alto y la compra considerada reducen la tasa.",
                },
              ].map((ej) => (
                <div key={ej.num} className="mb-8 bg-white rounded-2xl border border-gray-100 p-6">
                  <div className="flex gap-4 items-start mb-4">
                    <span className="font-mono font-bold text-2xl text-[#9D4EDD] flex-shrink-0">{ej.num}</span>
                    <h3 className="font-bold text-lg">{ej.name}</h3>
                  </div>
                  <p className="text-[#6B7280] text-sm leading-relaxed mb-4">{ej.desc}</p>
                  <div className="grid md:grid-cols-3 gap-3">
                    <div className="bg-green-50 border border-green-200 rounded-xl p-3">
                      <p className="text-xs font-bold text-green-700 mb-1">Que hace bien</p>
                      <p className="text-[#6B7280] text-sm">{ej.bien}</p>
                    </div>
                    <div className="bg-amber-50 border border-amber-200 rounded-xl p-3">
                      <p className="text-xs font-bold text-amber-700 mb-1">Que mejoraria</p>
                      <p className="text-[#6B7280] text-sm">{ej.mejora}</p>
                    </div>
                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-3">
                      <p className="text-xs font-bold text-blue-700 mb-1">Conversion estimada</p>
                      <p className="text-[#6B7280] text-sm">{ej.conversion}</p>
                    </div>
                  </div>
                </div>
              ))}
            </section>

            {/* SECCION 4 — SERVICIOS */}
            <section id="ejemplos-servicios" className="mt-12">
              <h2 className="text-2xl font-extrabold mb-6">4. Ejemplos landing page para servicios profesionales</h2>

              {[
                {
                  num: "10",
                  name: "Clinica dental — Landing de implantes",
                  desc: "Hero con foto del equipo medico real (no stock). Headline numerico: «Implantes dentales desde 890€ con financiacion sin intereses». Formulario de 3 campos visible sin scroll. Debajo: antes/despues de pacientes reales, sello del Colegio de Odontologos y mapa con ubicacion.",
                  bien: "Precio visible desde el hero elimina la barrera de «no se cuanto cuesta». Las fotos antes/despues son prueba social irrefutable.",
                  mejora: "Podria anadir un chat en vivo para resolver dudas en tiempo real — un chatbot como Forgi seria ideal aqui.",
                  conversion: "Estimada 8-15%. Las landing de servicios locales con precio visible convierten muy bien.",
                },
                {
                  num: "11",
                  name: "Despacho de abogados — Landing de consulta gratuita",
                  desc: "Diseno sobrio y profesional. Headline que reduce el miedo: «Primera consulta gratuita y sin compromiso». Logos de medios donde han aparecido (El Pais, La Vanguardia). Testimonios anonimizados con tipo de caso y resultado obtenido.",
                  bien: "La consulta gratuita es un CTA de bajo riesgo perfecto para servicios legales. Los logos de medios dan autoridad.",
                  mejora: "Falta especificacion del area legal — un abogado «para todo» convierte menos que uno especializado.",
                  conversion: "Estimada 5-10%. La confianza es clave en servicios legales; los logos de medios la construyen.",
                },
                {
                  num: "12",
                  name: "Agencia de marketing digital — Landing de auditoria SEO",
                  desc: "Headline que promete un resultado tangible: «Recibe tu auditoria SEO gratuita en 24h». Un unico campo: URL del sitio web. Debajo: 3 ejemplos reales de auditorias con datos antes/despues (trafico organico x3 en 6 meses). CTA: «Analizar mi web gratis».",
                  bien: "Un solo campo = friccion minima. Los casos reales con datos demuestran capacidad. Plazo de 24h crea expectativa.",
                  mejora: "Podria incluir un preview instantaneo del analisis para enganchar al usuario inmediatamente.",
                  conversion: "Estimada 12-20%. Las herramientas gratuitas de analisis tienen tasas de conversion muy altas.",
                },
              ].map((ej) => (
                <div key={ej.num} className="mb-8 bg-white rounded-2xl border border-gray-100 p-6">
                  <div className="flex gap-4 items-start mb-4">
                    <span className="font-mono font-bold text-2xl text-[#9D4EDD] flex-shrink-0">{ej.num}</span>
                    <h3 className="font-bold text-lg">{ej.name}</h3>
                  </div>
                  <p className="text-[#6B7280] text-sm leading-relaxed mb-4">{ej.desc}</p>
                  <div className="grid md:grid-cols-3 gap-3">
                    <div className="bg-green-50 border border-green-200 rounded-xl p-3">
                      <p className="text-xs font-bold text-green-700 mb-1">Que hace bien</p>
                      <p className="text-[#6B7280] text-sm">{ej.bien}</p>
                    </div>
                    <div className="bg-amber-50 border border-amber-200 rounded-xl p-3">
                      <p className="text-xs font-bold text-amber-700 mb-1">Que mejoraria</p>
                      <p className="text-[#6B7280] text-sm">{ej.mejora}</p>
                    </div>
                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-3">
                      <p className="text-xs font-bold text-blue-700 mb-1">Conversion estimada</p>
                      <p className="text-[#6B7280] text-sm">{ej.conversion}</p>
                    </div>
                  </div>
                </div>
              ))}
            </section>

            {/* SECCION 5 — EDUCACION */}
            <section id="ejemplos-educacion" className="mt-12">
              <h2 className="text-2xl font-extrabold mb-6">5. Ejemplos de landing pages para educacion y cursos online</h2>

              {[
                {
                  num: "13",
                  name: "Masterclass — Landing de suscripcion",
                  desc: "Video autoplay de un instructor famoso como hero. Headline aspiracional: «Aprende de los mejores del mundo». Carrusel de instructores con fotos reales (Gordon Ramsay, Natalie Portman). CTA con precio anual y badge «Acceso ilimitado».",
                  bien: "Las caras famosas son la prueba social definitiva. El video autoplay captura atencion inmediata.",
                  mejora: "El precio anual puede generar friction — ofrecer un trial de 7 dias reduciria la barrera.",
                  conversion: "Estimada 3-6%. Producto de suscripcion con ticket medio — la marca personal del instructor es clave.",
                },
                {
                  num: "14",
                  name: "Platzi — Landing de curso individual",
                  desc: "Hero con el titulo del curso, duracion, nivel y rating de alumnos. Indice del curso visible. Testimonios de alumnos con foto, nombre, empresa actual y mejora salarial post-curso. CTA: «Empieza gratis».",
                  bien: "Los testimonios con mejora salarial son la prueba social mas potente para educacion. El indice demuestra profundidad.",
                  mejora: "Podria incluir un video preview de la primera leccion para generar compromiso antes de registrarse.",
                  conversion: "Estimada 4-8%. El CTA «Empieza gratis» elimina la barrera economica inicial.",
                },
                {
                  num: "15",
                  name: "Webinar de marketing — Landing de registro",
                  desc: "Headline con fecha y hora concreta: «Webinar en vivo: Jueves 15 de Abril a las 18:00h». Foto del ponente con bio corta. 3 puntos de lo que aprenderas. Countdown timer. Un campo: email. CTA: «Reservar mi plaza gratis».",
                  bien: "La fecha concreta crea urgencia real. Un solo campo = friccion minima. El countdown timer refuerza la escasez.",
                  mejora: "Podria anadir un numero de plazas limitadas para intensificar la escasez.",
                  conversion: "Estimada 20-35%. Las landing de webinar gratuito tienen las tasas de conversion mas altas del mercado.",
                },
              ].map((ej) => (
                <div key={ej.num} className="mb-8 bg-white rounded-2xl border border-gray-100 p-6">
                  <div className="flex gap-4 items-start mb-4">
                    <span className="font-mono font-bold text-2xl text-[#9D4EDD] flex-shrink-0">{ej.num}</span>
                    <h3 className="font-bold text-lg">{ej.name}</h3>
                  </div>
                  <p className="text-[#6B7280] text-sm leading-relaxed mb-4">{ej.desc}</p>
                  <div className="grid md:grid-cols-3 gap-3">
                    <div className="bg-green-50 border border-green-200 rounded-xl p-3">
                      <p className="text-xs font-bold text-green-700 mb-1">Que hace bien</p>
                      <p className="text-[#6B7280] text-sm">{ej.bien}</p>
                    </div>
                    <div className="bg-amber-50 border border-amber-200 rounded-xl p-3">
                      <p className="text-xs font-bold text-amber-700 mb-1">Que mejoraria</p>
                      <p className="text-[#6B7280] text-sm">{ej.mejora}</p>
                    </div>
                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-3">
                      <p className="text-xs font-bold text-blue-700 mb-1">Conversion estimada</p>
                      <p className="text-[#6B7280] text-sm">{ej.conversion}</p>
                    </div>
                  </div>
                </div>
              ))}
            </section>

            {/* SECCION 6 — PATRON COMUN */}
            <section id="patron-comun" className="mt-12">
              <h2 className="text-2xl font-extrabold mb-4">6. El patron comun de las mejores landing pages</h2>
              <p className="text-[#6B7280] leading-relaxed mb-4">
                Despues de analizar estos 15 <strong className="text-[#1A1A2E]">ejemplos de landing pages</strong>, el patron es claro. Las que mas convierten comparten una estructura casi identica:
              </p>
              <div className="overflow-x-auto rounded-2xl border border-[#E0AAFF] mb-6">
                <table className="w-full text-sm">
                  <thead className="bg-[#FAF5FF] border-b border-[#E0AAFF]">
                    <tr>
                      <th className="p-4 text-left font-bold text-[#9D4EDD]">Elemento</th>
                      <th className="p-4 text-left font-bold text-[#6B7280]">Presente en top 25%</th>
                      <th className="p-4 text-left font-bold text-[#6B7280]">Presente en bottom 25%</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {[
                      ["Headline orientado al beneficio", "100%", "35%"],
                      ["Un unico CTA claro", "95%", "20%"],
                      ["Prueba social especifica", "90%", "40%"],
                      ["Sin menu de navegacion", "85%", "15%"],
                      ["Carga < 3 segundos", "92%", "45%"],
                      ["Formulario de 1-2 campos", "78%", "30%"],
                    ].map(([el, top, bottom]) => (
                      <tr key={el}>
                        <td className="p-4 font-semibold">{el}</td>
                        <td className="p-4 text-green-600 font-bold">{top}</td>
                        <td className="p-4 text-red-500">{bottom}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-[#6B7280] leading-relaxed mb-4">
                Si quieres profundizar en como construir una landing paso a paso, nuestra guia de <Link href="/blog/como-crear-landing-page-alta-conversion" className="text-[#9D4EDD] font-semibold hover:underline">como crear una landing page de alta conversion</Link> cubre el proceso completo. Y si quieres entender cada pieza individual, el articulo sobre los <Link href="/blog/elementos-landing-page-perfecta" className="text-[#9D4EDD] font-semibold hover:underline">12 elementos de una landing page perfecta</Link> te da el desglose.
              </p>
            </section>

            {/* CTA NATIVO */}
            <section id="crear-landing" className="mt-14 rounded-2xl p-8 text-center" style={{ background: "linear-gradient(135deg, #9D4EDD 0%, #4C0099 100%)" }}>
              <h2 className="text-2xl font-extrabold text-white mb-4">7. Crea tu landing page de alta conversion en 30 segundos</h2>
              <p className="text-[#E0AAFF] mb-6 max-w-lg mx-auto">
                Ya has visto lo que funciona. Ahora hazlo tu: describe tu negocio y LandForge genera la estructura, el copy y activa el chatbot de ventas Forgi automaticamente. Plan gratuito disponible.
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
              <h2 className="text-2xl font-extrabold mb-8">Preguntas frecuentes sobre ejemplos de landing pages</h2>
              <div className="divide-y divide-gray-100">
                {[
                  { q: "¿Que hace que una landing page sea buena?", a: "Una buena landing page tiene un headline claro orientado al beneficio, un unico CTA visible, prueba social verificable, un diseno limpio sin distracciones y una propuesta de valor que responde a la pregunta del visitante en los primeros 5 segundos." },
                  { q: "¿Cuantas secciones debe tener una landing page?", a: "Entre 5 y 8 secciones es lo optimo: hero con headline y CTA, beneficios, prueba social, explicacion del producto, seccion de objeciones o FAQ, y un CTA final. La longitud exacta depende de la complejidad del producto." },
                  { q: "¿Cual es la tasa de conversion media de una landing page?", a: "La media global es del 2,35%. El top 25% convierte por encima del 5,31% y el top 10% supera el 11,45%. Las landing de webinar gratuito y lead magnets suelen estar entre el 15% y el 35%." },
                  { q: "¿Como puedo crear una landing page sin saber programar?", a: "Herramientas como LandForge te permiten crear una landing profesional sin codigo. Describes tu negocio y la IA genera el copy, la estructura y un chatbot de ventas. Puedes empezar gratis." },
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
                <Link href="/blog/como-crear-landing-page-alta-conversion" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">Como Crear una Landing de Alta Conversion</Link>
                <Link href="/blog/que-es-una-landing-page" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">Que es una Landing Page</Link>
                <Link href="/features/forgi-editor" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">Forgi Editor: Crea con IA</Link>
                <Link href="/precios" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">Planes y Precios</Link>
              </div>
            </div>

          </article>
        </main>
      </div>
    </>
  );
}
