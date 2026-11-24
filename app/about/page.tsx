import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ImageTextRow from "@/components/ImageTextRow";
import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/Reveal";
import Timeline from "@/components/Timeline";
import Icon from "@/components/Icon";

export const metadata: Metadata = {
  title: "About K'sirs | K'sirs International School, Coimbatore",
  description:
    "Founded in 2007, K'sirs International School is a 12.5-acre green habitat in Chinnavedampatti, Coimbatore — CISCE and Cambridge pathways, carbon-neutral pioneer, and a culture of responsible freedom.",
};

const milestones = [
  { year: "2007", text: "The founding team comes together under Mr. Devapprakash and Mrs. Lalitha Prakash." },
  { year: "2010", text: "Affiliated to Cambridge International." },
  { year: "2012", text: "First school in Tamil Nadu to pledge Carbon Neutral, with CII Young Indians." },
  { year: "2013", text: "Provisional ICSE affiliation." },
  { year: "2017", text: "Permanent affiliation with CISCE." },
];

const traits = [
  { word: "Curious", meaning: "Questions before answers — wonder leads the way.", icon: "lightbulb", accent: "#f57a3d" },
  { word: "Courteous", meaning: "Kindness and grace in every interaction.", icon: "heart", accent: "#2e3591" },
  { word: "Courageous", meaning: "Brave enough to try, fail and try again.", icon: "star", accent: "#00d8d8" },
  { word: "Focussed", meaning: "Deep attention — one thing at a time, done well.", icon: "bookOpen", accent: "#2bb061" },
  { word: "Independent", meaning: "Learners who think, choose and lead themselves.", icon: "academicCap", accent: "#031b4e" },
] as const;

