import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Challenges",
  description:
    "Test your cybersecurity skills with our diverse range of CTF challenges. Compete, learn, and grow your hacking expertise on FlagForge.",
  alternates: {
    canonical: "https://flagforge.xyz/problems",
  },
  openGraph: {
    title: "CTF Challenges | FlagForge",
    description: "Hone your hacking skills with engaging cybersecurity challenges on FlagForge.",
    url: "https://flagforge.xyz/problems",
  },
};

export default function ProblemsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
