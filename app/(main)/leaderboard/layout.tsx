import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Leaderboard",
  description:
    "Check out the top-ranked hackers on FlagForge. See who is leading the competition and track your own progress on the global leaderboard.",
  alternates: {
    canonical: "/leaderboard",
  },
  openGraph: {
    title: "Leaderboard | FlagForge",
    description:
      "Check out the top-ranked hackers on FlagForge. See who is leading the competition and track your own progress on the global leaderboard.",
    url: "https://flagforge.xyz/leaderboard",
    type: "website",
    siteName: "FlagForge",
  },
  twitter: {
    card: "summary_large_image",
    title: "Leaderboard | FlagForge",
    description:
      "Check out the top-ranked hackers on FlagForge. See who is leading the competition and track your own progress on the global leaderboard.",
  },
};

export default function LeaderboardLayout({ children }: { children: ReactNode }) {
  return children;
}
