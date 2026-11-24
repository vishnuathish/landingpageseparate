"use client";

import Image from "next/image";
import Reveal from "../Reveal";
import Icon from "../Icon";
import { Pill, Underlined, DotPattern, Confetti, ArcLines } from "./deco";

// Hero: deep brand panel with dotted decoration, copy on the left and a
// photo sitting on a circular backdrop with floating stat cards.
export default function ClassicHero() {
  return (
    <section className="relative overflow-hidden bg-brand">
      {/* Decoration */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <DotPattern className="absolute left-6 top-10 h-24 w-24" opacity={0.22} />
        <DotPattern className="absolute bottom-10 left-16 h-20 w-20" opacity={0.14} />
        <Confetti className="absolute right-[6%] top-12 h-24 w-20" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-white/[0.04] blur-2xl" />
      </div>

      <div className="container-site relative grid items-center gap-12 px-5 pb-16 pt-14 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-12 lg:pb-24 lg:pt-20">
        {/* Copy */}
        <div>
          <Reveal>
            <Pill light>Where Young Minds Grow</Pill>
            <h1
              className="mt-6 font-heading font-extrabold leading-[1.1] tracking-tight text-white"
              style={{ fontSize: "clamp(2.4rem, 4.6vw, 4rem)" }}
            >
              Explore, Learn and Grow
              <br />
              Smarter at{" "}
              <Underlined color="#f57a3d">K&apos;sirs</Underlined>
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-7 max-w-lg leading-relaxed text-white/80 sm:text-lg">
              A 12.5-acre habitat set amidst nature, where CISCE and Cambridge
              pathways meet values, pursuits and play — carrying every child
              from infancy to independence.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a href="/admissions" className="btn-primary !px-7 !py-4 !text-xs">
                Admissions Open 2027–28
                <Icon name="arrowRight" className="h-4 w-4" />
              </a>
              <a
                href="/contact"
                className="rounded-md border border-white/40 px-7 py-[0.95rem] font-heading text-xs font-bold uppercase tracking-wider text-white transition-all duration-300 hover:bg-white hover:text-brand"
              >
                Take a Campus Tour
              </a>
            </div>
          </Reveal>
        </div>

        {/* Photo on a circular backdrop */}
        <Reveal direction="down" delay={0.15}>
          <div className="relative mx-auto aspect-square w-full max-w-[26rem] lg:max-w-[30rem]">
            {/* Backdrop circle + arcs */}
            <div className="absolute inset-[6%] rounded-full bg-brand-navy/40" />
            <ArcLines className="absolute right-[4%] top-[8%] h-32 w-32 opacity-80" />
            {/* Photo */}
            <div className="absolute inset-[9%] overflow-hidden rounded-full ring-8 ring-white/10">
              <Image
                src="/images/pages/home-2.jpg"
                alt="K'sirs learners"
                fill
                priority
                sizes="(max-width: 1024px) 80vw, 30rem"
                className="object-cover"
              />
            </div>

            {/* Floating stat cards */}
            <div className="animate-float-slow absolute -left-3 top-[28%] flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-card-hover sm:-left-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-orange/10 text-brand-orange">
                <Icon name="trophy" className="h-5 w-5" />
              </span>
              <span>
                <p className="font-heading text-lg font-extrabold leading-none text-brand-navy">
                  20<span className="text-brand-orange">+</span>
                </p>
                <p className="mt-0.5 text-[10px] uppercase tracking-wide text-slate-500">
                  Years of Excellence
                </p>
              </span>
            </div>

            <div className="animate-float-slower absolute -right-2 bottom-[22%] flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-card-hover sm:-right-5">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-green/10 text-brand-green">
                <Icon name="sparkles" className="h-5 w-5" />
              </span>
              <span>
                <p className="font-heading text-lg font-extrabold leading-none text-brand-navy">
                  600<span className="text-brand-green">+</span>
                </p>
                <p className="mt-0.5 text-[10px] uppercase tracking-wide text-slate-500">
                  Native Trees
                </p>
              </span>
            </div>

            <div className="absolute -bottom-2 left-[18%] rounded-xl bg-brand-navy px-5 py-3 text-white shadow-card-hover">
              <p className="font-heading text-sm font-extrabold leading-none">
                ICSE | IGCSE
              </p>
              <p className="mt-1 text-[9px] uppercase tracking-widest text-white/70">
                Dual Curricula
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
