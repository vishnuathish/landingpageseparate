"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import Icon from "./Icon";

const programs = [
  {
    name: "Early Years",
    prefix: "K'sirs",
    tag: "Pre-Primary",
    logo: "/images/early-years.png",
    photo: "/images/pursuits.jpg",
    text: "A joyful blend of the world's best early-childhood philosophies — Montessori, Waldorf and Reggio Emilia — where little learners discover through play, nature and wonder.",
    points: ["Montessori Method", "Waldorf Approach", "Reggio Emilia"],
  },
  {
    name: "CISCE",
    prefix: "ICSE & ISC @",
    tag: "National Curriculum",
    logo: "/images/cisce.png",
    photo: "/images/infrastructure.jpg",
    text: "A rigorous national curriculum preparing students for board examinations with depth, discipline and conceptual clarity — ICSE to Grade 10, ISC to Grade 12.",
    points: ["ICSE — Grade 10", "ISC — Grade 12", "Holistic Indian Curriculum"],
  },
  {
    name: "Cambridge",
    prefix: "International @",
    tag: "IGCSE, AS & A Levels",
    logo: "/images/cambridge.png",
    photo: "/images/galleria.jpg",
    text: "A globally recognised pathway that nurtures inquiry, reflection and independent thinking — a bridge to the world's leading universities.",
    points: ["IGCSE", "AS Levels", "A Levels"],
  },
];

export default function Curriculum() {
  // Pinned split-screen (reference: the indigo curriculum panels): the
  // layout stays fixed while scrolling swaps in the next programme's
  // content on the left and photo on the right.
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const [active, setActive] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.max(
      0,
      Math.min(programs.length - 1, Math.floor(v * programs.length)),
    );
    setActive(idx);
  });

  const program = programs[active];

  return (
    <section id="curriculum" ref={ref} className="relative h-[300vh] bg-brand">
      <div className="sticky top-0 flex h-[100svh] flex-col overflow-hidden lg:grid lg:grid-cols-2">
        {/* Copy panel */}
        <div className="order-2 flex flex-1 flex-col justify-center px-6 py-10 sm:px-10 lg:order-1 lg:px-16 xl:px-24">
          <span className="font-heading text-xs font-semibold uppercase tracking-[0.3em] text-brand-teal">
            Our Curricula — 0{active + 1} / 0{programs.length}
          </span>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 44 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -28 }}
              transition={{ duration: 0.45, ease: [0.21, 0.6, 0.35, 1] }}
              className="mt-5"
            >
              <p className="font-serif text-xl italic text-white/70 sm:text-2xl">
                {program.prefix}
              </p>
              <h2 className="mt-1 font-heading text-4xl font-extrabold uppercase tracking-tight text-white sm:text-5xl xl:text-6xl">
                {program.name}
              </h2>
              <p className="mt-6 max-w-xl leading-relaxed text-white/85 sm:text-lg">
                {program.text}
              </p>
              <ul className="mt-6 hidden space-y-2.5 sm:block">
                {program.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-center gap-3 text-sm font-medium text-white/90"
                  >
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/15 text-brand-teal">
                      <Icon name="check" className="h-3 w-3" />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
              <a
                href="#admissions"
                className="mt-9 inline-flex items-center gap-2.5 rounded-md bg-white px-8 py-4 font-heading text-sm font-bold text-brand transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-orange hover:text-white"
              >
                Explore {program.name}
                <Icon name="arrowRight" className="h-4 w-4" />
              </a>
            </motion.div>
          </AnimatePresence>

          {/* Scroll progress segments */}
          <div className="mt-12 flex gap-3">
            {programs.map((p, i) => (
              <span
                key={p.name}
                className={`block h-1 w-16 rounded-full transition-colors duration-500 ${
                  i === active ? "bg-brand-orange" : "bg-white/20"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Photo panel */}
        <div className="relative order-1 h-[36vh] sm:h-[42vh] lg:order-2 lg:h-auto">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 1.07 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <Image
                src={program.photo}
                alt={program.name}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-brand/50 to-transparent lg:bg-gradient-to-r lg:from-brand/40 lg:to-transparent" />

          {/* Programme logo chip */}
          <div className="absolute bottom-5 right-5 hidden h-16 items-center rounded-md bg-white/95 px-4 shadow-lg sm:flex">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={program.logo}
                  alt={`${program.name} logo`}
                  width={140}
                  height={56}
                  className="max-h-12 w-auto object-contain"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
