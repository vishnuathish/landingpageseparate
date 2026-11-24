"use client";

import Image from "next/image";
import Parallax from "./Parallax";
import Reveal from "./Reveal";
import Icon from "./Icon";

const posts = [
  {
    title: "Why Early Years Shape Everything: Montessori at K'sirs",
    image: "/images/pursuits.jpg",
    tag: "Early Years",
  },
  {
    title: "ICSE vs IGCSE: Choosing the Right Pathway for Your Child",
    image: "/images/infrastructure.jpg",
    tag: "Curriculum",
  },
  {
    title: "Learning Amidst Nature: Inside the K'sirs Habitat",
    image: "/images/abode.jpg",
    tag: "Campus Life",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="section-padding relative overflow-hidden bg-white">
      <div className="container-site">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <Reveal>
            <span className="heading-kicker">K&apos;press</span>
            <h2 className="head-h2 max-w-xl">
              Check Our{" "}
              <em className="font-serif italic text-brand">Latest Blogs</em>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <a
              href="https://kpress.ksirs.in"
              target="_blank"
              rel="noopener noreferrer"
              className="link-cta"
            >
              View All
              <span className="link-cta-arrow">
                <Icon name="arrowRight" className="h-4 w-4" />
              </span>
            </a>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-7 md:grid-cols-3">
          {posts.map((post, i) => (
            <Reveal key={post.title} delay={i * 0.1}>
              <a
                href="https://kpress.ksirs.in"
                target="_blank"
                rel="noopener noreferrer"
                className="card group block overflow-hidden hover:-translate-y-2 hover:shadow-card-hover"
              >
                <div className="relative h-52 overflow-hidden">
                  <Parallax speed={0.1}>
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </Parallax>
                  <span className="absolute left-4 top-4 rounded-md bg-brand-orange px-3 py-1 font-heading text-[11px] font-bold uppercase tracking-wider text-white">
                    {post.tag}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-lg font-bold leading-snug text-brand-navy transition-colors group-hover:text-brand">
                    {post.title}
                  </h3>
                  <span className="mt-4 inline-flex items-center gap-2 font-heading text-xs font-bold uppercase tracking-widest text-brand">
                    Read Article
                    <Icon
                      name="arrowRight"
                      className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1.5"
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
