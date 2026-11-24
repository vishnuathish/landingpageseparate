"use client";

import Image from "next/image";
import Reveal from "../Reveal";
import Icon from "../Icon";
import { DotPattern } from "./deco";

const announcements = [
  { day: "20", month: "Nov", title: "Admissions open for 2027–28 — CISCE & Cambridge", href: "/admissions" },
  { day: "15", month: "Dec", title: "Annual Sports Meet at the Arena", href: "/news" },
  { day: "10", month: "Jan", title: "K'sirs MUN — delegate registrations begin", href: "/news" },
];

function Stars() {
  return (
    <div className="flex gap-0.5 text-brand-orange" aria-label="5 star rating">
      {[...Array(5)].map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
          <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.9l-5.2 2.7 1-5.8L1.5 7.7l5.9-.9z" />
        </svg>
      ))}
    </div>
  );
}

export default function ClassicTriple() {
  return (
    <section className="bg-white">
      <div className="container-site grid gap-6 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:px-12 lg:py-20">
        {/* Testimonial — widest */}
        <Reveal className="h-full lg:col-span-5">
          <figure className="relative flex h-full flex-col overflow-hidden rounded-2xl bg-tint-blue p-8 sm:p-9">
            <span
              aria-hidden
              className="pointer-events-none absolute -right-2 -top-6 font-serif text-[9rem] leading-none text-brand/[0.08]"
            >
              &rdquo;
            </span>
            <div className="relative">
              <span className="font-heading text-[11px] font-bold uppercase tracking-[0.18em] text-brand">
                What Parents Say
              </span>
              <span className="mt-2.5 block h-0.5 w-9 rounded bg-brand-orange" />
              <Stars />
            </div>
            <blockquote className="relative mt-5 flex-1 text-[15px] leading-relaxed text-slate-700 sm:text-base">
              K&apos;sirs has been a wonderful experience for my child. The
              content-based learning in Grade 4 is outstanding — concepts are
              understood, not memorised, and the teachers genuinely care.
            </blockquote>
            <figcaption className="relative mt-7 flex items-center gap-4 border-t border-brand-navy/10 pt-6">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand font-heading text-base font-extrabold text-white">
                R
              </span>
              <span>
                <p className="font-heading text-sm font-bold text-brand-navy">
                  Ravi Shankar
                </p>
                <p className="text-xs text-slate-500">Parent, Grade 4</p>
              </span>
            </figcaption>
          </figure>
        </Reveal>

        {/* Announcements — timeline */}
        <Reveal delay={0.1} className="h-full lg:col-span-4">
          <div className="flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-8 shadow-card sm:p-9">
            <span className="font-heading text-[11px] font-bold uppercase tracking-[0.18em] text-brand">
              Latest Announcements
            </span>
            <span className="mt-2.5 block h-0.5 w-9 rounded bg-brand-orange" />

            <ul className="relative mt-7 flex-1">
              {/* Timeline spine */}
              <span className="absolute bottom-6 left-6 top-2 w-px bg-slate-200" />
              {announcements.map((a) => (
                <li key={a.title} className="relative flex gap-5 pb-7 last:pb-0">
                  <span className="relative z-10 flex h-12 w-12 shrink-0 flex-col items-center justify-center rounded-xl bg-brand text-white ring-4 ring-white">
                    <span className="font-heading text-base font-extrabold leading-none">
                      {a.day}
                    </span>
                    <span className="text-[9px] uppercase tracking-wider text-white/75">
                      {a.month}
                    </span>
                  </span>
                  <span className="pt-0.5">
                    <p className="text-sm font-medium leading-snug text-slate-700">
                      {a.title}
                    </p>
                    <a
                      href={a.href}
                      className="mt-1.5 inline-flex items-center gap-1.5 font-heading text-[10px] font-bold uppercase tracking-widest text-brand-orange transition-colors hover:text-brand"
                    >
                      Know More
                      <Icon name="arrowRight" className="h-3 w-3" />
                    </a>
                  </span>
                </li>
              ))}
            </ul>

            <a
              href="/news"
              className="mt-2 inline-flex items-center gap-2 border-t border-slate-100 pt-5 font-heading text-[11px] font-bold uppercase tracking-widest text-brand transition-colors hover:text-brand-orange"
            >
              All News &amp; Events
              <Icon name="arrowRight" className="h-3.5 w-3.5" />
            </a>
          </div>
        </Reveal>

        {/* Campus tour — photo card */}
        <Reveal delay={0.2} className="h-full lg:col-span-3">
          <div className="group relative flex h-full min-h-[22rem] flex-col justify-end overflow-hidden rounded-2xl">
            <Image
              src="/images/pages/about-campus.jpg"
              alt="The K'sirs campus"
              fill
              sizes="(max-width: 1024px) 100vw, 25vw"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/85 to-brand-navy/30" />
            <DotPattern className="absolute right-4 top-4 h-16 w-16" opacity={0.18} />

            <div className="relative p-8">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15 text-brand-orange backdrop-blur">
                <Icon name="building" className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-heading text-xl font-bold text-white">
                Schedule a Campus Tour
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/80">
                Walk the 12.5-acre habitat and meet our educators in person.
              </p>
              <a
                href="/contact"
                className="mt-6 inline-flex w-fit items-center gap-2 rounded-md bg-brand-orange px-5 py-3 font-heading text-xs font-bold uppercase tracking-wider text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-brand"
              >
                Book Your Tour
                <Icon name="arrowRight" className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
