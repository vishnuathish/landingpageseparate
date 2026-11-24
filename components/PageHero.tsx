"use client";

import { useRef, type ReactNode } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

// Immersive inner-page hero (reference pattern: full-screen photo, dark
// overlay, centered white title with serif-italic accents, scroll cue).
// The photo zooms and settles on load, drifts on scroll, and the copy
// lifts away as the page scrolls on.
type Props = {
  kicker: string;
  title: ReactNode;
  intro?: string;
  image: string;
  alt?: string;
};

export default function PageHero({ kicker, title, intro, image, alt }: Props) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const fade = useTransform(scrollYProgress, [0, 0.65], [1, 0]);
  const rise = useTransform(scrollYProgress, [0, 0.65], [0, -70]);

  return (
    <header
      ref={ref}
      className="relative flex min-h-[92svh] items-center justify-center overflow-hidden bg-brand-navy"
    >
      {/* Photo: zoom-settle on load + parallax drift on scroll */}
      <motion.div style={{ y: bgY }} className="absolute inset-0">
        <motion.div
          initial={{ scale: 1.14 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: [0.21, 0.6, 0.35, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={image}
            alt={alt ?? ""}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
      </motion.div>
      <div className="absolute inset-0 bg-brand-navy/50" />
      <div className="dot-grid absolute inset-0 opacity-15" />

      {/* Centered copy */}
      <motion.div
        style={{ opacity: fade, y: rise }}
        className="relative z-10 mx-auto w-full max-w-5xl px-6 pt-28 text-center"
      >
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="heading-kicker heading-kicker--center heading-kicker--light justify-center"
        >
          {kicker}
        </motion.span>
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "75%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.21, 0.6, 0.35, 1] }}
            className="font-heading font-medium leading-[1.1] tracking-tight text-white"
            style={{ fontSize: "clamp(2.2rem, 5vw, 4.5rem)" }}
          >
            {title}
          </motion.h1>
        </div>
        {intro && (
          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.7 }}
            className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-white/85 sm:text-xl"
          >
            {intro}
          </motion.p>
        )}
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        className="absolute bottom-7 left-1/2 z-10 flex -translate-x-1/2 items-center gap-3"
      >
        <span className="h-2 w-2 animate-pulse rounded-full bg-brand-orange" />
        <span className="font-heading text-[11px] font-semibold uppercase tracking-[0.35em] text-white/80">
          Keep Scrolling
        </span>
      </motion.div>
    </header>
  );
}
