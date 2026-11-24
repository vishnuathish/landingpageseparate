"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Reveal from "./Reveal";

// Animated milestone timeline: a center spine that draws itself as you
// scroll, with year cards alternating sides and sliding in toward it.
type Milestone = { year: string; text: string };

export default function Timeline({ milestones }: { milestones: Milestone[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 55%"],
  });
  const spine = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={ref} className="relative mt-14">
      {/* Spine — draws downward with the scroll */}
      <div className="absolute bottom-0 left-5 top-0 w-px bg-slate-200 lg:left-1/2" />
      <motion.div
        style={{ scaleY: spine }}
        className="absolute bottom-0 left-5 top-0 w-px origin-top bg-gradient-to-b from-brand via-brand-orange to-brand-orange lg:left-1/2"
      />

      <div className="space-y-10 lg:space-y-14">
        {milestones.map((m, i) => {
          const left = i % 2 === 0;
          return (
            <div
              key={m.year}
              className={`relative flex pl-14 lg:w-1/2 lg:pl-0 ${
                left
                  ? "lg:justify-end lg:pr-12"
                  : "lg:ml-auto lg:justify-start lg:pl-12"
              }`}
            >
              {/* Node on the spine */}
              <span
                className={`absolute left-5 top-8 z-10 flex h-4 w-4 -translate-x-1/2 items-center justify-center ${
                  left
                    ? "lg:left-auto lg:right-0 lg:translate-x-1/2"
                    : "lg:left-0 lg:-translate-x-1/2"
                }`}
              >
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-orange/40 [animation-duration:2.4s]" />
                <span className="relative h-3 w-3 rounded-full border-2 border-white bg-brand-orange shadow" />
              </span>

              <Reveal
                direction={left ? "right" : "left"}
                className="w-full max-w-md"
              >
                <article className={left ? "lg:text-right" : ""}>
                  <span className="font-heading text-5xl font-extrabold tracking-tight text-brand-orange sm:text-6xl">
                    {m.year}
                  </span>
                  <span
                    className={`mt-4 block h-px w-12 bg-brand-orange/60 ${
                      left ? "lg:ml-auto" : ""
                    }`}
                  />
                  <p className="mt-4 text-lg leading-relaxed text-slate-600">
                    {m.text}
                  </p>
                </article>
              </Reveal>
            </div>
          );
        })}
      </div>
    </div>
  );
}
