"use client";

import Reveal from "../Reveal";
import Icon, { type IconName } from "../Icon";

// Slim indigo stats band.
const stats: { icon: IconName; value: string; label: string }[] = [
  { icon: "building", value: "12.5", label: "Acres of Green Campus" },
  { icon: "sparkles", value: "600+", label: "Native Trees" },
  { icon: "users", value: "8", label: "Student HUBs" },
  { icon: "trophy", value: "4", label: "Houses" },
  { icon: "star", value: "100%", label: "Board Results" },
];

export default function ClassicBand() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-brand to-brand-navy">
      <div className="dot-grid absolute inset-0 opacity-10" />
      <div className="container-site relative grid grid-cols-2 gap-y-8 px-5 py-12 sm:grid-cols-3 sm:px-8 lg:grid-cols-5 lg:px-12">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.06}>
            <div
              className={`flex items-center gap-3.5 lg:justify-center ${
                i > 0 ? "lg:border-l lg:border-white/10" : ""
              }`}
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/25 text-brand-orange">
                <Icon name={s.icon} className="h-5 w-5" />
              </span>
              <span>
                <p className="font-heading text-3xl font-extrabold leading-none text-white">
                  {s.value}
                </p>
                <p className="mt-1 text-[11px] uppercase tracking-wide text-white/70">
                  {s.label}
                </p>
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
