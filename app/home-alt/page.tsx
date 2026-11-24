import type { Metadata } from "next";
import ClassicHeader from "@/components/classic/ClassicHeader";
import ClassicHero from "@/components/classic/ClassicHero";
import ClassicEnquiry from "@/components/classic/ClassicEnquiry";
import ClassicHighlights from "@/components/classic/ClassicHighlights";
import ClassicWelcome from "@/components/classic/ClassicWelcome";
import ClassicPrograms from "@/components/classic/ClassicPrograms";
import ClassicBand from "@/components/classic/ClassicBand";
import ClassicShowcase from "@/components/classic/ClassicShowcase";
import ClassicActivities from "@/components/classic/ClassicActivities";
import ClassicNews from "@/components/classic/ClassicNews";
import ClassicTriple from "@/components/classic/ClassicTriple";
import ClassicCta from "@/components/classic/ClassicCta";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "K'sirs International School — Home (Classic Template)",
  description:
    "Classic homepage template: traditional school-website layout with enquiry form, programmes for every stage, campus stats and announcements.",
};

// Variant 3 — classic school-website template: utility bar, traditional
// menu, hero with enquiry form, info-dense sections. No scroll effects.
export default function HomeAltPage() {
  return (
    <main>
      <ClassicHeader />
      <ClassicHero />
      <ClassicEnquiry />
      <ClassicHighlights />
      <ClassicWelcome />
      <ClassicPrograms />
      <ClassicBand />
      <ClassicShowcase />
      <ClassicActivities />
      <ClassicNews />
      <ClassicTriple />
      <ClassicCta />
      <Footer />
    </main>
  );
}
