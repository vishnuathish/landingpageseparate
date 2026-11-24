"use client";

import Image from "next/image";
import Reveal from "../Reveal";
import Icon from "../Icon";
import { Underlined } from "./doodles";

// Bento mosaic: one large photo tile, photo tiles with hover captions,
// solid stat tiles, and one dashed link tile — 12 cells, perfectly packed.
const photoTiles: Record<
  string,
  { src: string; alt: string; caption: string }
> = {
  big: {
    src: "/images/pages/about-campus.jpg",
    alt: "The K'sirs abode",
    caption: "Our Abode",
  },
  sports: { src: "/images/pages/sports-1.jpg", alt: "Sports arena", caption: "Sports Arena" },
  galleria: { src: "/images/pages/galleria-1.jpg", alt: "Celebrations", caption: "Galleria" },
  flora: { src: "/images/pages/infra-1.jpg", alt: "School infrastructure", caption: "Infrastructure" },
  pets: { src: "/images/pages/pursuits-2.jpg", alt: "Pursuits at K'sirs", caption: "Our Pursuits" },
};

function PhotoTile({ id, className }: { id: keyof typeof photoTiles; className?: string }) {
  const t = photoTiles[id];
  return (
    <div className={`group relative h-full w-full overflow-hidden rounded-[1.75rem] ${className ?? ""}`}>
      <Image
        src={t.src}
        alt={t.alt}
        fill
        sizes="(max-width: 768px) 50vw, 25vw"
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <span className="absolute bottom-3 left-3 translate-y-2 rounded-full bg-white/95 px-3.5 py-1.5 font-heading text-[11px] font-bold uppercase tracking-wider text-brand-navy opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
        {t.caption}
      </span>
    </div>
  );
}

function StatTile({
  value,
  label,
  bg,
}: {
  value: string;
  label: string;
  bg: string;
}) {
  return (
    <div
      className={`flex h-full w-full flex-col items-center justify-center rounded-[1.75rem] ${bg} p-5 text-center text-white transition-transform duration-300 hover:-translate-y-1 hover:rotate-1`}
    >
      <p className="font-heading text-4xl font-extrabold sm:text-[2.6rem]">{value}</p>
      <p className="mt-1.5 text-[11px] uppercase tracking-wider text-white/85">{label}</p>
    </div>
  );
}

export default function EduBento() {
  return (
    <section className="bg-white">
      <div className="container-site px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="grid items-end gap-8 lg:grid-cols-2">
          <Reveal>
            <span className="heading-kicker">Why Choose K&apos;sirs</span>
            <h2 className="head-h2">
              One Campus, a{" "}
              <Underlined color="#2e3591">Thousand Stories</Underlined>
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="max-w-md leading-relaxed text-slate-600 lg:justify-self-end">
              A lush 12.5-acre habitat where facilities, nature and pursuits
              work together — so every K&apos;sirian finds their place to
              grow, play and belong.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid auto-rows-[10.5rem] grid-cols-2 gap-4 sm:gap-5 md:grid-cols-4">
          <Reveal className="col-span-2 row-span-2">
            <PhotoTile id="big" />
          </Reveal>
          <Reveal delay={0.07}>
            <StatTile value="600+" label="Native Trees" bg="bg-brand" />
          </Reveal>
          <Reveal delay={0.14}>
            <PhotoTile id="sports" />
          </Reveal>
          <Reveal delay={0.21}>
            <StatTile value="185" label="Bird Varieties" bg="bg-brand-orange" />
          </Reveal>
          <Reveal delay={0.28}>
            <PhotoTile id="galleria" />
          </Reveal>
          <Reveal>
            {/* Dashed link tile */}
            <a
              href="/life"
              className="group flex h-full w-full flex-col items-center justify-center gap-3 rounded-[1.75rem] border-2 border-dashed border-brand/30 bg-[#faf9f5] p-5 text-center transition-colors duration-300 hover:border-brand hover:bg-brand/[0.04]"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand text-white transition-transform duration-300 group-hover:rotate-[-45deg]">
                <Icon name="arrowRight" className="h-5 w-5" />
              </span>
              <span className="font-heading text-sm font-bold leading-snug text-brand-navy">
                See Life in
                <br />
                the Habitat
              </span>
            </a>
          </Reveal>
          <Reveal delay={0.07}>
            <StatTile value="100%" label="Board Results" bg="bg-brand-navy" />
          </Reveal>
          <Reveal delay={0.14}>
            <PhotoTile id="flora" />
          </Reveal>
          <Reveal delay={0.21}>
            <StatTile value="45" label="Butterfly Varieties" bg="bg-brand-green" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
