"use client";

import Image from "next/image";
import Parallax from "./Parallax";
import Reveal from "./Reveal";
import Icon from "./Icon";

// Reference-style culture gallery — a clean photo grid.
const photos = [
  { src: "/images/abode.jpg", caption: "Our Abode" },
  { src: "/images/infrastructure.jpg", caption: "Infrastructure" },
  { src: "/images/pursuits.jpg", caption: "Our Pursuits" },
  { src: "/images/sports.jpg", caption: "Sports Arena" },
  { src: "/images/galleria.jpg", caption: "Galleria" },
  { src: "/images/hero.jpg", caption: "Learning Together" },
];

export default function Campus() {
  return (
    <section id="life" className="section-padding relative overflow-hidden bg-white">
      <div className="container-site">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <Reveal>
            <span className="heading-kicker">#LifeAtKsirs</span>
            <h2 className="head-h2 max-w-xl">
              Our Campus,{" "}
              <em className="font-serif italic text-brand">Our Culture</em>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="max-w-md text-slate-600">
              From our abode and pursuits to sports and celebrations — moments
              from everyday life at K&apos;sirs.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-3">
          {photos.map((photo, i) => (
            <Reveal key={photo.caption} delay={i * 0.07}>
              <figure className="group relative h-56 overflow-hidden rounded-lg sm:h-64">
                <Parallax speed={0.1}>
                  <Image
                    src={photo.src}
                    alt={photo.caption}
                    fill
                    sizes="(max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </Parallax>
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <figcaption className="absolute inset-x-0 bottom-0 translate-y-3 p-5 font-heading text-lg font-bold text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  {photo.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-10 text-center">
          <a href="#admissions" className="link-cta">
            Visit the Campus
            <span className="link-cta-arrow">
              <Icon name="arrowRight" className="h-4 w-4" />
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
