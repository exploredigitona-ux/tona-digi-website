import type { MetadataRoute } from "next";
import { blogPosts, brand, services } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/portfolio",
    "/case-studies",
    "/blog",
    "/contact",
    "/book-consultation",
    "/privacy-policy",
    "/terms-of-service",
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${brand.url}${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.8,
    })),
    ...services.map((service) => ({
      url: `${brand.url}/services/${service.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
    ...blogPosts.map((post) => ({
      url: `${brand.url}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
  ];
}
