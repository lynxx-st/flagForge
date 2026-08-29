import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Challenges",
  description:
    "Explore and solve a variety of cybersecurity challenges on FlagForge. From Web Exploitation to Cryptography, hone your skills and climb the CTF leaderboard.",
  openGraph: {
    title: "Cybersecurity Challenges | FlagForge",
    description: "Join FlagForge and master hacking skills with engaging CTF challenges.",
    type: "website",
  },
};

export default function ProblemsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
