import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Precios y Planes — Desde 49€/mes",
  description:
    "Planes claros y sin sorpresas para agencias. Desde 49€/mes con 14 días gratis. Compara Starter, Agency y Agency Pro. 20% dto. anual.",
  keywords: [
    "precios landforge",
    "planes landforge agencias",
    "precio generador landing pages ia",
    "landforge pricing",
    "software landing pages precio",
  ],
  alternates: {
    canonical: "https://landforge.digital/precios",
  },
  openGraph: {
    title: "Precios y Planes — Desde 49€/mes",
    description:
      "Planes claros y sin sorpresas para agencias de marketing. Desde 49€/mes con 14 días gratis.",
    url: "https://landforge.digital/precios",
  },
};

const pricingSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "LandForge",
  description:
    "Generador de landing pages con IA para agencias de marketing. Incluye chatbot de ventas Forgi, Conversion Score y white label.",
  brand: { "@type": "Brand", name: "LandForge" },
  offers: [
    {
      "@type": "Offer",
      name: "Starter",
      price: "49",
      priceCurrency: "EUR",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "49",
        priceCurrency: "EUR",
        unitCode: "MON",
        referenceQuantity: { "@type": "QuantitativeValue", value: "1", unitCode: "MON" },
      },
      description:
        "5 landings activas, 10 generaciones IA/mes, 30 ediciones Forgi/mes, 500 mensajes chatbot, Conversion Score.",
      availability: "https://schema.org/InStock",
    },
    {
      "@type": "Offer",
      name: "Agency",
      price: "97",
      priceCurrency: "EUR",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "97",
        priceCurrency: "EUR",
        unitCode: "MON",
        referenceQuantity: { "@type": "QuantitativeValue", value: "1", unitCode: "MON" },
      },
      description:
        "20 landings activas, 100 generaciones IA/mes, 200 ediciones Forgi/mes, 3.000 mensajes chatbot, análisis de competidores, dominio propio.",
      availability: "https://schema.org/InStock",
    },
    {
      "@type": "Offer",
      name: "Agency Pro",
      price: "197",
      priceCurrency: "EUR",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "197",
        priceCurrency: "EUR",
        unitCode: "MON",
        referenceQuantity: { "@type": "QuantitativeValue", value: "1", unitCode: "MON" },
      },
      description:
        "Landings ilimitadas, generaciones ilimitadas, ediciones ilimitadas, chatbot ilimitado, white label, soporte prioritario.",
      availability: "https://schema.org/InStock",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Hay un plan gratuito en LandForge?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Puedes generar 1 landing page de forma gratuita sin tarjeta de crédito. Para más landings y funcionalidades avanzadas, los planes de pago empiezan desde 49€/mes con 14 días de prueba gratis.",
      },
    },
    {
      "@type": "Question",
      name: "¿Puedo cancelar en cualquier momento?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. No hay permanencia ni penalización. Si cancelas, tu cuenta se mantiene activa hasta el final del período pagado y luego pasa al plan gratuito.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué incluye el white label del plan Agency Pro?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El white label permite eliminar toda mención a LandForge de las landing pages que entregas a tus clientes. Las landings se publican sin ninguna referencia visible a LandForge, con tu propia marca.",
      },
    },
  ],
};

const plans = [
  {
    name: "Starter",
    price: 49,
    priceAnnual: 39,
    desc: "Perfecto para empezar a testear ideas.",
    features: [
      "5 Landings activas",
      "10 Generaciones AI al mes",
      "30 Ediciones Forgi al mes",
      "500 Mensajes en el Chatbot",
      "Conversion Score",
      "Hosting incluido",
      "Subdominio gratuito",
    ],
    notIncluded: ["Dominio propio", "White label", "Análisis de competidores"],
    highlight: false,
    cta: "Empezar con Starter",
  },
  {
    name: "Agency",
    price: 97,
    priceAnnual: 78,
    desc: "Para agencias que manejan varios clientes.",
    features: [
      "20 Landings activas",
      "100 Generaciones AI al mes",
      "200 Ediciones Forgi al mes",
      "3.000 Mensajes en el Chatbot",
      "Conversion Score",
      "Análisis de competidores",
      "Dominio propio",
      "Hosting incluido",
    ],
    notIncluded: ["White label"],
    highlight: true,
    cta: "Empezar con Agency",
    badge: "Más popular",
  },
  {
    name: "Agency Pro",
    price: 197,
    priceAnnual: 158,
    desc: "El plan definitivo sin límites.",
    features: [
      "Landings Ilimitadas",
      "Generaciones AI Ilimitadas",
      "Ediciones Forgi Ilimitadas",
      "Chatbot Ilimitado",
      "White label (tu marca)",
      "Soporte prioritario",
      "Dominio propio",
      "Hosting incluido",
      "Análisis de competidores",
    ],
    notIncluded: [],
    highlight: false,
    cta: "Ser Agency Pro",
  },
];

