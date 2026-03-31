import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Landing Pages + HubSpot CRM: Leads en Vivo",
  description:
    "Conecta LandForge con HubSpot CRM. Envía leads y datos de conversión automáticamente. Sin código, en 2 minutos.",
  keywords: [
    "landforge hubspot integracion",
    "automatizar leads hubspot landing page",
    "conectar landing page crm hubspot",
    "hubspot landing page builder ia",
  ],
  alternates: {
    canonical: "https://landforge.digital/integraciones/hubspot",
  },
  openGraph: {
    title: "Landing Pages + HubSpot CRM: Leads en Vivo | LandForge",
    description:
      "Conecta LandForge con HubSpot CRM. Envía leads y datos de conversión automáticamente. Sin código, en 2 minutos.",
    url: "https://landforge.digital/integraciones/hubspot",
  },
};

/* ── JSON-LD: BreadcrumbList ── */
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://landforge.digital" },
    { "@type": "ListItem", position: 2, name: "Integración con HubSpot", item: "https://landforge.digital/integraciones/hubspot" },
  ],
};

/* ── JSON-LD: FAQPage ── */
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Qué datos envía LandForge a HubSpot automáticamente?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "LandForge envía a HubSpot el nombre, email, teléfono, empresa, un resumen de la conversación con el chatbot Forgi, la URL de la landing page de origen, el Conversion Score calculado por la IA y cualquier propiedad personalizada que hayas mapeado. Todo en tiempo real, sin intervención manual.",
      },
    },
    {
      "@type": "Question",
      name: "¿Necesito conocimientos técnicos para conectar LandForge con HubSpot?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. La integración se activa con OAuth en 2 clics: autorizas tu cuenta de HubSpot desde el panel de LandForge y mapeas los campos. No necesitas API keys, webhooks manuales ni código de ningún tipo.",
      },
    },
    {
      "@type": "Question",
      name: "¿Funciona con HubSpot gratuito o solo con planes de pago?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Funciona con todas las versiones de HubSpot, incluido el CRM gratuito. La integración utiliza la API estándar de contactos y deals de HubSpot, que está disponible en todos los planes. Las funcionalidades avanzadas como workflows de nurturing requieren HubSpot Marketing Hub Starter o superior.",
      },
    },
    {
      "@type": "Question",
      name: "¿Puedo enviar leads de múltiples landing pages a distintos pipelines de HubSpot?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Cada landing page de LandForge puede mapearse a un pipeline y una etapa (deal stage) diferente en HubSpot. Esto es especialmente útil para agencias que gestionan múltiples clientes o empresas con varias líneas de negocio, ya que cada campaña alimenta su propio flujo de ventas.",
      },
    },
  ],
};

/* ── JSON-LD: SoftwareApplication ── */
const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "LandForge — Integración con HubSpot CRM",
  applicationCategory: "BusinessApplication",
  description:
    "Integración nativa entre LandForge (generador de landing pages con IA) y HubSpot CRM. Envía leads, conversaciones de chatbot y datos de conversión automáticamente al pipeline de ventas.",
  operatingSystem: "Web",
  offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
};

