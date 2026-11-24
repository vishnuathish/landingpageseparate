"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import Icon from "./Icon";

const menuLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Learning @ K'sirs", href: "/learning" },
  { label: "Life @ K'sirs", href: "/life" },
  { label: "News & Events", href: "/news" },
  { label: "Admissions", href: "/admissions" },
  { label: "Contact Us", href: "/contact" },
];

const panelVariants = {
  hidden: { opacity: 0, x: 48, scale: 0.98 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.21, 0.6, 0.35, 1] as const,
      staggerChildren: 0.055,
      delayChildren: 0.1,
    },
  },
  exit: { opacity: 0, x: 40, transition: { duration: 0.25 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: 28 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.45, ease: [0.21, 0.6, 0.35, 1] as const },
  },
};

export default function Navbar({ startSolid = false }: { startSolid?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Transparent over a dark hero; solid white once the page scrolls.
  // Pages with a light hero pass startSolid to keep it solid from the top.
  const solid = startSolid || scrolled || open;

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        solid
          ? "bg-white/95 shadow-md shadow-brand-navy/5 backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <nav className="container-site flex items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
        <Link
          href="/"
          className={`flex items-center rounded-xl transition-colors duration-500 ${
            solid ? "" : "bg-white/95 p-2 shadow-sm"
          }`}
        >
          <Image
            src="/images/logo.png"
            alt="K'sirs International School"
            width={150}
            height={46}
            priority
            className="h-9 w-auto sm:h-10"
          />
        </Link>

        <div className="flex items-center gap-4 sm:gap-6">
          {/* Open-hours status */}
          <div
            className={`hidden text-right md:block ${
              solid ? "text-brand-navy" : "text-white"
            }`}
          >
            <p className="flex items-center justify-end gap-2 font-heading text-sm font-bold uppercase tracking-wide">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-green/60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand-green" />
              </span>
              Open — 9am to 4pm
            </p>
            <p
              className={`text-[11px] uppercase tracking-widest ${
                solid ? "text-slate-500" : "text-white/70"
              }`}
            >
              Coimbatore, India
            </p>
          </div>

          <a
            href="/admissions"
            className="rounded-md bg-brand-orange px-5 py-3 font-heading text-xs font-bold uppercase tracking-wider text-white shadow-md shadow-brand-orange/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand sm:px-7"
          >
            Admissions
          </a>

          {/* Hamburger */}
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className={`flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-md border transition-colors duration-300 ${
              solid
                ? "border-brand/15 hover:border-brand/40"
                : "border-white/40 hover:border-white"
            }`}
          >
            <span
              className={`h-0.5 w-5 transition-all ${open ? "translate-y-2 rotate-45" : ""} ${
                solid ? "bg-brand" : "bg-white"
              }`}
            />
            <span
              className={`h-0.5 w-5 transition-all ${open ? "opacity-0" : ""} ${
                solid ? "bg-brand" : "bg-white"
              }`}
            />
            <span
              className={`h-0.5 w-5 transition-all ${open ? "-translate-y-2 -rotate-45" : ""} ${
                solid ? "bg-brand" : "bg-white"
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Overlay menu — indigo rounded panel sliding in from the right */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-0 z-40 h-[100dvh]"
          >
            {/* Scrim */}
            <button
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="absolute inset-0 cursor-default bg-brand-navy/45 backdrop-blur-[2px]"
            />

            {/* Panel */}
            <motion.nav
              variants={panelVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute right-4 top-24 w-[min(92vw,24rem)] overflow-hidden rounded-2xl bg-brand p-9 shadow-2xl shadow-brand-navy/40 sm:right-8"
            >
              <ul className="flex flex-col gap-1">
                {menuLinks.map((link) => (
                  <motion.li key={link.href} variants={itemVariants}>
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="group flex items-center justify-between rounded-lg px-3 py-2.5 font-heading text-[1.35rem] font-semibold text-white transition-colors hover:bg-white/10"
                    >
                      {link.label}
                      <span className="h-2 w-2 rounded-full bg-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </a>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                variants={itemVariants}
                className="mt-6 flex items-center justify-between gap-4 border-t border-white/15 pt-6"
              >
                <p className="text-xs leading-relaxed text-white/60">
                  <span className="mr-1.5 inline-block h-2 w-2 rounded-full bg-brand-green align-middle" />
                  Open — 9am to 4pm
                  <br />
                  Coimbatore, India
                </p>
                <a
                  href="/admissions"
                  onClick={() => setOpen(false)}
                  className="shrink-0 rounded-md bg-brand-orange px-5 py-3 font-heading text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-brand"
                >
                  Admissions
                  <Icon name="arrowRight" className="ml-2 inline h-3.5 w-3.5" />
                </a>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
