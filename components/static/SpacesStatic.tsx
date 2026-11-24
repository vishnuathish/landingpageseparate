"use client";

import Image from "next/image";
import Reveal from "../Reveal";
import Icon, { type IconName } from "../Icon";

// Static-variant spaces: a simple 2x2 photo-card grid beside the heading,
// no pinned card stacking.
const spaces: { title: string; caption: string; image: string; icon: IconName }[] = [
  {
    title: "Our Abode",
    caption: "An ethnically rich habitat set amidst nature.",
    image: "/images/abode.jpg",
    icon: "building",
  },
  {
    title: "Sports Arena",
    caption: "Where resilience, teamwork and leadership take shape.",
    image: "/images/sports.jpg",
    icon: "trophy",
  },
  {
    title: "Learning Spaces",
    caption: "Bright, purposeful classrooms built for exploration.",
    image: "/images/infrastructure.jpg",
    icon: "academicCap",
  },
  {
    title: "Pursuits & Galleria",
    caption: "Studios and stages where ideas come to life.",
    image: "/images/galleria.jpg",
    icon: "sparkles",
  },
];

export default function SpacesStatic() {
  return (
    <section className="section-padding bg-white">
      <div className="container-site grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <span className="heading-kicker">Life at K&apos;sirs</span>
          <h2 className="head-h2">
            Purpose-Built Spaces for the{" "}
            <em className="font-serif italic text-brand">
              K&apos;sirian
            </em>{" "}
            Explorer
          </h2>
          <p className="mt-5 max-w-md leading-relaxed text-slate-600 sm:text-lg">
            Where learning moves beyond classrooms — into the sports arena,
            the galleria, open nature and every corner of our habitat.
          </p>
          <a href="/life" className="link-cta mt-8">
            Explore Life @ K&apos;sirs
            <span className="link-cta-arrow">
              <Icon name="arrowRight" className="h-4 w-4" />
            </span>
          </a>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2">
          {spaces.map((space, i) => (
            <Reveal key={space.title} delay={i * 0.08}>
              <figure className="group relative h-64 overflow-hidden rounded-2xl">
                <Image
                  src={space.image}
                  alt={space.title}
                  fill
                  sizes="(max-width: 1024px) 50vw, 28vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/75 via-brand-navy/10 to-transparent" />
                <span className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-brand">
                  <Icon name={space.icon} className="h-5 w-5" />
                </span>
                <figcaption className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="font-heading text-xl font-bold text-white">
                    {space.title}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-white/80">
                    {space.caption}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
