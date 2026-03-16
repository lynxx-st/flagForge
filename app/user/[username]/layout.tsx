import type { Metadata } from "next";
import type { ReactNode } from "react";

export const generateMetadata = ({
  params,
}: {
  params: { username: string };
}): Metadata => ({
  title: `${params.username} | FlagForge profile`,
  description:
    "Public FlagForge profile pages are available for sharing, but are excluded from search indexing to keep discovery focused on FlagForge learning content.",
  alternates: {
    canonical: `/user/${params.username}`,
  },
  robots: {
    index: false,
    follow: true,
    googleBot: {
      index: false,
      follow: true,
    },
  },
  openGraph: {
    title: `${params.username} | FlagForge profile`,
    description:
      "View a public FlagForge profile with badges, challenge activity, and CTF achievements.",
    url: `https://flagforgectf.com/user/${params.username}`,
    type: "profile",
    siteName: "FlagForge",
  },
  twitter: {
    card: "summary",
    title: `${params.username} | FlagForge profile`,
    description:
      "Public FlagForge profile with badges, challenge activity, and CTF achievements.",
  },
});

export default function PublicUserLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
