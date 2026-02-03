import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "CTF Archives",
  description:
    "Explore past Capture The Flag competitions and challenges. Access retired rooms and practice your skills on historical CTF events.",
  alternates: {
    canonical: "/archives",
  },
  openGraph: {
    title: "CTF Archives - FlagForge",
    description:
      "Explore past Capture The Flag competitions and challenges. Access retired rooms and practice your skills on historical CTF events.",
    url: "https://flagforge.xyz/archives",
    type: "website",
    siteName: "FlagForge",
  },
  twitter: {
    card: "summary_large_image",
    title: "CTF Archives - FlagForge",
    description:
      "Explore past Capture The Flag competitions and challenges. Access retired rooms and practice your skills on historical CTF events.",
  },
};

export default function ArchivesLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
