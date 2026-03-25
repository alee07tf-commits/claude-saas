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
    {
      url: `${SITE_URL}/pricing`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
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
    // ── Conversión ──
    {
      url: `${SITE_URL}/register`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/login`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
