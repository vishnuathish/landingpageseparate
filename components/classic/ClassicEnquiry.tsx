"use client";

import type { FormEvent } from "react";
import Reveal from "../Reveal";
import Icon from "../Icon";

// Horizontal enquiry card that overlaps the hero above it.
// Static site — the form composes an email to the admissions inbox.
export default function ClassicEnquiry() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;
    const body = [
      `Parent's Name: ${data.name}`,
      `Phone: ${data.phone}`,
      `Email: ${data.email}`,
      `Programme: ${data.grade}`,
    ].join("\n");
    window.location.href = `mailto:admission@ksirs.in?subject=${encodeURIComponent(
      "Admission Enquiry — " + data.name,
    )}&body=${encodeURIComponent(body)}`;
    form.reset();
  };

  const field =
    "w-full rounded-lg border border-slate-200 bg-slate-50/60 px-4 py-3 text-sm text-slate-700 outline-none transition-all placeholder:text-slate-400 focus:border-brand focus:bg-white focus:ring-2 focus:ring-brand/10";

  return (
    <section id="enquire" className="relative z-10 -mt-10 bg-transparent">
      <div className="container-site px-5 sm:px-8 lg:px-12">
        <Reveal>
          <div className="overflow-hidden rounded-2xl bg-white p-6 shadow-2xl shadow-brand-navy/15 sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h2 className="font-heading text-xl font-bold text-brand-navy">
                  Enquire About Admissions
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Share your details — our admissions team replies within one
                  working day.
                </p>
              </div>
              <a
                href="tel:+919865820000"
                className="flex items-center gap-2.5 font-heading text-sm font-bold text-brand transition-colors hover:text-brand-orange"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand/[0.07]">
                  <Icon name="phone" className="h-4 w-4" />
                </span>
                +91 98658 20000
              </a>
            </div>

            <form
              onSubmit={handleSubmit}
              className="mt-6 grid gap-3.5 border-t border-slate-100 pt-6 md:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_1.2fr_auto]"
            >
              <input name="name" required placeholder="Parent's Name" className={field} />
              <input name="phone" type="tel" required placeholder="Phone Number" className={field} />
              <input name="email" type="email" required placeholder="Email Address" className={field} />
              <select name="grade" required defaultValue="" className={field}>
                <option value="" disabled>
                  Programme Applying For
                </option>
                <option>K&apos;sirs Early Years (Ages 3–6)</option>
                <option>CISCE — Primary (Grades 1–5)</option>
                <option>CISCE — Middle (Grades 6–8)</option>
                <option>CISCE — ICSE &amp; ISC (Grades 9–12)</option>
                <option>Cambridge — IGCSE, AS &amp; A Levels</option>
              </select>
              <button
                type="submit"
                className="flex items-center justify-center gap-2 rounded-lg bg-brand-orange px-7 py-3 font-heading text-xs font-bold uppercase tracking-wider text-white shadow-md shadow-brand-orange/30 transition-all hover:-translate-y-0.5 hover:bg-brand"
              >
                Submit
                <Icon name="arrowRight" className="h-4 w-4" />
              </button>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
