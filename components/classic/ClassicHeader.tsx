"use client";

import { useState } from "react";
import Image from "next/image";
import Icon from "../Icon";

const links = [
  { label: "Home", href: "/home-alt" },
  { label: "About Us", href: "/about" },
  { label: "Academics", href: "/learning" },
  { label: "Campus Life", href: "/life" },
  { label: "News & Events", href: "/news" },
  { label: "Contact Us", href: "/contact" },
];

// Classic school-site header: utility top bar + traditional menu bar.
export default function ClassicHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      {/* Utility bar */}
      <div className="bg-brand-navy text-white/85">
        <div className="container-site flex items-center justify-between gap-4 px-5 py-2 text-xs sm:px-8 lg:px-12">
          <div className="flex items-center gap-5">
            <span className="hidden items-center gap-1.5 md:flex">
              <Icon name="mapPin" className="h-3.5 w-3.5 text-brand-orange" />
              Chinnavedampatti, Coimbatore — 641 049
            </span>
            <a href="tel:+919865820000" className="flex items-center gap-1.5 transition-colors hover:text-brand-orange">
              <Icon name="phone" className="h-3.5 w-3.5 text-brand-orange" />
              +91 98658 20000
            </a>
            <a href="mailto:admission@ksirs.in" className="hidden items-center gap-1.5 transition-colors hover:text-brand-orange sm:flex">
              <Icon name="mail" className="h-3.5 w-3.5 text-brand-orange" />
              admission@ksirs.in
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://kpress.ksirs.in"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-brand-orange"
            >
              K&apos;press
            </a>
            <a
              href="https://www.youtube.com/@ksirsinternationalschool"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-brand-orange"
            >
              YouTube
            </a>
          </div>
        </div>
      </div>

      {/* Menu bar */}
      <div className="border-b border-slate-100 bg-white shadow-sm">
        <div className="container-site flex items-center justify-between px-5 py-3.5 sm:px-8 lg:px-12">
          <a href="/home-alt" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="K'sirs International School"
              width={150}
              height={46}
              priority
              className="h-10 w-auto"
            />
          </a>

          <nav className="hidden items-center gap-7 xl:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative font-heading text-[13px] font-bold uppercase tracking-wide text-brand-navy transition-colors hover:text-brand"
              >
                {link.label}
                <span className="absolute -bottom-1.5 left-0 h-[2px] w-0 bg-brand-orange transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#enquire"
              className="rounded-md bg-brand-orange px-5 py-2.5 font-heading text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-brand"
            >
              Enquire Now
            </a>
            <button
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
              className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-md border border-brand/15 xl:hidden"
            >
              <span className={`h-0.5 w-5 bg-brand transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`h-0.5 w-5 bg-brand transition-opacity ${open ? "opacity-0" : ""}`} />
              <span className={`h-0.5 w-5 bg-brand transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {open && (
          <nav className="border-t border-slate-100 bg-white xl:hidden">
            <ul className="flex flex-col px-6 py-3">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-md px-3 py-2.5 font-heading text-sm font-bold uppercase tracking-wide text-brand-navy hover:bg-brand/5 hover:text-brand"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
