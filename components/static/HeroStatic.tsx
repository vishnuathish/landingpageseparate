"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import Icon from "../Icon";

// Static-variant hero: the same full-screen slideshow banner, but in
// normal page flow — no pinning, no zoom-out sequence, no scroll effects.
const DURATION = 5600;

const slides = [
  {
    label: "Global Vision",
    title1: "Globally Ready,",
    title2: "Rooted in Tradition",
    text: "World-class CISCE and Cambridge pathways, grounded in Indian values.",
    image: "/images/hero.jpg",
  },
  {
    label: "Our Abode",
    title1: "Strong Foundations,",
    title2: "Endless Possibilities",
    text: "An ethnically rich campus set amidst nature — a habitat built for discovery.",
    image: "/images/abode.jpg",
  },
  {
    label: "Future Ready",
    title1: "Innovating Today,",
    title2: "Leading Tomorrow",
    text: "From the sports arena to the classroom, K'sirians grow into leaders.",
    image: "/images/sports.jpg",
  },
];

export default function HeroStatic() {
  const [index, setIndex] = useState(0);
  const next = useCallback(() => setIndex((i) => (i + 1) % slides.length), []);
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + slides.length) % slides.length),
    [],
  );

  useEffect(() => {
    const t = setTimeout(next, DURATION);
    return () => clearTimeout(t);
  }, [index, next]);

  const slide = slides[index];

  return (
    <section className="relative flex min-h-[100svh] flex-col overflow-hidden bg-brand-navy">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <Image
            src={slide.image}
            alt={slide.label}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/95 via-brand-navy/70 to-brand/30" />
      <div className="dot-grid absolute inset-0 opacity-20" />

      <div className="container-site relative z-10 flex flex-1 flex-col justify-center px-5 pb-16 pt-44 sm:px-8 lg:px-24">
        <span className="mb-6 inline-flex w-fit items-center gap-3 border-l-2 border-brand-orange pl-4 font-heading text-xs font-semibold uppercase tracking-[0.28em] text-white/80 sm:text-sm">
          K&apos;sirs International School, Coimbatore
        </span>

        <div className="min-h-[11rem] sm:min-h-[14rem]">
          <AnimatePresence mode="wait">
            <motion.h1
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="font-heading font-extrabold uppercase leading-[0.98] tracking-tight text-white"
              style={{ fontSize: "clamp(2.6rem, 6.8vw, 6rem)" }}
            >
              {slide.title1}
              <br />
              <em className="font-serif font-semibold normal-case italic tracking-normal text-brand-orange">
                {slide.title2}
              </em>
            </motion.h1>
          </AnimatePresence>
        </div>

        <p className="mt-4 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
          {slide.text}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-5">
          <a href="/admissions" className="btn-primary">
            Apply Now
            <Icon name="arrowRight" className="h-4 w-4" />
          </a>
          <a href="#life" className="btn-outline">
            Explore Campus
          </a>
        </div>
      </div>

      {/* Bottom bar: slide tabs + arrows */}
      <div className="container-site relative z-10 px-5 pb-10 sm:px-8 lg:px-24">
        <div className="flex flex-col gap-6 border-t border-white/15 pt-6 md:flex-row md:items-center md:justify-between">
          <div className="flex gap-8">
            {slides.map((s, i) => (
              <button key={s.label} onClick={() => setIndex(i)} className="group text-left">
                <span className="flex items-baseline gap-2.5">
                  <span
                    className={`font-heading text-sm font-bold ${
                      i === index ? "text-brand-orange" : "text-white/40"
                    }`}
                  >
                    0{i + 1}
                  </span>
                  <span
                    className={`font-heading text-xs font-semibold uppercase tracking-widest transition-colors ${
                      i === index ? "text-white" : "text-white/40 group-hover:text-white/70"
                    }`}
                  >
                    {s.label}
                  </span>
                </span>
                <span className="mt-2.5 block h-0.5 w-28 overflow-hidden rounded-full bg-white/20 sm:w-36">
                  {i === index && (
                    <motion.span
                      key={`bar-${index}`}
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: DURATION / 1000, ease: "linear" }}
                      className="block h-full bg-brand-orange"
                    />
                  )}
                </span>
              </button>
            ))}
          </div>
          <div className="flex items-center gap-5">
            <button
              onClick={prev}
              aria-label="Previous banner"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white transition-all duration-300 hover:border-brand-orange hover:bg-brand-orange"
            >
              <Icon name="arrowRight" className="h-4 w-4 rotate-180" />
            </button>
            <button
              onClick={next}
              aria-label="Next banner"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white transition-all duration-300 hover:border-brand-orange hover:bg-brand-orange"
            >
              <Icon name="arrowRight" className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
