import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://upperhand.co.zw"; // Placeholder domain

  const routes = [
    "",
    "/about",
    "/services",
    "/projects",
    "/contact",
    "/services/solar",
    "/services/electrical",
    "/services/boreholes",
    "/services/roofing",
    "/services/ceilings",
    "/services/painting",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  return routes;
}
