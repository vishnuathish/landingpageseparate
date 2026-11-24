"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Reveal from "../Reveal";
import Icon from "../Icon";

// Alt-template hero: light split-screen — copy on the left, layered
// photos on the right. No slideshow, no pinning.
const stats = [
  { value: "20+", label: "Years of Excellence" },
  { value: "2", label: "World-Class Boards" },
  { value: "100%", label: "Board Results" },
];

export default function AltHero() {
  return (
    <section className="relative overflow-hidden bg-tint-orange pt-28 lg:pt-32">
      {/* Soft background blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-brand/[0.06] blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-brand-orange/[0.1] blur-3xl" />
        <div className="dot-grid absolute inset-0 opacity-[0.07] invert" />
      </div>

      <div className="container-site relative grid items-center gap-14 px-5 pb-16 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-12 lg:pb-24">
        {/* Copy */}
        <div>
          <Reveal>
            <span className="heading-kicker">
              K&apos;sirs International School, Coimbatore
            </span>
            <h1 className="font-heading font-bold leading-[1.06] tracking-tight text-brand-navy"
              style={{ fontSize: "clamp(2.5rem, 4.8vw, 4.3rem)" }}
            >
              Where Children Grow from{" "}
              <em className="font-serif font-semibold italic text-brand">
                Infancy to Independence
              </em>
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
              An ethnically rich habitat set amidst nature — CISCE and
              Cambridge pathways, world-class pursuits, and values that last a
              lifetime.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-9 flex flex-wrap items-center gap-5">
              <a href="/admissions" className="btn-primary">
                Apply Now
                <Icon name="arrowRight" className="h-4 w-4" />
              </a>
              <a href="/life" className="btn-dark">
                Explore Campus
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.28}>
            <div className="mt-12 flex gap-10 border-t border-brand-navy/10 pt-7">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="font-heading text-3xl font-extrabold text-brand-navy sm:text-4xl">
                    {s.value}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-slate-500">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Layered photos */}
        <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
          <Reveal direction="down" delay={0.1}>
            <div className="relative h-[26rem] overflow-hidden rounded-[2rem] shadow-card-hover sm:h-[32rem]">
              <Image
                src="/images/hero.jpg"
                alt="Learners at K'sirs International School"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 48vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          {/* Floating small photo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="animate-float-slow absolute -left-6 top-10 hidden w-44 overflow-hidden rounded-2xl border-4 border-white shadow-card-hover sm:block lg:-left-10"
          >
            <Image
              src="/images/pursuits.jpg"
              alt="Pursuits at K'sirs"
              width={300}
              height={200}
              className="h-32 w-full object-cover"
            />
          </motion.div>

          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
            className="absolute -bottom-6 left-6 rounded-2xl bg-brand px-6 py-5 text-white shadow-card-hover sm:left-10"
          >
            <p className="font-heading text-2xl font-extrabold">ICSE | IGCSE</p>
            <p className="mt-0.5 text-xs uppercase tracking-wider text-white/80">
              Dual International Curricula
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
