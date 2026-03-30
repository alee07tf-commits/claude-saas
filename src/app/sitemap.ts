import { MetadataRoute } from "next";

const SITE_URL = "https://landforge.digital";

// Static lastModified dates by content group (avoids new Date() generating identical timestamps)
const DATES = {
  homepage: "2026-03-30",
  precios: "2026-03-30",
  hubs: "2026-03-30",
  blog: "2026-03-28",
  comparativas: "2026-03-28",
  sectores: "2026-03-28",
  sobreNosotros: "2026-03-28",
  features: "2026-03-25",
  integraciones: "2026-03-25",
  legales: "2026-03-15",
};

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // ── Páginas principales ──
    {
      url: SITE_URL,
      lastModified: DATES.homepage,
      changeFrequency: "weekly",
      priority: 1,
    },
    // ── Silos B2B (Programático BOFU) ──
    {
      url: `${SITE_URL}/para/agencias-de-marketing`,
      lastModified: DATES.sectores,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${SITE_URL}/para/ecommerce`,
      lastModified: DATES.sectores,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${SITE_URL}/para/abogados`,
      lastModified: DATES.sectores,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${SITE_URL}/para/clinicas-dentales`,
      lastModified: DATES.sectores,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${SITE_URL}/para/inmobiliarias`,
      lastModified: DATES.sectores,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/para/coaches`,
      lastModified: DATES.sectores,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    // ── Integraciones (BOFU Técnico) ──
    {
      url: `${SITE_URL}/integraciones/wordpress`,
      lastModified: DATES.integraciones,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    // ── Blog y MOFU ──
    {
      url: `${SITE_URL}/comparar/landforge-vs-webflow`,
      lastModified: DATES.comparativas,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: DATES.blog,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/blog/como-aumentar-conversion-landing-page`,
      lastModified: DATES.blog,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/blog/que-es-una-landing-page`,
      lastModified: DATES.blog,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    // ── Features ──
    {
      url: `${SITE_URL}/features/forgi-editor`,
      lastModified: DATES.features,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/features/forgi-chatbot`,
      lastModified: DATES.features,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    // ── Comparativas ──
    {
      url: `${SITE_URL}/comparar/landforge-vs-unbounce`,
      lastModified: DATES.comparativas,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/comparar/alternativas-leadpages`,
      lastModified: DATES.comparativas,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/comparar`,
      lastModified: DATES.comparativas,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // ── Nuevos Silos BOFU y Técnicos ──
    {
      url: `${SITE_URL}/para/restaurantes`,
      lastModified: DATES.sectores,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/integraciones/shopify`,
      lastModified: DATES.integraciones,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/blog/chatbot-ventas-para-web`,
      lastModified: DATES.blog,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/blog/como-crear-landing-page-alta-conversion`,
      lastModified: DATES.blog,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/comparar/alternativas-unbounce`,
      lastModified: DATES.comparativas,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    // ── Nuevas páginas (Marzo 2026) ──
    {
      url: `${SITE_URL}/precios`,
      lastModified: DATES.precios,
      changeFrequency: "monthly",
      priority: 0.95,
    },
    {
      url: `${SITE_URL}/comparar/landforge-vs-carrd`,
      lastModified: DATES.comparativas,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/features/conversion-score`,
      lastModified: DATES.features,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/blog/mejores-herramientas-crear-landing-pages`,
      lastModified: DATES.blog,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/blog/landing-page-para-agencias-guia`,
      lastModified: DATES.blog,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    // ── Mes 2 — Comparativas ──
    {
      url: `${SITE_URL}/comparar/landforge-vs-instapage`,
      lastModified: DATES.comparativas,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/comparar/alternativas-webflow`,
      lastModified: DATES.comparativas,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    // ── Mes 2 — Integraciones ──
    {
      url: `${SITE_URL}/integraciones/zapier`,
      lastModified: DATES.integraciones,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/integraciones/hubspot`,
      lastModified: DATES.integraciones,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    // ── Mes 2 — Silos B2B ──
    {
      url: `${SITE_URL}/para/gimnasios`,
      lastModified: DATES.sectores,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/para/startups-saas`,
      lastModified: DATES.sectores,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    // ── Mes 2 — Blog ──
    {
      url: `${SITE_URL}/blog/que-es-un-chatbot-de-ventas-ia`,
      lastModified: DATES.blog,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/blog/ab-testing-landing-pages-guia`,
      lastModified: DATES.blog,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    // ── Hub pages ──
    {
      url: `${SITE_URL}/para`,
      lastModified: DATES.hubs,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/features`,
      lastModified: DATES.hubs,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/integraciones`,
      lastModified: DATES.hubs,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    // ── Sobre nosotros (E-E-A-T) ──
    {
      url: `${SITE_URL}/sobre-nosotros`,
      lastModified: DATES.sobreNosotros,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // ── Mes 3 — Blog (TOFU) ──
    {
      url: `${SITE_URL}/blog/ejemplos-landing-pages-que-convierten`,
      lastModified: "2026-03-30",
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/blog/como-crear-landing-page-gratis`,
      lastModified: "2026-03-30",
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/blog/elementos-landing-page-perfecta`,
      lastModified: "2026-03-30",
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/blog/cuanto-cuesta-landing-page`,
      lastModified: "2026-03-30",
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/blog/mejores-chatbots-ventas-web`,
      lastModified: "2026-03-30",
      changeFrequency: "monthly",
      priority: 0.85,
    },
    // ── Mes 3 — Comparativas (MOFU) ──
    {
      url: `${SITE_URL}/comparar/alternativas-instapage`,
      lastModified: "2026-03-30",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/comparar/alternativas-carrd`,
      lastModified: "2026-03-30",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // ── Mes 3 — Sector (BOFU) ──
    {
      url: `${SITE_URL}/para/cursos-online`,
      lastModified: "2026-03-30",
      changeFrequency: "weekly",
      priority: 0.9,
    },
    // ── Mes 3 — Integraciones (BOFU) ──
    {
      url: `${SITE_URL}/integraciones/google-ads`,
      lastModified: "2026-03-30",
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/integraciones/facebook-ads`,
      lastModified: "2026-03-30",
      changeFrequency: "monthly",
      priority: 0.85,
    },
    // ── Páginas legales ──
    {
      url: `${SITE_URL}/aviso-legal`,
      lastModified: DATES.legales,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/politica-privacidad`,
      lastModified: DATES.legales,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/politica-cookies`,
      lastModified: DATES.legales,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/terminos`,
      lastModified: DATES.legales,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
