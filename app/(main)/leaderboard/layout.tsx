import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "CTF Leaderboard",
  description:
    "See the top hackers and teams on FlagForge. Track your progress, compare scores, and see who is leading the cybersecurity rankings.",
  alternates: {
    canonical: "/leaderboard",
  },
  openGraph: {
    title: "CTF Leaderboard - FlagForge",
    description:
      "See the top hackers and teams on FlagForge. Track your progress and see who is leading the cybersecurity rankings.",
    url: "https://flagforge.xyz/leaderboard",
    type: "website",
    siteName: "FlagForge",
  },
  twitter: {
    card: "summary_large_image",
    title: "CTF Leaderboard - FlagForge",
    description:
      "See the top hackers and teams on FlagForge. Track your progress and see who is leading the cybersecurity rankings.",
  },
};

export default function LeaderboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
