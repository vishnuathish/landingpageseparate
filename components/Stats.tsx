"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

// Reference-style stats band: big bare numbers, thin separators.
const stats = [
  { value: 20, suffix: "+", label: "Years of Excellence" },
  { value: 2, suffix: "", label: "World-Class Curricula" },
  { value: 100, suffix: "%", label: "Board Results" },
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

export default function Stats() {
  return (
    <section className="border-y border-slate-100 bg-white">
      <div className="container-site grid grid-cols-2 divide-slate-100 px-5 py-12 sm:px-8 lg:grid-cols-4 lg:divide-x lg:px-12">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="px-4 py-4 text-center lg:py-0"
          >
            <p className="font-heading text-5xl font-extrabold text-brand-navy">
              <Counter value={stat.value} suffix={stat.suffix} />
            </p>
            <p className="mt-2 text-sm text-slate-500">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
