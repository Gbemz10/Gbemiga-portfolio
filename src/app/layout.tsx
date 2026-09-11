import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { profile } from "@/data/profile";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Nav } from "@/components/Nav";
import { RevealObserver } from "@/components/RevealObserver";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://gbemigas-potfolio.vercel.app";
const cardTitle = `${profile.shortName}, ${profile.role}`;

export const metadata: Metadata = {
  // Relative asset URLs below are resolved against this, so it has to be the
  // address the site is actually served from or the card image 404s.
  metadataBase: new URL(siteUrl),
  title: cardTitle,
  description: `${profile.positioning} ${profile.positioningSub}`,
  openGraph: {
    title: cardTitle,
    description: profile.positioning,
    url: siteUrl,
    siteName: profile.shortName,
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: `${profile.name}, ${profile.role}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: cardTitle,
    description: profile.positioning,
    images: ["/og.png"],
  },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      // Everything that starts hidden is scoped to this attribute, and the
      // <noscript> block below cancels it outright. A visitor without
      // scripting gets the page with no entrance animation, never a blank one.
      data-js=""
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="antialiased">
        <noscript>
          <style>{`[data-reveal],[data-reveal-word],[data-line],[data-fade]{opacity:1!important;transform:none!important;animation:none!important}`}</style>
        </noscript>

        <a
          href="#work"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-accent focus:px-4 focus:py-2 focus:text-paper"
        >
          Skip to work
        </a>

        <SmoothScroll>
          <Nav />
          {children}
        </SmoothScroll>
        <RevealObserver />
      </body>
    </html>
  );
}
