import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "CTF Challenges",
  description:
    "Explore a wide range of Capture The Flag (CTF) challenges on FlagForge. Test your skills in web exploitation, cryptography, forensics, and more.",
  alternates: {
    canonical: "/problems",
  },
  openGraph: {
    title: "CTF Challenges - FlagForge",
    description:
      "Explore a wide range of Capture The Flag (CTF) challenges on FlagForge. Test your skills in web exploitation, cryptography, forensics, and more.",
    url: "https://flagforge.xyz/problems",
    type: "website",
    siteName: "FlagForge",
  },
  twitter: {
    card: "summary_large_image",
    title: "CTF Challenges - FlagForge",
    description:
      "Explore a wide range of Capture The Flag (CTF) challenges on FlagForge. Test your skills in web exploitation, cryptography, forensics, and more.",
  },
};

export default function ProblemsLayout({ children }: { children: ReactNode }) {
  return children;
}
