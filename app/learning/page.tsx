import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ImageTextRow from "@/components/ImageTextRow";
import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/Reveal";
import StageCards from "@/components/StageCards";

export const metadata: Metadata = {
  title: "Learning @ K'sirs | Early Years, CISCE & Cambridge",
  description:
    "The K'sirs way of teaching and learning — Early Years rooted in Montessori, Waldorf, Reggio Emilia and Froebel; CISCE (ICSE & ISC) and Cambridge (IGCSE, AS & A Levels) pathways in Coimbatore.",
};

export default function LearningPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        kicker="Learning @ K'sirs"
        title={
          <>
            The K&apos;sirs Way of{" "}
            <em className="font-serif italic text-brand-orange">
              Teaching &amp; Learning
            </em>
          </>
        }
        intro="Facilitating learning rather than teaching — two world-class boards, one philosophy: understanding over marks, at every stage from the Early Years to Grade 12."
        image="/images/pages/early-years-2.jpg"
        alt="Learning at K'sirs"
      />

      {/* Early Years */}
      <section className="bg-white">
        <div className="container-site px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <ImageTextRow
            image="/images/pages/early-years-1.jpg"
            alt="K'sirs Early Years classroom"
            kicker="Ages 3 – 6"
            title={
              <>
                K&apos;sirs{" "}
                <em className="font-serif italic text-brand">Early Years</em>
              </>
            }
          >
            <p>
              A joyful blend of the world&apos;s best early-childhood
              philosophies — Montessori, Waldorf, Reggio Emilia and Froebel —
              where little learners discover through play, nature and wonder.
            </p>
            <p>
              Classrooms are named after native birds of the campus, and every
              environment is guided by a trained Directress and Assistant
              Directress.
            </p>
            <ul className="grid grid-cols-2 gap-2.5 pt-2 text-sm font-medium text-slate-700">
              {["Montessori Method", "Waldorf Approach", "Reggio Emilia", "Froebel Gifts"].map((p) => (
                <li key={p} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
                  {p}
                </li>
              ))}
            </ul>
          </ImageTextRow>
        </div>
      </section>

      {/* Boards intro */}
      <section className="bg-tint-blue">
        <div className="container-site px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <ImageTextRow
            image="/images/pages/classroom.jpg"
            alt="Learners at K'sirs"
            flip
            kicker="Boards We Offer"
            title={
              <>
                Two Boards,{" "}
                <em className="font-serif italic text-brand">One Journey</em>
              </>
            }
          >
            <p>
              K&apos;sirs carries learners along two parallel pathways — the
              national CISCE board (ICSE &amp; ISC, permanently affiliated
              since 2017) and Cambridge International (affiliated since 2010).
            </p>
            <p>
              Both share the same habitat, the same values, and the same
              belief: the purpose of learning is understanding, not marks.
            </p>
          </ImageTextRow>
        </div>
      </section>

      {/* Indigo panel: stage-by-stage cards */}
      <StageCards />

      <CtaBand
        steps={[
          "Talk to our academic team about the pathway that fits your child.",
          "Visit the campus and see both boards in action.",
          "Apply online — admissions for CISCE and Cambridge open each November.",
        ]}
      />
      <Footer />
    </main>
  );
}
