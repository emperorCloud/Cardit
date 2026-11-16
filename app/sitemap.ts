import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";
import { getPosts, getProducts, getServices } from "@/lib/content";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [services, products, posts] = await Promise.all([getServices(), getProducts(), getPosts()]);
  const routes = ["", "/services", ...(products.length ? ["/produits"] : []), ...(posts.length ? ["/blog"] : []), "/about", "/partners", "/contact"];

  return [
    ...routes.map((route) => ({
      url: `${siteUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.7,
    })),
    ...services.map((s) => ({
      url: `${siteUrl}/services/${s.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...products.map((p) => ({
      url: `${siteUrl}/produits/${p.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...posts.map((p) => ({
      url: `${siteUrl}/blog/${p.slug}`,
      lastModified: new Date(p.date || Date.now()),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
