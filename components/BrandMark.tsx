"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Reveal from "./Reveal";

// Big brand-mark moment (reference: the giant multicolour "RAKS" letters).
// Each letter rises in with a stagger, and the whole mark gently scales
// as it crosses the viewport.
const letters = [
  { ch: "K", cls: "text-brand-orange" },
  { ch: "'", cls: "text-brand-teal" },
  { ch: "S", cls: "text-brand" },
  { ch: "I", cls: "text-brand-green" },
  { ch: "R", cls: "text-brand-navy" },
  { ch: "S", cls: "text-brand-orange" },
];

export default function BrandMark() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.94, 1, 1.04]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-white py-24 md:py-36">
      {/* Decorative doodle patterns floating around the letters */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {/* Orbit / atom — top left */}
        <svg
          viewBox="0 0 120 120"
          className="animate-float-slow absolute left-[6%] top-[12%] h-20 w-20 opacity-70 sm:h-28 sm:w-28"
          fill="none"
          strokeLinecap="round"
        >
          <ellipse cx="60" cy="60" rx="46" ry="18" stroke="#f57a3d" strokeWidth="4" transform="rotate(-24 60 60)" />
          <ellipse cx="60" cy="60" rx="46" ry="18" stroke="#2e3591" strokeWidth="4" transform="rotate(56 60 60)" />
          <circle cx="60" cy="60" r="7" fill="#2bb061" />
          <circle cx="98" cy="38" r="5" fill="#00d8d8" />
        </svg>
        {/* Squiggle — top right */}
        <svg
          viewBox="0 0 140 60"
          className="animate-float-slower absolute right-[7%] top-[16%] h-12 w-28 opacity-70 sm:h-16 sm:w-36"
          fill="none"
          strokeLinecap="round"
        >
          <path d="M6 44 Q 24 10 42 32 T 78 32 T 114 28" stroke="#00d8d8" strokeWidth="5" />
          <path d="M20 54 Q 38 26 56 44 T 92 42" stroke="#f57a3d" strokeWidth="4" opacity="0.7" />
        </svg>
        {/* Dotted grid — bottom left */}
        <svg
          viewBox="0 0 90 90"
          className="animate-float-slower absolute bottom-[18%] left-[10%] h-16 w-16 opacity-60 sm:h-20 sm:w-20"
        >
          {[0, 1, 2, 3].map((r) =>
            [0, 1, 2, 3].map((c) => (
              <circle
                key={`${r}-${c}`}
                cx={12 + c * 22}
                cy={12 + r * 22}
                r="4"
                fill={(r + c) % 2 === 0 ? "#2e3591" : "#f57a3d"}
                opacity="0.55"
              />
            )),
          )}
        </svg>
        {/* Open ring — bottom right */}
        <svg
          viewBox="0 0 110 110"
          className="animate-float-slow absolute bottom-[14%] right-[9%] h-16 w-16 opacity-70 sm:h-24 sm:w-24"
          fill="none"
          strokeLinecap="round"
        >
          <path d="M55 8 a47 47 0 1 1 -33 14" stroke="#2bb061" strokeWidth="6" />
          <circle cx="22" cy="22" r="6" fill="#f57a3d" />
        </svg>
        {/* Sparkle — mid left */}
        <svg
          viewBox="0 0 60 60"
          className="animate-spin-slow absolute left-[22%] top-[58%] hidden h-10 w-10 opacity-70 lg:block"
          fill="#f57a3d"
        >
          <path d="M30 2 L36 24 L58 30 L36 36 L30 58 L24 36 L2 30 L24 24 Z" />
        </svg>
        {/* Triangle — mid right */}
        <svg
          viewBox="0 0 80 80"
          className="animate-float-slow absolute right-[20%] top-[56%] hidden h-12 w-12 opacity-60 lg:block"
          fill="none"
          strokeLinejoin="round"
        >
          <path d="M40 10 L70 64 L10 64 Z" stroke="#00d8d8" strokeWidth="5" />
        </svg>
      </div>

      <div className="container-site relative px-5 text-center sm:px-8">
        <motion.p
          style={{ scale }}
          aria-label="K'sirs"
          className="flex items-end justify-center font-heading font-extrabold uppercase leading-none tracking-tight"
        >
          {letters.map((letter, i) => (
            <motion.span
              key={`${letter.ch}-${i}`}
              initial={{ opacity: 0, y: 90, rotate: i % 2 === 0 ? -8 : 8 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.08,
                ease: [0.21, 0.6, 0.35, 1],
              }}
              className={`inline-block ${letter.cls}`}
              style={{ fontSize: "clamp(5rem, 19vw, 17rem)" }}
            >
              {letter.ch}
            </motion.span>
          ))}
        </motion.p>

        <Reveal delay={0.3}>
          <h2 className="mt-8 font-heading text-2xl font-bold text-brand-navy sm:text-3xl lg:text-4xl">
            20+ Years of{" "}
            <em className="font-serif italic text-brand">Shaping the Future</em>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-slate-500">
            From infancy to independence — generations of K&apos;sirians,
            globally ready and rooted in tradition.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
