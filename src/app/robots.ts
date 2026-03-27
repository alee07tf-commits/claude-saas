import { MetadataRoute } from "next";

const SITE_URL = "https://landforge.digital";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/dashboard",
          "/survey",
          "/preview",
          "/editor",
          "/api/",
          "/auth/",
          "/login",
          "/register",
          "/forgot-password",
        ],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
