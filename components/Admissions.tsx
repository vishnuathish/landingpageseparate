"use client";

import { useState, type FormEvent } from "react";
import Reveal from "./Reveal";
import Icon from "./Icon";

export default function Admissions() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  // Static site — no backend. The form composes an email to the admissions
  // team in the visitor's mail app instead of posting to a server.
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<
      string,
      string
    >;
    const subject = `Admission Enquiry — ${data.name} (${data.grade})`;
    const body = [
      `Parent's Name: ${data.name}`,
      `Phone: ${data.phone}`,
      `Email: ${data.email}`,
      `Grade Seeking: ${data.grade}`,
      `Curriculum: ${data.curriculum}`,
      "",
      data.message || "",
    ].join("\n");
    window.location.href = `mailto:admission@ksirs.in?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setStatus("sent");
    form.reset();
  }

  return (
    <section id="admissions" className="section-padding relative overflow-hidden bg-brand">
      <div className="dot-grid absolute inset-0 opacity-25" />

      <div className="container-site relative grid items-center gap-14 lg:grid-cols-2">
        {/* Copy */}
        <div>
          <Reveal>
            <span className="heading-kicker heading-kicker--light">Join K&apos;sirs</span>
            <h2 className="font-heading text-3xl font-bold leading-[1.12] tracking-tight text-white sm:text-4xl lg:text-[2.9rem]">
              Begin the Journey from{" "}
              <em className="font-serif italic text-brand-orange">
                Infancy to Independence
              </em>
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <ul className="mt-8 grid gap-x-8 gap-y-3.5 sm:grid-cols-2">
              {[
                "Montessori, Waldorf & Reggio Emilia",
                "CISCE & Cambridge pathways",
                "Dedicated career guidance",
                "Sports arena & 50+ pursuits",
                "A living habitat amidst nature",
                "International student community",
              ].map((benefit) => (
                <li key={benefit} className="flex items-start gap-3 text-sm text-white/85">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-orange text-white">
                    <Icon name="check" className="h-3 w-3" />
                  </span>
                  {benefit}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="mt-9 space-y-4">
              <a
                href="tel:+919865820000"
                className="flex items-center gap-4 rounded-lg border border-white/15 bg-white/10 p-4 transition-all duration-300 hover:border-brand-orange/60 hover:bg-white/15"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-md bg-brand-orange text-white">
                  <Icon name="phone" className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wider text-white/60">
                    Make a Call
                  </span>
                  <span className="font-heading text-lg font-bold text-white">
                    +91 98658 20000 · +91 97887 20000
                  </span>
                </span>
              </a>
              <a
                href="mailto:admission@ksirs.in"
                className="flex items-center gap-4 rounded-lg border border-white/15 bg-white/10 p-4 transition-all duration-300 hover:border-brand-teal/60 hover:bg-white/15"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-md bg-brand-teal/80 text-white">
                  <Icon name="mail" className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wider text-white/60">
                    Write to Us
                  </span>
                  <span className="font-heading text-lg font-bold text-white">
                    admission@ksirs.in
                  </span>
                </span>
              </a>
            </div>
          </Reveal>
        </div>

        {/* Form */}
        <Reveal direction="left" delay={0.2}>
          <form
            onSubmit={handleSubmit}
            className="rounded-lg bg-white p-8 shadow-2xl sm:p-10"
          >
            <h3 className="font-heading text-2xl font-bold text-brand-navy">
              Admission Enquiry
            </h3>
            <p className="mt-1.5 text-sm text-slate-500">
              Fill in the details and our team will reach out shortly.
            </p>

            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="mb-1.5 block text-sm font-semibold text-slate-700">
                  Parent&apos;s Name *
                </span>
                <input
                  name="name"
                  required
                  placeholder="Your full name"
                  className="w-full rounded-md border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition-all focus:border-brand focus:bg-white focus:ring-4 focus:ring-brand/10"
                />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-sm font-semibold text-slate-700">
                  Phone *
                </span>
                <input
                  name="phone"
                  type="tel"
                  required
                  placeholder="+91 ..."
                  className="w-full rounded-md border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition-all focus:border-brand focus:bg-white focus:ring-4 focus:ring-brand/10"
                />
              </label>
              <label className="block sm:col-span-2">
                <span className="mb-1.5 block text-sm font-semibold text-slate-700">
                  Email *
                </span>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-md border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition-all focus:border-brand focus:bg-white focus:ring-4 focus:ring-brand/10"
                />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-sm font-semibold text-slate-700">
                  Grade Seeking
                </span>
                <select
                  name="grade"
                  className="w-full rounded-md border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition-all focus:border-brand focus:bg-white focus:ring-4 focus:ring-brand/10"
                >
                  <option>Pre-Primary</option>
                  <option>Primary (1–5)</option>
                  <option>Middle (6–8)</option>
                  <option>ICSE (9–10)</option>
                  <option>ISC / A Levels (11–12)</option>
                </select>
              </label>
              <label className="block">
                <span className="mb-1.5 block text-sm font-semibold text-slate-700">
                  Curriculum
                </span>
                <select
                  name="curriculum"
                  className="w-full rounded-md border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition-all focus:border-brand focus:bg-white focus:ring-4 focus:ring-brand/10"
                >
                  <option>CISCE (ICSE / ISC)</option>
                  <option>Cambridge (IGCSE / A Levels)</option>
                  <option>Not sure yet</option>
                </select>
              </label>
              <label className="block sm:col-span-2">
                <span className="mb-1.5 block text-sm font-semibold text-slate-700">
                  Message
                </span>
                <textarea
                  name="message"
                  rows={3}
                  placeholder="Tell us about your child..."
                  className="w-full resize-none rounded-md border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition-all focus:border-brand focus:bg-white focus:ring-4 focus:ring-brand/10"
                />
              </label>
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="btn-primary mt-7 w-full disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "sending" ? "Sending..." : "Submit Enquiry"}
            </button>

            {status === "sent" && (
              <p className="mt-4 rounded-xl bg-brand-green/10 px-4 py-3 text-center text-sm font-semibold text-brand-green">
                ✓ Your enquiry email is ready — just hit Send in your mail
                app.
              </p>
            )}
            {status === "error" && (
              <p className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-center text-sm font-semibold text-red-500">
                Something went wrong. Please call us directly.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
