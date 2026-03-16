import Link from "next/link";
import { siteConfig } from "@/lib/seo";

export default function HomeIntroSection() {
  return (
    <section className="max-w-7xl mx-auto w-full bg-white px-4 pt-10 pb-6 dark:bg-[#050505] sm:px-0">
      <div className="grid gap-8 rounded-[2rem] border border-gray-200 bg-gray-50/80 p-6 shadow-[0_30px_70px_-45px_rgba(15,23,42,0.45)] dark:border-white/10 dark:bg-white/[0.03] lg:grid-cols-[1.5fr_1fr] lg:p-8">
        <div className="space-y-4">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-red-500">
            FlagForge CTF Platform
          </p>
          <h2 className="max-w-3xl text-2xl font-black tracking-tight text-gray-950 dark:text-white lg:text-4xl">
            Train with real capture the flag challenges and practical cybersecurity learning.
          </h2>
          <p className="max-w-3xl text-sm font-medium leading-7 text-gray-600 dark:text-gray-300 lg:text-base">
            FlagForge is a Nepal-rooted cybersecurity community and training platform built for learners who want
            hands-on experience in web exploitation, cryptography, reverse engineering, forensics, and secure
            problem solving. Start with guided resources, study writeups, and grow through practical CTF practice.
          </p>
          <div className="flex flex-wrap gap-3 text-sm font-bold">
            <Link
              href={siteConfig.blogUrl}
              className="rounded-full border border-red-200 px-4 py-2 text-red-600 transition-colors hover:border-red-500 hover:bg-red-500 hover:text-white dark:border-red-500/30 dark:text-red-400"
            >
              Read FlagForge blog guides
            </Link>
            <Link
              href="/resources"
              className="rounded-full border border-gray-300 px-4 py-2 text-gray-700 transition-colors hover:border-gray-900 hover:bg-gray-900 hover:text-white dark:border-white/15 dark:text-gray-200 dark:hover:border-white dark:hover:bg-white dark:hover:text-black"
            >
              Explore CTF learning resources
            </Link>
            <Link
              href="/about"
              className="rounded-full border border-gray-300 px-4 py-2 text-gray-700 transition-colors hover:border-gray-900 hover:bg-gray-900 hover:text-white dark:border-white/15 dark:text-gray-200 dark:hover:border-white dark:hover:bg-white dark:hover:text-black"
            >
              About the FlagForge community
            </Link>
          </div>
        </div>
        <div className="space-y-4 rounded-[1.5rem] border border-gray-200 bg-white p-5 dark:border-white/10 dark:bg-[#0b0b0b]">
          <h3 className="text-sm font-black uppercase tracking-[0.22em] text-gray-500 dark:text-gray-400">
            Core Challenge Tracks
          </h3>
          <ul className="grid gap-3 text-sm font-semibold text-gray-700 dark:text-gray-200">
            <li>Web exploitation and secure web app testing</li>
            <li>Cryptography, encoding, and flag recovery</li>
            <li>Reverse engineering and binary analysis</li>
            <li>Digital forensics, OSINT, and incident-style puzzles</li>
            <li>Community learning for students and aspiring security teams</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
