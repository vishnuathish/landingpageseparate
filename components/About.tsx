"use client";

import Image from "next/image";
import Parallax from "./Parallax";
import Reveal from "./Reveal";
import Icon from "./Icon";

export default function About() {
  return (
    <section id="about" className="section-padding relative overflow-hidden bg-white">
      <div className="container-site">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Image drops in from the top; the text column rises from below */}
          <Reveal direction="down">
            <div className="relative">
              <div className="relative h-[26rem] overflow-hidden rounded-lg shadow-card-hover">
                <Parallax speed={0.14}>
                  <Image
                    src="/images/abode.jpg"
                    alt="K'sirs campus — our abode"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </Parallax>
              </div>
              <div className="absolute -bottom-6 -right-4 rounded-lg bg-brand-orange px-6 py-5 text-white shadow-lg sm:-right-8">
                <p className="font-heading text-3xl font-extrabold">ICSE | IGCSE</p>
                <p className="text-xs uppercase tracking-wider text-white/85">
                  Dual International Curricula
                </p>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <span className="heading-kicker">About K&apos;sirs</span>
              <h2 className="head-h2">
                An Ethnically Rich Space,{" "}
                <em className="font-serif italic text-brand">Set in Nature</em>
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 leading-relaxed text-slate-600">
                K&apos;sirs International School, Chinnavedampatti, Coimbatore,
                is a space where children are encouraged to explore and learn
                at every turn. Beyond academic excellence through CISCE and
                Cambridge pathways, we instill values and a desire to serve —
                nurturing learners who are globally ready yet rooted in
                tradition.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <a href="#values" className="link-cta mt-8">
                Know More About Us
                <span className="link-cta-arrow">
                  <Icon name="arrowRight" className="h-4 w-4" />
                </span>
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
