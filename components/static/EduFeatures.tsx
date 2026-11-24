"use client";

import Image from "next/image";
import Reveal from "../Reveal";
import Icon from "../Icon";
import { Underlined, ArrowDoodle } from "./doodles";

// Curriculum cards mirroring the real homepage's trio:
// Pre-Primary, CISCE and Cambridge — with the actual board logos.
const programs = [
  {
    logo: "/images/early-years.png",
    tag: "Pre-Primary · Ages 3–6",
    title: "K'sirs Early Years",
    text: "Montessori, Waldorf, Reggio Emilia and Froebel — joyful foundations in bird-named classrooms, guided by trained Directresses.",
    href: "/learning",
    bg: "#fdf0e7",
    accent: "#f57a3d",
  },
  {
    logo: "/images/cisce.png",
    tag: "ICSE & ISC · Grades 1–12",
    title: "CISCE",
    text: "A rigorous national curriculum with depth and clarity — permanently affiliated since 2017, through to the Grade 10 and 12 boards.",
    href: "/learning",
    bg: "#eef1fd",
    accent: "#2e3591",
  },
  {
    logo: "/images/cambridge.png",
    tag: "IGCSE, AS & A Levels",
    title: "Cambridge",
    text: "A globally recognised pathway of inquiry and independent thinking — affiliated since 2010, a bridge to the world's universities.",
    href: "/learning",
    bg: "#e9f7ef",
    accent: "#2bb061",
  },
];

export default function EduFeatures() {
  return (
    <section className="relative bg-[#faf9f5]">
      <div className="container-site px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="grid items-end gap-8 lg:grid-cols-2">
          <Reveal>
            <span className="heading-kicker">Curriculum</span>
            <h2 className="head-h2">
              Three Pathways, <Underlined>One Journey</Underlined>
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="relative max-w-md lg:justify-self-end">
              <p className="leading-relaxed text-slate-600">
                We facilitate learning rather than teaching — concepts over
                marks, exploration over routine, from the Early Years all the
                way to Grade 12.
              </p>
              <ArrowDoodle className="absolute -bottom-12 right-0 hidden h-12 w-14 rotate-[100deg] lg:block" />
            </div>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {programs.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1} className="h-full">
              <a
                href={p.href}
                style={{ backgroundColor: p.bg }}
                className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] p-8 pb-9 transition-all duration-300 hover:-translate-y-2 hover:shadow-card-hover"
              >
                <span className="pointer-events-none absolute -right-4 -top-5 font-heading text-[5.5rem] font-extrabold leading-none text-brand-navy/[0.06]">
                  0{i + 1}
                </span>
                <span className="flex h-20 w-fit items-center rounded-2xl bg-white px-5 shadow-sm transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src={p.logo}
                    alt={`${p.title} logo`}
                    width={150}
                    height={60}
                    className="max-h-14 w-auto object-contain"
                  />
                </span>
                <p
                  className="mt-6 font-heading text-[11px] font-bold uppercase tracking-[0.18em]"
                  style={{ color: p.accent }}
                >
                  {p.tag}
                </p>
                <h3 className="mt-1.5 font-heading text-[1.35rem] font-bold text-brand-navy">
                  {p.title}
                </h3>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-slate-600">
                  {p.text}
                </p>
                <span
                  className="mt-6 inline-flex items-center gap-2 font-heading text-xs font-bold uppercase tracking-widest"
                  style={{ color: p.accent }}
                >
                  Explore Pathway
                  <Icon
                    name="arrowRight"
                    className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1.5"
                  />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
