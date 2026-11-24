"use client";

import Image from "next/image";
import Reveal from "../Reveal";
import Icon from "../Icon";
import { Pill, Underlined } from "./deco";

// Academic programmes as an editorial list: one row per stage, with a
// step number, title, description and a compact photo thumbnail.
const stages = [
  {
    step: "01",
    title: "Early Years",
    grades: "Ages 3 – 6",
    tagline: "Play. Learn. Grow.",
    text: "Montessori, Waldorf, Reggio Emilia and Froebel blend into one joyful foundation, in classrooms named after the birds of our campus.",
    image: "/images/pages/early-years-3.jpg",
  },
  {
    step: "02",
    title: "Primary School",
    grades: "Grades 1 – 5",
    tagline: "Build. Explore. Discover.",
    text: "Strong fundamentals through concept-first learning — and primary learners never carry books home.",
    image: "/images/pages/early-years-2.jpg",
  },
  {
    step: "03",
    title: "Middle School",
    grades: "Grades 6 – 8",
    tagline: "Learn. Engage. Excel.",
    text: "Three terms with continuous evaluation, real-world projects and the independence of personal lockers.",
    image: "/images/pages/pursuits-1.jpg",
  },
  {
    step: "04",
    title: "ICSE & ISC",
    grades: "Grades 9 – 12",
    tagline: "Focus. Achieve. Lead.",
    text: "Board preparation with depth, discipline and conceptual clarity — permanently affiliated to CISCE since 2017.",
    image: "/images/pages/home-1.jpg",
  },
  {
    step: "05",
    title: "Cambridge",
    grades: "IGCSE, AS & A Levels",
    tagline: "Inquire. Reflect. Soar.",
    text: "A globally recognised pathway of independent thinking — a bridge to the world's leading universities since 2010.",
    image: "/images/pages/galleria-2.jpg",
  },
];

export default function ClassicPrograms() {
  return (
    <section className="bg-white">
      <div className="container-site px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="grid items-end gap-8 lg:grid-cols-2">
          <Reveal>
            <Pill>Our Academic Programmes</Pill>
            <h2 className="head-h2 mt-5">
              One Journey, <Underlined>Every Stage</Underlined>
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="max-w-md leading-relaxed text-slate-600 lg:justify-self-end">
              A seamless path from the Early Years to Grade 12, across two
              world-class boards — each stage built on the one before it.
            </p>
          </Reveal>
        </div>

        {/* Programme rows */}
        <div className="mt-12 border-t border-slate-200">
          {stages.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.06}>
              <a
                href="/learning"
                className="group relative grid items-center gap-x-7 gap-y-4 border-b border-slate-200 py-7 transition-colors duration-300 hover:bg-tint-blue/60 lg:grid-cols-[4.5rem_14rem_1fr_9rem_3rem] lg:px-4"
              >
                {/* Step number */}
                <span className="font-heading text-3xl font-extrabold text-slate-200 transition-colors duration-300 group-hover:text-brand-orange lg:text-4xl">
                  {s.step}
                </span>

                {/* Title + grades */}
                <div>
                  <h3 className="font-heading text-2xl font-bold text-brand-navy transition-colors duration-300 group-hover:text-brand">
                    {s.title}
                  </h3>
                  <span className="mt-2 inline-block rounded-full bg-brand/[0.07] px-3 py-1 font-heading text-[10px] font-bold uppercase tracking-widest text-brand">
                    {s.grades}
                  </span>
                </div>

                {/* Copy */}
                <div>
                  <p className="font-heading text-xs font-bold uppercase tracking-wide text-brand-orange">
                    {s.tagline}
                  </p>
                  <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-slate-600">
                    {s.text}
                  </p>
                </div>

                {/* Thumbnail */}
                <div className="relative h-24 w-36 overflow-hidden rounded-xl lg:h-20 lg:w-full">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    sizes="144px"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Arrow */}
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-brand-navy transition-all duration-300 group-hover:border-brand group-hover:bg-brand group-hover:text-white lg:justify-self-end">
                  <Icon name="arrowRight" className="h-4 w-4" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
