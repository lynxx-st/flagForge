import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/about", "/resources", "/contact"],
        disallow: [
          "/api/",
          "/authentication",
          "/home",
          "/leaderboard",
          "/problems",
          "/profile",
          "/resources/upload",
          "/roles/developers/",
          "/testprofile",
          "/unauthorized",
        ],
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
