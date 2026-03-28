import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Integración Zapier: Automatiza tus Leads",
  description: "Conecta LandForge con Zapier y envía cada lead a tu CRM, email marketing, Slack y +5,000 apps. Sin código, en 2 minutos.",
  keywords: ["landforge zapier integracion", "automatizar leads landing page", "conectar landing page crm zapier", "zapier landing page builder"],
  alternates: { canonical: "https://landforge.digital/integraciones/zapier" },
  openGraph: { title: "Integración Zapier: Automatiza tus Leads", description: "Conecta LandForge con Zapier y envía cada lead a tu CRM, email marketing, Slack y +5,000 apps. Sin código, en 2 minutos.", url: "https://landforge.digital/integraciones/zapier" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://landforge.digital" },
    { "@type": "ListItem", position: 2, name: "Integraciones", item: "https://landforge.digital/integraciones" },
    { "@type": "ListItem", position: 3, name: "Zapier", item: "https://landforge.digital/integraciones/zapier" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "¿Qué datos envía LandForge a Zapier con cada nuevo lead?", acceptedAnswer: { "@type": "Answer", text: "LandForge envía a Zapier todos los campos capturados por Forgi Chatbot o el formulario de la landing: nombre, email, teléfono, empresa, campos personalizados, parámetros UTM (utm_source, utm_medium, utm_campaign), la URL de la landing page de origen y el timestamp de la conversión. Estos datos están disponibles como variables en Zapier para mapearlos a cualquiera de las +5,000 apps compatibles." } },
    { "@type": "Question", name: "¿Necesito un plan de pago de Zapier para conectar LandForge?", acceptedAnswer: { "@type": "Answer", text: "No necesariamente. El plan gratuito de Zapier incluye 100 tareas al mes con Zaps de un solo paso. Para Zaps multi-paso necesitas un plan de pago desde $19.99/mes. La integración con Zapier está incluida en todos los planes de LandForge, incluido el gratuito." } },
    { "@type": "Question", name: "¿Puedo enviar leads de LandForge a varias apps a la vez con Zapier?", acceptedAnswer: { "@type": "Answer", text: "Sí. Con Zapier puedes crear flujos multi-paso que envían el mismo lead a múltiples destinos simultáneamente: crear un contacto en HubSpot, añadir una fila en Google Sheets, enviar una notificación a Slack y suscribir al lead en Mailchimp, todo en un solo Zap." } },
    { "@type": "Question", name: "¿Cuánto tarda un lead en llegar a mi CRM a través de Zapier?", acceptedAnswer: { "@type": "Answer", text: "LandForge dispara el trigger en tiempo real mediante webhook. Los planes de pago de Zapier ejecutan Zaps al instante, mientras que el plan gratuito tiene un intervalo de hasta 15 minutos. En la práctica, con plan de pago el lead llega a tu CRM en menos de 2 minutos." } },
  ],
};

const softwareSchema = {
  "@context": "https://schema.org", "@type": "SoftwareApplication",
  name: "LandForge — Integración con Zapier", applicationCategory: "BusinessApplication",
  description: "Integración entre LandForge (generador de landing pages con IA) y Zapier. Envía cada lead capturado por Forgi Chatbot a +5,000 apps: CRM, email marketing, Slack, Google Sheets, WhatsApp y más.",
  operatingSystem: "Web", offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
};

