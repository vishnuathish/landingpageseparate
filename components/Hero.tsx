"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import Icon from "./Icon";

const DURATION = 5600;

type Slide = {
  label: string;
  title1: string;
  title2: string;
  text: string;
  image: string;
  /** Optional background video; the image doubles as its poster. */
  video?: string;
};

const slides: Slide[] = [
  {
    label: "Global Vision",
    title1: "Globally Ready,",
    title2: "Rooted in Tradition",
    text: "World-class CISCE and Cambridge pathways, grounded in Indian values.",
    image: "/images/hero.jpg",
    video: "/videos/campus.mp4",
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

export default function Hero() {
  const [index, setIndex] = useState(0);

  const next = useCallback(() => setIndex((i) => (i + 1) % slides.length), []);
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + slides.length) % slides.length),
    [],
  );

  // Auto-advance; manual navigation resets the timer.
  useEffect(() => {
    const t = setTimeout(next, DURATION);
    return () => clearTimeout(t);
  }, [index, next]);

  // Scroll choreography (reference: rakspallikkoodam.com hero):
  //  Phase A (0 → 0.45): the full-bleed banner zooms out into a framed,
  //    rounded box on white; the headline and controls fade away.
  //  Phase B (0.5 → 0.75): a statement line fades in over the dimmed box,
  //    with a "keep scrolling" cue beneath it.
  //  Then the section releases and the next section scrolls in.
  const wrapRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ["start start", "end end"],
  });

  const mediaScale = useTransform(scrollYProgress, [0, 0.45], [1, 0.68]);
  const mediaRadius = useTransform(scrollYProgress, [0.05, 0.45], ["0rem", "1.5rem"]);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.22], [1, 0]);
  const copyY = useTransform(scrollYProgress, [0, 0.22], [0, -50]);
  // Hard guarantee: once faded, the copy layer is removed entirely so it
  // can never overlap the statement.
  const copyDisplay = useTransform(copyOpacity, (v) =>
    v <= 0.01 ? "none" : "flex",
  );
  const statementDim = useTransform(scrollYProgress, [0.5, 0.72], [0, 0.45]);
  const statementOpacity = useTransform(scrollYProgress, [0.55, 0.75], [0, 1]);
  const statementY = useTransform(scrollYProgress, [0.55, 0.75], [48, 0]);
  const cueOpacity = useTransform(scrollYProgress, [0.4, 0.55, 0.92, 1], [0, 1, 1, 0]);

  const slide = slides[index];

  return (
    <div id="home" ref={wrapRef} className="relative h-[260vh] bg-white">
      <div className="sticky top-0 h-[100svh] overflow-hidden bg-white">
        {/* The banner: full-bleed at first, zooming out into a framed box */}
        <motion.div
          style={{ scale: mediaScale, borderRadius: mediaRadius }}
          className="absolute inset-0 origin-center overflow-hidden bg-brand-navy will-change-transform"
        >
          {/* Slideshow with Ken Burns drift */}
          <AnimatePresence mode="popLayout">
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0"
            >
              <motion.div
                initial={{ scale: 1 }}
                animate={{ scale: 1.08 }}
                transition={{ duration: DURATION / 1000 + 1.2, ease: "linear" }}
                className="absolute inset-0"
              >
                {slide.video ? (
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster={slide.image}
                    src={slide.video}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                ) : (
                  <Image
                    src={slide.image}
                    alt={slide.label}
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover"
                  />
                )}
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/95 via-brand-navy/70 to-brand/30" />
          <div className="dot-grid absolute inset-0 opacity-20" />
          {/* Extra dim while the statement is on screen */}
          <motion.div
            style={{ opacity: statementDim }}
            className="absolute inset-0 bg-brand-navy"
          />

          {/* Hero copy — fades out as the zoom-out begins */}
          <motion.div
            style={{ opacity: copyOpacity, y: copyY, display: copyDisplay }}
            className="absolute inset-0 z-10 flex-col"
          >
            <div className="container-site flex flex-1 flex-col justify-center px-5 pb-16 pt-44 sm:px-8 lg:px-24">
              <motion.span
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-6 inline-flex w-fit items-center gap-3 border-l-2 border-brand-orange pl-4 font-heading text-xs font-semibold uppercase tracking-[0.28em] text-white/80 sm:text-sm"
              >
                K&apos;sirs International School, Coimbatore
              </motion.span>

              <div className="min-h-[11rem] sm:min-h-[14rem]">
                <AnimatePresence mode="wait">
                  <motion.h1
                    key={index}
                    initial={{ opacity: 0, y: 44 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -28 }}
                    transition={{ duration: 0.6, ease: [0.21, 0.6, 0.35, 1] }}
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

              <AnimatePresence mode="wait">
                <motion.p
                  key={`text-${index}`}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                  className="mt-4 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg"
                >
                  {slide.text}
                </motion.p>
              </AnimatePresence>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.7 }}
                className="mt-10 flex flex-wrap items-center gap-5"
              >
                <a href="#admissions" className="btn-primary">
                  Apply Now
                  <Icon name="arrowRight" className="h-4 w-4" />
                </a>
                <a href="#life" className="btn-outline">
                  Explore Campus
                </a>
              </motion.div>
            </div>

            {/* Bottom bar: slide tabs + arrows + counter */}
            <div className="container-site px-5 pb-10 sm:px-8 lg:px-24">
              <div className="flex flex-col gap-6 border-t border-white/15 pt-6 md:flex-row md:items-center md:justify-between">
                <div className="flex gap-8">
                  {slides.map((s, i) => (
                    <button
                      key={s.label}
                      onClick={() => setIndex(i)}
                      className="group text-left"
                    >
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
                            i === index
                              ? "text-white"
                              : "text-white/40 group-hover:text-white/70"
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
                  <span className="font-heading text-sm font-semibold text-white/60">
                    <span className="text-xl text-white">0{index + 1}</span> / 0
                    {slides.length}
                  </span>
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
          </motion.div>
        </motion.div>

        {/* Statement — fades in over the dimmed, boxed banner */}
        <motion.div
          style={{ opacity: statementOpacity, y: statementY }}
          className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center px-8"
        >
          <p
            className="max-w-3xl text-center font-heading font-medium leading-snug text-white [text-shadow:0_2px_24px_rgba(3,27,78,0.45)]"
            style={{ fontSize: "clamp(1.6rem, 3.6vw, 3.2rem)" }}
          >
            A school where children explore and learn at every turn — growing
            from{" "}
            <em className="font-serif font-semibold italic text-brand-orange">
              infancy to independence
            </em>
            .
          </p>
        </motion.div>

        {/* Keep-scrolling cue on the white margin below the box */}
        <motion.div
          style={{ opacity: cueOpacity }}
          className="pointer-events-none absolute inset-x-0 bottom-5 z-20 flex items-center justify-center gap-3"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-brand-orange" />
          <span className="font-heading text-xs font-semibold uppercase tracking-[0.35em] text-brand-navy">
            Keep Scrolling
          </span>
        </motion.div>
      </div>
    </div>
  );
}
