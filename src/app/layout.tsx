import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileActionBar } from "@/components/layout/MobileActionBar";

export const metadata: Metadata = {
  metadataBase: new URL("https://nishaw.com"),
  title: {
    default: "Nishaw, Premium & Bespoke Corporate Gifting",
    template: "%s | Nishaw",
  },
  description:
    "Say more than thank you. Nishaw crafts premium, bespoke corporate gifts for clients, teams, and enterprises across India. Reserved for the remarkable.",
  keywords: [
    "premium corporate gifting",
    "luxury corporate gifts India",
    "bespoke corporate gifts",
    "corporate gift hampers",
    "customised corporate gifts",
    "Nishaw",
  ],
  openGraph: {
    type:     "website",
    locale:   "en_IN",
    siteName: "Nishaw",
    title:    "Nishaw, Premium & Bespoke Corporate Gifting",
    description:
      "Say more than thank you. Curated and custom-made gifts for the people who move your business forward.",
  },
  twitter: {
    card:  "summary_large_image",
    title: "Nishaw, Premium & Bespoke Corporate Gifting",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head />
      <body>
        <Header />

        {/*
          Hero sentinel, a zero-height div at the very top of page content.
          Header watches this via IntersectionObserver to know when to turn solid.
          MobileActionBar watches it to know when to slide up.
          Content pages should NOT add their own sentinel; this one serves all pages.
        */}
        <div id="hero-sentinel" aria-hidden="true" style={{ height: 1 }} />

        <main id="main-content">{children}</main>

        <Footer />
        <MobileActionBar />
      </body>
    </html>
  );
}
