"use client";

import Image from "next/image";
import Parallax from "./Parallax";
import Reveal from "./Reveal";

// Vision & Mission cards (reference: the two large rounded cards with a
// serif-italic accent heading and a photo fading in at the bottom).

function CardPhoto({ src, alt }: { src: string; alt: string }) {
  // flex-1 so the photo absorbs any height difference between the two
  // cards and always reaches the card's bottom edge.
  return (
    <div className="relative mt-10 min-h-[18rem] flex-1 sm:min-h-[20rem] lg:min-h-[24rem]">
      <Parallax speed={0.08}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
        />
      </Parallax>
      {/* Photo melts upward into the card background */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-2/5 bg-gradient-to-b from-[#f3f5ff] to-transparent" />
    </div>
  );
}

export default function VisionMission() {
  return (
    <section className="bg-white px-5 py-10 sm:px-8 lg:px-12">
      <div className="container-site grid gap-8 lg:grid-cols-2">
        {/* Vision */}
        <Reveal direction="right" className="h-full">
          <article className="flex h-full flex-col overflow-hidden rounded-[2rem] bg-tint-blue">
            <div className="px-8 pt-12 sm:px-12 sm:pt-14">
              <h2 className="font-heading text-4xl font-bold text-brand-navy sm:text-5xl">
                Our{" "}
                <em className="font-serif font-semibold italic text-brand">
                  Vision
                </em>
              </h2>
              <blockquote className="mt-8 border-l-2 border-brand-navy/30 pl-6">
                <p className="text-lg leading-relaxed text-slate-700 sm:text-xl">
                  Nurturing children who are{" "}
                  <em className="font-serif italic text-brand-navy">
                    &ldquo;Globally Ready, Rooted in Tradition&rdquo;
                  </em>{" "}
                  — growing with values from infancy to independence.
                </p>
              </blockquote>
            </div>
            <CardPhoto src="/images/sports.jpg" alt="K'sirs students on the sports arena" />
          </article>
        </Reveal>

        {/* Mission */}
        <Reveal direction="left" delay={0.12} className="h-full">
          <article className="flex h-full flex-col overflow-hidden rounded-[2rem] bg-tint-blue">
            <div className="px-8 pt-12 sm:px-12 sm:pt-14">
              <h2 className="font-heading text-4xl font-bold text-brand-navy sm:text-5xl">
                Our{" "}
                <em className="font-serif font-semibold italic text-brand">
                  Mission
                </em>
              </h2>
              <div className="mt-8 space-y-5 border-l-2 border-brand-navy/30 pl-6">
                <p className="leading-relaxed text-slate-700 sm:text-lg">
                  1. Encouraging every child to{" "}
                  <em className="font-serif italic text-brand-navy">
                    explore and learn at every turn
                  </em>{" "}
                  of our habitat set amidst nature.
                </p>
                <p className="leading-relaxed text-slate-700 sm:text-lg">
                  2. Blending world-class CISCE and Cambridge pathways with
                  Indian values and culture.
                </p>
                <p className="leading-relaxed text-slate-700 sm:text-lg">
                  3. Shaping leaders of character — with wellbeing, sports, and
                  a desire to serve.
                </p>
              </div>
            </div>
            <CardPhoto src="/images/galleria.jpg" alt="K'sirs students gathered at the galleria" />
          </article>
        </Reveal>
      </div>
    </section>
  );
}
