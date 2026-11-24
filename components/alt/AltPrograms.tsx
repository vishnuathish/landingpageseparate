"use client";

import Image from "next/image";
import Reveal from "../Reveal";
import Icon from "../Icon";

// Alt-template programmes: wide panels in a horizontal snap-scroll row.
const programs = [
  {
    name: "Early Years",
    tag: "Ages 3 – 6",
    image: "/images/pages/early-years-1.jpg",
    text: "Montessori, Waldorf, Reggio Emilia and Froebel — discovery through play, nature and wonder.",
  },
  {
    name: "CISCE",
    tag: "ICSE & ISC",
    image: "/images/pages/classroom.jpg",
    text: "A rigorous national curriculum with depth and clarity, through to the Grade 10 and 12 boards.",
  },
  {
    name: "Cambridge",
    tag: "IGCSE, AS & A Levels",
    image: "/images/pages/galleria-2.jpg",
    text: "A globally recognised pathway of inquiry and independent thinking, to the world's universities.",
  },
  {
    name: "Pursuits",
    tag: "Life Skills & HUBs",
    image: "/images/pages/pursuits-1.jpg",
    text: "Pottery, agriculture, cuisine, media and more — hands learning alongside minds.",
  },
];

export default function AltPrograms() {
  return (
    <section className="overflow-hidden bg-tint-blue py-20 lg:py-28">
      <div className="container-site px-5 sm:px-8 lg:px-12">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <span className="heading-kicker">Learning @ K&apos;sirs</span>
            <h2 className="head-h2 max-w-xl">
              Pathways for{" "}
              <em className="font-serif italic text-brand">Every Learner</em>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="flex items-center gap-3 font-heading text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
              Drag or scroll
              <Icon name="arrowRight" className="h-4 w-4" />
            </p>
          </Reveal>
        </div>
      </div>

      {/* Snap-scrolling panel row, bleeding off the right edge */}
      <div className="mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto px-5 pb-6 sm:px-8 lg:px-12 [scrollbar-width:thin]">
        {programs.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.08} className="snap-start">
            <article className="group relative h-[26rem] w-[20rem] shrink-0 overflow-hidden rounded-[1.75rem] sm:h-[28rem] sm:w-[24rem]">
              <Image
                src={p.image}
                alt={p.name}
                fill
                sizes="384px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/25 to-transparent" />
              <span className="absolute left-6 top-6 rounded-full bg-white/90 px-4 py-1.5 font-heading text-[11px] font-bold uppercase tracking-wider text-brand">
                {p.tag}
              </span>
              <div className="absolute inset-x-0 bottom-0 p-7">
                <h3 className="font-heading text-3xl font-bold text-white">
                  {p.name}
                </h3>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/85">
                  {p.text}
                </p>
                <a
                  href="/learning"
                  className="mt-5 inline-flex items-center gap-2 font-heading text-xs font-bold uppercase tracking-widest text-brand-orange"
                >
                  Learn More
                  <Icon
                    name="arrowRight"
                    className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1.5"
                  />
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
