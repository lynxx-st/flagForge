import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leaderboard",
  description:
    "See the top hackers on FlagForge and track your own progress on the global leaderboard. Compete for the top spot!",
  alternates: {
    canonical: "https://flagforge.xyz/leaderboard",
  },
  openGraph: {
    title: "Leaderboard | FlagForge",
    description: "Compete with the best and track your rank on the FlagForge CTF leaderboard.",
    url: "https://flagforge.xyz/leaderboard",
  },
};

export default function LeaderboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
