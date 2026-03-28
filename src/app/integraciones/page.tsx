import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Integraciones",
  description:
    "Conecta LandForge con WordPress, Shopify, HubSpot y Zapier. Envía leads a tu CRM, automatiza flujos y publica en tu plataforma favorita.",
  alternates: {
    canonical: "https://landforge.digital/integraciones",
  },
  openGraph: {
    title: "Integraciones | LandForge",
    description:
      "Conecta LandForge con WordPress, Shopify, HubSpot y Zapier. Envía leads a tu CRM, automatiza flujos y publica en tu plataforma favorita.",
    url: "https://landforge.digital/integraciones",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://landforge.digital" },
    { "@type": "ListItem", position: 2, name: "Integraciones", item: "https://landforge.digital/integraciones" },
  ],
};

const INTEGRATIONS = [
  {
    href: "/integraciones/wordpress",
    title: "WordPress",
    desc: "Publica landing pages con IA en tu WordPress sin plugins pesados. Compatible con cualquier tema y sin afectar Core Web Vitals.",
    tag: "CMS",
  },
  {
    href: "/integraciones/shopify",
    title: "Shopify",
    desc: "Landing pages de producto para tu tienda Shopify. Forgi responde dudas de compradores 24/7 y reduce el abandono de carrito.",
    tag: "eCommerce",
  },
  {
    href: "/integraciones/hubspot",
    title: "HubSpot",
    desc: "Envía cada lead directo a HubSpot CRM con datos de conversión. Sin código, configuración en 2 minutos.",
    tag: "CRM",
  },
  {
    href: "/integraciones/zapier",
    title: "Zapier",
    desc: "Conecta LandForge con +5.000 apps: email marketing, Slack, Google Sheets, CRMs y más. Automatiza sin código.",
    tag: "Automatización",
  },
];

export default function IntegracionesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="min-h-screen bg-[#FAFAFA] text-[#1A1A2E] font-sans">
        <main className="max-w-4xl mx-auto pt-28 pb-20 px-6">

          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-[#6B7280]">
            <ol className="flex items-center gap-2">
              <li><Link href="/" className="hover:text-[#9D4EDD] transition">Inicio</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-[#1A1A2E] font-medium">Integraciones</li>
            </ol>
          </nav>

          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
            Integraciones de LandForge
          </h1>
          <p className="text-[#6B7280] text-lg mb-12 max-w-2xl">
            Conecta tus landing pages con las herramientas que ya usas. Envía leads, automatiza flujos
            y publica en tu plataforma favorita.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {INTEGRATIONS.map((i) => (
              <Link
                key={i.href}
                href={i.href}
                className="bg-white rounded-xl border border-gray-200 p-6 hover:border-[#E0AAFF] hover:shadow-md transition group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <h2 className="font-bold text-lg group-hover:text-[#9D4EDD] transition">
                    {i.title}
                  </h2>
                  <span className="text-xs font-semibold bg-[#FAF5FF] text-[#9D4EDD] px-2 py-0.5 rounded-full border border-[#E0AAFF]">
                    {i.tag}
                  </span>
                </div>
                <p className="text-[#6B7280] text-sm leading-relaxed">{i.desc}</p>
              </Link>
            ))}
          </div>

          <div className="mt-14 text-center">
            <p className="text-[#6B7280] mb-4">¿Necesitas otra integración? Zapier conecta LandForge con +5.000 apps.</p>
            <Link
              href="/precios"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-semibold text-sm"
              style={{ background: "linear-gradient(135deg, #9D4EDD, #7B2CBF)" }}
            >
              Ver planes y precios →
            </Link>
          </div>

        </main>
      </div>
    </>
  );
}
