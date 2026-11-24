"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "./Reveal";
import Icon from "./Icon";

const faqs = [
  {
    q: "Which curricula does K'sirs International School offer?",
    a: "We offer two international pathways — CISCE (ICSE for Grade 10 and ISC for Grade 12) and Cambridge (IGCSE, AS and A Levels) — along with a dedicated pre-primary programme.",
  },
  {
    q: "What approach is followed in the early years?",
    a: "K'sirs Early Years blends three of the world's most respected early-childhood philosophies: the Montessori Method, the Waldorf Approach and Reggio Emilia.",
  },
  {
    q: "What makes the K'sirs campus different?",
    a: "The campus at Chinnavedampatti, Coimbatore, is an ethnically rich space set amidst nature — a living habitat with its own flora, fauna and pets, a sports arena, and facilities designed for exploration.",
  },
  {
    q: "How do I apply for admission?",
    a: "Fill in the enquiry form above, call our admissions team on +91 98658 20000 / +91 97887 20000, or write to admission@ksirs.in — we will walk you through the campus, curriculum and admission process.",
  },
  {
    q: "Does K'sirs accept international students?",
    a: "Yes. K'sirs welcomes international students, and our Cambridge pathway in particular offers a globally recognised route to universities worldwide.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section className="section-padding bg-tint-blue relative overflow-hidden">
      <div className="container-site grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <Reveal>
            <span className="heading-kicker">FAQ</span>
            <h2 className="head-h2">
              Questions Parents{" "}
              <em className="font-serif italic text-brand">Often Ask</em>
            </h2>
            <p className="mt-5 max-w-md text-slate-600">
              Everything you need to know before joining the K&apos;sirs
              family. Can&apos;t find your answer? Our admissions team is a
              call away.
            </p>
            <a href="#admissions" className="link-cta mt-8">
              Ask Us Directly
              <span className="link-cta-arrow">
                <Icon name="arrowRight" className="h-4 w-4" />
              </span>
            </a>
          </Reveal>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={faq.q} delay={i * 0.07}>
                <div
                  className={`card overflow-hidden ${isOpen ? "border-brand/25 shadow-card-hover" : ""}`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left"
                  >
                    <span className="font-heading text-base font-bold text-brand-navy sm:text-lg">
                      {faq.q}
                    </span>
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-md transition-all duration-300 ${
                        isOpen ? "bg-brand text-white" : "bg-brand/10 text-brand"
                      }`}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        aria-hidden="true"
                        className={`h-4 w-4 transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                      >
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="border-t border-slate-100 px-6 py-5 text-sm leading-relaxed text-slate-600">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