export default function IntegracionHubSpot() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />

      <div className="min-h-screen bg-[#FAFAFA] text-[#1A1A2E] font-sans">
        <main>

          {/* ════════════════════════════════════════════════════════════
              1. HERO
          ════════════════════════════════════════════════════════════ */}
          <section className="relative px-6 pt-32 pb-20 text-center flex flex-col items-center justify-center min-h-[90vh]">
            <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at 50% 30%, rgba(157,78,221,0.06) 0%, transparent 65%)" }} />

            <p className="text-xs font-bold uppercase tracking-[2px] text-[#9D4EDD] mb-5 bg-[#F3E8FF] border border-[#E0AAFF] px-4 py-1.5 rounded-full inline-block">
              Integración Nativa — LandForge + HubSpot CRM
            </p>

            <h1 className="text-4xl md:text-6xl font-extrabold max-w-4xl tracking-tight leading-[1.05] mb-7">
              LandForge + HubSpot: Tus Leads de Landing Page{" "}
              <span style={{ background: "linear-gradient(135deg, #9D4EDD, #7B2CBF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Directo al CRM
              </span>
            </h1>

            <p className="text-lg md:text-xl text-[#6B7280] max-w-2xl leading-relaxed mb-10">
              Cada lead que captura tu landing page o el{" "}
              <Link href="/features/forgi-chatbot" className="text-[#9D4EDD] underline underline-offset-2 hover:text-[#7B2CBF] transition">chatbot Forgi</Link>{" "}
              llega a tu pipeline de ventas de HubSpot en tiempo real.{" "}
              <strong className="text-[#1A1A2E]">Sin copiar-pegar, sin CSV, sin que un solo contacto se quede en el limbo.</strong>{" "}
              Conecta en 2 minutos y automatiza todo el flujo de leads a ventas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Link href="/register" className="px-8 py-4 rounded-xl font-bold text-lg text-white transition hover:-translate-y-1" style={{ background: "linear-gradient(135deg, #9D4EDD, #7B2CBF)", boxShadow: "0 8px 24px rgba(157,78,221,0.3)" }}>
                Conectar HubSpot gratis →
              </Link>
              <Link href="#como-funciona" className="px-8 py-4 rounded-xl border-2 border-[#E0AAFF] text-[#9D4EDD] font-bold text-lg hover:border-[#9D4EDD] transition">
                Ver cómo funciona
              </Link>
            </div>
            <p className="text-sm text-[#9D4EDD]">Sin tarjeta · Compatible con HubSpot Free · 14 días gratis</p>

            <div className="mt-12 flex flex-wrap gap-10 justify-center">
              {[["< 3s", "Lead en HubSpot tras conversión"], ["0 código", "Configuración sin desarrollo"], ["6 campos", "De datos sincronizados por lead"], ["24/7", "Captura con Forgi + envío al CRM"]].map(([v, l]) => (
                <div key={l} className="text-center">
                  <div className="text-3xl font-extrabold text-[#9D4EDD]">{v}</div>
                  <div className="text-sm text-[#6B7280] mt-1">{l}</div>
                </div>
              ))}
            </div>
          </section>

          {/* ════════════════════════════════════════════════════════════
              2. EL PROBLEMA — La gestión manual de leads mata conversiones
          ════════════════════════════════════════════════════════════ */}
          <section className="px-6 py-24 bg-[#1A1A2E] text-white">
            <div className="max-w-5xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
                La Gestión Manual de Leads Mata tu Velocidad de Cierre
              </h2>
              <p className="text-[#E0AAFF] text-lg max-w-2xl mx-auto">
                Un lead responde a tu chatbot a las 11 de la noche. Tu equipo comercial no lo ve hasta las 9 de la mañana.
                Para entonces, ese lead ya ha pedido presupuesto a tu competencia. Este escenario se repite decenas de veces al mes
                en empresas que no tienen su landing page conectada con su CRM de ventas.
              </p>
            </div>
            <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: "🕐",
                  title: "8 horas de media entre captura y primer contacto",
                  text: "Según Harvard Business Review, las empresas que contactan a un lead en los primeros 5 minutos tienen 21x más probabilidades de cualificarlo. Sin automatización entre tu landing page y HubSpot, pierdes esa ventana cada noche y cada fin de semana. El lead se enfría y tu pipeline se llena de contactos muertos.",
                },
                {
                  icon: "📋",
                  title: "Copiar y pegar leads de un formulario a un CRM",
                  text: "Tu equipo abre el panel de leads de la landing, copia nombre, email y teléfono, y lo pega en HubSpot. Uno por uno. Con suerte, añade en qué landing convirtió y qué preguntó en el chatbot. Pero la mayoría de las veces, esos datos de contexto se pierden. Y sin contexto, tu comercial llama a ciegas.",
                },
                {
                  icon: "📊",
                  title: "Reportes de campaña que no cuadran nunca",
                  text: "Marketing dice que la landing generó 120 leads. Ventas dice que solo recibió 87 en HubSpot. ¿Dónde están los 33 que faltan? Sin una integración directa entre LandForge y tu CRM, los datos se pierden en el camino y es imposible calcular el ROI real de cada campaña de captación.",
                },
              ].map((item) => (
                <div key={item.title} className="bg-white/5 border border-white/10 rounded-2xl p-8">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="font-bold text-lg mb-3">{item.title}</h3>
                  <p className="text-white/60 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
            <div className="max-w-3xl mx-auto mt-12 text-center">
              <p className="text-white/70 leading-relaxed">
                La automatización de marketing no es un lujo: es la diferencia entre cerrar una venta o perderla.
                Cuando conectas tu landing page directamente con HubSpot, cada lead entra al pipeline de ventas en el instante exacto en que muestra interés.
                Tu equipo recibe una notificación, el lifecycle stage se actualiza automáticamente y el workflow de nurturing arranca sin intervención humana.
              </p>
            </div>
          </section>

          {/* ════════════════════════════════════════════════════════════
              3. CÓMO FUNCIONA — Conectar Landing Page con HubSpot CRM
          ════════════════════════════════════════════════════════════ */}
          <section id="como-funciona" className="px-6 py-24 bg-[#F3E8FF]">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#9D4EDD] bg-white px-4 py-1.5 rounded-full border border-[#E0AAFF] mb-4">
                  Integración en 3 pasos
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold">
                  Cómo Conectar tu Landing Page con HubSpot CRM
                </h2>
                <p className="text-[#6B7280] mt-4 max-w-2xl mx-auto">
                  No necesitas desarrolladores, no necesitas Zapier, no necesitas tocar una sola línea de código.
                  La integración nativa de LandForge con HubSpot se configura en menos de 2 minutos.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-16">
                {[
                  {
                    num: "01",
                    title: "Conecta tu cuenta de HubSpot con OAuth",
                    text: "Desde el panel de integraciones de LandForge, haz clic en 'Conectar HubSpot'. Se abre la ventana de autorización OAuth de HubSpot. Selecciona tu portal, acepta los permisos y listo. LandForge nunca almacena tu contraseña de HubSpot: la autenticación es directa con la API oficial.",
                    badge: "OAuth 2.0 seguro",
                  },
                  {
                    num: "02",
                    title: "Mapea los campos de tu landing al CRM",
                    text: "LandForge detecta automáticamente las propiedades de contacto y deal de tu portal de HubSpot. Mapea cada campo capturado por tu landing page o por Forgi Chatbot a la propiedad correspondiente: nombre a firstname, email a email, resumen de conversación a una propiedad personalizada, etc. El mapeo se guarda y aplica a todas las landings que elijas.",
                    badge: "Mapeo visual drag & drop",
                  },
                  {
                    num: "03",
                    title: "Activa el flujo automático y elige el pipeline",
                    text: "Selecciona en qué pipeline y en qué etapa (deal stage) quieres que aterricen los nuevos leads. Activa el toggle de sincronización. A partir de ese momento, cada conversión en tu landing page crea automáticamente un contacto y un deal en HubSpot con toda la información capturada. Sin retrasos, sin pérdidas.",
                    badge: "Lead en HubSpot en < 3 segundos",
                  },
                ].map((step) => (
                  <div key={step.num} className="bg-white rounded-2xl border border-[#E0AAFF] p-8">
                    <div className="text-2xl font-mono font-bold text-[#9D4EDD] mb-4">{step.num}</div>
                    <h3 className="font-bold text-lg mb-3">{step.title}</h3>
                    <p className="text-[#6B7280] leading-relaxed mb-4">{step.text}</p>
                    <span className="inline-block text-xs font-semibold text-[#9D4EDD] bg-[#F3E8FF] px-3 py-1 rounded-full border border-[#E0AAFF]">
                      {step.badge}
                    </span>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-2xl border border-[#E0AAFF] p-8 md:p-12">
                <h3 className="font-bold text-xl mb-4">Guía paso a paso: enviar leads de landing page a HubSpot automáticamente</h3>
                <p className="text-[#6B7280] leading-relaxed mb-6">
                  Si prefieres una explicación detallada, estos son los pasos exactos para configurar la integración
                  desde cero. Todo el proceso toma menos de 5 minutos:
                </p>
                <ol className="space-y-4 text-[#6B7280]">
                  <li className="flex gap-4 items-start">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#F3E8FF] text-[#9D4EDD] font-bold text-sm flex items-center justify-center border border-[#E0AAFF]">1</span>
                    <span><strong className="text-[#1A1A2E]">Accede al panel de LandForge</strong> y navega a Configuración → Integraciones → HubSpot. Si aún no tienes cuenta, puedes <Link href="/register" className="text-[#9D4EDD] underline underline-offset-2 hover:text-[#7B2CBF]">registrarte gratis aquí</Link>.</span>
                  </li>
                  <li className="flex gap-4 items-start">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#F3E8FF] text-[#9D4EDD] font-bold text-sm flex items-center justify-center border border-[#E0AAFF]">2</span>
                    <span><strong className="text-[#1A1A2E]">Haz clic en &quot;Conectar HubSpot&quot;</strong>. Se abrirá la pantalla de autorización OAuth de HubSpot. Selecciona el portal que quieres conectar y acepta los permisos de contactos y deals.</span>
                  </li>
                  <li className="flex gap-4 items-start">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#F3E8FF] text-[#9D4EDD] font-bold text-sm flex items-center justify-center border border-[#E0AAFF]">3</span>
                    <span><strong className="text-[#1A1A2E]">Mapea los campos.</strong> LandForge carga automáticamente todas las propiedades de tu portal de HubSpot. Arrastra cada campo de la landing (nombre, email, teléfono, resumen del chatbot, URL de origen, Conversion Score) a la propiedad de HubSpot correspondiente.</span>
                  </li>
                  <li className="flex gap-4 items-start">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#F3E8FF] text-[#9D4EDD] font-bold text-sm flex items-center justify-center border border-[#E0AAFF]">4</span>
                    <span><strong className="text-[#1A1A2E]">Selecciona el pipeline y el deal stage.</strong> Elige a qué pipeline de ventas enviar los leads y en qué etapa deben aterrizar (p.ej. &quot;Nuevo Lead&quot;, &quot;Contactado&quot;, &quot;Calificado&quot;).</span>
                  </li>
                  <li className="flex gap-4 items-start">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#F3E8FF] text-[#9D4EDD] font-bold text-sm flex items-center justify-center border border-[#E0AAFF]">5</span>
                    <span><strong className="text-[#1A1A2E]">Activa la sincronización.</strong> Pulsa el toggle y la integración queda activa. A partir de ese momento, cada formulario de contacto completado o cada conversación de Forgi Chatbot generará un registro en HubSpot en menos de 3 segundos.</span>
                  </li>
                  <li className="flex gap-4 items-start">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#F3E8FF] text-[#9D4EDD] font-bold text-sm flex items-center justify-center border border-[#E0AAFF]">6</span>
                    <span><strong className="text-[#1A1A2E]">Verifica con un lead de prueba.</strong> Entra en tu landing publicada, rellena el formulario con datos ficticios y comprueba que el contacto aparece en HubSpot al instante. Confirma que todos los campos están correctos.</span>
                  </li>
                </ol>
                <p className="text-[#6B7280] leading-relaxed mt-6">
                  Si necesitas enviar datos a otras herramientas además de HubSpot, puedes combinar esta integración con{" "}
                  <Link href="/integraciones/zapier" className="text-[#9D4EDD] underline underline-offset-2 hover:text-[#7B2CBF]">nuestra conexión con Zapier</Link>{" "}
                  para enviar leads simultáneamente a Slack, Google Sheets, Mailchimp o cualquier otra app de tu stack.
                </p>
              </div>
            </div>
          </section>

          {/* ════════════════════════════════════════════════════════════
              4. QUÉ DATOS FLUYEN — Datos que se Sincronizan con HubSpot
          ════════════════════════════════════════════════════════════ */}
          <section className="px-6 py-24 bg-white">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#9D4EDD] bg-[#F3E8FF] px-4 py-1.5 rounded-full border border-[#E0AAFF] mb-4">
                  Datos en tiempo real
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold">
                  Qué Datos se Envían de tu Landing Page a HubSpot
                </h2>
                <p className="text-[#6B7280] mt-4 max-w-2xl mx-auto">
                  No se trata solo de enviar un nombre y un email. La integración de LandForge con HubSpot transfiere
                  el contexto completo de la conversión para que tu equipo de ventas tenga toda la información antes de
                  hacer la primera llamada. Cada dato se mapea a una propiedad de HubSpot personalizable.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    icon: "👤",
                    title: "Contacto: Nombre, Email y Teléfono",
                    desc: "Los datos básicos del lead se crean como un contacto en HubSpot con firstname, lastname, email y phone. Si el contacto ya existe, LandForge actualiza el registro en lugar de crear un duplicado, manteniendo limpio tu CRM.",
                    hubspot: "Propiedad: firstname, lastname, email, phone",
                  },
                  {
                    icon: "🏢",
                    title: "Empresa y Sector",
                    desc: "Si tu landing captura el nombre de la empresa o el sector (algo habitual en landing pages B2B), LandForge crea o asocia automáticamente el registro de Company en HubSpot y lo vincula al contacto.",
                    hubspot: "Objeto: Company → name, industry",
                  },
                  {
                    icon: "💬",
                    title: "Resumen de Conversación del Chatbot",
                    desc: "Cuando el lead interactúa con Forgi, la IA genera un resumen estructurado de la conversación: qué preguntó, qué servicios le interesan, objeciones que planteó y nivel de urgencia. Todo eso llega a una propiedad personalizada en el contacto de HubSpot.",
                    hubspot: "Propiedad custom: forgi_conversation_summary",
                  },
                  {
                    icon: "🔗",
                    title: "Landing Page de Origen (Source URL)",
                    desc: "Saber exactamente desde qué landing llegó cada lead es clave para medir el rendimiento de cada campaña. LandForge envía la URL completa de la landing como propiedad del contacto, incluyendo parámetros UTM si los tiene.",
                    hubspot: "Propiedad custom: landforge_source_url",
                  },
                  {
                    icon: "📈",
                    title: "Conversion Score (Lead Scoring IA)",
                    desc: "La IA de LandForge analiza el comportamiento del lead en la landing (tiempo en página, interacción con el chatbot, secciones visitadas) y genera un Conversion Score de 0 a 100. Este dato llega a HubSpot como propiedad numérica, lista para usarse como criterio de lead scoring nativo.",
                    hubspot: "Propiedad custom: landforge_conversion_score",
                  },
                  {
                    icon: "🔧",
                    title: "Propiedades Personalizadas",
                    desc: "¿Tu landing tiene campos específicos como 'Presupuesto estimado', 'Fecha de proyecto' o 'Número de empleados'? Cualquier campo capturado en el formulario de tu landing se puede mapear a cualquier propiedad estándar o personalizada de HubSpot.",
                    hubspot: "Cualquier propiedad custom de tu portal",
                  },
                ].map((card) => (
                  <div key={card.title} className="bg-[#FAFAFA] border border-gray-100 rounded-2xl p-8 flex flex-col">
                    <div className="text-3xl mb-4">{card.icon}</div>
                    <h3 className="font-bold text-lg mb-3">{card.title}</h3>
                    <p className="text-[#6B7280] leading-relaxed mb-4 flex-1">{card.desc}</p>
                    <span className="inline-block text-xs font-mono text-[#9D4EDD] bg-[#F3E8FF] px-3 py-1.5 rounded-lg border border-[#E0AAFF]">
                      {card.hubspot}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-12 bg-[#F3E8FF] rounded-2xl border border-[#E0AAFF] p-8 md:p-10">
                <h3 className="font-bold text-lg mb-4">Integrar chatbot con HubSpot CRM: El dato que cambia la conversación</h3>
                <p className="text-[#6B7280] leading-relaxed mb-4">
                  La mayoría de integraciones de landing pages con CRM se limitan a enviar nombre y email. Eso obliga a tu comercial a
                  empezar la llamada con un genérico &quot;Hola, vi que rellenaste nuestro formulario...&quot;. Con LandForge, el resumen de la
                  conversación de{" "}
                  <Link href="/features/forgi-chatbot" className="text-[#9D4EDD] underline underline-offset-2 hover:text-[#7B2CBF]">Forgi Chatbot</Link>{" "}
                  llega directamente a la ficha del contacto en HubSpot. Tu comercial sabe exactamente qué le interesa al lead, qué presupuesto maneja y
                  qué objeciones tiene antes de descolgar el teléfono.
                </p>
                <p className="text-[#6B7280] leading-relaxed">
                  Esta información contextual eleva drásticamente la tasa de conversión de lead a cliente. No es lo mismo llamar a ciegas que llamar
                  sabiendo que &quot;María preguntó por el servicio de diseño web para su clínica dental, tiene un presupuesto de 3.000 EUR y necesita
                  la web lista antes de septiembre&quot;. Ese nivel de detalle transforma una llamada fría en una conversación de ventas.
                </p>
              </div>
            </div>
          </section>

          {/* ════════════════════════════════════════════════════════════
              5. CASOS DE USO PARA AGENCIAS
          ════════════════════════════════════════════════════════════ */}
          <section className="px-6 py-24 bg-[#F3E8FF]">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#9D4EDD] bg-white px-4 py-1.5 rounded-full border border-[#E0AAFF] mb-4">
                  Casos de uso reales
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold">
                  Automatizar Leads en HubSpot: Escenarios para Agencias
                </h2>
                <p className="text-[#6B7280] mt-4 max-w-2xl mx-auto">
                  Si tu{" "}
                  <Link href="/para/agencias-de-marketing" className="text-[#9D4EDD] underline underline-offset-2 hover:text-[#7B2CBF]">agencia de marketing</Link>{" "}
                  gestiona campañas de captación para múltiples clientes, la integración LandForge + HubSpot elimina horas
                  de trabajo manual cada semana. Estos son los tres escenarios donde más impacto genera.
                </p>
              </div>

              <div className="flex flex-col gap-10">
                {/* Caso 1 */}
                <div className="bg-white rounded-2xl border border-[#E0AAFF] p-8 md:p-10">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center font-mono font-bold text-lg border border-[#E0AAFF] bg-[#F3E8FF] text-[#9D4EDD]">01</span>
                    <h3 className="font-bold text-xl">Secuencia de Nurturing Automática desde la Landing Page</h3>
                  </div>
                  <p className="text-[#6B7280] leading-relaxed mb-4">
                    <strong className="text-[#1A1A2E]">Escenario:</strong> Tu agencia lanza una landing page para un cliente del sector inmobiliario.
                    La landing ofrece una guía gratuita sobre &quot;Cómo invertir en tu primera vivienda&quot;. El visitante chatea con Forgi, deja su email y
                    descarga la guía. Ese lead necesita nurturing antes de estar listo para hablar con un comercial.
                  </p>
                  <p className="text-[#6B7280] leading-relaxed mb-4">
                    <strong className="text-[#1A1A2E]">Lo que automatiza LandForge + HubSpot:</strong> En el instante de la conversión, LandForge crea el contacto
                    en HubSpot con el lifecycle stage &quot;Lead&quot; y el Conversion Score. HubSpot detecta el nuevo contacto e inicia automáticamente un
                    workflow de nurturing: un email de bienvenida inmediato, un segundo email con casos de éxito a las 48 horas, y una oferta de llamada
                    con el asesor al quinto día. Si el lead abre todos los emails y tiene un Conversion Score alto, su lifecycle stage cambia
                    automáticamente a &quot;Marketing Qualified Lead (MQL)&quot; y se asigna a un comercial.
                  </p>
                  <p className="text-[#6B7280] leading-relaxed">
                    <strong className="text-[#1A1A2E]">Resultado:</strong> Tu cliente recibe leads templados que ya conocen el producto y tienen interés
                    demostrado. La tasa de cierre sube porque el comercial no pierde tiempo con leads fríos. Y todo sucede sin que nadie de la agencia
                    tenga que mover un dedo después de la configuración inicial.
                  </p>
                </div>

                {/* Caso 2 */}
                <div className="bg-white rounded-2xl border border-[#E0AAFF] p-8 md:p-10">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center font-mono font-bold text-lg border border-[#E0AAFF] bg-[#F3E8FF] text-[#9D4EDD]">02</span>
                    <h3 className="font-bold text-xl">Automatización del Pipeline de Ventas para SaaS B2B</h3>
                  </div>
                  <p className="text-[#6B7280] leading-relaxed mb-4">
                    <strong className="text-[#1A1A2E]">Escenario:</strong> Tu cliente SaaS necesita captar demos de su software. La landing page de LandForge
                    incluye un formulario con campos de empresa, número de empleados y presupuesto estimado. Forgi Chatbot cualifica al visitante en tiempo
                    real preguntándole sobre sus necesidades específicas.
                  </p>
                  <p className="text-[#6B7280] leading-relaxed mb-4">
                    <strong className="text-[#1A1A2E]">Lo que automatiza LandForge + HubSpot:</strong> El lead se crea en HubSpot como contacto con todos los datos
                    del formulario. Simultáneamente, se crea un Deal en el pipeline &quot;Demos Solicitadas&quot; con el monto estimado del deal basado en el número
                    de empleados. El resumen de la conversación con Forgi aparece en la nota del deal. El lead scoring de HubSpot usa el Conversion Score
                    de LandForge como variable adicional. Si el score supera 70 puntos, el deal se mueve automáticamente a la etapa &quot;Alta Prioridad&quot; y se
                    envía una notificación al SDR asignado por round-robin.
                  </p>
                  <p className="text-[#6B7280] leading-relaxed">
                    <strong className="text-[#1A1A2E]">Resultado:</strong> El equipo de ventas atiende primero a los leads con mayor probabilidad de cierre.
                    El tiempo medio de respuesta baja de 8 horas a 12 minutos. Y tu agencia puede demostrar con datos exactos cuántos deals genera cada
                    landing page que ha construido.
                  </p>
                </div>

                {/* Caso 3 */}
                <div className="bg-white rounded-2xl border border-[#E0AAFF] p-8 md:p-10">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center font-mono font-bold text-lg border border-[#E0AAFF] bg-[#F3E8FF] text-[#9D4EDD]">03</span>
                    <h3 className="font-bold text-xl">Reporting Multi-Cliente con Datos Unificados</h3>
                  </div>
                  <p className="text-[#6B7280] leading-relaxed mb-4">
                    <strong className="text-[#1A1A2E]">Escenario:</strong> Tu agencia gestiona 15 clientes. Cada uno tiene entre 2 y 8 landing pages activas.
                    Cada mes necesitas entregar un informe de rendimiento: leads generados, coste por lead, leads que avanzaron en el pipeline y deals
                    cerrados atribuidos a cada landing page.
                  </p>
                  <p className="text-[#6B7280] leading-relaxed mb-4">
                    <strong className="text-[#1A1A2E]">Lo que automatiza LandForge + HubSpot:</strong> Como cada lead tiene la propiedad landforge_source_url,
                    puedes crear reportes en HubSpot filtrados por URL de landing. Ves exactamente cuántos contactos, MQLs, SQLs y clientes generó cada
                    landing page. Cruzas datos con el pipeline de ventas y calculas el ROI real de cada campaña. Si tu agencia está escalando y gestiona
                    múltiples cuentas,{" "}
                    <Link href="/blog/landing-page-para-agencias-guia" className="text-[#9D4EDD] underline underline-offset-2 hover:text-[#7B2CBF]">consulta nuestra guía para agencias</Link>{" "}
                    donde explicamos cómo organizar workspaces por cliente.
                  </p>
                  <p className="text-[#6B7280] leading-relaxed">
                    <strong className="text-[#1A1A2E]">Resultado:</strong> Tus informes mensuales se generan en minutos en lugar de horas. Demuestras el valor
                    de la agencia con datos irrefutables. Y cuando un cliente pregunta &quot;¿de dónde vienen mis ventas?&quot;, tienes la respuesta exacta:
                    &quot;El 34% de tus deals cerrados este mes entraron por la landing de Invisalign que publicamos el 5 de marzo&quot;.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ════════════════════════════════════════════════════════════
              6. TABLA COMPARATIVA — LandForge+HubSpot vs Alternativas
          ════════════════════════════════════════════════════════════ */}
          <section className="px-6 py-24 bg-white">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-14">
                <h2 className="text-3xl font-extrabold">
                  LandForge + HubSpot vs Gestión Manual vs Otras Herramientas
                </h2>
                <p className="text-[#6B7280] mt-4 max-w-2xl mx-auto">
                  Una comparativa honesta para que evalúes qué opción se adapta mejor a tu flujo de trabajo.
                  Spoiler: la entrada manual de leads en un CRM debería haber muerto en 2019.
                </p>
              </div>
              <div className="overflow-x-auto rounded-2xl border border-[#E0AAFF] shadow-sm">
                <table className="w-full text-left bg-white">
                  <thead>
                    <tr className="border-b border-[#E0AAFF] bg-[#FAF5FF]">
                      <th className="p-5 font-bold text-[#6B7280] text-sm">Criterio</th>
                      <th className="p-5 font-bold text-[#9D4EDD]">LandForge + HubSpot</th>
                      <th className="p-5 font-bold text-[#6B7280]">Entrada Manual al CRM</th>
                      <th className="p-5 font-bold text-[#6B7280]">Zapier + Formulario Genérico</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-sm">
                    {[
                      [
                        "Tiempo lead → CRM",
                        "< 3 segundos",
                        "4-24 horas",
                        "1-5 minutos",
                      ],
                      [
                        "Datos de contexto (conversación chatbot)",
                        "Resumen completo de Forgi",
                        "Solo lo que alguien se acuerde de apuntar",
                        "No disponible",
                      ],
                      [
                        "Lead Scoring automático",
                        "Conversion Score IA incluido",
                        "No",
                        "Requiere config. adicional",
                      ],
                      [
                        "Configuración necesaria",
                        "2 minutos, OAuth nativo",
                        "0 (pero coste humano infinito)",
                        "15-30 min por cada Zap",
                      ],
                      [
                        "Coste mensual adicional",
                        "Incluido en planes Pro/Unlimited",
                        "Horas de trabajo del equipo",
                        "Desde $29.99/mes (Zapier Starter)",
                      ],
                      [
                        "Pérdida de leads",
                        "0% — sincronización en tiempo real",
                        "15-30% habitual por olvidos",
                        "< 5% (si el Zap no falla)",
                      ],
                      [
                        "Deduplicación de contactos",
                        "Automática por email",
                        "Manual (si alguien se da cuenta)",
                        "Requiere filtros avanzados",
                      ],
                      [
                        "Atribución landing → deal cerrado",
                        "Propiedad source_url en cada contacto",
                        "Imposible de rastrear",
                        "Parcial (depende de campos)",
                      ],
                    ].map(([feat, lf, manual, zap]) => (
                      <tr key={feat}>
                        <td className="p-5 font-semibold text-[#1A1A2E]">{feat}</td>
                        <td className="p-5 text-[#1A1A2E] font-medium">{lf}</td>
                        <td className="p-5 text-[#6B7280]">{manual}</td>
                        <td className="p-5 text-[#6B7280]">{zap}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-[#6B7280] text-sm mt-6 text-center max-w-2xl mx-auto">
                Si ya usas{" "}
                <Link href="/integraciones/zapier" className="text-[#9D4EDD] underline underline-offset-2 hover:text-[#7B2CBF]">Zapier para otras automatizaciones</Link>,
                la integración nativa de LandForge con HubSpot es complementaria: puedes usarlas simultáneamente.
                Pero para el flujo lead → CRM, la conexión directa es más rápida, más fiable y no tiene coste adicional.
              </p>
            </div>
          </section>

          {/* ════════════════════════════════════════════════════════════
              7. FAQ ACCORDION
          ════════════════════════════════════════════════════════════ */}
          <section className="px-6 py-24 bg-[#FAFAFA]">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-extrabold text-center mb-14">
                Preguntas Frecuentes sobre la Integración LandForge + HubSpot
              </h2>
              <div className="divide-y divide-gray-100">
                {[
                  {
                    q: "¿Qué datos envía LandForge a HubSpot automáticamente?",
                    a: "LandForge envía a HubSpot el nombre, email, teléfono, empresa, un resumen de la conversación con el chatbot Forgi, la URL de la landing page de origen, el Conversion Score calculado por la IA y cualquier propiedad personalizada que hayas mapeado en la configuración. Los datos se crean como contacto y deal en el pipeline que elijas. Si el contacto ya existe en HubSpot, se actualiza en lugar de duplicarse.",
                  },
                  {
                    q: "¿Necesito conocimientos técnicos para conectar LandForge con HubSpot?",
                    a: "No. La integración se activa con OAuth en 2 clics: autorizas tu cuenta de HubSpot desde el panel de LandForge y mapeas los campos con un sistema visual drag & drop. No necesitas API keys, webhooks manuales, código ni la intervención de un desarrollador. Si sabes usar un formulario, sabes configurar esta integración.",
                  },
                  {
                    q: "¿Funciona con HubSpot gratuito o solo con planes de pago?",
                    a: "Funciona con todas las versiones de HubSpot, incluido el CRM gratuito. La integración utiliza la API estándar de contactos y deals de HubSpot, disponible en todos los planes. Las funcionalidades avanzadas como workflows de nurturing automático y lead scoring nativo requieren HubSpot Marketing Hub Starter o superior, pero la sincronización de leads funciona con el plan Free.",
                  },
                  {
                    q: "¿Puedo enviar leads de múltiples landing pages a distintos pipelines de HubSpot?",
                    a: "Sí. Cada landing page de LandForge puede configurarse individualmente para enviar leads a un pipeline y deal stage diferentes en HubSpot. Esto es especialmente útil para agencias que gestionan múltiples clientes o para empresas con varias líneas de negocio, ya que cada campaña alimenta su propio flujo de ventas sin mezclar datos.",
                  },
                ].map((faq) => (
                  <details key={faq.q} className="group py-5">
                    <summary className="flex justify-between items-center cursor-pointer list-none font-semibold text-[#1A1A2E]">
                      <span>{faq.q}</span>
                      <span className="text-[#9D4EDD] ml-4 group-open:rotate-45 transition-transform duration-200 flex-shrink-0 text-xl">+</span>
                    </summary>
                    <p className="mt-4 text-[#6B7280] leading-relaxed">{faq.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>

          {/* ════════════════════════════════════════════════════════════
              8. CTA FINAL + ENLAZADO INTERNO
          ════════════════════════════════════════════════════════════ */}
          <section className="px-6 py-24 text-center" style={{ background: "linear-gradient(135deg, #9D4EDD 0%, #4C0099 100%)" }}>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-5">
                Deja de Perder Leads. Conecta tu Landing Page con HubSpot Hoy.
              </h2>
              <p className="text-[#E0AAFF] text-lg mb-10 leading-relaxed">
                Cada hora sin integración es una hora donde tus leads se enfrían, tu equipo pierde tiempo copiando datos
                y tus reportes no reflejan la realidad. Activa la conexión LandForge + HubSpot en 2 minutos y transforma
                tu pipeline de ventas.
              </p>
              <Link href="/register" className="inline-block bg-white text-[#9D4EDD] font-bold text-lg px-10 py-5 rounded-2xl hover:-translate-y-1 transition shadow-xl">
                Conectar HubSpot gratis →
              </Link>
              <p className="text-[#E0AAFF] mt-5 text-sm">Sin tarjeta · Compatible con HubSpot Free, Starter, Pro y Enterprise · 14 días gratis</p>
            </div>
          </section>

          {/* ── ENLAZADO INTERNO ── */}
          <section className="px-6 py-12 bg-[#FAFAFA] border-t border-gray-100">
            <div className="max-w-5xl mx-auto">
              <h3 className="font-bold text-[#1A1A2E] mb-6 text-lg">Explora más integraciones y recursos</h3>
              <div className="flex flex-wrap gap-4">
                <Link href="/integraciones/wordpress" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">
                  → Integración con WordPress
                </Link>
                <Link href="/integraciones/shopify" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">
                  → Integración con Shopify
                </Link>
                <Link href="/integraciones/zapier" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">
                  → Integración con Zapier
                </Link>
                <Link href="/para/agencias-de-marketing" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">
                  → LandForge para Agencias
                </Link>
                <Link href="/features/forgi-chatbot" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">
                  → Forgi Chatbot IA
                </Link>
                <Link href="/blog/landing-page-para-agencias-guia" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">
                  → Guía: Landing Pages para Agencias
                </Link>
              </div>
            </div>
          </section>

        </main>
      </div>
    </>
  );
}
