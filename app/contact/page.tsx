import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";

export const metadata: Metadata = {
  title: "Contact Us | K'sirs International School, Coimbatore",
  description:
    "Reach K'sirs International School — Chinnavedampatti, Coimbatore 641049. Call +91 98658 20000 / +91 97887 20000 or write to admission@ksirs.in.",
};

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        kicker="Contact Us"
        title={
          <>
            We&apos;d Love to{" "}
            <em className="font-serif italic text-brand-orange">Hear From You</em>
          </>
        }
        intro="Questions about curricula, campus visits or admissions — our team is a call or an email away."
        image="/images/pages/infra-1.jpg"
        alt="K'sirs International School campus"
      />

      <section className="bg-tint-blue">
        <div className="container-site grid gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-12 lg:py-24">
          {/* Contact cards */}
          <div className="flex flex-col gap-5">
            <Reveal>
              <div className="card flex items-start gap-5 p-7">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand/[0.07] text-brand">
                  <Icon name="mapPin" className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-heading text-lg font-bold text-brand-navy">
                    Visit Us
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                    K&apos;sirs International School
                    <br />
                    Chinnavedampatti, Coimbatore — 641 049
                    <br />
                    Tamil Nadu, India
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="card flex items-start gap-5 p-7">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand/[0.07] text-brand">
                  <Icon name="phone" className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-heading text-lg font-bold text-brand-navy">
                    Call Us
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                    <a href="tel:+919865820000" className="transition-colors hover:text-brand">
                      +91 98658 20000
                    </a>
                    <br />
                    <a href="tel:+919788720000" className="transition-colors hover:text-brand">
                      +91 97887 20000
                    </a>
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="card flex items-start gap-5 p-7">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand/[0.07] text-brand">
                  <Icon name="mail" className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-heading text-lg font-bold text-brand-navy">
                    Write to Us
                  </h3>
                  <p className="mt-1.5 text-sm text-slate-600">
                    <a
                      href="mailto:admission@ksirs.in"
                      className="transition-colors hover:text-brand"
                    >
                      admission@ksirs.in
                    </a>
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Map */}
          <Reveal direction="left" delay={0.15} className="h-full">
            <div className="h-full min-h-[22rem] overflow-hidden rounded-2xl shadow-card-hover">
              <iframe
                title="K'sirs International School on Google Maps"
                src="https://www.google.com/maps?q=K%27sirs+International+School+Chinnavedampatti+Coimbatore&output=embed"
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand />
      <Footer />
    </main>
  );
}
