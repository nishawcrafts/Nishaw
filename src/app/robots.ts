import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow:     "/",
        disallow:  ["/api/"],
      },
    ],
    sitemap:  "https://nishaw.com/sitemap.xml",
    host:     "https://nishaw.com",
  };
}
