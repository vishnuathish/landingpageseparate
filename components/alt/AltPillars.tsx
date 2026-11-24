"use client";

import Reveal from "../Reveal";
import Icon, { type IconName } from "../Icon";

// Alt-template statement + three open pillars.
const pillars: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "globe",
    title: "Globally Ready",
    text: "CISCE and Cambridge pathways with international exposure and world-class standards.",
  },
  {
    icon: "heart",
    title: "Rooted in Tradition",
    text: "Indian values, culture and a desire to serve — carried into everything we do.",
  },
  {
    icon: "sparkles",
    title: "Set in Nature",
    text: "A 12.5-acre living habitat of trees, birds and gardens where learning breathes.",
  },
];

export default function AltPillars() {
  return (
    <section className="bg-white">
      <div className="container-site px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <Reveal>
          <p className="mx-auto max-w-3xl text-center font-heading text-2xl font-medium leading-snug text-brand-navy sm:text-3xl lg:text-4xl">
            Education is not a race — it is a{" "}
            <em className="font-serif italic text-brand">journey</em>. We
            facilitate learning rather than teaching, for{" "}
            <em className="font-serif italic text-brand">
              life and living
            </em>
            .
          </p>
        </Reveal>

        <div className="mt-16 grid gap-12 text-center md:grid-cols-3 md:gap-8">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <div className="group border-t-2 border-slate-100 pt-8 transition-colors duration-500 hover:border-brand-orange">
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand/[0.07] text-brand transition-colors duration-500 group-hover:bg-brand group-hover:text-white">
                  <Icon name={p.icon} className="h-7 w-7" />
                </span>
                <h3 className="mt-5 font-heading text-xl font-bold text-brand-navy">
                  {p.title}
                </h3>
                <p className="mx-auto mt-3 max-w-xs text-[15px] leading-relaxed text-slate-600">
                  {p.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
