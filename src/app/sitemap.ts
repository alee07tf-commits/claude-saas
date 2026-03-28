import { MetadataRoute } from "next";

const SITE_URL = "https://landforge.digital";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // ── Páginas principales ──
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    // ── Silos B2B (Programático BOFU) ──
    {
      url: `${SITE_URL}/para/agencias-de-marketing`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${SITE_URL}/para/ecommerce`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${SITE_URL}/para/abogados`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${SITE_URL}/para/clinicas-dentales`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${SITE_URL}/para/inmobiliarias`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/para/coaches`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    // ── Integraciones (BOFU Técnico) ──
    {
      url: `${SITE_URL}/integraciones/wordpress`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    // ── Blog y MOFU ──
    {
      url: `${SITE_URL}/comparar/landforge-vs-webflow`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/blog/como-aumentar-conversion-landing-page`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/blog/que-es-una-landing-page`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    // ── Features ──
    {
      url: `${SITE_URL}/features/forgi-editor`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/features/forgi-chatbot`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    // ── Comparativas ──
    {
      url: `${SITE_URL}/comparar/landforge-vs-unbounce`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/comparar/alternativas-leadpages`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/comparar`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // ── Nuevos Silos BOFU y Técnicos ──
    {
      url: `${SITE_URL}/para/restaurantes`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/integraciones/shopify`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/blog/chatbot-ventas-para-web`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/blog/como-crear-landing-page-alta-conversion`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/comparar/alternativas-unbounce`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    // ── Nuevas páginas (Marzo 2026) ──
    {
      url: `${SITE_URL}/precios`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.95,
    },
    {
      url: `${SITE_URL}/comparar/landforge-vs-carrd`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/features/conversion-score`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/blog/mejores-herramientas-crear-landing-pages`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/blog/landing-page-para-agencias-guia`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    // ── Mes 2 — Comparativas ──
    {
      url: `${SITE_URL}/comparar/landforge-vs-instapage`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/comparar/alternativas-webflow`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    // ── Mes 2 — Integraciones ──
    {
      url: `${SITE_URL}/integraciones/zapier`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/integraciones/hubspot`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    // ── Mes 2 — Silos B2B ──
    {
      url: `${SITE_URL}/para/gimnasios`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/para/startups-saas`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    // ── Mes 2 — Blog ──
    {
      url: `${SITE_URL}/blog/que-es-un-chatbot-de-ventas-ia`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/blog/ab-testing-landing-pages-guia`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    // ── Hub pages ──
    {
      url: `${SITE_URL}/para`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/features`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/integraciones`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    // ── Sobre nosotros (E-E-A-T) ──
    {
      url: `${SITE_URL}/sobre-nosotros`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // ── Páginas legales ──
    {
      url: `${SITE_URL}/aviso-legal`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/politica-privacidad`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/politica-cookies`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/terminos`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
