import type { Metadata } from "next";
import { bebasNeue, openSans, sixCaps } from "@/lib/fonts";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CookieConsent from "@/components/common/CookieConsent";
import "./globals.css";

export const metadata: Metadata = {
  title: "Line Henriksen – inline design",
  description:
    "Portfolio of Line Henriksen – graphic designer, visual identity creator, and creative director based in Norway.",
  metadataBase: new URL("https://inlinedesign.no"),
  openGraph: {
    title: "Line Henriksen – inline design",
    description:
      "Portfolio of Line Henriksen – graphic designer, visual identity creator, and creative director based in Norway.",
    url: "https://inlinedesign.no",
    siteName: "inline design",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "inline design – Line Henriksen portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Line Henriksen – inline design",
    description:
      "Portfolio of Line Henriksen – graphic designer, visual identity creator, and creative director based in Norway.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${openSans.variable} ${sixCaps.variable}`}>
      <body className="flex flex-col min-h-dvh">
        <Header />
        <main className="flex-1 flex flex-col items-center w-full">{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
