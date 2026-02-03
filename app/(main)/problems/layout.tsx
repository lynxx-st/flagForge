import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Cybersecurity Challenges",
  description:
    "Browse and solve a wide variety of CTF challenges at FlagForge. From web exploitation to cryptography, sharpen your hacking skills and climb the leaderboard.",
  alternates: {
    canonical: "/problems",
  },
  openGraph: {
    title: "Cybersecurity Challenges - FlagForge",
    description:
      "Browse and solve a wide variety of CTF challenges at FlagForge. From web exploitation to cryptography, sharpen your hacking skills.",
    url: "https://flagforge.xyz/problems",
    type: "website",
    siteName: "FlagForge",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cybersecurity Challenges - FlagForge",
    description:
      "Browse and solve a wide variety of CTF challenges at FlagForge. From web exploitation to cryptography, sharpen your hacking skills.",
  },
};

export default function ProblemsLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
