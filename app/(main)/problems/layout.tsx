import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Challenges",
  description:
    "Test your cybersecurity skills with a wide range of CTF challenges including Web Exploitation, Cryptography, Reverse Engineering, and more.",
  alternates: {
    canonical: "/problems",
  },
  openGraph: {
    title: "Challenges | FlagForge",
    description:
      "Test your cybersecurity skills with a wide range of CTF challenges including Web Exploitation, Cryptography, Reverse Engineering, and more.",
    url: "https://flagforge.xyz/problems",
    type: "website",
    siteName: "FlagForge",
  },
  twitter: {
    card: "summary_large_image",
    title: "Challenges | FlagForge",
    description:
      "Test your cybersecurity skills with a wide range of CTF challenges including Web Exploitation, Cryptography, Reverse Engineering, and more.",
  },
};

export default function ProblemsLayout({ children }: { children: ReactNode }) {
  return children;
}
