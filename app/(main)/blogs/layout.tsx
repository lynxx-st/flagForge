import type { Metadata } from "next";
import type { ReactNode } from "react";
import { siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: "FlagForge Blog | CTF Guides and Cybersecurity Tutorials",
  description:
    "Read FlagForge blog posts covering capture the flag walkthroughs, cybersecurity tutorials, learning paths, and community updates.",
  alternates: {
    canonical: siteConfig.blogUrl,
  },
  openGraph: {
    title: "FlagForge Blog | CTF Guides and Cybersecurity Tutorials",
    description:
      "Read FlagForge blog posts covering capture the flag walkthroughs, cybersecurity tutorials, learning paths, and community updates.",
    url: siteConfig.blogUrl,
    type: "website",
    siteName: siteConfig.name,
    images: [{ url: siteConfig.ogImage, alt: "FlagForge Blog" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FlagForge Blog | CTF Guides and Cybersecurity Tutorials",
    description:
      "Read FlagForge blog posts covering capture the flag walkthroughs, cybersecurity tutorials, learning paths, and community updates.",
    images: [siteConfig.ogImage],
  },
};

export default function BlogsLayout({ children }: { children: ReactNode }) {
  return children;
}
