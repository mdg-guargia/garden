import { MetadataRoute } from "next";
import { techItems } from "@/data/tech";
import { life } from "@/data/life";

const BASE_URL = "https://[YOUR-DOMAIN].com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/experience",
    "/skills",
    "/tech",
    "/photo",
    "/bike",
    "/working-on",
    "/life",
    "/contact",
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
  }));

  const techRoutes = techItems
    .filter((i) => !i.externalLink)
    .map((i) => {
      const parsed = new Date(i.date);
      return {
        url: `${BASE_URL}/tech/${i.slug}`,
        lastModified: isNaN(parsed.getTime()) ? new Date() : parsed,
      };
    });

  const lifeRoutes = life.map((l) => ({
    url: `${BASE_URL}/life/${l.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...techRoutes, ...lifeRoutes];
}
