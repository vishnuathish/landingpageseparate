"use client";

import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type Props = {
  children: ReactNode; // typically an <Image fill />
  /** 0–0.3 — how far the layer drifts while scrolling past (fraction of its height). */
  speed?: number;
  className?: string;
};

// Scroll-linked parallax drift for images. The inner layer is slightly
// oversized (scale) so the drift never exposes the container's edges.
// Drop it inside any `relative overflow-hidden` box with a set height.
export default function Parallax({ children, speed = 0.12, className }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // progresses 0→1 while the box crosses the viewport
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [`-${speed * 100}%`, `${speed * 100}%`],
  );

  return (
    <div ref={ref} className={`absolute inset-0 overflow-hidden ${className ?? ""}`}>
      <motion.div style={{ y, scale: 1 + speed * 2 }} className="absolute inset-0">
        {children}
      </motion.div>
    </div>
  );
}
