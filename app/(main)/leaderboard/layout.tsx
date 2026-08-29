import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Leaderboard",
  description:
    "See who's leading the pack on FlagForge. Check out the top hackers and their achievements in our global CTF leaderboard.",
  alternates: {
    canonical: "/leaderboard",
  },
  openGraph: {
    title: "Leaderboard - FlagForge",
    description:
      "See who's leading the pack on FlagForge. Check out the top hackers and their achievements in our global CTF leaderboard.",
    url: "https://flagforge.xyz/leaderboard",
    type: "website",
    siteName: "FlagForge",
  },
  twitter: {
    card: "summary_large_image",
    title: "Leaderboard - FlagForge",
    description:
      "See who's leading the pack on FlagForge. Check out the top hackers and their achievements in our global CTF leaderboard.",
  },
};

export default function LeaderboardLayout({ children }: { children: ReactNode }) {
  return children;
}
