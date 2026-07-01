import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { programs } from "@/data/programs";
import { articles } from "@/data/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/programs`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/success-stories`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/gallery`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/resources`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    { url: `${SITE_URL}/contact`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.7 },
  ];

  const programRoutes: MetadataRoute.Sitemap = programs.map((p) => ({
    url: `${SITE_URL}/programs/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const articleRoutes: MetadataRoute.Sitemap = articles.map((a) => ({
    url: `${SITE_URL}/resources/${a.slug}`,
    lastModified: new Date(a.publishedAt),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...programRoutes, ...articleRoutes];
}
