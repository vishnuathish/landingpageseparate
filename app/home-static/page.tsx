import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import EduHero from "@/components/static/EduHero";
import EduMarquee from "@/components/static/EduMarquee";
import EduWelcome from "@/components/static/EduWelcome";
import EduFeatures from "@/components/static/EduFeatures";
import EduBento from "@/components/static/EduBento";
import EduTestimonials from "@/components/static/EduTestimonials";
import EduBlogGrid from "@/components/static/EduBlogGrid";
import EduCta from "@/components/static/EduCta";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "K'sirs International School — Home (Static Template)",
  description:
    "Static homepage template: light bento-style design with hand-drawn accents — no scroll-driven effects.",
};

// Variant 2 — light, bento-style static template: chunky rounded tiles,
// hand-drawn underlines and doodles, no scroll-driven effects.
export default function HomeStaticPage() {
  return (
    <main>
      {/* Light hero, so the header starts solid */}
      <Navbar startSolid />
      <EduHero />
      <EduMarquee />
      <EduWelcome />
      <EduFeatures />
      <EduBento />
      <EduTestimonials />
      <EduBlogGrid />
      <EduCta />
      <Footer />
    </main>
  );
}
