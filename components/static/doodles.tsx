"use client";

import type { ReactNode } from "react";

// Hand-drawn accent helpers for the light static template.

// Word with a squiggly hand-drawn underline.
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
        className="absolute -bottom-1.5 left-0 h-2.5 w-full"
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

// Curly hand-drawn arrow.
export function ArrowDoodle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 90 70" fill="none" aria-hidden className={className}>
      <path
        d="M6 10 C 40 2 70 18 62 38 C 56 52 36 52 34 40 C 32 28 52 24 66 36 C 74 43 78 52 80 60"
        stroke="#f57a3d"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path
        d="M72 56 L 80 61 L 84 51"
        stroke="#f57a3d"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Three radiating dash lines (sparkle accent).
export function SparkleDash({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 60" fill="none" aria-hidden className={className}>
      <path d="M30 20 L30 4" stroke="#2e3591" strokeWidth="4" strokeLinecap="round" />
      <path d="M16 26 L5 15" stroke="#2e3591" strokeWidth="4" strokeLinecap="round" />
      <path d="M44 26 L55 15" stroke="#2e3591" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

// Loose circle scribble.
export function CircleScribble({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" fill="none" aria-hidden className={className}>
      <path
        d="M40 10 C 62 8 74 24 70 42 C 66 62 42 74 24 64 C 8 55 6 32 20 20 C 30 11 48 10 58 18"
        stroke="#00d8d8"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
