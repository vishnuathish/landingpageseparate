import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Admissions from "@/components/Admissions";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Admissions | K'sirs International School, Coimbatore",
  description:
    "Admissions to K'sirs International School, Coimbatore — Early Years, CISCE (ICSE & ISC) and Cambridge (IGCSE, AS & A Levels). Enquire, visit the habitat, and apply.",
};

const steps = [
  {
    title: "Enquire",
    text: "Send an enquiry or call our admissions team — we'll help you pick the right pathway for your child.",
  },
  {
    title: "Visit the Habitat",
    text: "Tour the 12.5-acre campus, meet our educators, and see the classrooms, arenas and gardens in action.",
  },
  {
    title: "Apply Online",
    text: "Complete the application; the admission fee is collected during your school visit.",
  },
  {
    title: "Welcome to K'sirs",
    text: "After a friendly interaction, your K'sirian's journey from infancy to independence begins.",
  },
];

export default function AdmissionsPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        kicker="Admissions"
        title={
          <>
            Begin the Journey from{" "}
            <em className="font-serif italic text-brand-orange">
              Infancy to Independence
            </em>
          </>
        }
        intro="Admissions for the CISCE and Cambridge pathways open each November. Limited seats — we keep our classrooms small and our attention personal."
        image="/images/pages/early-years-3.jpg"
        alt="Admissions at K'sirs"
      />

      {/* Process */}
      <section className="bg-white">
        <div className="container-site px-5 pb-16 sm:px-8 lg:px-12 lg:pb-24">
          <Reveal>
            <span className="heading-kicker">How It Works</span>
            <h2 className="head-h2 max-w-xl">
              Four Simple{" "}
              <em className="font-serif italic text-brand">Steps</em>
            </h2>
          </Reveal>
          <div className="relative mt-14 grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {/* Connecting line behind the step numbers */}
            <span className="absolute left-0 right-0 top-6 hidden h-px bg-slate-200 lg:block" />
            {steps.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.1} className="h-full">
                <div className="group h-full">
                  <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-brand font-heading text-base font-bold text-white ring-8 ring-white transition-colors duration-500 group-hover:bg-brand-orange">
                    {i + 1}
                  </span>
                  <h3 className="mt-6 font-heading text-xl font-bold text-brand-navy">
                    {step.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-slate-600">
                    {step.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry form + contact (shared with the homepage) */}
      <Admissions />
      <Footer />
    </main>
  );
}
