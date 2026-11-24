"use client";

import Image from "next/image";
import Reveal from "../Reveal";
import Icon from "../Icon";

// Alt-template gallery: masonry columns with varied heights.
const photos = [
  { src: "/images/abode.jpg", caption: "Our Abode", h: "h-72" },
  { src: "/images/pages/sports-1.jpg", caption: "Sports Arena", h: "h-52" },
  { src: "/images/pages/galleria-1.jpg", caption: "Celebrations", h: "h-56" },
  { src: "/images/pages/flora-1.jpg", caption: "The Organic Garden", h: "h-72" },
  { src: "/images/pages/early-years-3.jpg", caption: "Early Years", h: "h-56" },
  { src: "/images/pages/pets-1.jpg", caption: "Campus Friends", h: "h-52" },
];

export default function AltGallery() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container-site px-5 sm:px-8 lg:px-12">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <span className="heading-kicker">#LifeAtKsirs</span>
            <h2 className="head-h2 max-w-xl">
              Moments from the{" "}
              <em className="font-serif italic text-brand">Habitat</em>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <a href="/life" className="link-cta">
              See Campus Life
              <span className="link-cta-arrow">
                <Icon name="arrowRight" className="h-4 w-4" />
              </span>
            </a>
          </Reveal>
        </div>

        <div className="mt-12 columns-2 gap-5 lg:columns-3">
          {photos.map((photo, i) => (
            <Reveal key={photo.src} delay={i * 0.06} className="mb-5 break-inside-avoid">
              <figure
                className={`group relative ${photo.h} overflow-hidden rounded-2xl`}
              >
                <Image
                  src={photo.src}
                  alt={photo.caption}
                  fill
                  sizes="(max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <figcaption className="absolute inset-x-0 bottom-0 translate-y-2 p-4 font-heading text-base font-bold text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  {photo.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
