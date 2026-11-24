"use client";

import Reveal from "./Reveal";
import Icon, { type IconName } from "./Icon";

const values: { icon: IconName; title: string; text: string; points: string[] }[] = [
  {
    icon: "heart",
    title: "Rooted in Tradition",
    text: "Indian values and culture, celebrated every single day.",
    points: ["Indian values at heart", "Ethnically rich campus", "Culture celebrated daily"],
  },
  {
    icon: "lightbulb",
    title: "Explore & Discover",
    text: "Concept-first learning that rewards curiosity and questions.",
    points: ["Question everything", "Concept-first learning", "Curiosity encouraged"],
  },
  {
    icon: "globe",
    title: "Globally Ready",
    text: "World-class pathways and exposure beyond borders.",
    points: ["CISCE & Cambridge", "International students", "World-class exposure"],
  },
  {
    icon: "sparkles",
    title: "Nature & Habitat",
    text: "A living campus where learning moves beyond walls.",
    points: ["Set amidst nature", "Flora, fauna & pets", "Learning beyond walls"],
  },
  {
    icon: "users",
    title: "A Desire to Serve",
    text: "Character before career — leadership with empathy.",
    points: ["Character before career", "Community service", "Leadership with empathy"],
  },
];

export default function Values() {
  return (
    <section id="values" className="section-padding bg-tint-blue relative overflow-hidden">
      <div className="container-site">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="heading-kicker heading-kicker--center justify-center">
              Our Core Values
            </span>
            <h2 className="head-h2">
              What Every{" "}
              <em className="font-serif italic text-brand">K&apos;sirian</em>{" "}
              Carries
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value, i) => (
            <Reveal key={value.title} delay={i * 0.08} className="h-full">
              <article className="group relative flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-8 shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:border-brand/20 hover:shadow-card-hover">
                <div className="flex items-start justify-between">
                  <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand/[0.07] text-brand transition-colors duration-500 group-hover:bg-brand group-hover:text-white">
                    <Icon name={value.icon} className="h-7 w-7" />
                  </span>
                  <span className="font-heading text-5xl font-extrabold leading-none text-slate-100 transition-colors duration-500 group-hover:text-brand/10">
                    0{i + 1}
                  </span>
                </div>

                <h3 className="mt-7 font-heading text-xl font-bold text-brand-navy">
                  {value.title}
                </h3>
                <span className="mt-3 block h-px w-10 bg-brand-orange transition-all duration-500 group-hover:w-16" />
                <p className="mt-4 text-[15px] leading-relaxed text-slate-600">
                  {value.text}
                </p>

                <ul className="mt-5 space-y-2 border-t border-slate-100 pt-5">
                  {value.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-center gap-2.5 text-[13.5px] font-medium text-slate-500"
                    >
                      <span className="flex h-4 w-4 items-center justify-center rounded-full bg-brand/10 text-brand">
                        <Icon name="check" className="h-2.5 w-2.5" />
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
