"use client";

import Image from "next/image";
import Icon from "./Icon";

const quickLinks = [
  { label: "About K'sirs", href: "/about" },
  { label: "Learning @ K'sirs", href: "/learning" },
  { label: "Life @ K'sirs", href: "/life" },
  { label: "News & Events", href: "/news" },
  { label: "Contact Us", href: "/contact" },
  { label: "Blogs — K'press", href: "https://kpress.ksirs.in" },
];

const programmes = [
  { label: "K'sirs Early Years", href: "/learning" },
  { label: "CISCE — ICSE & ISC", href: "/learning" },
  { label: "Cambridge — IGCSE", href: "/learning" },
  { label: "AS & A Levels", href: "/learning" },
  { label: "Admissions", href: "/admissions" },
];

const socials = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/ksirs.in",
    path: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/ksirsinternationalschool",
    path: "M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm9.5 4.5h.01M16 11.37a4 4 0 11-7.914 1.173A4 4 0 0116 11.37z",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@ksirsinternationalschool",
    path: "M22.54 6.42a2.78 2.78 0 00-1.95-2C18.88 4 12 4 12 4s-6.88 0-8.59.42a2.78 2.78 0 00-1.95 2A29 29 0 001 11.75a29 29 0 00.46 5.33 2.78 2.78 0 001.95 2c1.71.42 8.59.42 8.59.42s6.88 0 8.59-.42a2.78 2.78 0 001.95-2 29 29 0 00.46-5.33 29 29 0 00-.46-5.33zM9.75 15.02l5.75-3.27-5.75-3.27v6.54z",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/ksirs",
    path: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4V9h4v1.57A6 6 0 0116 8zM6 9H2v12h4zM4 6a2 2 0 100-4 2 2 0 000 4z",
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-brand-navy text-white">
      <div className="dot-grid absolute inset-0 opacity-20" />
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-brand/40 blur-3xl" />

      <div className="container-site relative grid gap-12 px-5 py-16 sm:px-8 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:px-12">
        {/* Brand */}
        <div>
          <div className="inline-block rounded-2xl bg-white p-3.5">
            <Image
              src="/images/logo.png"
              alt="K'sirs International School"
              width={170}
              height={52}
              className="h-11 w-auto"
            />
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
            An ethnically rich space set amidst nature, carrying every child
            from infancy to independence through CISCE and Cambridge pathways.
          </p>
          <div className="mt-6 flex gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition-all duration-300 hover:-translate-y-1 hover:border-brand-orange hover:bg-brand-orange"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.6}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d={social.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="font-heading text-lg font-bold">Quick Links</h3>
          <ul className="mt-5 space-y-3">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="group inline-flex items-center gap-2.5 text-sm text-white/70 transition-colors hover:text-brand-orange"
                >
                  <span className="h-px w-4 bg-brand-orange transition-all duration-300 group-hover:w-6" />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Programmes */}
        <div>
          <h3 className="font-heading text-lg font-bold">Programmes</h3>
          <ul className="mt-5 space-y-3">
            {programmes.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="group inline-flex items-center gap-2.5 text-sm text-white/70 transition-colors hover:text-brand-orange"
                >
                  <span className="h-px w-4 bg-brand-orange transition-all duration-300 group-hover:w-6" />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-heading text-lg font-bold">Get in Touch</h3>
          <ul className="mt-5 space-y-4 text-sm text-white/70">
            <li className="flex items-start gap-3">
              <Icon name="mapPin" className="mt-0.5 h-5 w-5 shrink-0 text-brand-orange" />
              <span>
                K&apos;sirs International School,
                <br />
                Chinnavedampatti, Coimbatore – 641 049
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Icon name="phone" className="h-5 w-5 shrink-0 text-brand-orange" />
              <span>
                <a href="tel:+919865820000" className="transition-colors hover:text-brand-orange">
                  +91 98658 20000
                </a>
                {" · "}
                <a href="tel:+919788720000" className="transition-colors hover:text-brand-orange">
                  +91 97887 20000
                </a>
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Icon name="mail" className="h-5 w-5 shrink-0 text-brand-orange" />
              <a href="mailto:admission@ksirs.in" className="transition-colors hover:text-brand-orange">
                admission@ksirs.in
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="container-site flex flex-col items-center justify-between gap-3 px-5 py-6 text-center text-xs text-white/50 sm:flex-row sm:px-8 lg:px-12">
          <p>
            © {new Date().getFullYear()} K&apos;sirs International School. All
            rights reserved.
          </p>
          <p>Powered by Studio K&apos;sirs</p>
        </div>
      </div>
    </footer>
  );
}
