"use client";

// Thin playful marquee strip between hero and features.
const words = ["Explore", "Learn", "Lead", "Serve", "Create", "Grow"];

export default function EduMarquee() {
  return (
    <div className="overflow-hidden border-y border-brand-navy/10 bg-white py-4">
      <div className="marquee-track animate-marquee-fast items-center">
        {[0, 1].map((dup) =>
          words.map((word) => (
            <span
              key={`${dup}-${word}`}
              className="mx-5 flex shrink-0 items-center gap-10 whitespace-nowrap"
            >
              <span className="font-heading text-lg font-extrabold uppercase tracking-widest text-brand-navy">
                {word}
              </span>
              <svg viewBox="0 0 20 20" className="h-3.5 w-3.5 shrink-0 fill-brand-orange" aria-hidden>
                <path d="M10 0 L12 8 L20 10 L12 12 L10 20 L8 12 L0 10 L8 8 Z" />
              </svg>
            </span>
          )),
        )}
      </div>
    </div>
  );
}
