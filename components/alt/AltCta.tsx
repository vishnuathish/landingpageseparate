"use client";

import Reveal from "../Reveal";
import Icon from "../Icon";

// Alt-template closing CTA: bold orange band, centered.
export default function AltCta() {
  return (
    <section className="relative overflow-hidden bg-brand-orange">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-2xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-brand-navy/15 blur-2xl" />
      </div>
      <div className="container-site relative px-5 py-20 text-center sm:px-8 lg:px-12 lg:py-28">
        <Reveal>
          <h2
            className="mx-auto max-w-3xl font-heading font-bold leading-[1.1] text-white"
            style={{ fontSize: "clamp(2rem, 4.2vw, 3.4rem)" }}
          >
            Ready to Begin the{" "}
            <em className="font-serif font-semibold italic">Journey</em>?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-white/90">
            Admissions open each November — visit the habitat, meet our
            educators, and find your child&apos;s pathway.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
            <a
              href="/admissions"
              className="inline-flex items-center gap-2.5 rounded-md bg-white px-9 py-4 font-heading text-sm font-bold uppercase tracking-wider text-brand transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-navy hover:text-white"
            >
              Apply Now
              <Icon name="arrowRight" className="h-4 w-4" />
            </a>
            <a
              href="tel:+919865820000"
              className="inline-flex items-center gap-3 font-heading text-sm font-bold uppercase tracking-wider text-white transition-colors hover:text-brand-navy"
            >
              <Icon name="phone" className="h-4 w-4" />
              +91 98658 20000
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
