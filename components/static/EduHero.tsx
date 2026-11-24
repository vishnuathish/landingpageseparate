"use client";

import Image from "next/image";
import Reveal from "../Reveal";
import Icon from "../Icon";
import { Underlined, ArrowDoodle, SparkleDash } from "./doodles";

function Stars() {
  return (
    <span className="flex gap-0.5 text-brand-orange">
      {[...Array(5)].map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5">
          <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.9l-5.2 2.7 1-5.8L1.5 7.7l5.9-.9z" />
        </svg>
      ))}
    </span>
  );
}

// Light template hero: layered photo composition on the right, rich copy
// column with rating pill and mini info cards on the left.
export default function EduHero() {
  return (
    <section className="relative overflow-hidden bg-[#faf9f5] pt-28 lg:pt-32">
      {/* Background decoration */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <svg className="absolute left-8 top-28 h-24 w-24 opacity-40" viewBox="0 0 96 96">
          {[0, 1, 2, 3, 4].map((r) =>
            [0, 1, 2, 3, 4].map((c) => (
              <circle key={`${r}${c}`} cx={6 + c * 20} cy={6 + r * 20} r="2.5" fill="#2e3591" opacity="0.35" />
            )),
          )}
        </svg>
        <div className="absolute -right-40 top-10 h-[28rem] w-[28rem] rounded-full bg-brand-orange/10 blur-3xl" />
        <div className="absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-brand/[0.07] blur-3xl" />
      </div>

      <div className="container-site relative grid items-center gap-14 px-5 pb-16 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-12 lg:pb-20">
        {/* Copy */}
        <div className="relative">
          <Reveal>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-brand/10 bg-white px-4 py-2 shadow-sm">
              <Stars />
              <span className="font-heading text-xs font-semibold text-brand-navy">
                Trusted by K&apos;sirian families since 2007
              </span>
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1
              className="mt-6 font-heading font-bold leading-[1.12] tracking-tight text-brand-navy"
              style={{ fontSize: "clamp(2.4rem, 4.6vw, 4rem)" }}
            >
              Keep <Underlined>Curiosity</Underlined> Growing —
              <br />
              from Infancy to{" "}
              <em className="font-serif font-semibold italic text-brand">
                Independence
              </em>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-md text-base leading-relaxed text-slate-600 sm:text-lg">
              An ethnically rich habitat set amidst nature, where CISCE and
              Cambridge pathways meet values, pursuits and play.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <a href="/admissions" className="btn-primary">
                Apply Now
                <Icon name="arrowRight" className="h-4 w-4" />
              </a>
              <a
                href="/life"
                className="group inline-flex items-center gap-3 font-heading text-sm font-bold uppercase tracking-wider text-brand-navy transition-colors hover:text-brand"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-brand-navy/15 transition-colors group-hover:border-brand group-hover:bg-brand group-hover:text-white">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="ml-0.5 h-4 w-4">
                    <path d="M8 5.5v13l11-6.5z" />
                  </svg>
                </span>
                Explore Campus
              </a>
            </div>
          </Reveal>

          <ArrowDoodle className="absolute -right-4 top-40 hidden h-16 w-20 rotate-[25deg] xl:block" />
        </div>

        {/* Layered photo composition */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <Reveal direction="down" delay={0.1}>
            <div className="relative px-6 pb-8 pt-10">
              {/* Rotated accent block + main colour block */}
              <div className="absolute inset-x-10 bottom-0 top-20 -rotate-3 rounded-[2.5rem] bg-brand-orange/80" />
              <div className="absolute inset-x-6 bottom-3 top-14 rotate-2 rounded-[2.5rem] bg-brand" />
              <SparkleDash className="absolute left-0 top-0 h-12 w-12" />
              <SparkleDash className="absolute -right-1 bottom-16 h-9 w-9 rotate-[160deg] opacity-70" />

              {/* Photo */}
              <div className="relative mx-auto h-[25rem] overflow-hidden rounded-[2rem] shadow-card-hover sm:h-[29rem]">
                <Image
                  src="/images/pages/home-2.jpg"
                  alt="K'sirs learners"
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  className="object-cover"
                />
              </div>

              {/* Floating chips */}
              <div className="animate-float-slow absolute -left-2 top-24 rounded-2xl bg-white px-4 py-3 shadow-card-hover sm:left-0">
                <p className="flex items-center gap-2 font-heading text-xs font-bold text-brand-navy">
                  <span className="h-2.5 w-2.5 rounded-full bg-brand-green" />
                  12.5-Acre Green Habitat
                </p>
              </div>
              <div className="absolute -right-1 bottom-14 rounded-2xl bg-brand-orange px-5 py-4 text-white shadow-card-hover sm:right-2">
                <p className="font-heading text-xl font-extrabold leading-none">
                  ICSE | IGCSE
                </p>
                <p className="mt-1 text-[10px] uppercase tracking-widest text-white/85">
                  Dual Curricula
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
