import type { Metadata } from "next";
import Hero from "@/components/Hero";
import HomeIntroSection from "@/components/HomeIntroSection";
import JsonLd from "@/components/JsonLd";
import HomepageRedirect from "@/components/HomepageRedirect";
import { landingFaqItems } from "@/lib/faq";
import { defaultKeywords, siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: "FlagForge | Capture the Flag Platform for Cybersecurity Training",
  description:
    "FlagForge is a Nepal-rooted capture the flag platform where learners practice cybersecurity challenges, study writeups, and build hands-on offensive and defensive security skills.",
  keywords: defaultKeywords,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "FlagForge | Capture the Flag Platform for Cybersecurity Training",
    description:
      "Practice web exploitation, cryptography, reverse engineering, forensics, and other CTF categories on FlagForge.",
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "FlagForge CTF Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FlagForge | Capture the Flag Platform for Cybersecurity Training",
    description:
      "Train with practical CTF challenges, security writeups, and community-driven cybersecurity learning on FlagForge.",
    images: [siteConfig.ogImage],
  },
};

export default function Home() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    alternateName: siteConfig.secondaryName,
    url: siteConfig.url,
    logo: siteConfig.ogImage,
    description: siteConfig.organizationDescription,
    sameAs: [
      "https://github.com/FlagForgeCTF/",
      "https://www.instagram.com/flag.forge/",
      "https://www.linkedin.com/company/flagforge/",
    ],
  };

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    alternateName: siteConfig.secondaryName,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: landingFaqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <JsonLd data={organizationData} />
      <JsonLd data={websiteData} />
      <JsonLd data={faqData} />
      <HomepageRedirect />
      <Hero afterFaqSection={<HomeIntroSection />} />
    </>
  );
}
