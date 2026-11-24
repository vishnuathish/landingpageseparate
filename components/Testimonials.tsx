"use client";

import Reveal from "./Reveal";
import Icon from "./Icon";

const testimonials = [
  {
    name: "Adithya R",
    role: "Student",
    quote:
      "The career guidance here is exceptional. K'sirs helped me understand my strengths and choose a path with clarity and confidence.",
  },
  {
    name: "Adhirathan Murugesan",
    role: "Student",
    quote:
      "The range of subjects on offer is remarkable — there is genuinely something for every kind of learner at K'sirs.",
  },
  {
    name: "Naghul Pranav M",
    role: "Student",
    quote:
      "Beyond academics, K'sirs builds real life skills. The focus on creativity and sports shaped who I am today.",
  },
  {
    name: "Navin Raghav G S",
    role: "Student",
    quote:
      "Teachers here are incredibly friendly and approachable. Learning never feels like a burden — it feels like discovery.",
  },
  {
    name: "Ravi Shankar",
    role: "Parent",
    quote:
      "The content-based learning my child experiences in Grade 4 is outstanding. Concepts are understood, not memorised.",
  },
];

const avatarColors = [
  "bg-brand",
  "bg-brand-orange",
  "bg-brand-green",
  "bg-brand-teal",
  "bg-brand-navy",
];

function Card({
  testimonial,
  colorIndex,
}: {
  testimonial: (typeof testimonials)[number];
  colorIndex: number;
}) {
  return (
    <figure className="card mx-3.5 flex w-[21rem] shrink-0 flex-col p-7 sm:w-[24rem]">
      <div className="flex gap-1 text-brand-orange">
        {Array.from({ length: 5 }).map((_, i) => (
          <Icon key={i} name="star" className="h-4 w-4" filled />
        ))}
      </div>
      <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-slate-600">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3.5 border-t border-slate-100 pt-5">
        <span
          className={`flex h-11 w-11 items-center justify-center rounded-full ${avatarColors[colorIndex]} font-heading text-sm font-bold text-white`}
        >
          {testimonial.name
            .split(" ")
            .slice(0, 2)
            .map((part) => part[0])
            .join("")}
        </span>
        <div>
          <p className="font-heading text-sm font-bold text-brand-navy">
            {testimonial.name}
          </p>
          <p className="text-xs uppercase tracking-wider text-brand-orange">
            {testimonial.role}
          </p>
        </div>
      </figcaption>
    </figure>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative overflow-hidden bg-white py-20 md:py-28">
      <div className="absolute left-1/2 top-0 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-brand/5 blur-3xl" />

      <div className="container-site relative px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="heading-kicker heading-kicker--center justify-center">
              Testimonials
            </span>
            <h2 className="head-h2">
              Voices of{" "}
              <em className="font-serif italic text-brand">K&apos;sirians</em>
            </h2>
          </Reveal>
        </div>
      </div>

      {/* Marquee of cards — pauses on hover */}
      <Reveal delay={0.15}>
        <div className="relative mt-14">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />
          <div className="marquee-track animate-marquee-fast items-stretch py-2">
            {[...testimonials, ...testimonials].map((testimonial, i) => (
              <Card
                key={`${testimonial.name}-${i}`}
                testimonial={testimonial}
                colorIndex={i % testimonials.length}
              />
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.25} className="mt-12 text-center">
        <a
          href="https://www.google.com/search?q=ksirs+international+school+coimbatore+reviews"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 font-heading text-sm font-bold uppercase tracking-wider text-brand transition-colors hover:text-brand-orange"
        >
          <Icon name="mapPin" className="h-4 w-4" />
          Pin Your Thoughts — Leave a Review
        </a>
      </Reveal>
    </section>
  );
}
