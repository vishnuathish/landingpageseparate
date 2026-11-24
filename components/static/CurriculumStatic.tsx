"use client";

import Image from "next/image";
import Reveal from "../Reveal";
import Icon from "../Icon";

// Static-variant curriculum: a plain three-card grid, no pinned
// split-screen or scroll-driven swapping.
const programs = [
  {
    name: "K'sirs Early Years",
    tag: "Pre-Primary",
    image: "/images/early-years.png",
    points: ["Montessori Method", "Waldorf Approach", "Reggio Emilia"],
    text: "A joyful blend of the world's best early-childhood philosophies.",
  },
  {
    name: "CISCE",
    tag: "ICSE & ISC",
    image: "/images/cisce.png",
    points: ["ICSE — Grade 10", "ISC — Grade 12", "Holistic Indian Curriculum"],
    text: "A rigorous national curriculum preparing students for board examinations.",
  },
  {
    name: "Cambridge",
    tag: "IGCSE, AS & A Levels",
    image: "/images/cambridge.png",
    points: ["IGCSE", "AS Levels", "A Levels"],
    text: "A globally recognised pathway to the world's leading universities.",
  },
];

export default function CurriculumStatic() {
  return (
    <section id="curriculum" className="section-padding bg-tint-blue relative overflow-hidden">
      <div className="container-site">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="heading-kicker heading-kicker--center justify-center">
              Our Curricula
            </span>
            <h2 className="head-h2">
              Three Pathways,{" "}
              <em className="font-serif italic text-brand">One Journey</em>
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-7 md:grid-cols-3">
          {programs.map((program, i) => (
            <Reveal key={program.name} delay={i * 0.12} className="h-full">
              <article className="card group flex h-full flex-col p-8 hover:-translate-y-2 hover:shadow-card-hover">
                <div className="flex h-16 items-center">
                  <Image
                    src={program.image}
                    alt={program.name}
                    width={160}
                    height={64}
                    className="max-h-16 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="mt-6 font-heading text-xs font-bold uppercase tracking-[0.2em] text-brand-orange">
                  {program.tag}
                </p>
                <h3 className="mt-1.5 font-heading text-2xl font-bold text-brand-navy">
                  {program.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {program.text}
                </p>
                <ul className="mt-5 flex-1 space-y-2.5 border-t border-slate-100 pt-5">
                  {program.points.map((point) => (
                    <li key={point} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand/10 text-brand">
                        <Icon name="check" className="h-3 w-3" />
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
                <a
                  href="/admissions"
                  className="mt-6 inline-flex items-center gap-2 font-heading text-xs font-bold uppercase tracking-widest text-brand transition-colors hover:text-brand-orange"
                >
                  Enquire Now
                  <Icon name="arrowRight" className="h-3.5 w-3.5" />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
