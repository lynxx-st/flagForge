import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import Authprovider from "@/providers/auth-provider";
import { ThemeProvider } from "@/context/ThemeContext";
import { Analytics } from "@vercel/analytics/react";
import { defaultKeywords, siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "FlagForge | Capture the Flag Platform for Cybersecurity Training",
    template: "%s | FlagForge",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  referrer: "origin-when-cross-origin",
  keywords: defaultKeywords,
  authors: [{ name: "FlagForge Team", url: "https://github.com/FlagForgeCTF/" }],
  publisher: siteConfig.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "google-adsense-account": "ca-pub-2506540900080142",
  },
  openGraph: {
    title: "FlagForge | Capture the Flag Platform for Cybersecurity Training",
    description: siteConfig.description,
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
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased transition-colors duration-300 bg-white dark:bg-gray-900 overflow-x-hidden sm:overflow-x-visible">
        <ThemeProvider>
          <Authprovider>
            <div className="mx-auto grid min-h-[100dvh] grid-rows-[auto_1fr_auto]">
              <Navbar />
              <main className="flex-1">{children}</main>
              <Analytics />
              <CookieConsent />
              <Footer />
            </div>
          </Authprovider>
        </ThemeProvider>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2506540900080142"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
