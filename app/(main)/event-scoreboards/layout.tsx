import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Event Scoreboards",
  description:
    "View the final scoreboards and winners of past FlagForge CTF events. See how teams performed and celebrate the winners of previous competitions.",
  alternates: {
    canonical: "/event-scoreboards",
  },
  openGraph: {
    title: "Event Scoreboards | FlagForge",
    description:
      "View the final scoreboards and winners of past FlagForge CTF events. See how teams performed and celebrate the winners of previous competitions.",
    url: "https://flagforge.xyz/event-scoreboards",
    type: "website",
    siteName: "FlagForge",
  },
  twitter: {
    card: "summary_large_image",
    title: "Event Scoreboards | FlagForge",
    description:
      "View the final scoreboards and winners of past FlagForge CTF events. See how teams performed and celebrate the winners of previous competitions.",
  },
};

export default function EventScoreboardsLayout({ children }: { children: ReactNode }) {
  return children;
}
