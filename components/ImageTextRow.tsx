"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Parallax from "./Parallax";
import Reveal from "./Reveal";

// Alternating image/text row for inner pages. The image drops in from the
// top while the text rises from below.
type Props = {
  image: string;
  alt: string;
  kicker?: string;
  title: ReactNode;
  flip?: boolean;
  children: ReactNode;
};

export default function ImageTextRow({
  image,
  alt,
  kicker,
  title,
  flip,
  children,
}: Props) {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      {/* Curtain-wipe reveal: the image uncovers from the top as it enters */}
      <motion.div
        initial={{ clipPath: "inset(0 0 100% 0)" }}
        whileInView={{ clipPath: "inset(0 0 0% 0)" }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease: [0.21, 0.6, 0.35, 1] }}
        className={flip ? "lg:order-2" : undefined}
      >
        <div className="relative h-[20rem] overflow-hidden rounded-2xl shadow-card-hover sm:h-[24rem]">
          <Parallax speed={0.12}>
            <Image
              src={image}
              alt={alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </Parallax>
        </div>
      </motion.div>
      <Reveal delay={0.1} className={flip ? "lg:order-1" : undefined}>
        {kicker && <span className="heading-kicker">{kicker}</span>}
        <h2 className="font-heading text-3xl font-bold leading-[1.12] tracking-tight text-brand-navy sm:text-4xl">
          {title}
        </h2>
        <div className="mt-5 space-y-4 leading-relaxed text-slate-600">
          {children}
        </div>
      </Reveal>
    </div>
  );
}
