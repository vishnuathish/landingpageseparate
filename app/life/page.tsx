import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ImageTextRow from "@/components/ImageTextRow";
import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Life @ K'sirs | Pursuits, Sports Arena & Our Habitat",
  description:
    "Life beyond the classroom at K'sirs International School — pursuits and HUBs, a sports arena with wall climbing and Sepak Takraw, and a living habitat of flora, fauna and campus pets.",
};

const hubs = [
  "Cozy Earth",
  "Lend a Hand League",
  "Vazhviyal Kalaigal",
  "Cut and Sew",
  "Speakers Forum",
  "Trade Tactics",
  "Creative Cuisine",
  "Media Hub",
];

const sportsFacts = [
  "First school in Coimbatore with a wall-climbing facility",
  "Obstacle course and roller-skating rink",
  "Sepak Takraw courts — a campus signature",
  "Five table-tennis tables with a robotic trainer",
  "Five shuttle courts, two basketball, two volleyball",
  "Football ground and cricket pitch",
];

const nature = [
  {
    image: "/images/pages/flora-1.jpg",
    title: "Flora",
    text: "Over 600 native trees shade the campus — an organic garden fed by vermicompost and panchakavya.",
  },
  {
    image: "/images/pages/fauna-1.jpg",
    title: "Fauna",
    text: "185 varieties of birds and 45 varieties of butterflies make the habitat their home.",
  },
  {
    image: "/images/pages/pets-1.jpg",
    title: "Pets",
    text: "Caring for campus pets teaches responsibility, gentleness and everyday empathy.",
  },
];

const gallery = [
  "/images/pages/galleria-1.jpg",
  "/images/pages/galleria-2.jpg",
  "/images/pages/galleria-3.jpg",
  "/images/pages/infra-1.jpg",
  "/images/pages/infra-2.jpg",
  "/images/pages/infra-3.jpg",
];

export default function LifePage() {
  return (
    <main>
      <Navbar />
      <PageHero
        kicker="Life @ K'sirs"
        title={
          <>
            Learning That Happens{" "}
            <em className="font-serif italic text-brand-orange">Beyond Walls</em>
          </>
        }
        intro="Pursuits, sports, culture and a living habitat — the hidden curriculum that shapes a K'sirian as much as any classroom."
        image="/images/pages/galleria-1.jpg"
        alt="Life at K'sirs"
      />

      {/* Pursuits */}
      <section className="bg-tint-blue">
        <div className="container-site px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <ImageTextRow
            image="/images/pages/pursuits-1.jpg"
            alt="Pursuits at K'sirs"
            kicker="Pursuits"
            title={
              <>
                Skills for{" "}
                <em className="font-serif italic text-brand">
                  Life and Living
                </em>
              </>
            }
          >
            <p>
              Agriculture, pottery, embroidery, pet care, DIY, soap making,
              arts and crafts — every K&apos;sirian learns with their hands as
              much as their mind.
            </p>
            <p>
              From Grade 8, students choose a HUB and take on major projects
              that carry real responsibility:
            </p>
            <div className="flex flex-wrap gap-2.5 pt-1">
              {hubs.map((hub) => (
                <span
                  key={hub}
                  className="rounded-full border border-brand/15 bg-white px-4 py-1.5 font-heading text-xs font-bold uppercase tracking-wider text-brand"
                >
                  {hub}
                </span>
              ))}
            </div>
          </ImageTextRow>
        </div>
      </section>

      {/* Sports Arena */}
      <section className="bg-white">
        <div className="container-site px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <ImageTextRow
            image="/images/sports.jpg"
            alt="The K'sirs sports arena"
            flip
            kicker="Sports Arena"
            title={
              <>
                Where Character Is{" "}
                <em className="font-serif italic text-brand">Revealed</em>
              </>
            }
          >
            <p>
              Indoor and outdoor arenas keep every learner moving — building
              resilience, teamwork and leadership on fields, courts and walls.
            </p>
            <ul className="space-y-2.5 pt-1 text-sm font-medium text-slate-700">
              {sportsFacts.map((fact) => (
                <li key={fact} className="flex items-start gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-orange" />
                  {fact}
                </li>
              ))}
            </ul>
          </ImageTextRow>
        </div>
      </section>

      {/* Nature */}
      <section className="bg-tint-orange">
        <div className="container-site px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <Reveal>
            <span className="heading-kicker">A Living Habitat</span>
            <h2 className="head-h2 max-w-2xl">
              Flora, Fauna &amp;{" "}
              <em className="font-serif italic text-brand">Friends</em>
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {nature.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.1} className="h-full">
                <div className="card group h-full overflow-hidden hover:-translate-y-2 hover:shadow-card-hover">
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-xl font-bold text-brand-navy">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {item.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Galleria */}
      <section className="bg-white">
        <div className="container-site px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <Reveal>
            <span className="heading-kicker">Galleria</span>
            <h2 className="head-h2 max-w-2xl">
              Moments from{" "}
              <em className="font-serif italic text-brand">Everyday Life</em>
            </h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-3">
            {gallery.map((src, i) => (
              <Reveal key={src} delay={i * 0.06}>
                <div className="group relative h-52 overflow-hidden rounded-xl sm:h-64">
                  <Image
                    src={src}
                    alt="Life at K'sirs International School"
                    fill
                    sizes="(max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
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
