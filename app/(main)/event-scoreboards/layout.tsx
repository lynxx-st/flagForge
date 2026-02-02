import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Event Scoreboards",
  description:
    "View the results and rankings from past FlagForge CTF events. Celebrate the winners and see how the competition unfolded.",
  alternates: {
    canonical: "/event-scoreboards",
  },
  openGraph: {
    title: "Event Scoreboards - FlagForge",
    description:
      "View the results and rankings from past FlagForge CTF events. Celebrate the winners and see how the competition unfolded.",
    url: "https://flagforge.xyz/event-scoreboards",
    type: "website",
    siteName: "FlagForge",
  },
  twitter: {
    card: "summary_large_image",
    title: "Event Scoreboards - FlagForge",
    description:
      "View the results and rankings from past FlagForge CTF events. Celebrate the winners and see how the competition unfolded.",
  },
};

export default function EventScoreboardsLayout({ children }: { children: ReactNode }) {
  return children;
}
