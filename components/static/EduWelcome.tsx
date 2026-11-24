"use client";

import Image from "next/image";
import Reveal from "../Reveal";
import Icon from "../Icon";
import { Underlined, SparkleDash } from "./doodles";

// Welcome section mirroring the real homepage's opening statement.
export default function EduWelcome() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="container-site grid items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 lg:px-12 lg:py-28">
        {/* Photo pair */}
        <Reveal direction="down">
          <div className="relative pr-8 pt-8">
            <SparkleDash className="absolute right-0 top-0 h-10 w-10" />
            <div className="relative h-[22rem] overflow-hidden rounded-[2rem] shadow-card-hover sm:h-[26rem]">
              <Image
                src="/images/abode.jpg"
                alt="The K'sirs abode — a lush green campus"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 right-0 hidden w-48 overflow-hidden rounded-2xl border-4 border-white shadow-card-hover sm:block">
              <Image
                src="/images/pages/home-1.jpg"
                alt="Learning at K'sirs"
                width={320}
                height={220}
                className="h-32 w-full object-cover"
              />
            </div>
          </div>
        </Reveal>

        {/* Statement */}
        <div>
          <Reveal>
            <span className="heading-kicker">Welcome to K&apos;sirs</span>
            <h2 className="head-h2">
              More Than a School —{" "}
              <Underlined color="#2e3591">a Way of Life</Underlined>
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              K&apos;sirs guides children as they travel through a world of
              learning — rich opportunities, real challenges and amazing
              discoveries at every turn.
            </p>
            <p className="mt-4 leading-relaxed text-slate-600">
              Set amidst a lush green habitat in Chinnavedampatti, Coimbatore,
              the environment moulds K&apos;sirians into responsible citizens
              — with selfless love, strong values and a desire to serve the
              world around them.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
              {["Our Abode", "Infrastructure", "Our Pursuits", "Sports Arena", "Galleria"].map((f) => (
                <span key={f} className="flex items-center gap-2 font-heading text-sm font-bold text-brand-navy">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-green/15 text-brand-green">
                    <Icon name="check" className="h-3 w-3" />
                  </span>
                  {f}
                </span>
              ))}
            </div>
            <a href="/about" className="link-cta mt-9">
              Know More About Us
              <span className="link-cta-arrow">
                <Icon name="arrowRight" className="h-4 w-4" />
              </span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