const houses = [
  { name: "Pegasus", line: "Flying high and playing hard, all the way." },
  { name: "Aquila", line: "Soaring strong and working hard to win." },
  { name: "Cepheus", line: "Rising to reign as champions." },
  { name: "Eridanus", line: "Where dreams flow into victory." },
];

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        kicker="About K'sirs"
        title={
          <>
            A School Built on{" "}
            <em className="font-serif italic text-brand-orange">
              Responsible Freedom
            </em>
          </>
        }
        intro="K'sirs International School, Chinnavedampatti, Coimbatore, facilitates learning rather than teaching — a sustainable education through exploration and understanding, for life and living."
        image="/images/pages/about-campus.jpg"
        alt="K'sirs International School campus"
      />

      {/* Vision statement */}
      <section className="bg-tint-blue">
        <div className="container-site px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
          <Reveal>
            <blockquote className="mx-auto max-w-3xl border-l-2 border-brand-orange pl-6 sm:pl-8">
              <p className="font-heading text-2xl font-medium leading-snug text-brand-navy sm:text-3xl">
                &ldquo;A sustainable education through{" "}
                <em className="font-serif italic text-brand">
                  responsible freedom
                </em>
                , exploration and understanding — for life and living.&rdquo;
              </p>
              <footer className="mt-4 text-sm text-slate-500">
                The K&apos;sirs Vision
              </footer>
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* Milestones */}
      <section className="relative overflow-hidden bg-white">
        {/* Decorative background patterns */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          {/* Orbit — top right */}
          <svg
            viewBox="0 0 120 120"
            className="animate-float-slow absolute right-[6%] top-[8%] h-24 w-24 opacity-50 sm:h-32 sm:w-32"
            fill="none"
            strokeLinecap="round"
          >
            <ellipse cx="60" cy="60" rx="46" ry="18" stroke="#f57a3d" strokeWidth="3.5" transform="rotate(-24 60 60)" />
            <ellipse cx="60" cy="60" rx="46" ry="18" stroke="#2e3591" strokeWidth="3.5" transform="rotate(56 60 60)" />
            <circle cx="60" cy="60" r="6" fill="#2bb061" />
          </svg>
          {/* Squiggle — left middle */}
          <svg
            viewBox="0 0 140 60"
            className="animate-float-slower absolute left-[4%] top-[38%] h-12 w-28 opacity-50 sm:h-14 sm:w-36"
            fill="none"
            strokeLinecap="round"
          >
            <path d="M6 44 Q 24 10 42 32 T 78 32 T 114 28" stroke="#00d8d8" strokeWidth="4.5" />
          </svg>
          {/* Dotted grid — bottom right */}
          <svg
            viewBox="0 0 90 90"
            className="animate-float-slower absolute bottom-[10%] right-[8%] h-20 w-20 opacity-40"
          >
            {[0, 1, 2, 3].map((r) =>
              [0, 1, 2, 3].map((c) => (
                <circle
                  key={`${r}-${c}`}
                  cx={12 + c * 22}
                  cy={12 + r * 22}
                  r="3.5"
                  fill={(r + c) % 2 === 0 ? "#2e3591" : "#f57a3d"}
                />
              )),
            )}
          </svg>
          {/* Open ring — bottom left */}
          <svg
            viewBox="0 0 110 110"
            className="animate-float-slow absolute bottom-[16%] left-[7%] h-20 w-20 opacity-50 sm:h-24 sm:w-24"
            fill="none"
            strokeLinecap="round"
          >
            <path d="M55 8 a47 47 0 1 1 -33 14" stroke="#2bb061" strokeWidth="5" />
            <circle cx="22" cy="22" r="5" fill="#f57a3d" />
          </svg>
          {/* Sparkle — upper left */}
          <svg
            viewBox="0 0 60 60"
            className="animate-spin-slow absolute left-[16%] top-[12%] hidden h-9 w-9 opacity-50 lg:block"
            fill="#f57a3d"
          >
            <path d="M30 2 L36 24 L58 30 L36 36 L30 58 L24 36 L2 30 L24 24 Z" />
          </svg>
          {/* Soft tint blobs */}
          <div className="absolute -right-32 top-1/4 h-80 w-80 rounded-full bg-brand/[0.045] blur-3xl" />
          <div className="absolute -left-32 bottom-1/4 h-80 w-80 rounded-full bg-brand-orange/[0.06] blur-3xl" />
        </div>

        <div className="container-site relative px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <Reveal>
            <span className="heading-kicker">Our Journey</span>
            <h2 className="head-h2 max-w-xl">
              Milestones That{" "}
              <em className="font-serif italic text-brand">Shaped Us</em>
            </h2>
          </Reveal>
          <Timeline milestones={milestones} />
        </div>
      </section>

      {/* Our Abode */}
      <section className="bg-tint-blue">
        <div className="container-site px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <ImageTextRow
            image="/images/abode.jpg"
            alt="The green K'sirs campus"
            kicker="Our Abode"
            title={
              <>
                A 12.5-Acre Habitat,{" "}
                <em className="font-serif italic text-brand">Set in Nature</em>
              </>
            }
          >
            <p>
              The campus is a living classroom — over 600 native trees, 185
              varieties of birds and 45 varieties of butterflies share the
              habitat with our learners.
            </p>
            <p>
              Buildings are raised from eco-friendly fly-ash bricks with wide
              windows for light and air. Rainwater is recharged and stored,
              grey water is treated and reused, and vermicomposting with
              panchakavya feeds an organic garden.
            </p>
            <div className="grid grid-cols-3 gap-4 pt-2">
              {[
                ["600+", "Native Trees"],
                ["185", "Bird Varieties"],
                ["45", "Butterfly Varieties"],
              ].map(([v, l]) => (
                <div key={l}>
                  <p className="font-heading text-3xl font-extrabold text-brand-navy">
                    {v}
                  </p>
                  <p className="text-xs uppercase tracking-wider text-slate-500">
                    {l}
                  </p>
                </div>
              ))}
            </div>
          </ImageTextRow>
        </div>
      </section>

      {/* The K'sirian — five trait cards */}
      <section className="bg-white">
        <div className="container-site px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <span className="heading-kicker heading-kicker--center justify-center">
                The K&apos;sirian
              </span>
              <h2 className="head-h2">
                Five Words We{" "}
                <em className="font-serif italic text-brand">Live By</em>
              </h2>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-x-8 gap-y-12 text-center sm:grid-cols-2 lg:grid-cols-5">
            {traits.map((t, i) => (
              <Reveal key={t.word} delay={i * 0.08} className="h-full">
                <div className="group h-full border-t-2 border-slate-100 px-2 pt-8 transition-colors duration-500 hover:border-brand-orange">
                  <span
                    className="mx-auto flex h-16 w-16 items-center justify-center rounded-full transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundColor: `${t.accent}14`, color: t.accent }}
                  >
                    <Icon name={t.icon} className="h-8 w-8" />
                  </span>
                  <h3 className="mt-6 font-heading text-2xl font-bold text-brand-navy lg:text-[1.65rem]">
                    {t.word}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-slate-500">
                    {t.meaning}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Houses */}
      <section className="bg-tint-orange">
        <div className="container-site px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <Reveal>
            <span className="heading-kicker">House System</span>
            <h2 className="head-h2 max-w-2xl">
              Four Constellations,{" "}
              <em className="font-serif italic text-brand">One Sky</em>
            </h2>
            <p className="mt-5 max-w-2xl text-slate-600">
              Every K&apos;sirian belongs to a house named after a
              constellation of Greek mythology, guided by a House Master or
              Mistress alongside student Captains and Vice-Captains.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {houses.map((h, i) => (
              <Reveal key={h.name} delay={i * 0.08} className="h-full">
                <div className="group h-full border-t-2 border-brand-navy/10 pt-7 transition-colors duration-500 hover:border-brand-orange">
                  <span className="font-heading text-5xl font-extrabold text-brand-navy/10 transition-colors duration-500 group-hover:text-brand-orange/30">
                    0{i + 1}
                  </span>
                  <h3 className="mt-3 font-heading text-3xl font-bold text-brand-navy">
                    {h.name}
                  </h3>
                  <p className="mt-4 leading-relaxed text-slate-600">
                    {h.line}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
      <Footer />
    </main>
  );
}
