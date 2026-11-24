"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import Reveal from "../Reveal";

// Alt-template stats: a navy band with large counted numbers.
const stats = [
  { value: 20, suffix: "+", label: "Years of Excellence" },
  { value: 600, suffix: "+", label: "Native Trees on Campus" },
  { value: 185, suffix: "", label: "Bird Varieties" },
  { value: 50, suffix: "+", label: "Pursuits & Activities" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1600;
    const start = performance.now();
    let raf: number;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {display}
      <span className="text-brand-orange">{suffix}</span>
    </span>
  );
}

export default function AltStats() {
  return (
    <section className="relative overflow-hidden rounded-t-[3rem] bg-brand-navy">
      <div className="dot-grid absolute inset-0 opacity-20" />
      <div className="container-site relative grid grid-cols-2 gap-y-12 px-5 py-20 sm:px-8 lg:grid-cols-4 lg:px-12 lg:py-24">
        {stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.08}>
            <div className="border-t-2 border-white/15 pr-6 pt-6">
              <p className="font-heading text-5xl font-extrabold text-white sm:text-6xl">
                <Counter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-sm uppercase tracking-wider text-white/60">
                {stat.label}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
