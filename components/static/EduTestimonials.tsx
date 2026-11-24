"use client";

import Reveal from "../Reveal";
import { Underlined, CircleScribble } from "./doodles";

// Testimonial cards: avatar + name + role header row, stars, then quote.
const testimonials = [
  {
    name: "Ravi Shankar",
    role: "Parent, Grade 4",
    accent: "#2e3591",
    quote:
      "The content-based learning my child experiences in Grade 4 is outstanding. Concepts are understood, not memorised.",
  },
  {
    name: "Adithya R",
    role: "Student",
    accent: "#f57a3d",
    quote:
      "The career guidance here is exceptional. K'sirs helped me understand my strengths and choose a path with clarity and confidence.",
  },
  {
    name: "Naghul Pranav M",
    role: "Student",
    accent: "#2bb061",
    quote:
      "Beyond academics, K'sirs builds real life skills. The focus on creativity and sports shaped who I am today.",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5 text-brand-orange" aria-label="5 star rating">
      {[...Array(5)].map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5">
          <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.9l-5.2 2.7 1-5.8L1.5 7.7l5.9-.9z" />
        </svg>
      ))}
    </div>
  );
}

export default function EduTestimonials() {
  return (
    <section className="relative overflow-hidden bg-[#faf9f5]">
      {/* Background patterns */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {/* Giant ghost quote mark */}
        <span className="absolute -top-8 left-4 font-serif text-[15rem] leading-none text-brand/[0.06] sm:left-10">
          &ldquo;
        </span>
        {/* Dotted grid — top right */}
        <svg className="absolute right-[12%] top-14 h-24 w-24 opacity-40" viewBox="0 0 96 96">
          {[0, 1, 2, 3, 4].map((r) =>
            [0, 1, 2, 3, 4].map((c) => (
              <circle
                key={`${r}${c}`}
                cx={6 + c * 20}
                cy={6 + r * 20}
                r="2.5"
                fill={(r + c) % 2 === 0 ? "#2e3591" : "#f57a3d"}
                opacity="0.45"
              />
            )),
          )}
        </svg>
        {/* Squiggle — bottom left */}
        <svg
          className="animate-float-slower absolute bottom-16 left-[6%] h-10 w-28 opacity-50"
          viewBox="0 0 140 60"
          fill="none"
          strokeLinecap="round"
        >
          <path d="M6 44 Q 24 10 42 32 T 78 32 T 114 28" stroke="#00d8d8" strokeWidth="4.5" />
        </svg>
        {/* Sparkle — bottom right */}
        <svg
          className="animate-spin-slow absolute bottom-20 right-[8%] h-8 w-8 opacity-60"
          viewBox="0 0 60 60"
          fill="#f57a3d"
        >
          <path d="M30 2 L36 24 L58 30 L36 36 L30 58 L24 36 L2 30 L24 24 Z" />
        </svg>
        {/* Soft colour blobs */}
        <div className="absolute -left-32 top-1/3 h-80 w-80 rounded-full bg-brand/[0.05] blur-3xl" />
        <div className="absolute -right-28 bottom-0 h-72 w-72 rounded-full bg-brand-orange/[0.08] blur-3xl" />
      </div>
      <CircleScribble className="absolute right-10 top-16 hidden h-14 w-14 opacity-50 lg:block" />

      <div className="container-site relative px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="grid items-end gap-8 lg:grid-cols-2">
          <Reveal>
            <span className="heading-kicker">Voices of K&apos;sirians</span>
            <h2 className="head-h2">
              What Our Lovely <Underlined>Families Say</Underlined>
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="max-w-md leading-relaxed text-slate-600 lg:justify-self-end">
              Parents and students share what growing up in the K&apos;sirs
              habitat feels like — in their own words.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1} className="h-full">
              <figure className="flex h-full flex-col rounded-[1.75rem] bg-[#f1f0ec] p-8 transition-all duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-card-hover">
                {/* Header: avatar + name + role */}
                <figcaption className="flex items-center gap-4">
                  <span
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white font-heading text-lg font-extrabold shadow-sm"
                    style={{ color: t.accent }}
                  >
                    {t.name.charAt(0)}
                  </span>
                  <span>
                    <p className="font-heading text-base font-bold text-brand-navy">
                      {t.name}
                    </p>
                    <p className="mt-0.5 text-xs text-slate-500">{t.role}</p>
                    <div className="mt-1.5">
                      <Stars />
                    </div>
                  </span>
                </figcaption>

                <span className="my-6 block h-px w-full bg-brand-navy/10" />

                <blockquote className="flex-1 text-[15px] leading-relaxed text-slate-600">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
