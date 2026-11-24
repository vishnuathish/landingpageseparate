"use client";

import Image from "next/image";
import Reveal from "../Reveal";
import Icon from "../Icon";
import { Pill, Underlined } from "./deco";

// News & updates preview cards.
const news = [
  {
    tag: "Announcement",
    date: "Nov 2026",
    title: "Admissions Open for 2027–28 — CISCE & Cambridge",
    text: "Applications are now open for both pathways. Enquire early; seats are limited.",
    image: "/images/pages/early-years-2.jpg",
    href: "/admissions",
  },
  {
    tag: "Events",
    date: "Dec 2026",
    title: "Annual Sports Meet at the Arena",
    text: "Track, field and the climbing wall — a full day of house colours and personal bests.",
    image: "/images/pages/sports-1.jpg",
    href: "/news",
  },
  {
    tag: "K'press",
    date: "Oct 2026",
    title: "Learning Amidst Nature: Inside the Habitat",
    text: "How 12.5 acres of trees, birds and gardens become our largest classroom.",
    image: "/images/abode.jpg",
    href: "https://kpress.ksirs.in",
  },
];

export default function ClassicNews() {
  return (
    <section className="bg-tint-blue">
      <div className="container-site px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <Pill>News &amp; Updates</Pill>
            <h2 className="head-h2 mt-5 max-w-xl">
              What&apos;s Happening at{" "}
              <Underlined color="#2e3591">K&apos;sirs</Underlined>
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <a href="/news" className="link-cta">
              View All News
              <span className="link-cta-arrow">
                <Icon name="arrowRight" className="h-4 w-4" />
              </span>
            </a>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {news.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.1} className="h-full">
              <a
                href={item.href}
                className="group flex h-full flex-col overflow-hidden rounded-xl border border-slate-100 bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <span className="absolute left-4 top-4 rounded-md bg-brand-orange px-3 py-1 font-heading text-[10px] font-bold uppercase tracking-wider text-white">
                    {item.tag}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="font-heading text-[11px] font-bold uppercase tracking-widest text-slate-400">
                    {item.date}
                  </span>
                  <h3 className="mt-2 font-heading text-lg font-bold leading-snug text-brand-navy transition-colors group-hover:text-brand">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 flex-1 text-sm leading-relaxed text-slate-600">
                    {item.text}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 font-heading text-[11px] font-bold uppercase tracking-widest text-brand">
                    Read More
                    <Icon
                      name="arrowRight"
                      className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
