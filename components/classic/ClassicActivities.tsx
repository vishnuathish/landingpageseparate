"use client";

import Image from "next/image";
import Reveal from "../Reveal";
import Icon, { type IconName } from "../Icon";
import { Pill, Underlined } from "./deco";

// Bento gallery of life beyond the classroom — labels sit on the images
// so every tile reads as one piece, with varied tile sizes.
const activities: {
  icon: IconName;
  label: string;
  note: string;
  image: string;
  span: string;
}[] = [
  {
    icon: "trophy",
    label: "Sports Arena",
    note: "Wall climbing, Sepak Takraw, athletics and more",
    image: "/images/sports.jpg",
    span: "sm:col-span-2 sm:row-span-2",
  },
  {
    icon: "sparkles",
    label: "Pottery & Crafts",
    note: "Hands-on studios",
    image: "/images/pages/pursuits-2.jpg",
    span: "",
  },
  {
    icon: "heart",
    label: "Agriculture & Garden",
    note: "Organic, student-grown",
    image: "/images/pages/flora-1.jpg",
    span: "",
  },
  {
    icon: "photo",
    label: "Celebrations",
    note: "Festivals, stage and culture through the year",
    image: "/images/pages/galleria-1.jpg",
    span: "sm:col-span-2",
  },
  {
    icon: "users",
    label: "Pet Care",
    note: "Everyday empathy",
    image: "/images/pages/pets-1.jpg",
    span: "",
  },
  {
    icon: "star",
    label: "Houses & Leadership",
    note: "Pegasus · Aquila · Cepheus · Eridanus",
    image: "/images/pages/houses.jpg",
    span: "",
  },
  {
    icon: "globe",
    label: "Nature & Birding",
    note: "185 bird varieties share our habitat",
    image: "/images/pages/fauna-1.jpg",
    span: "sm:col-span-2",
  },
];

export default function ClassicActivities() {
  return (
    <section className="bg-white">
      <div className="container-site px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <Pill>Beyond Classrooms</Pill>
            <h2 className="head-h2 mt-5 max-w-xl">
              Holistic Growth Through <Underlined>Pursuits</Underlined>
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <a href="/life" className="link-cta">
              See Campus Life
              <span className="link-cta-arrow">
                <Icon name="arrowRight" className="h-4 w-4" />
              </span>
            </a>
          </Reveal>
        </div>

        <div className="mt-12 grid auto-rows-[11rem] grid-cols-1 gap-4 sm:grid-cols-4 sm:gap-5">
          {activities.map((a, i) => (
            <Reveal key={a.label} delay={(i % 4) * 0.07} className={a.span}>
              <a
                href="/life"
                className="group relative block h-full w-full overflow-hidden rounded-2xl"
              >
                <Image
                  src={a.image}
                  alt={a.label}
                  fill
                  sizes="(max-width: 640px) 100vw, 45vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Readability gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/25 to-transparent transition-opacity duration-500 group-hover:from-brand/90" />

                {/* Icon chip */}
                <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-brand opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <Icon name={a.icon} className="h-4 w-4" />
                </span>

                {/* Label */}
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="font-heading text-lg font-bold text-white sm:text-xl">
                    {a.label}
                  </h3>
                  <p className="mt-1 max-w-xs text-xs leading-relaxed text-white/80">
                    {a.note}
                  </p>
                  <span className="mt-2.5 flex h-0.5 w-8 bg-brand-orange transition-all duration-500 group-hover:w-14" />
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
