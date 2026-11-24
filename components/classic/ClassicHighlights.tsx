"use client";

import Reveal from "../Reveal";
import Icon, { type IconName } from "../Icon";
import { Pill, Underlined, SquiggleDivider } from "./deco";

// Pastel icon cards — what makes K'sirs different.
const items: { icon: IconName; label: string; bg: string; fg: string }[] = [
  { icon: "heart", label: "Holistic Education", bg: "#fdf0e7", fg: "#f57a3d" },
  { icon: "academicCap", label: "Experienced Educators", bg: "#eef1fd", fg: "#2e3591" },
  { icon: "globe", label: "Global Pathways", bg: "#e9f7ef", fg: "#2bb061" },
  { icon: "users", label: "Safe & Nurturing", bg: "#e6fafa", fg: "#0bb5b5" },
  { icon: "sparkles", label: "Green Habitat", bg: "#e9f7ef", fg: "#2bb061" },
  { icon: "trophy", label: "Sports & Fitness", bg: "#fdf0e7", fg: "#f57a3d" },
  { icon: "bookOpen", label: "Arts & Pursuits", bg: "#fdeef4", fg: "#d6487e" },
  { icon: "star", label: "Values & Service", bg: "#eef1fd", fg: "#2e3591" },
];

export default function ClassicHighlights() {
  return (
    <section className="bg-white">
      <div className="container-site px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <Pill>Why K&apos;sirs</Pill>
            <h2 className="head-h2 mt-5">
              An Education That{" "}
              <Underlined>Shapes the Whole Child</Underlined>
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
          {items.map((item, i) => (
            <Reveal key={item.label} delay={(i % 4) * 0.07} className="h-full">
              <div
                style={{ backgroundColor: item.bg }}
                className="group flex h-full flex-col items-center gap-4 rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover sm:flex-row sm:text-left"
              >
                <span
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm transition-transform duration-300 group-hover:scale-110"
                  style={{ color: item.fg }}
                >
                  <Icon name={item.icon} className="h-7 w-7" />
                </span>
                <span className="font-heading text-sm font-bold leading-snug text-brand-navy sm:text-[15px]">
                  {item.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        <SquiggleDivider className="mx-auto mt-16 h-12 w-full max-w-xl" />
      </div>
    </section>
  );
}
