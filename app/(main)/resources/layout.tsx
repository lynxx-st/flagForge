import type { Metadata } from "next";
import type { ReactNode } from "react";
import { siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: "FlagForge Resources | CTF Learning Materials and Security Study Guides",
  description:
    "Explore FlagForge resources for capture the flag preparation, cybersecurity study paths, curated tools, and practical learning materials.",
  alternates: {
    canonical: "/resources",
  },
  openGraph: {
    title: "FlagForge Resources | CTF Learning Materials and Security Study Guides",
    description:
      "Explore FlagForge resources for capture the flag preparation, cybersecurity study paths, curated tools, and practical learning materials.",
    url: `${siteConfig.url}/resources`,
    type: "website",
    siteName: siteConfig.name,
    images: [{ url: siteConfig.ogImage, alt: "FlagForge Resources" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FlagForge Resources | CTF Learning Materials and Security Study Guides",
    description:
      "Explore FlagForge resources for capture the flag preparation, cybersecurity study paths, curated tools, and practical learning materials.",
    images: [siteConfig.ogImage],
  },
};

export default function ResourcesLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
