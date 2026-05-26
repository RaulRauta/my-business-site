import type { MetadataRoute } from "next";

const siteUrl = "https://flowcraftstudio.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const languages = ["ro", "en"] as const;
  const routes = [
    { path: "", changeFrequency: "weekly", priority: 1 },
    { path: "/services", changeFrequency: "weekly", priority: 0.9 },
    { path: "/process", changeFrequency: "monthly", priority: 0.8 },
    { path: "/contact", changeFrequency: "monthly", priority: 0.9 },
    { path: "/projects", changeFrequency: "monthly", priority: 0.85 },
    { path: "/about", changeFrequency: "monthly", priority: 0.7 },
    { path: "/projects/morrow-cafe", changeFrequency: "monthly", priority: 0.75 },
    { path: "/projects/north-studio", changeFrequency: "monthly", priority: 0.7 },
    {
      path: "/projects/restaurant-concept",
      changeFrequency: "monthly",
      priority: 0.65,
    },
    {
      path: "/projects/enciclopedia-florilor",
      changeFrequency: "monthly",
      priority: 0.6,
    },
    { path: "/demo/restaurant", changeFrequency: "monthly", priority: 0.65 },
  ] satisfies Array<{
    path: string;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
    priority: number;
  }>;

  return languages.flatMap((lang) =>
    routes.map((route) => ({
      url: `${siteUrl}/${lang}${route.path}`,
      lastModified: now,
      changeFrequency: route.changeFrequency,
      priority: lang === "ro" ? route.priority : Math.max(route.priority - 0.1, 0.5),
    })),
  );
}
