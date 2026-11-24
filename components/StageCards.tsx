"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

// Indigo rounded-top panel holding light image+text cards, one per
// academic stage. Cards rise in with a stagger; images alternate sides.
const stages = [
  {
    board: "CISCE",
    stage: "Primary",
    grades: "Grades 1 – 5",
    image: "/images/pages/classroom.jpg",
    text: "English, Tamil, Maths, Science and Computer Science with SUPW, adding Social Studies from Grade 4 — and no books carried home.",
  },
  {
    board: "CISCE",
    stage: "Middle",
    grades: "Grades 6 – 8",
    image: "/images/pages/infra-2.jpg",
    text: "Hindi, History & Civics and Geography join the core. Three terms with continuous evaluation, and personal lockers on campus.",
  },
  {
    board: "CISCE",
    stage: "ICSE & ISC",
    grades: "Grades 9 – 12",
    image: "/images/pages/galleria-2.jpg",
    text: "Structured preparation for the Grade 10 ICSE board examination, then the two-year ISC programme to Grade 12.",
  },
  {
    board: "Cambridge",
    stage: "Primary",
    grades: "CIPP, Grades 1 – 5",
    image: "/images/pages/early-years-3.jpg",
    text: "The Cambridge International Primary Programme — adding Global Perspectives, French and Silambam from Grade 4.",
  },
  {
    board: "Cambridge",
    stage: "Middle",
    grades: "Grades 6 – 8",
    image: "/images/pages/pursuits-2.jpg",
    text: "Checkpoint years leading into a Pre-IGCSE bridge course in Grade 8, readying learners for the international stage.",
  },
  {
    board: "Cambridge",
    stage: "IGCSE & A Levels",
    grades: "Grades 9 – 12",
    image: "/images/pages/infra-3.jpg",
    text: "18-month IGCSE courses with March and October windows; the ICE Award recognises a minimum of seven subjects.",
  },
];

export default function StageCards() {
  return (
    <section className="relative z-10 -mt-8 rounded-t-[3rem] bg-brand pb-20 pt-16 lg:pb-28 lg:pt-20">
      <div className="container-site px-5 sm:px-8 lg:px-12">
        <Reveal>
          <span className="heading-kicker heading-kicker--light">
            Stage by Stage
          </span>
          <h2 className="max-w-2xl font-heading text-3xl font-bold leading-[1.12] text-white sm:text-4xl lg:text-[2.6rem]">
            Every Grade,{" "}
            <em className="font-serif italic text-brand-orange">
              Thoughtfully Built
            </em>
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-2 lg:gap-6">
          {stages.map((s, i) => (
            <motion.article
              key={`${s.board}-${s.stage}`}
              initial={{ opacity: 0, y: 56 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.65,
                delay: (i % 2) * 0.12,
                ease: [0.21, 0.6, 0.35, 1],
              }}
              className="flex flex-col overflow-hidden rounded-3xl bg-[#f3f4f6] p-2.5 shadow-lg md:h-[21rem] md:flex-row"
            >
              <div
                className={`relative h-44 w-full shrink-0 overflow-hidden rounded-2xl md:h-full md:w-[45%] ${
                  i % 2 === 1 ? "md:order-2" : ""
                }`}
              >
                <Image
                  src={s.image}
                  alt={`${s.board} ${s.stage}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 28vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <span className="absolute left-3 top-3 rounded-md bg-brand px-2.5 py-1 font-heading text-[10px] font-bold uppercase tracking-wider text-white">
                  {s.board}
                </span>
              </div>
              <div
                className={`flex w-full flex-col justify-center px-4 py-6 md:w-[55%] md:px-6 ${
                  i % 2 === 1 ? "md:order-1" : ""
                }`}
              >
                <p className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-brand-orange">
                  {s.grades}
                </p>
                <h3 className="mt-1.5 font-heading text-2xl font-medium tracking-tight text-brand-navy">
                  <em className="font-serif italic">{s.stage}</em>
                </h3>
                <blockquote className="mt-4 border-l-2 border-brand-navy/40 py-1 pl-4">
                  <p className="text-sm leading-relaxed text-slate-600 lg:text-[15px]">
                    {s.text}
                  </p>
                </blockquote>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
