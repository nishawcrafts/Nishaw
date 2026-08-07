import type { MetadataRoute } from "next";
import { collections }         from "@/content/collections";
import { getJournalSlugs }     from "@/lib/journal";

const BASE = "https://nishaw.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  /* Static pages */
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE,                        lastModified: now, changeFrequency: "monthly",  priority: 1.0  },
    { url: `${BASE}/collections`,       lastModified: now, changeFrequency: "monthly",  priority: 0.9  },
    { url: `${BASE}/bespoke`,           lastModified: now, changeFrequency: "monthly",  priority: 0.85 },
    { url: `${BASE}/for-enterprises`,   lastModified: now, changeFrequency: "monthly",  priority: 0.85 },
    { url: `${BASE}/how-we-gift`,       lastModified: now, changeFrequency: "monthly",  priority: 0.8  },
    { url: `${BASE}/gift-register`,     lastModified: now, changeFrequency: "monthly",  priority: 0.75 },
    { url: `${BASE}/story`,             lastModified: now, changeFrequency: "monthly",  priority: 0.7  },
    { url: `${BASE}/journal`,           lastModified: now, changeFrequency: "weekly",   priority: 0.8  },
    { url: `${BASE}/contact`,           lastModified: now, changeFrequency: "yearly",   priority: 0.7  },
  ];

  /* Collection pages */
  const collectionRoutes: MetadataRoute.Sitemap = collections.map((c) => ({
    url:             `${BASE}/collections/${c.slug}`,
    lastModified:    now,
    changeFrequency: "monthly" as const,
    priority:        0.75,
  }));

  /* Journal article pages */
  const journalRoutes: MetadataRoute.Sitemap = getJournalSlugs().map((slug) => ({
    url:             `${BASE}/journal/${slug}`,
    lastModified:    now,
    changeFrequency: "weekly" as const,
    priority:        0.65,
  }));

  return [...staticRoutes, ...collectionRoutes, ...journalRoutes];
}
