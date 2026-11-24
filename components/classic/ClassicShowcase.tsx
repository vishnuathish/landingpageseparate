"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "../Reveal";
import Icon, { type IconName } from "../Icon";
import { Pill, Underlined, DotPattern } from "./deco";

// Campus showcase: horizontal tab bar with a split image/content panel.
const facets: {
  icon: IconName;
  title: string;
  text: string;
  points: string[];
  image: string;
  stat: { value: string; label: string };
}[] = [
  {
    icon: "sparkles",
    title: "Our Abode",
    text: "A lush 12.5-acre habitat where over 600 native trees, 185 bird varieties and 45 butterfly varieties share the campus with our learners.",
    points: [
      "Eco-friendly fly-ash brick buildings",
      "Rainwater recharge & grey-water reuse",
      "Organic garden fed by vermicompost",
    ],
    image: "/images/abode.jpg",
    stat: { value: "12.5", label: "Acres of Green Campus" },
  },
  {
    icon: "building",
    title: "Infrastructure",
    text: "Bright, purposeful spaces built for exploration — because where children learn shapes how they learn.",
    points: [
      "Wide-windowed, airy classrooms",
      "Science, computer & activity labs",
      "Personal lockers from middle school",
    ],
    image: "/images/pages/infra-1.jpg",
    stat: { value: "100%", label: "Purpose-Built Spaces" },
  },
  {
    icon: "heart",
    title: "Our Pursuits",
    text: "Life skills every K'sirian learns with their hands — and from Grade 8, student HUBs that carry real responsibility.",
    points: [
      "Agriculture, pottery & embroidery",
      "Soap making, DIY, arts & crafts",
      "From Media Hub to Creative Cuisine",
    ],
    image: "/images/pages/pursuits-1.jpg",
    stat: { value: "8", label: "Student HUBs" },
  },
  {
    icon: "trophy",
    title: "Sports Arena",
    text: "Indoor and outdoor arenas that build resilience and teamwork — first in Coimbatore with a wall-climbing facility.",
    points: [
      "Wall climbing & obstacle course",
      "Sepak Takraw and robotic TT trainer",
      "Football, cricket, basketball & more",
    ],
    image: "/images/sports.jpg",
    stat: { value: "10+", label: "Sporting Disciplines" },
  },
  {
    icon: "photo",
    title: "Galleria",
    text: "Glimpses of our celebrations and events — the moments that make everyday life at K'sirs memorable.",
    points: [
      "Festivals celebrated together",
      "Stage, arts & cultural events",
      "A gallery that grows every term",
    ],
    image: "/images/pages/galleria-1.jpg",
    stat: { value: "4", label: "Houses Competing" },
  },
];

export default function ClassicShowcase() {
  const [active, setActive] = useState(0);
  const facet = facets[active];

  return (
    <section className="relative overflow-hidden bg-tint-blue">
      <DotPattern
        className="absolute right-8 top-16 h-20 w-20"
        color="#2e3591"
        rows={4}
        cols={4}
        opacity={0.18}
      />
      <div className="container-site relative px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <Pill>Discover K&apos;sirs</Pill>
            <h2 className="head-h2 mt-5">
              Life Across Our <Underlined color="#2e3591">Habitat</Underlined>
            </h2>
          </Reveal>
        </div>

        {/* Tab bar */}
        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap justify-center gap-2.5">
            {facets.map((f, i) => (
              <button
                key={f.title}
                onClick={() => setActive(i)}
                className={`flex items-center gap-2.5 rounded-full px-5 py-3 font-heading text-[13px] font-bold transition-all duration-300 ${
                  i === active
                    ? "bg-brand text-white shadow-lg shadow-brand/25"
                    : "bg-white text-brand-navy shadow-sm hover:bg-brand/[0.06]"
                }`}
              >
                <Icon
                  name={f.icon}
                  className={`h-4 w-4 ${i === active ? "text-brand-orange" : "text-brand"}`}
                />
                {f.title}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Split panel */}
        <Reveal delay={0.15}>
          <div className="mt-10 overflow-hidden rounded-3xl bg-white shadow-card-hover">
            <div className="grid lg:grid-cols-2">
              {/* Image */}
              <div className="relative h-64 overflow-hidden sm:h-80 lg:h-auto lg:min-h-[26rem]">
                <AnimatePresence mode="popLayout">
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={facet.image}
                      alt={facet.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </motion.div>
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-transparent to-transparent" />

                {/* Floating stat */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`stat-${active}`}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="absolute bottom-6 left-6 rounded-2xl bg-white px-5 py-4 shadow-card-hover"
                  >
                    <p className="font-heading text-2xl font-extrabold leading-none text-brand-navy">
                      {facet.stat.value}
                    </p>
                    <p className="mt-1 text-[10px] uppercase tracking-widest text-slate-500">
                      {facet.stat.label}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`copy-${active}`}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="flex flex-col justify-center p-8 sm:p-10 lg:p-12"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/[0.07] text-brand">
                    <Icon name={facet.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-heading text-2xl font-bold text-brand-navy sm:text-3xl">
                    {facet.title}
                  </h3>
                  <p className="mt-4 leading-relaxed text-slate-600">
                    {facet.text}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {facet.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-3 text-sm font-medium text-slate-700"
                      >
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-green/15 text-brand-green">
                          <Icon name="check" className="h-3 w-3" />
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/life"
                    className="mt-8 inline-flex w-fit items-center gap-2.5 rounded-md bg-brand px-6 py-3.5 font-heading text-xs font-bold uppercase tracking-wider text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-orange"
                  >
                    Explore More
                    <Icon name="arrowRight" className="h-4 w-4" />
                  </a>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
