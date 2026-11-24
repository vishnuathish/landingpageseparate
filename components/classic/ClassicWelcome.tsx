"use client";

import Image from "next/image";
import Reveal from "../Reveal";
import Icon from "../Icon";
import { Pill, Underlined, DotPattern } from "./deco";

const points = [
  "Concept-first learning",
  "Trained, caring educators",
  "Dual CISCE & Cambridge",
  "Learning beyond walls",
  "Values before marks",
  "Small, personal classrooms",
];

export default function ClassicWelcome() {
  return (
    <section className="relative overflow-hidden bg-tint-blue">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -right-32 top-1/4 h-80 w-80 rounded-full bg-brand-orange/10 blur-3xl" />
      </div>

      <div className="container-site relative grid items-center gap-14 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_1fr] lg:gap-20 lg:px-12 lg:py-24">
        {/* Layered photo composition */}
        <Reveal direction="down">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            {/* Orange circle accent */}
            <div className="absolute -left-4 -top-4 h-28 w-28 rounded-full bg-brand-orange/85" />
            <DotPattern
              className="absolute -bottom-5 left-10 h-16 w-16"
              color="#2e3591"
              rows={4}
              cols={4}
              opacity={0.3}
            />

            <div className="relative grid grid-cols-[1.05fr_0.95fr] items-end gap-4">
              <div className="relative h-64 overflow-hidden rounded-2xl shadow-card-hover sm:h-72">
                <Image
                  src="/images/pages/early-years-2.jpg"
                  alt="Learners at K'sirs"
                  fill
                  sizes="(max-width: 1024px) 50vw, 24vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-4">
                <div className="relative h-44 overflow-hidden rounded-2xl shadow-card-hover sm:h-52">
                  <Image
                    src="/images/pages/about-campus.jpg"
                    alt="The K'sirs campus"
                    fill
                    sizes="(max-width: 1024px) 50vw, 22vw"
                    className="object-cover"
                  />
                </div>
                {/* Experience badge */}
                <div className="rounded-2xl bg-brand-navy px-5 py-4 text-white shadow-card-hover">
                  <p className="font-heading text-2xl font-extrabold leading-none">
                    20<span className="text-brand-orange">+</span>
                  </p>
                  <p className="mt-1.5 text-[10px] uppercase tracking-widest text-white/70">
                    Years of Excellence
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Copy */}
        <div>
          <Reveal>
            <Pill>About K&apos;sirs</Pill>
            <h2 className="head-h2 mt-5">
              An Abode Where Every Child Can{" "}
              <Underlined color="#2e3591">Shine</Underlined>
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 leading-relaxed text-slate-600">
              K&apos;sirs is more than a school — it is a way of life. We
              facilitate learning rather than teaching, guiding children
              through rich opportunities, real challenges and amazing
              discoveries so they grow into responsible citizens with a desire
              to serve.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {points.map((p) => (
                <li key={p} className="flex items-center gap-2.5 text-sm font-medium text-slate-700">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-green/15 text-brand-green">
                    <Icon name="check" className="h-3 w-3" />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
            <a
              href="/about"
              className="mt-9 inline-flex items-center gap-2.5 rounded-md bg-brand px-7 py-4 font-heading text-xs font-bold uppercase tracking-wider text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-navy"
            >
              More About Us
              <Icon name="arrowRight" className="h-4 w-4" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
