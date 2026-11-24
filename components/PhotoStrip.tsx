"use client";

import Image from "next/image";

// Continuous scrolling ribbon of campus photographs.
const photos = [
  "/images/abode.jpg",
  "/images/pursuits.jpg",
  "/images/sports.jpg",
  "/images/infrastructure.jpg",
  "/images/galleria.jpg",
  "/images/hero.jpg",
];

const words = ["Explore", "Learn", "Lead", "Serve"];

export default function PhotoStrip() {
  return (
    <section className="overflow-hidden border-y border-slate-100 bg-white py-10">
      {/* Kinetic outlined text — a second text style: stroke-only display type */}
      <div
        aria-hidden
        className="marquee-track animate-marquee-fast mb-8 items-baseline"
      >
        {[0, 1].map((dup) =>
          words.map((word, i) => (
            <span
              key={`${dup}-${word}`}
              className="mx-6 flex shrink-0 items-baseline gap-12 whitespace-nowrap"
            >
              <span
                className="font-heading font-extrabold uppercase leading-none tracking-tight text-brand-navy"
                style={{ fontSize: "clamp(3rem, 7vw, 6rem)" }}
              >
                {word}
              </span>
              <span className="h-2.5 w-2.5 shrink-0 self-center rounded-full bg-brand-orange" />
            </span>
          )),
        )}
      </div>

      <div className="marquee-track animate-marquee">
        {[...photos, ...photos].map((src, i) => (
          <div
            key={`${src}-${i}`}
            className="relative mx-3 h-44 w-72 shrink-0 overflow-hidden rounded-lg"
          >
            <Image
              src={src}
              alt="Life at K'sirs International School"
              fill
              sizes="288px"
              className="object-cover transition-transform duration-700 hover:scale-110"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
