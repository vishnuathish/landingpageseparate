"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import Reveal from "./Reveal";

const QUOTE =
  "At K'sirs, education is not a race — it is a journey from infancy to independence. We built this school as an ethnically rich space set in nature, where children explore and learn at every turn, grow with values, and leave with a desire to serve the world around them.";

const WORDS = QUOTE.split(" ");

// One word of the quote, brightening as the scroll passes its range.
function Word({
  children,
  progress,
  range,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.14, 1]);
  return (
    <motion.span style={{ opacity }} className="mr-[0.32em] inline-block">
      {children}
    </motion.span>
  );
}

export default function Message() {
  // The section is tall; its content pins (sticky) while the user scrolls,
  // and the quote reveals word by word, scrubbed to the scroll position.
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Words reveal across the first ~70% of the pinned scroll.
  const REVEAL_START = 0.08;
  const REVEAL_END = 0.72;
  const step = (REVEAL_END - REVEAL_START) / WORDS.length;

  // The signature fades in once the quote has finished revealing.
  const creditOpacity = useTransform(scrollYProgress, [0.74, 0.9], [0, 1]);
  const creditY = useTransform(scrollYProgress, [0.74, 0.9], [24, 0]);

  // Image drifts and settles while the section is pinned.
  const imageY = useTransform(scrollYProgress, [0, 1], ["-7%", "7%"]);
  const frameRotate = useTransform(scrollYProgress, [0, 1], [-1.5, 1.5]);

  return (
    <section ref={ref} className="bg-tint-blue relative h-[260vh]">
      <div className="sticky top-0 flex min-h-[100svh] items-center overflow-hidden">
        <div className="container-site grid items-center gap-14 px-5 py-28 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-12">
          <div>
            <Reveal>
              <span className="heading-kicker">Message from K&apos;sirs</span>
              <h2 className="head-h2">
                Every Child Deserves a Space to{" "}
                <em className="font-serif italic text-brand">
                  Become Themselves
                </em>
              </h2>
            </Reveal>

            <Reveal delay={0.12}>
            <blockquote className="mt-7 border-l-2 border-brand-orange pl-6">
              <p className="text-lg leading-relaxed text-slate-600 sm:text-xl">
                &ldquo;
                {WORDS.map((word, i) => (
                  <Word
                    key={`${word}-${i}`}
                    progress={scrollYProgress}
                    range={[REVEAL_START + i * step, REVEAL_START + (i + 1) * step]}
                  >
                    {word}
                  </Word>
                ))}
                &rdquo;
              </p>
            </blockquote>
            </Reveal>

            <motion.div
              style={{ opacity: creditOpacity, y: creditY }}
              className="mt-7 flex items-center gap-4"
            >
              <span className="h-px w-10 bg-brand-orange" />
              <div>
                <p className="font-heading text-base font-bold text-brand-navy">
                  The K&apos;sirs Leadership
                </p>
                <p className="text-sm text-slate-500">
                  K&apos;sirs International School, Coimbatore
                </p>
              </div>
            </motion.div>
          </div>

          {/* Image drops in from the top while the copy rises from below */}
          <Reveal direction="down" delay={0.15} className="relative hidden lg:block">
            <motion.div
              style={{ rotate: frameRotate }}
              className="absolute -left-4 -top-4 h-full w-full rounded-lg border-2 border-brand/15"
            />
            <div className="relative h-[26rem] overflow-hidden rounded-lg shadow-card-hover">
              <motion.div style={{ y: imageY }} className="absolute -inset-y-[8%] inset-x-0">
                <Image
                  src="/images/infrastructure.jpg"
                  alt="K'sirs International School campus"
                  fill
                  sizes="45vw"
                  className="object-cover"
                />
              </motion.div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
