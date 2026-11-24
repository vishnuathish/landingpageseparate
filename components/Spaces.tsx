"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import Icon, { type IconName } from "./Icon";

// "Purpose-built spaces" (reference: pinned heading on the left, image
// cards flying up and stacking with a slight tilt on the right).
const spaces: {
  title1: string;
  title2: string;
  caption: string;
  image: string;
  icon: IconName;
  tilt: number;
}[] = [
  {
    title1: "Our",
    title2: "Abode",
    caption: "An ethnically rich habitat set amidst nature — flora, fauna and open skies.",
    image: "/images/abode.jpg",
    icon: "building",
    tilt: 0,
  },
  {
    title1: "Sports",
    title2: "Arena",
    caption: "Fields and courts where resilience, teamwork and leadership take shape.",
    image: "/images/sports.jpg",
    icon: "trophy",
    tilt: -3,
  },
  {
    title1: "Learning",
    title2: "Spaces",
    caption: "Bright, purposeful classrooms built for exploration and focus.",
    image: "/images/infrastructure.jpg",
    icon: "academicCap",
    tilt: 3,
  },
  {
    title1: "Pursuits &",
    title2: "Galleria",
    caption: "Studios, stages and gathering spaces where ideas are brought to life.",
    image: "/images/galleria.jpg",
    icon: "sparkles",
    tilt: -2,
  },
];

function SpaceCard({
  space,
  index,
  progress,
}: {
  space: (typeof spaces)[number];
  index: number;
  progress: MotionValue<number>;
}) {
  const n = spaces.length;
  // Card 0 sits in place; each later card flies up during its own
  // scroll segment and lands slightly offset, with a gentle tilt.
  const segStart = (index - 1) / (n - 1);
  const segEnd = index / (n - 1);
  const y = useTransform(
    progress,
    [segStart, segEnd],
    index === 0 ? ["0%", "0%"] : ["130%", `${index * 3.5}%`],
  );
  const rotate = useTransform(
    progress,
    [segStart, segEnd],
    index === 0 ? [0, 0] : [10, space.tilt],
  );

  return (
    <motion.div
      style={{ y, rotate }}
      className="absolute inset-0 will-change-transform"
    >
      <div className="relative h-full w-full overflow-hidden rounded-2xl shadow-card-hover">
        <Image
          src={space.image}
          alt={`${space.title1} ${space.title2}`}
          fill
          sizes="(max-width: 1024px) 90vw, 40vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/70 via-brand-navy/10 to-brand-navy/70" />

        <div className="absolute left-6 top-6 right-6 flex items-start justify-between gap-4">
          <h3 className="font-heading text-3xl font-bold leading-[1.05] text-white sm:text-4xl">
            {space.title1}
            <br />
            {space.title2}
          </h3>
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/95 text-brand">
            <Icon name={space.icon} className="h-6 w-6" />
          </span>
        </div>

        <p className="absolute inset-x-6 bottom-6 max-w-sm text-sm leading-relaxed text-white/90 sm:text-base">
          {space.caption}
        </p>
      </div>
    </motion.div>
  );
}

export default function Spaces() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={ref} className="relative h-[320vh] bg-white">
      <div className="sticky top-0 flex h-[100svh] flex-col items-center gap-8 overflow-hidden px-5 py-20 sm:px-8 lg:grid lg:grid-cols-[1fr_1fr] lg:gap-0 lg:px-12 lg:py-0">
        {/* Pinned heading */}
        <div className="container-site flex w-full flex-col justify-center lg:h-full lg:pl-6 xl:pl-16">
          <span className="heading-kicker">Life at K&apos;sirs</span>
          <h2 className="font-heading text-3xl font-bold leading-[1.12] tracking-tight text-brand-navy sm:text-4xl lg:text-[2.9rem]">
            Purpose-Built Spaces for the{" "}
            <em className="font-serif italic text-brand">K&apos;sirian</em>{" "}
            Explorer
          </h2>
          <p className="mt-5 max-w-md leading-relaxed text-slate-600 sm:text-lg">
            Where learning moves beyond classrooms — into the sports arena,
            the galleria, open nature and every corner of our habitat.
          </p>
        </div>

        {/* Stacking cards */}
        <div className="relative h-[46vh] w-full max-w-md lg:h-[64vh] lg:max-w-lg lg:justify-self-center">
          {spaces.map((space, i) => (
            <SpaceCard
              key={space.image}
              space={space}
              index={i}
              progress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
