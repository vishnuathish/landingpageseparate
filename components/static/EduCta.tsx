"use client";

import Image from "next/image";
import Reveal from "../Reveal";
import Icon from "../Icon";
import { SparkleDash } from "./doodles";

// Closing CTA: rounded indigo panel with a slant-edged photo on the left
// and an arrow tile in the corner.
export default function EduCta() {
  return (
    <section className="bg-white">
      <div className="container-site px-5 pb-24 pt-6 sm:px-8 lg:px-12">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-brand">
            <div className="dot-grid absolute inset-0 opacity-15" />

            {/* Corner arrow tile */}
            <a
              href="/admissions"
              aria-label="Go to admissions"
              className="group absolute right-5 top-5 z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-brand transition-all duration-300 hover:bg-brand-orange hover:text-white sm:right-7 sm:top-7"
            >
              <Icon
                name="arrowRight"
                className="h-6 w-6 -rotate-45 transition-transform duration-300 group-hover:rotate-0"
              />
            </a>
            <SparkleDash className="absolute bottom-8 right-10 hidden h-11 w-11 [&_path]:stroke-brand-orange lg:block" />

            <div className="relative grid items-stretch lg:grid-cols-[0.85fr_1.15fr]">
              {/* Slant-edged photo */}
              <div className="relative hidden min-h-[20rem] lg:block">
                <div
                  className="absolute inset-0"
                  style={{ clipPath: "polygon(0 0, 100% 0, 72% 100%, 0 100%)" }}
                >
                  <Image
                    src="/images/pages/early-years-3.jpg"
                    alt="A K'sirs learner"
                    fill
                    sizes="40vw"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Copy */}
              <div className="p-9 sm:p-12 lg:py-16 lg:pl-0 lg:pr-24">
                <span className="heading-kicker heading-kicker--light !text-brand-orange">
                  Get in Touch
                </span>
                <h2 className="max-w-xl font-heading text-3xl font-bold leading-[1.12] text-white sm:text-4xl lg:text-[2.6rem]">
                  Join the K&apos;sirs Family of Curious, Courageous Learners
                </h2>
                <p className="mt-4 max-w-lg leading-relaxed text-white/80">
                  Admissions open each November for the CISCE and Cambridge
                  pathways. Visit the habitat, meet our educators, and find
                  your child&apos;s place to grow.
                </p>
                <div className="mt-9 flex flex-wrap items-center gap-5">
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
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
