"use client";

import Image from "next/image";
import Reveal from "../Reveal";
import Icon from "../Icon";
import { Underlined, SparkleDash } from "./doodles";

const KPRESS = "https://kpress.ksirs.in";

const posts = [
  {
    tag: "Early Years",
    title: "Why the Early Years Shape Everything at K'sirs",
    image: "/images/pages/early-years-3.jpg",
  },
  {
    tag: "Curriculum",
    title: "ICSE vs IGCSE: Choosing the Right Pathway",
    image: "/images/pages/classroom.jpg",
  },
  {
    tag: "Campus Life",
    title: "Learning Amidst Nature: Inside the Habitat",
    image: "/images/abode.jpg",
  },
];

export default function EduBlogGrid() {
  return (
    <section className="relative bg-white">
      <SparkleDash className="absolute left-[46%] top-16 hidden h-9 w-9 lg:block" />
      <div className="container-site px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="grid items-end gap-8 lg:grid-cols-2">
          <Reveal>
            <span className="heading-kicker">K&apos;press</span>
            <h2 className="head-h2">
              Useful Reads for <Underlined>Your Family</Underlined>
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="max-w-md leading-relaxed text-slate-600 lg:justify-self-end">
              Stories, guides and campus notes from our educators and
              students — published on K&apos;press, the K&apos;sirs blog.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-7 md:grid-cols-3">
          {posts.map((post, i) => (
            <Reveal key={post.title} delay={i * 0.1} className="h-full">
              <a
                href={KPRESS}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col"
              >
                <div className="relative h-56 overflow-hidden rounded-[1.75rem] sm:h-64">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3.5 py-1.5 font-heading text-[10px] font-bold uppercase tracking-wider text-brand">
                    {post.tag}
                  </span>
                </div>
                <div className="mt-5 flex items-start justify-between gap-4">
                  <h3 className="max-w-[16rem] font-heading text-lg font-bold leading-snug text-brand-navy transition-colors group-hover:text-brand">
                    {post.title}
                  </h3>
                  <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-brand-navy/15 text-brand-navy transition-all duration-300 group-hover:rotate-[-45deg] group-hover:border-brand-orange group-hover:bg-brand-orange group-hover:text-white">
                    <Icon name="arrowRight" className="h-4 w-4" />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.25}>
          <div className="mt-12 text-center">
            <a
              href={KPRESS}
              target="_blank"
              rel="noopener noreferrer"
              className="link-cta"
            >
              View All on K&apos;press
              <span className="link-cta-arrow">
                <Icon name="arrowRight" className="h-4 w-4" />
              </span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
