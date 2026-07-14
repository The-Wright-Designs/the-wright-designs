import type { MetadataRoute } from "next";

const baseUrl = "https://www.thewrightdesigns.co.za";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/recent-projects/websites`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/recent-projects/apps`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
