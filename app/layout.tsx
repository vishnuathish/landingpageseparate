import type { Metadata } from "next";
import { Jost, Playfair_Display } from "next/font/google";
import "lenis/dist/lenis.css";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-jost",
});

// Elegant serif used only for italic accent words (premium editorial touch).
const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["500", "600", "700"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "K'sirs International School | Best ICSE & IGCSE School in Coimbatore",
  description:
    "K'sirs International School, Coimbatore — Infancy to Independence. CISCE (ICSE/ISC) and Cambridge (IGCSE, AS & A Level) curricula in an ethnically rich campus set amidst nature.",
  keywords: [
    "KSIRS",
    "International School Coimbatore",
    "ICSE School Coimbatore",
    "IGCSE School Coimbatore",
    "Cambridge School",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    // Native smooth scrolling is off — Lenis drives the easing instead.
    <html lang="en">
      <body
        className={`${jost.variable} ${playfair.variable} font-body bg-white text-slate-700 antialiased`}
      >
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
