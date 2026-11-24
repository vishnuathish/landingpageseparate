"use client";

import Image from "next/image";
import Reveal from "../Reveal";

// Static-variant message: plain two-column layout, no pinning or
// scroll-scrubbed word reveal.
export default function MessageStatic() {
  return (
    <section className="bg-tint-blue section-padding relative overflow-hidden">
      <div className="container-site grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <Reveal>
            <span className="heading-kicker">Message from K&apos;sirs</span>
            <h2 className="head-h2">
              Every Child Deserves a Space to{" "}
              <em className="font-serif italic text-brand">
                Become Themselves
              </em>
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <blockquote className="mt-7 border-l-2 border-brand-orange pl-6">
              <p className="text-lg leading-relaxed text-slate-600">
                &ldquo;At K&apos;sirs, education is not a race — it is a
                journey from infancy to independence. We built this school as
                an ethnically rich space set in nature, where children explore
                and learn at every turn, grow with values, and leave with a
                desire to serve the world around them.&rdquo;
              </p>
            </blockquote>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-7 flex items-center gap-4">
              <span className="h-px w-10 bg-brand-orange" />
              <div>
                <p className="font-heading text-base font-bold text-brand-navy">
                  The K&apos;sirs Leadership
                </p>
                <p className="text-sm text-slate-500">
                  K&apos;sirs International School, Coimbatore
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal direction="down" delay={0.15}>
          <div className="relative">
            <div className="absolute -left-4 -top-4 h-full w-full rounded-lg border-2 border-brand/15" />
            <div className="relative overflow-hidden rounded-lg shadow-card-hover">
              <Image
                src="/images/infrastructure.jpg"
                alt="K'sirs International School campus"
                width={800}
                height={600}
                className="h-[26rem] w-full object-cover"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
