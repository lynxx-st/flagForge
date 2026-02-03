import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Event Scoreboards",
  description:
    "View the final rankings and scoreboards for past FlagForge CTF events. Celebrate the winners and analyze the competition results.",
  alternates: {
    canonical: "/event-scoreboards",
  },
  openGraph: {
    title: "Event Scoreboards - FlagForge",
    description:
      "View the final rankings and scoreboards for past FlagForge CTF events. Celebrate the winners and analyze the competition results.",
    url: "https://flagforge.xyz/event-scoreboards",
    type: "website",
    siteName: "FlagForge",
  },
  twitter: {
    card: "summary_large_image",
    title: "Event Scoreboards - FlagForge",
    description:
      "View the final rankings and scoreboards for past FlagForge CTF events. Celebrate the winners and analyze the competition results.",
  },
};

export default function EventScoreboardsLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
