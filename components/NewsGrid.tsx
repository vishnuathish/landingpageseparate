"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import Icon from "./Icon";

const KPRESS = "https://kpress.ksirs.in";

const filters = ["All", "Events", "Achievements", "Announcements"] as const;
type Filter = (typeof filters)[number];

const items: {
  tag: Exclude<Filter, "All">;
  date: string;
  title: string;
  text: string;
  image: string;
}[] = [
  {
    tag: "Announcements",
    date: "Nov 2026",
    title: "Admissions Open — CISCE & Cambridge 2027–28",
    text: "Applications are now open for both pathways. Enquire early; we keep our classrooms small.",
    image: "/images/pages/early-years-2.jpg",
  },
  {
    tag: "Events",
    date: "Oct 2026",
    title: "Annual Sports Meet at the Arena",
    text: "Track, field and the climbing wall — a full day of house colours and personal bests.",
    image: "/images/sports.jpg",
  },
  {
    tag: "Events",
    date: "Sep 2026",
    title: "K'sirs MUN — Debate, Diplomacy, Dialogue",
    text: "Young delegates take on world affairs at our Model United Nations conference.",
    image: "/images/pages/galleria-2.jpg",
  },
  {
    tag: "Achievements",
    date: "Aug 2026",
    title: "Celebrating Our Board Results",
    text: "Another year of 100% results across ICSE, ISC and IGCSE examinations.",
    image: "/images/pages/classroom.jpg",
  },
  {
    tag: "Events",
    date: "Jul 2026",
    title: "Harvest Week in the Organic Garden",
    text: "From vermicompost to table — learners harvest what they planted last term.",
    image: "/images/pages/flora-1.jpg",
  },
  {
    tag: "Achievements",
    date: "Jun 2026",
    title: "A Carbon-Neutral Pioneer Since 2012",
    text: "Marking the pledge that made us Tamil Nadu's first carbon-neutral school signatory.",
    image: "/images/abode.jpg",
  },
];

export default function NewsGrid() {
  const [active, setActive] = useState<Filter>("All");
  const visible =
    active === "All" ? items : items.filter((i) => i.tag === active);

  return (
    <div>
      {/* Filter pills */}
      <div className="flex flex-wrap gap-3">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`rounded-full px-5 py-2.5 font-heading text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
              active === f
                ? "bg-brand text-white shadow-md"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Cards */}
      <motion.div layout className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((item, i) => (
            <motion.a
              key={item.title}
              layout
              href={KPRESS}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 36, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.45, delay: i * 0.05, ease: [0.21, 0.6, 0.35, 1] }}
              className={`group flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-card transition-shadow duration-300 hover:shadow-card-hover ${
                i % 3 === 1 ? "lg:mt-10" : ""
              }`}
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <span className="absolute left-4 top-4 rounded-md bg-brand-orange px-3 py-1 font-heading text-[10px] font-bold uppercase tracking-wider text-white">
                  {item.tag}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <span className="font-heading text-xs font-semibold uppercase tracking-widest text-slate-400">
                  {item.date}
                </span>
                <h3 className="mt-2 font-heading text-lg font-bold leading-snug text-brand-navy transition-colors group-hover:text-brand">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                  {item.text}
                </p>
                <span className="mt-auto inline-flex items-center gap-2 pt-5 font-heading text-xs font-bold uppercase tracking-widest text-brand">
                  Read More
                  <Icon
                    name="arrowRight"
                    className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1.5"
                  />
                </span>
              </div>
            </motion.a>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