export default function PreciosPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="min-h-screen bg-[#FAFAFA] text-[#1A1A2E] font-sans">
        <main>

          {/* ── HERO ── */}
          <section className="relative px-6 pt-32 pb-16 text-center flex flex-col items-center">
            <p className="text-xs font-bold uppercase tracking-[2px] text-[#9D4EDD] mb-5 bg-[#F3E8FF] border border-[#E0AAFF] px-4 py-1.5 rounded-full inline-block">
              Planes y Precios
            </p>

            <h1 className="text-4xl md:text-5xl font-extrabold max-w-4xl tracking-tight leading-tight mb-6">
              Precios de LandForge: Planes de Landing Pages{" "}
              <span style={{ background: "linear-gradient(135deg, #9D4EDD, #7B2CBF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                claros y sin sorpresas.
              </span>
            </h1>

            <p className="text-lg text-[#6B7280] max-w-2xl leading-relaxed mb-4">
              14 días gratis en todos los planes. Sin tarjeta. Si no te convence, no pagas.
              <br />
              <strong className="text-[#1A1A2E]">Descuento del 20% en pago anual.</strong>
            </p>
          </section>

          {/* ── PLANS GRID ── */}
          <section className="px-6 pb-24">
            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`relative bg-white rounded-2xl p-8 flex flex-col ${
                    plan.highlight
                      ? "border-2 border-[#9D4EDD] shadow-lg shadow-purple-100"
                      : "border border-[#E0AAFF]"
                  }`}
                >
                  {plan.badge && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold text-white px-4 py-1 rounded-full"
                      style={{ background: "linear-gradient(135deg, #9D4EDD, #7B2CBF)" }}>
                      {plan.badge}
                    </span>
                  )}

                  <h2 className="text-2xl font-extrabold mb-2">{plan.name}</h2>
                  <p className="text-sm text-[#6B7280] mb-6">{plan.desc}</p>

                  <div className="mb-6">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-extrabold">{plan.price}€</span>
                      <span className="text-[#6B7280] text-sm">/mes</span>
                    </div>
                    <p className="text-xs text-[#9D4EDD] mt-1">
                      o {plan.priceAnnual}€/mes con pago anual
                    </p>
                  </div>

                  <ul className="flex-grow space-y-3 mb-8">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm">
                        <span className="text-[#9D4EDD] font-bold flex-shrink-0 mt-0.5">✓</span>
                        <span>{f}</span>
                      </li>
                    ))}
                    {plan.notIncluded.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm text-[#6B7280]/50">
                        <span className="font-bold flex-shrink-0 mt-0.5">—</span>
                        <span className="line-through">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/register"
                    className={`block text-center py-4 rounded-xl font-bold text-sm transition hover:-translate-y-0.5 ${
                      plan.highlight
                        ? "text-white shadow-lg"
                        : "text-[#9D4EDD] border border-[#E0AAFF] hover:bg-[#F3E8FF]"
                    }`}
                    style={plan.highlight ? { background: "linear-gradient(135deg, #9D4EDD, #7B2CBF)" } : undefined}
                  >
                    {plan.cta} →
                  </Link>
                </div>
              ))}
            </div>
          </section>

          {/* ── WHAT'S INCLUDED IN ALL PLANS ── */}
          <section className="px-6 py-24 bg-[#F3E8FF]">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-extrabold mb-12">Incluido en todos los planes</h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                {[
                  { icon: "⚡", title: "Generación con IA", desc: "Landing completa en 30 segundos desde un formulario" },
                  { icon: "🤖", title: "Forgi Chatbot", desc: "Asistente de ventas IA activado automáticamente" },
                  { icon: "✏️", title: "Forgi Editor", desc: "Edita cualquier sección con lenguaje natural" },
                  { icon: "📊", title: "Conversion Score", desc: "Puntuación de 0 a 100 con recomendaciones" },
                  { icon: "📱", title: "100% Responsive", desc: "Todas las landings se adaptan a móvil automáticamente" },
                  { icon: "🌐", title: "Hosting incluido", desc: "Subdominio gratuito con SSL incluido" },
                ].map((item) => (
                  <div key={item.title} className="bg-white rounded-2xl p-6 border border-[#E0AAFF] text-left">
                    <span className="text-2xl mb-3 block">{item.icon}</span>
                    <h3 className="font-bold mb-1">{item.title}</h3>
                    <p className="text-sm text-[#6B7280]">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── COMPARISON TABLE ── */}
          <section className="px-6 py-24">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-extrabold text-center mb-12">Comparativa de planes</h2>
              <div className="overflow-x-auto rounded-2xl border border-[#E0AAFF] shadow-sm">
                <table className="w-full text-left bg-white text-sm">
                  <thead>
                    <tr className="border-b border-[#E0AAFF] bg-[#FAF5FF]">
                      <th className="p-5 font-bold text-[#6B7280] w-1/4">Característica</th>
                      <th className="p-5 font-bold text-[#6B7280]">Starter</th>
                      <th className="p-5 font-bold text-[#9D4EDD]">Agency</th>
                      <th className="p-5 font-bold text-[#6B7280]">Agency Pro</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {[
                      { cat: "Landings activas", s: "5", a: "20", p: "Ilimitadas" },
                      { cat: "Generaciones IA / mes", s: "10", a: "100", p: "Ilimitadas" },
                      { cat: "Ediciones Forgi / mes", s: "30", a: "200", p: "Ilimitadas" },
                      { cat: "Mensajes Chatbot / mes", s: "500", a: "3.000", p: "Ilimitados" },
                      { cat: "Conversion Score", s: "✓", a: "✓", p: "✓" },
                      { cat: "Análisis de competidores", s: "—", a: "✓", p: "✓" },
                      { cat: "Dominio propio", s: "—", a: "✓", p: "✓" },
                      { cat: "White label", s: "—", a: "—", p: "✓" },
                      { cat: "Soporte prioritario", s: "—", a: "—", p: "✓" },
                      { cat: "Precio mensual", s: "49€", a: "97€", p: "197€" },
                      { cat: "Precio anual (mes)", s: "39€", a: "78€", p: "158€" },
                    ].map((row) => (
                      <tr key={row.cat} className="hover:bg-gray-50">
                        <td className="p-5 font-semibold">{row.cat}</td>
                        <td className="p-5">{row.s}</td>
                        <td className="p-5 font-medium text-[#9D4EDD]">{row.a}</td>
                        <td className="p-5">{row.p}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* ── FAQ ── */}
          <section className="px-6 py-24 bg-white">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-extrabold text-center mb-14">Preguntas frecuentes sobre precios</h2>
              <div className="divide-y divide-gray-100">
                {[
                  { q: "¿Hay un plan gratuito?", a: "Sí. Puedes generar 1 landing page de forma gratuita sin tarjeta de crédito. Para más landings y funcionalidades avanzadas, los planes de pago empiezan desde 49€/mes con 14 días de prueba gratis." },
                  { q: "¿Puedo cancelar en cualquier momento?", a: "Sí. No hay permanencia ni penalización. Si cancelas, tu cuenta se mantiene activa hasta el final del período pagado y luego pasa al plan gratuito." },
                  { q: "¿Qué incluye el white label del plan Agency Pro?", a: "El white label permite eliminar toda mención a LandForge de las landing pages que entregas a tus clientes. Las landings se publican sin ninguna referencia visible a LandForge." },
                  { q: "¿Puedo cambiar de plan en cualquier momento?", a: "Sí. Puedes subir o bajar de plan cuando quieras. Si subes, se aplica el prorrateo del tiempo restante. Si bajas, el cambio se aplica al siguiente ciclo de facturación." },
                  { q: "¿Aceptáis pagos en dólares?", a: "Todos los precios están en euros (EUR). El cobro se realiza a través de Stripe, que acepta tarjetas de cualquier país y convierte automáticamente la moneda." },
                ].map((faq) => (
                  <details key={faq.q} className="group py-5">
                    <summary className="flex justify-between items-center cursor-pointer list-none font-semibold text-[#1A1A2E]">
                      <span>{faq.q}</span>
                      <span className="text-[#9D4EDD] ml-4 group-open:rotate-45 transition-transform flex-shrink-0 text-xl">+</span>
                    </summary>
                    <p className="mt-4 text-[#6B7280] leading-relaxed">{faq.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>

          {/* ── CTA ── */}
          <section className="px-6 py-24 text-center" style={{ background: "linear-gradient(135deg, #9D4EDD 0%, #4C0099 100%)" }}>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-extrabold text-white mb-5">14 días gratis. Sin tarjeta. Sin riesgo.</h2>
              <p className="text-[#E0AAFF] text-lg mb-10">
                Genera tu primera landing en 30 segundos y decide después. Si no es para ti, no habrás pagado nada.
              </p>
              <Link href="/register" className="inline-block bg-white text-[#9D4EDD] font-bold text-lg px-10 py-5 rounded-2xl hover:-translate-y-1 transition shadow-xl">
                Empezar gratis →
              </Link>
            </div>
          </section>

          {/* ── Internal linking ── */}
          <section className="px-6 py-12 bg-[#FAFAFA] border-t border-gray-100">
            <div className="max-w-5xl mx-auto">
              <h3 className="font-bold mb-5">Descubre más sobre LandForge</h3>
              <div className="flex flex-wrap gap-4">
                <Link href="/para/agencias-de-marketing" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">→ LandForge para Agencias</Link>
                <Link href="/features/forgi-chatbot" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">→ Forgi Chatbot IA</Link>
                <Link href="/features/forgi-editor" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">→ Forgi Editor IA</Link>
                <Link href="/comparar" className="text-[#9D4EDD] font-semibold text-sm border border-[#E0AAFF] rounded-lg px-4 py-2 hover:bg-[#F3E8FF] transition">→ Comparativas</Link>
              </div>
            </div>
          </section>

        </main>
      </div>
    </>
  );
}
