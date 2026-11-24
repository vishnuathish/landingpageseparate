"use client";

import Image from "next/image";
import Reveal from "../Reveal";
import Icon from "../Icon";

// Affiliations band + full-width closing CTA.
const affiliations = [
  { src: "/images/cisce.png", alt: "CISCE affiliation", label: "CISCE — Permanent Affiliation, 2017" },
  { src: "/images/cambridge.png", alt: "Cambridge International affiliation", label: "Cambridge International, since 2010" },
  { src: "/images/early-years.png", alt: "K'sirs Early Years", label: "K'sirs Early Years Programme" },
];

export default function ClassicCta() {
  return (
    <>
      {/* Affiliations */}
      <section className="border-y border-slate-100 bg-white">
        <div className="container-site flex flex-col items-center gap-8 px-5 py-12 sm:px-8 lg:flex-row lg:justify-between lg:px-12">
          <Reveal>
            <div className="max-w-xs text-center lg:text-left">
              <h3 className="font-heading text-xl font-bold text-brand-navy">
                Affiliated &amp; Recognised
              </h3>
              <p className="mt-1.5 text-sm text-slate-500">
                Two world-class boards, one green campus in Coimbatore.
              </p>
            </div>
          </Reveal>
          <div className="flex flex-wrap items-center justify-center gap-10 lg:gap-14">
            {affiliations.map((a, i) => (
              <Reveal key={a.alt} delay={i * 0.08}>
                <div className="group flex flex-col items-center gap-2.5" title={a.label}>
                  <Image
                    src={a.src}
                    alt={a.alt}
                    width={160}
                    height={56}
                    className="h-14 w-auto object-contain opacity-70 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
                  />
                  <span className="text-[10px] uppercase tracking-wider text-slate-400 transition-colors group-hover:text-slate-600">
                    {a.label}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="relative overflow-hidden bg-gradient-to-r from-brand-navy via-brand to-brand-navy">
        <div className="dot-grid absolute inset-0 opacity-15" />
        <div className="container-site relative flex flex-col items-center gap-8 px-5 py-16 text-center sm:px-8 lg:flex-row lg:justify-between lg:px-12 lg:text-left">
          <Reveal>
            <div>
              <h2 className="max-w-2xl font-heading text-3xl font-bold leading-[1.15] text-white sm:text-4xl">
                Begin the Journey from{" "}
                <em className="font-serif italic text-brand-orange">
                  Infancy to Independence
                </em>
              </h2>
              <p className="mt-3 max-w-xl text-white/80">
                Admissions open each November. Visit the habitat, meet our
                educators, and find your child&apos;s place to grow.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="flex shrink-0 flex-wrap items-center justify-center gap-4">
              <a href="/admissions" className="btn-primary">
                Apply Now
                <Icon name="arrowRight" className="h-4 w-4" />
              </a>
              <a
                href="tel:+919865820000"
                className="inline-flex items-center gap-3 font-heading text-sm font-bold uppercase tracking-wider text-white transition-colors hover:text-brand-orange"
              >
                <Icon name="phone" className="h-4 w-4" />
                +91 98658 20000
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
