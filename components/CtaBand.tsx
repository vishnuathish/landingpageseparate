"use client";

import Reveal from "./Reveal";
import Icon from "./Icon";

// Closing band for inner pages (reference pattern: numbered steps, a
// closing line, and one primary CTA).
const defaultSteps = [
  "Enquire or call us — we'll walk you through curricula and campus life.",
  "Visit the habitat for a guided tour and meet our educators.",
  "Apply and complete the interaction — welcome to K'sirs.",
];

type Props = { steps?: string[]; href?: string };

export default function CtaBand({ steps = defaultSteps, href = "/admissions" }: Props) {
  return (
    <section className="relative -mt-8 overflow-hidden rounded-t-[3rem] bg-brand-navy">
      <div className="dot-grid absolute inset-0 opacity-25" />
      <div className="container-site relative px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <Reveal>
          <span className="heading-kicker heading-kicker--light">
            Getting Started
          </span>
          <h2 className="max-w-2xl font-heading text-3xl font-bold leading-[1.12] text-white sm:text-4xl">
            Begin the Journey from{" "}
            <em className="font-serif italic text-brand-orange">
              Infancy to Independence
            </em>
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
          {steps.map((step, i) => (
            <Reveal key={step} delay={0.1 + i * 0.1} className="h-full">
              <div className="h-full border-t-2 border-white/15 pt-6 transition-colors duration-500 hover:border-brand-orange">
                <span className="font-heading text-5xl font-extrabold text-white/15">
                  0{i + 1}
                </span>
                <p className="mt-4 leading-relaxed text-white/85">{step}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="mt-12 flex flex-wrap items-center gap-5">
            <a href={href} className="btn-primary">
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
  );
}
