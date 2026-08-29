import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Archived Challenges",
  description:
    "Explore past CTF challenges and competition archives on FlagForge. Hone your skills with retired problems and learn from historical security scenarios.",
  alternates: {
    canonical: "/archives",
  },
  openGraph: {
    title: "Archived Challenges - FlagForge",
    description:
      "Explore past CTF challenges and competition archives on FlagForge. Hone your skills with retired problems and learn from historical security scenarios.",
    url: "https://flagforge.xyz/archives",
    type: "website",
    siteName: "FlagForge",
  },
  twitter: {
    card: "summary_large_image",
    title: "Archived Challenges - FlagForge",
    description:
      "Explore past CTF challenges and competition archives on FlagForge. Hone your skills with retired problems and learn from historical security scenarios.",
  },
};

export default function ArchivesLayout({ children }: { children: ReactNode }) {
  return children;
}
