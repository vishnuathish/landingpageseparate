"use client";

import { useEffect } from "react";
import Lenis from "lenis";

// Lenis smooth scrolling (same library rakspallikkoodam.com uses).
// It eases the native window scroll, so Framer Motion's useScroll and
// the sticky navbar keep working unchanged.
export default function SmoothScroll() {
  useEffect(() => {
    // Respect users who prefer reduced motion.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      lerp: 0.1,
      anchors: true, // smooth-scrolls in-page #anchor links
    });

    let frame = requestAnimationFrame(function raf(time) {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    });

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  return null;
}
