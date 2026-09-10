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

export const metadata: Metadata = {
  metadataBase: new URL("https://gbemiga.dev"),
  title: `${profile.shortName}, ${profile.role}`,
  description: `${profile.positioning} ${profile.positioningSub}`,
  openGraph: {
    title: `${profile.shortName}, ${profile.role}`,
    description: profile.positioning,
    type: "website",
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
