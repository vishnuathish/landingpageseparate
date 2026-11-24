"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Reveal from "./Reveal";
import Icon from "./Icon";

const CHANNEL = "https://www.youtube.com/@ksirsinternationalschool";

const videos = [
  { title: "Inside the K'sirs Habitat", thumb: "/images/abode.jpg", tag: "Campus" },
  { title: "Sports Arena in Action", thumb: "/images/sports.jpg", tag: "Sports" },
  { title: "Celebrations at K'sirs", thumb: "/images/galleria.jpg", tag: "Events" },
];

export default function VideoTour() {
  // Cinematic screen: scales up and settles as it enters the viewport.
  const screenRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: screenRef,
    offset: ["start end", "center center"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const screenY = useTransform(scrollYProgress, [0, 1], [60, 0]);

  const [videoFailed, setVideoFailed] = useState(false);

  return (
    <section className="section-padding relative overflow-hidden bg-white">
      <div className="container-site">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="heading-kicker heading-kicker--center justify-center">
              Watch Us on YouTube
            </span>
            <h2 className="head-h2">
              Take a{" "}
              <em className="font-serif italic text-brand">Video Tour</em>
            </h2>
          </Reveal>
        </div>

        {/* Cinematic screen */}
        <motion.div
          ref={screenRef}
          style={{ scale, y: screenY }}
          className="relative mt-14 overflow-hidden rounded-3xl bg-brand-navy shadow-card-hover"
        >
          <a
            href={CHANNEL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block h-[24rem] sm:h-[30rem] lg:h-[36rem]"
          >
            {videoFailed ? (
              <Image
                src="/images/hero.jpg"
                alt="K'sirs International School campus tour video"
                fill
                sizes="100vw"
                className="object-cover"
              />
            ) : (
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster="/images/hero.jpg"
                src="/videos/campus.mp4"
                onError={() => setVideoFailed(true)}
                className="absolute inset-0 h-full w-full object-cover"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/85 via-brand-navy/15 to-brand-navy/30" />

            {/* Pulsing play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="relative flex h-20 w-20 items-center justify-center sm:h-24 sm:w-24">
                <span className="absolute inset-0 animate-ping rounded-full bg-white/25 [animation-duration:2.2s]" />
                <span className="absolute -inset-3 rounded-full border border-white/30" />
                <span className="relative flex h-full w-full items-center justify-center rounded-full bg-white text-brand shadow-xl transition-transform duration-300 group-hover:scale-110">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="ml-1 h-8 w-8" aria-hidden="true">
                    <path d="M8 5.5v13l11-6.5z" />
                  </svg>
                </span>
              </span>
            </div>

            {/* Bottom info bar */}
            <div className="absolute inset-x-0 bottom-0 flex flex-col gap-4 p-7 sm:flex-row sm:items-end sm:justify-between sm:p-10">
              <div>
                <span className="rounded-md bg-brand-orange px-3 py-1 font-heading text-[11px] font-bold uppercase tracking-wider text-white">
                  Featured
                </span>
                <h3 className="mt-3 font-heading text-2xl font-bold text-white sm:text-3xl">
                  K&apos;sirs Campus Tour — Infancy to Independence
                </h3>
              </div>
              <span className="inline-flex shrink-0 items-center gap-2 font-heading text-xs font-bold uppercase tracking-widest text-white/80 transition-colors group-hover:text-brand-orange">
                Watch on YouTube
                <Icon name="arrowRight" className="h-3.5 w-3.5" />
              </span>
            </div>
          </a>
        </motion.div>

        {/* Video cards */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {videos.map((video, i) => (
            <Reveal key={video.title} delay={i * 0.1} className="h-full">
              <a
                href={CHANNEL}
                target="_blank"
                rel="noopener noreferrer"
                className="card group block h-full overflow-hidden hover:-translate-y-2 hover:shadow-card-hover"
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={video.thumb}
                    alt={video.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <span className="absolute inset-0 flex items-center justify-center bg-brand-navy/25 transition-colors duration-300 group-hover:bg-brand-navy/10">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/95 text-brand shadow-lg transition-transform duration-300 group-hover:scale-110">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="ml-0.5 h-5 w-5" aria-hidden="true">
                        <path d="M8 5.5v13l11-6.5z" />
                      </svg>
                    </span>
                  </span>
                </div>
                <div className="flex items-center justify-between p-5">
                  <div>
                    <span className="font-heading text-[11px] font-bold uppercase tracking-wider text-brand-orange">
                      {video.tag}
                    </span>
                    <h3 className="mt-1 font-heading text-base font-bold leading-snug text-brand-navy transition-colors group-hover:text-brand">
                      {video.title}
                    </h3>
                  </div>
                  <Icon
                    name="arrowRight"
                    className="h-4 w-4 shrink-0 text-brand transition-transform duration-300 group-hover:translate-x-1.5"
                  />
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
