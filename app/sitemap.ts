import fs from "node:fs";
import path from "node:path";
import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";

type SitemapEntry = MetadataRoute.Sitemap[number];

type RouteDefinition = {
  url: string;
  filePath: string;
  changeFrequency: NonNullable<SitemapEntry["changeFrequency"]>;
  priority: number;
};

const staticRoutes: RouteDefinition[] = [
  { url: "/", filePath: "app/page.tsx", changeFrequency: "weekly", priority: 1 },
  {
    url: "/about",
    filePath: "app/(footer)/about/page.tsx",
    changeFrequency: "monthly",
    priority: 0.85,
  },
  {
    url: "/resources",
    filePath: "app/(main)/resources/page.tsx",
    changeFrequency: "weekly",
    priority: 0.85,
  },
  {
    url: "/contact",
    filePath: "app/(footer)/contact/page.tsx",
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    url: "/privacy-policy",
    filePath: "app/(footer)/privacy-policy/page.tsx",
    changeFrequency: "yearly",
    priority: 0.4,
  },
  {
    url: "/terms-of-service",
    filePath: "app/(footer)/terms-of-service/page.tsx",
    changeFrequency: "yearly",
    priority: 0.4,
  },
  {
    url: "/licensing",
    filePath: "app/(footer)/licensing/page.tsx",
    changeFrequency: "yearly",
    priority: 0.3,
  },
  {
    url: "/cookie-consent",
    filePath: "app/(footer)/cookie-consent/page.tsx",
    changeFrequency: "yearly",
    priority: 0.2,
  },
];

const getLastModified = (relativePath: string) => {
  const absolutePath = path.join(process.cwd(), relativePath);
  try {
    return fs.statSync(absolutePath).mtime;
  } catch {
    return new Date();
  }
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return staticRoutes.map((route) => ({
    url: `${siteConfig.url}${route.url}`,
    lastModified: getLastModified(route.filePath),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
