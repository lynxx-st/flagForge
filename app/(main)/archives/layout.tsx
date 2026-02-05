import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Archives",
  description:
    "Explore the collection of archived CTF challenges from past FlagForge events. Perfect for practice and learning from historical competitions.",
  alternates: {
    canonical: "/archives",
  },
  openGraph: {
    title: "Archives | FlagForge",
    description:
      "Explore the collection of archived CTF challenges from past FlagForge events. Perfect for practice and learning from historical competitions.",
    url: "https://flagforge.xyz/archives",
    type: "website",
    siteName: "FlagForge",
  },
  twitter: {
    card: "summary_large_image",
    title: "Archives | FlagForge",
    description:
      "Explore the collection of archived CTF challenges from past FlagForge events. Perfect for practice and learning from historical competitions.",
  },
};

export default function ArchivesLayout({ children }: { children: ReactNode }) {
  return children;
}
