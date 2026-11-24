"use client";

import type { ReactNode } from "react";

// Shared decorative pieces for the classic template.

/** Small rounded badge that sits above a section heading. */
export function Pill({
  children,
  light = false,
}: {
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 font-heading text-[11px] font-bold uppercase tracking-[0.18em] ${
        light
          ? "bg-white/10 text-white ring-1 ring-white/20"
          : "bg-brand/[0.07] text-brand ring-1 ring-brand/10"
      }`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
      {children}
    </span>
  );
}

/** Word with a hand-drawn underline stroke. */
export function Underlined({
  children,
  color = "#f57a3d",
}: {
  children: ReactNode;
  color?: string;
}) {
  return (
    <span className="relative inline-block">
      {children}
      <svg
        viewBox="0 0 120 12"
        preserveAspectRatio="none"
        aria-hidden
        className="absolute -bottom-1 left-0 h-2.5 w-full"
      >
        <path
          d="M3 9 Q 30 2 60 7 T 117 4"
          stroke={color}
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}

/** Square grid of dots. */
export function DotPattern({
  className,
  color = "#ffffff",
  rows = 5,
  cols = 5,
  opacity = 0.25,
}: {
  className?: string;
  color?: string;
  rows?: number;
  cols?: number;
  opacity?: number;
}) {
  return (
    <svg
      viewBox={`0 0 ${cols * 20} ${rows * 20}`}
      aria-hidden
      className={className}
      style={{ opacity }}
    >
      {Array.from({ length: rows }).map((_, r) =>
        Array.from({ length: cols }).map((_, c) => (
          <circle key={`${r}-${c}`} cx={6 + c * 20} cy={6 + r * 20} r="2.6" fill={color} />
        )),
      )}
    </svg>
  );
}

/** Scattered confetti dashes. */
export function Confetti({ className, color = "#ffffff" }: { className?: string; color?: string }) {
  const marks = [
    [8, 30, -20], [26, 12, 15], [44, 34, -35], [62, 8, 25],
    [18, 58, 40], [40, 66, -15], [64, 52, 30], [6, 76, -25],
  ] as const;
  return (
    <svg viewBox="0 0 80 90" aria-hidden className={className} fill="none">
      {marks.map(([x, y, rot], i) => (
        <rect
          key={i}
          x={x}
          y={y}
          width="3"
          height="11"
          rx="1.5"
          fill={color}
          transform={`rotate(${rot} ${x} ${y})`}
          opacity={i % 2 === 0 ? 0.9 : 0.55}
        />
      ))}
    </svg>
  );
}

/** Dotted squiggle used as a section divider. */
export function SquiggleDivider({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 60"
      fill="none"
      aria-hidden
      className={className}
      preserveAspectRatio="none"
    >
      <path
        d="M4 34 C 50 -8 96 60 142 28 S 234 -6 280 30 S 362 56 396 22"
        stroke="#2e3591"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="1 11"
        opacity="0.5"
      />
    </svg>
  );
}

/** Concentric arc lines, used behind hero imagery. */
export function ArcLines({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" aria-hidden className={className}>
      {Array.from({ length: 9 }).map((_, i) => (
        <line
          key={i}
          x1="20"
          y1={30 + i * 17}
          x2="180"
          y2={30 + i * 17}
          stroke="#f57a3d"
          strokeWidth="5"
          strokeLinecap="round"
          opacity={0.25 + i * 0.05}
        />
      ))}
    </svg>
  );
}