export default function IntegracionZapier() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />

      <div className="min-h-screen bg-[#FAFAFA] text-[#1A1A2E] font-sans">
        <main>

          {/* ═══ 1. HERO ═══ */}
          <section className="relative px-6 pt-32 pb-20 text-center flex flex-col items-center justify-center min-h-[90vh]">
            <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at 50% 30%, rgba(157,78,221,0.06) 0%, transparent 65%)" }} />
            <p className="text-xs font-bold uppercase tracking-[2px] text-[#9D4EDD] mb-5 bg-[#F3E8FF] border border-[#E0AAFF] px-4 py-1.5 rounded-full inline-block">
              Integración — LandForge + Zapier
            </p>
            <h1 className="text-4xl md:text-6xl font-extrabold max-w-4xl tracking-tight leading-[1.05] mb-7">
              Conecta LandForge con Zapier: Automatiza Leads a{" "}
              <span style={{ background: "linear-gradient(135deg, #9D4EDD, #7B2CBF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>+5,000 Apps</span>
            </h1>
            <p className="text-lg md:text-xl text-[#6B7280] max-w-2xl leading-relaxed mb-10">
              Cada lead que captura{" "}
              <Link href="/features/forgi-chatbot" className="text-[#9D4EDD] underline underline-offset-2 hover:text-[#7B2CBF] transition">Forgi Chatbot</Link>{" "}
              en tu landing page fluye automáticamente a tu CRM, email marketing, Slack, Google Sheets o cualquier app de tu stack.{" "}
              <strong className="text-[#1A1A2E]">Sin código, sin copiar-pegar, sin que un solo lead se pierda entre herramientas.</strong>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Link href="/register" className="px-8 py-4 rounded-xl font-bold text-lg text-white transition hover:-translate-y-1" style={{ background: "linear-gradient(135deg, #9D4EDD, #7B2CBF)", boxShadow: "0 8px 24px rgba(157,78,221,0.3)" }}>
                Conectar Zapier gratis →
              </Link>
              <Link href="#como-conectar" className="px-8 py-4 rounded-xl border-2 border-[#E0AAFF] text-[#9D4EDD] font-bold text-lg hover:border-[#9D4EDD] transition">
                Ver cómo funciona
              </Link>
            </div>
            <p className="text-sm text-[#9D4EDD]">
              Sin tarjeta · Incluido en todos los planes · Zapier Free compatible
            </p>

            <div className="mt-12 flex flex-wrap gap-10 justify-center">
              {[["5,000+", "Apps conectadas vía Zapier"], ["< 2 min", "Configuración completa"], ["0 código", "Sin desarrollo necesario"], ["Real-time", "Trigger instantáneo vía webhook"]].map(([v, l]) => (
                <div key={l} className="text-center">
                  <div className="text-3xl font-extrabold text-[#9D4EDD]">{v}</div>
                  <div className="text-sm text-[#6B7280] mt-1">{l}</div>
                </div>
              ))}
            </div>
          </section>

          {/* ═══ 2. EL PROBLEMA — Dark section ═══ */}
          <section className="px-6 py-24 bg-[#1A1A2E] text-white">
            <div className="max-w-5xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Tus Leads se Pierden Entre Herramientas que No se Hablan</h2>
              <p className="text-[#E0AAFF] text-lg max-w-2xl mx-auto">
                Generas leads con tu landing page, pero luego tienes que copiarlos manualmente a tu CRM, añadirlos a tu lista de email marketing,
                avisar al equipo por Slack y registrar todo en una hoja de cálculo. Mientras haces todo eso, el lead se enfría y tu competencia ya le ha contestado.
              </p>
            </div>
            <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
              {[
                { icon: "⏳", title: "Leads que esperan horas hasta llegar al CRM", text: "Tu landing captura un lead a las 10 de la noche. Nadie lo ve hasta la mañana siguiente. Para entonces, ese contacto ya ha pedido presupuesto a tres competidores. Sin automatización entre tu landing page y tu CRM, pierdes la ventana de respuesta que Harvard Business Review cifra en 5 minutos para multiplicar por 21x la probabilidad de cualificar un lead." },
                { icon: "🔄", title: "Copiar datos entre 4 herramientas distintas", text: "Abres el panel de leads, copias nombre y email, lo pegas en Salesforce. Luego abres Mailchimp y lo añades a la lista de nurturing. Después escribes en Slack para avisar al comercial. Y al final registras el lead en Google Sheets para el reporte mensual. Un proceso de 15 minutos por lead que una automatización con Zapier resuelve en 2 segundos." },
                { icon: "📉", title: "Leads que desaparecen entre herramientas", text: "Marketing dice que la landing generó 95 leads este mes. Ventas dice que solo tiene 72 en el CRM. Los 23 que faltan se quedaron en un formulario que nadie revisó, en un email que se perdió en la bandeja de entrada o en una pestaña del navegador que alguien cerró sin guardar. Sin integración directa, los datos siempre tienen fugas." },
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
                La solución no es trabajar más rápido copiando datos. La solución es eliminar el paso manual por completo.
                Cuando conectas LandForge con Zapier, cada lead fluye automáticamente a todas las herramientas de tu stack
                en el instante exacto de la conversión. Tu equipo recibe el lead listo para actuar, no para procesar.
                Es la diferencia entre un flujo de trabajo artesanal y una máquina de ventas automatizada.
              </p>
            </div>
          </section>

          {/* ═══ 3. CÓMO CONECTAR — 3 Pasos ═══ */}
          <section id="como-conectar" className="px-6 py-24 bg-[#F3E8FF]">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#9D4EDD] bg-white px-4 py-1.5 rounded-full border border-[#E0AAFF] mb-4">Configuración en 3 pasos</span>
                <h2 className="text-3xl md:text-4xl font-extrabold">Cómo Conectar tu Landing Page con Zapier</h2>
                <p className="text-[#6B7280] mt-4 max-w-2xl mx-auto">
                  No necesitas desarrolladores ni conocimientos técnicos. La integración de LandForge con Zapier se configura en menos de 2 minutos y funciona con el plan gratuito de ambas plataformas.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { num: "01", title: "Copia tu URL de webhook en LandForge", text: "Desde el panel de integraciones de LandForge, haz clic en 'Conectar Zapier'. Se genera automáticamente una URL de webhook única para tu cuenta. Copia esa URL: es el puente que conecta cada lead capturado por tu landing page o por Forgi Chatbot con Zapier.", badge: "Webhook seguro HTTPS" },
                  { num: "02", title: "Crea un Zap con trigger 'New Lead in LandForge'", text: "En Zapier, crea un nuevo Zap y busca 'LandForge' como app trigger. Selecciona el evento 'New Lead' y pega la URL. Zapier detectará automáticamente los campos disponibles: nombre, email, teléfono, empresa, UTM params, landing URL, timestamp y campos personalizados.", badge: "Detección automática de campos" },
                  { num: "03", title: "Elige la app destino y mapea los campos", text: "Selecciona la app de destino (HubSpot, Mailchimp, Google Sheets, Slack, cualquiera de las +5,000 disponibles). Mapea cada campo del lead al campo correspondiente en la app destino. Activa el Zap y cada nuevo lead fluirá automáticamente a la herramienta elegida.", badge: "Lead enviado en tiempo real" },
                ].map((step) => (
                  <div key={step.num} className="bg-white rounded-2xl border border-[#E0AAFF] p-8">
                    <div className="text-2xl font-mono font-bold text-[#9D4EDD] mb-4">{step.num}</div>
                    <h3 className="font-bold text-lg mb-3">{step.title}</h3>
                    <p className="text-[#6B7280] leading-relaxed mb-4">{step.text}</p>
                    <span className="inline-block text-xs font-semibold text-[#9D4EDD] bg-[#F3E8FF] px-3 py-1 rounded-full border border-[#E0AAFF]">{step.badge}</span>
                  </div>
                ))}
              </div>
              <div className="mt-12 bg-white rounded-2xl border border-[#E0AAFF] p-8 md:p-10">
                <h3 className="font-bold text-lg mb-4">Datos que LandForge envía a Zapier con cada lead</h3>
                <p className="text-[#6B7280] leading-relaxed mb-6">
                  A diferencia de un formulario genérico que solo envía nombre y email, LandForge transmite el contexto completo de la conversión. Todos los campos capturados por{" "}
                  <Link href="/features/forgi-chatbot" className="text-[#9D4EDD] underline underline-offset-2 hover:text-[#7B2CBF]">Forgi Chatbot</Link>{" "}
                  están disponibles como variables en tu Zap:
                </p>
                <div className="grid sm:grid-cols-2 gap-3 text-[#6B7280]">
                  {[
                    ["Nombre completo", "Nombre y apellidos del lead"],
                    ["Email", "Dirección de correo electrónico"],
                    ["Teléfono", "Número de teléfono si fue capturado"],
                    ["Empresa", "Nombre de la empresa (campos B2B)"],
                    ["Campos personalizados", "Cualquier campo adicional de tu formulario"],
                    ["UTM Source / Medium / Campaign", "Parámetros de campaña completos"],
                    ["Landing URL", "URL exacta de la landing donde convirtió"],
                    ["Timestamp", "Fecha y hora exacta de la conversión"],
                  ].map(([f, d]) => (
                    <div key={f} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-2 h-2 rounded-full bg-[#9D4EDD] mt-2" />
                      <span><strong className="text-[#1A1A2E]">{f}:</strong> {d}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ═══ 4. TOP 5 AUTOMATIZACIONES ═══ */}
          <section className="px-6 py-24 bg-white">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#9D4EDD] bg-[#F3E8FF] px-4 py-1.5 rounded-full border border-[#E0AAFF] mb-4">Casos de uso reales</span>
                <h2 className="text-3xl md:text-4xl font-extrabold">5 Automatizaciones de Leads con Zapier que Puedes Activar Hoy</h2>
                <p className="text-[#6B7280] mt-4 max-w-2xl mx-auto">
                  Estos son los flujos de trabajo que las{" "}
                  <Link href="/para/agencias-de-marketing" className="text-[#9D4EDD] underline underline-offset-2 hover:text-[#7B2CBF]">agencias de marketing</Link>{" "}
                  y equipos de ventas activan primero cuando conectan LandForge con Zapier.
                </p>
              </div>
              <div className="flex flex-col gap-8">
                {[
                  { icon: "🏢", title: "Lead → CRM (HubSpot, Salesforce, Pipedrive)", apps: "HubSpot · Salesforce · Pipedrive · Zoho CRM", desc: "Cada lead capturado en tu landing crea automáticamente un contacto y un deal en tu CRM de ventas. Nombre, email, teléfono, empresa y todos los campos personalizados se mapean a las propiedades correspondientes del CRM. Si el contacto ya existe, Zapier puede actualizar el registro en lugar de crear duplicados, manteniendo limpia tu base de datos. Para empresas que usan HubSpot como CRM principal, también ofrecemos una", linkText: "integración nativa directa con HubSpot", linkHref: "/integraciones/hubspot" },
                  { icon: "📧", title: "Lead → Email Marketing (Mailchimp, ActiveCampaign)", apps: "Mailchimp · ActiveCampaign · Brevo · ConvertKit", desc: "Cada nuevo lead se suscribe automáticamente a la lista de email marketing que elijas. Puedes segmentar por landing page de origen usando el campo Landing URL, o por campaña usando los parámetros UTM. ActiveCampaign puede iniciar una secuencia de nurturing automática en el instante de la conversión. Ideal para estrategias de automatización de marketing que convierten leads fríos en clientes con secuencias de emails personalizados según la landing de origen." },
                  { icon: "💬", title: "Lead → Slack (Notificación al equipo de ventas)", apps: "Slack · Microsoft Teams · Discord", desc: "Tu equipo de ventas recibe una notificación en Slack en el instante en que un lead convierte en tu landing page. El mensaje incluye nombre, email, teléfono, la landing de origen y los parámetros UTM para saber de qué campaña viene. El comercial puede actuar en menos de 5 minutos, dentro de la ventana de respuesta óptima. Configura canales distintos por campaña o equipo para mantener organizado el flujo de leads entrantes." },
                  { icon: "📊", title: "Lead → Google Sheets (Base de datos y reportes)", apps: "Google Sheets · Airtable · Notion · Excel Online", desc: "Cada lead se registra como una fila nueva en Google Sheets con todos los campos: nombre, email, teléfono, empresa, landing URL, UTMs y timestamp. Esto te permite crear dashboards de rendimiento, tablas dinámicas por campaña y reportes automatizados que se actualizan en tiempo real. Es la forma más sencilla de tener una base de datos de leads accesible para todo el equipo sin depender de un CRM de pago." },
                  { icon: "📱", title: "Lead → WhatsApp Business (Respuesta inmediata)", apps: "WhatsApp Business · Twilio · Vonage", desc: "Envía un mensaje de WhatsApp automatizado al lead en los primeros 60 segundos tras la conversión. El mensaje puede incluir el nombre del lead y referencia a lo que pidió en la landing. También puedes notificar al comercial por WhatsApp con los datos del lead para que le llame al instante. La combinación de landing page + chatbot + WhatsApp automatizado consigue tasas de respuesta superiores al 80%." },
                ].map((uc) => (
                  <div key={uc.title} className="bg-[#FAFAFA] border border-gray-100 rounded-2xl p-8 md:p-10">
                    <div className="flex items-start gap-4 mb-4">
                      <span className="text-4xl flex-shrink-0">{uc.icon}</span>
                      <div>
                        <h3 className="font-bold text-xl mb-1">{uc.title}</h3>
                        <p className="text-xs font-semibold text-[#9D4EDD] tracking-wide">{uc.apps}</p>
                      </div>
                    </div>
                    <p className="text-[#6B7280] leading-relaxed">
                      {uc.desc}
                      {uc.linkHref && <>{" "}<Link href={uc.linkHref} className="text-[#9D4EDD] underline underline-offset-2 hover:text-[#7B2CBF]">{uc.linkText}</Link>.</>}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ═══ 5. BENEFICIOS — Dark section ═══ */}
          <section className="px-6 py-24 bg-[#1A1A2E] text-white">
            <div className="max-w-5xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Por Qué LandForge + Zapier Transforma tu Flujo de Leads</h2>
              <p className="text-[#E0AAFF] text-lg max-w-2xl mx-auto">
                No se trata solo de ahorrar tiempo. Se trata de que ningún lead se pierda y que puedas escalar campañas sin escalar el trabajo manual. Si buscas{" "}
                <Link href="/blog/como-aumentar-conversion-landing-page" className="text-white underline underline-offset-2 hover:text-[#E0AAFF] transition">aumentar la conversión de tu landing page</Link>,
                la automatización post-captura es tan importante como el diseño de la propia landing.
              </p>
            </div>
            <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
              {[
                { icon: "⚡", title: "Velocidad: lead a acción en segundos", text: "LandForge dispara el webhook en el instante de la conversión. Zapier ejecuta el flujo en tiempo real (planes de pago) o en máximo 15 minutos (plan gratuito). Tu CRM, Slack y email marketing reciben el lead antes de que el visitante cierre la pestaña del navegador. Esa velocidad es la diferencia entre cerrar una venta y perderla frente a la competencia." },
                { icon: "🔒", title: "Cero leads perdidos entre herramientas", text: "Cada lead capturado por Forgi Chatbot o el formulario de tu landing dispara automáticamente el Zap. No depende de que alguien revise un panel, exporte un CSV o copie datos manualmente. Si la app destino falla temporalmente, Zapier reintenta automáticamente y te notifica. La tasa de pérdida de leads pasa del 15-30% típico del procesamiento manual a prácticamente 0%." },
                { icon: "🔀", title: "Flujos multi-paso: un lead, muchas acciones", text: "Un solo Zap puede ejecutar múltiples acciones en cadena: crear el contacto en el CRM, suscribirlo a una lista de Mailchimp, enviar una notificación a Slack, añadir una fila en Google Sheets y disparar un SMS de bienvenida. Todo desde un único trigger de LandForge. Escala tu operación de captación sin multiplicar el trabajo manual de tu equipo." },
              ].map((b) => (
                <div key={b.title} className="bg-white/5 border border-white/10 rounded-2xl p-8">
                  <div className="text-4xl mb-4">{b.icon}</div>
                  <h3 className="font-bold text-lg mb-3">{b.title}</h3>
                  <p className="text-white/60 leading-relaxed">{b.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ═══ 6. COMPARATIVA ═══ */}
          <section className="px-6 py-24 bg-white">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-14">
                <h2 className="text-3xl font-extrabold">LandForge + Zapier vs Gestión Manual vs Otras Integraciones</h2>
                <p className="text-[#6B7280] mt-4 max-w-2xl mx-auto">
                  Comparamos tres enfoques para gestionar los leads que genera tu landing page. Cada uno tiene su lugar,
                  pero la automatización con Zapier es imbatible cuando necesitas conectar múltiples herramientas a la vez.
                </p>
              </div>
              <div className="overflow-x-auto rounded-2xl border border-[#E0AAFF] shadow-sm">
                <table className="w-full text-left bg-white">
                  <thead>
                    <tr className="border-b border-[#E0AAFF] bg-[#FAF5FF]">
                      <th className="p-5 font-bold text-[#6B7280] text-sm">Criterio</th>
                      <th className="p-5 font-bold text-[#9D4EDD]">LandForge + Zapier</th>
                      <th className="p-5 font-bold text-[#6B7280]">Gestión Manual</th>
                      <th className="p-5 font-bold text-[#6B7280]">Integración Nativa Única</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-sm">
                    {[
                      ["Apps conectadas", "+5,000 apps disponibles", "Solo las que puedas copiar manualmente", "1 app (solo esa integración)"],
                      ["Tiempo lead → destino", "< 2 min (real-time con plan pago)", "4-24 horas", "< 5 segundos"],
                      ["Flujos multi-paso", "CRM + Email + Slack en un Zap", "Imposible sin errores", "No (solo una app destino)"],
                      ["Configuración", "2 minutos, sin código", "0 min (pero coste humano infinito)", "2-5 minutos"],
                      ["Coste adicional", "Zapier Free (100 tareas) o desde $19.99/mes", "Horas de trabajo del equipo", "Incluido en plan LandForge"],
                      ["Pérdida de leads", "< 1% (reintentos automáticos)", "15-30% por olvidos", "0% (conexión directa)"],
                      ["Escalabilidad", "Ilimitada: añade apps sin reconfigurar", "Lineal: más leads = más trabajo", "Limitada a una herramienta"],
                    ].map(([feat, lf, manual, native]) => (
                      <tr key={feat}>
                        <td className="p-5 font-semibold text-[#1A1A2E]">{feat}</td>
                        <td className="p-5 text-[#1A1A2E] font-medium">{lf}</td>
                        <td className="p-5 text-[#6B7280]">{manual}</td>
                        <td className="p-5 text-[#6B7280]">{native}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-[#6B7280] text-sm mt-6 text-center max-w-2xl mx-auto">
                La integración con Zapier es complementaria a las nativas. Usa la{" "}
                <Link href="/integraciones/hubspot" className="text-[#9D4EDD] underline underline-offset-2 hover:text-[#7B2CBF]">conexión directa con HubSpot</Link>{" "}
                para el CRM y Zapier para el resto de tu stack. Si tienes tienda online, combínalo con la{" "}
                <Link href="/integraciones/shopify" className="text-[#9D4EDD] underline underline-offset-2 hover:text-[#7B2CBF]">integración con Shopify</Link>{" "}
                para conectar eCommerce y leads en un solo flujo.
              </p>
            </div>
          </section>

          {/* ═══ 7. FAQ ACCORDION ═══ */}
          <section className="px-6 py-24 bg-[#FAFAFA]">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-extrabold text-center mb-14">Preguntas Frecuentes sobre LandForge + Zapier</h2>
              <div className="divide-y divide-gray-100">
                {[
                  {
                    q: "¿Qué datos envía LandForge a Zapier con cada nuevo lead?",
                    a: "LandForge envía a Zapier todos los campos capturados por Forgi Chatbot o el formulario de la landing: nombre, email, teléfono, empresa, campos personalizados, parámetros UTM (utm_source, utm_medium, utm_campaign), la URL de la landing page de origen y el timestamp de la conversión. Estos datos están disponibles como variables en Zapier para mapearlos a cualquiera de las +5,000 apps compatibles.",
                  },
                  {
                    q: "¿Necesito un plan de pago de Zapier para conectar LandForge?",
                    a: "No necesariamente. El plan gratuito de Zapier incluye 100 tareas al mes con Zaps de un solo paso, suficiente para probar la integración o para proyectos con bajo volumen de leads. Para Zaps multi-paso (enviar el lead a HubSpot Y a Slack simultáneamente) necesitas un plan de pago de Zapier desde $19.99/mes. La integración con Zapier está incluida en todos los planes de LandForge, incluido el gratuito.",
                  },
                  {
                    q: "¿Puedo enviar leads de LandForge a varias apps a la vez con Zapier?",
                    a: "Sí. Con Zapier puedes crear flujos multi-paso que envían el mismo lead a múltiples destinos simultáneamente. Por ejemplo: un nuevo lead en LandForge puede crear un contacto en HubSpot, añadir una fila en Google Sheets, enviar una notificación a Slack y suscribir al lead en Mailchimp, todo en un solo Zap. Los flujos multi-paso requieren un plan de pago de Zapier.",
                  },
                  {
                    q: "¿Cuánto tarda un lead en llegar a mi CRM o app a través de Zapier?",
                    a: "LandForge dispara el trigger de Zapier en tiempo real mediante webhook en el instante de la conversión. Los planes de pago de Zapier ejecutan Zaps al instante, mientras que el plan gratuito tiene un intervalo de sondeo de hasta 15 minutos. En la práctica, con un plan de pago, el lead llega a tu CRM o app en menos de 2 minutos desde la conversión en la landing page.",
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

          {/* ═══ 8. CTA FINAL ═══ */}
          <section className="px-6 py-24 text-center" style={{ background: "linear-gradient(135deg, #9D4EDD 0%, #4C0099 100%)" }}>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-5">
                Deja de Copiar Leads a Mano. Conecta Zapier en 2 Minutos.
              </h2>
              <p className="text-[#E0AAFF] text-lg mb-10 leading-relaxed">
                Cada minuto sin automatización es un lead que se enfría, un dato que se pierde y un comercial
                que llega tarde. Conecta LandForge con Zapier y deja que tus leads fluyan automáticamente a las
                +5,000 apps de tu stack. La integración está incluida en todos los{" "}
                <Link href="/precios" className="text-white underline underline-offset-2 hover:text-[#E0AAFF] transition">
                  planes de LandForge
                </Link>
                , incluido el plan gratuito.
              </p>
              <Link
                href="/register"
                className="inline-block bg-white text-[#9D4EDD] font-bold text-lg px-10 py-5 rounded-2xl hover:-translate-y-1 transition shadow-xl"
              >
                Conectar Zapier gratis →
              </Link>
              <p className="text-[#E0AAFF] mt-5 text-sm">
                Sin tarjeta · Zapier Free compatible · Incluido en todos los planes de LandForge
              </p>
            </div>
          </section>

          {/* ── ENLAZADO INTERNO ── */}
          <section className="px-6 py-12 bg-[#FAFAFA] border-t border-gray-100">
            <div className="max-w-5xl mx-auto">
              <h3 className="font-bold text-[#1A1A2E] mb-6 text-lg">Explora más integraciones y recursos</h3>
              <div className="flex flex-wrap gap-4">
                {[
                  ["/integraciones/hubspot", "Integración con HubSpot"],
                  ["/integraciones/shopify", "Integración con Shopify"],
                  ["/integraciones/wordpress", "Integración con WordPress"],
                  ["/para/agencias-de-marketing", "LandForge para Agencias"],
                  ["/features/forgi-chatbot", "Forgi Chatbot IA"],
                  ["/precios", "Planes y Precios"],
                  ["/blog/como-aumentar-conversion-landing-page", "Cómo Aumentar la Conversión"],
                ].map(([href, label]) => (
                  <Link key={href} href={href} className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">
                    → {label}
                  </Link>
                ))}
              </div>
            </div>
          </section>

        </main>
      </div>
    </>
  );
}
