import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import NewsGrid from "@/components/NewsGrid";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";

export const metadata: Metadata = {
  title: "News & Events | K'sirs International School, Coimbatore",
  description:
    "The latest from K'sirs International School — events, achievements and announcements, plus stories from K'press and our YouTube channel.",
};

export default function NewsPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        kicker="News & Events"
        title={
          <>
            Stories from{" "}
            <em className="font-serif italic text-brand-orange">Our Campus</em>
          </>
        }
        intro="Events, achievements and announcements — moments from everyday life at K'sirs, as they happen."
        image="/images/pages/galleria-3.jpg"
        alt="Events at K'sirs"
      />

      {/* Filterable news grid */}
      <section className="bg-white">
        <div className="container-site px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <Reveal>
            <span className="heading-kicker">Latest Updates</span>
            <h2 className="head-h2 max-w-xl">
              What&apos;s{" "}
              <em className="font-serif italic text-brand">Happening</em>
            </h2>
          </Reveal>
          <div className="mt-10">
            <NewsGrid />
          </div>
        </div>
      </section>

      {/* Channels band */}
      <section className="relative z-10 -mt-8 rounded-t-[3rem] bg-brand pb-20 pt-16 lg:pb-24 lg:pt-20">
        <div className="container-site grid gap-8 px-5 sm:px-8 lg:grid-cols-2 lg:px-12">
          <Reveal className="h-full">
            <a
              href="https://www.youtube.com/@ksirsinternationalschool"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-9 transition-colors duration-300 hover:bg-white/10"
            >
              <div>
                <span className="heading-kicker heading-kicker--light">
                  Events &amp; Celebrations
                </span>
                <h3 className="font-heading text-2xl font-bold text-white sm:text-3xl">
                  Watch the Moments on{" "}
                  <em className="font-serif italic text-brand-orange">
                    YouTube
                  </em>
                </h3>
                <p className="mt-3 max-w-md text-white/75">
                  Campus tours, celebrations and sports days — our channel
                  keeps every memory.
                </p>
              </div>
              <span className="mt-8 inline-flex items-center gap-2 font-heading text-xs font-bold uppercase tracking-widest text-white transition-colors group-hover:text-brand-orange">
                Visit Our Channel
                <Icon
                  name="arrowRight"
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5"
                />
              </span>
            </a>
          </Reveal>

          <Reveal delay={0.12} className="h-full">
            <a
              href="https://kpress.ksirs.in"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col justify-between rounded-3xl bg-white p-9 shadow-card-hover transition-transform duration-300 hover:-translate-y-1"
            >
              <div>
                <span className="heading-kicker">K&apos;press</span>
                <h3 className="font-heading text-2xl font-bold text-brand-navy sm:text-3xl">
                  Newsletters &amp;{" "}
                  <em className="font-serif italic text-brand">Blogs</em>
                </h3>
                <p className="mt-3 max-w-md text-slate-600">
                  Long reads from our educators and students — curriculum
                  thinking, campus stories and parenting notes.
                </p>
              </div>
              <span className="mt-8 inline-flex items-center gap-2 font-heading text-xs font-bold uppercase tracking-widest text-brand">
                Read K&apos;press
                <Icon
                  name="arrowRight"
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5"
                />
              </span>
            </a>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
