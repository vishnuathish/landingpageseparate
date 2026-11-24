"use client";

// Original flat vector illustration: an open book with a sprout growing
// out of it, a sun, a pencil and sparkles — drawn in the brand palette.
export default function HeroIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 300 170" fill="none" aria-hidden className={className}>
      {/* Sun */}
      <circle cx="42" cy="40" r="15" fill="#f57a3d" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
        <line
          key={deg}
          x1={42 + 22 * Math.cos((deg * Math.PI) / 180)}
          y1={40 + 22 * Math.sin((deg * Math.PI) / 180)}
          x2={42 + 29 * Math.cos((deg * Math.PI) / 180)}
          y2={40 + 29 * Math.sin((deg * Math.PI) / 180)}
          stroke="#f57a3d"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
      ))}

      {/* Book cover */}
      <path
        d="M80 128 C 115 108 145 108 150 120 C 155 108 185 108 220 128 L 220 146 C 185 128 157 128 150 140 C 143 128 115 128 80 146 Z"
        fill="#2e3591"
      />
      {/* Pages */}
      <path
        d="M86 124 C 116 107 143 108 150 118 L 150 134 C 143 124 116 123 86 138 Z"
        fill="#eef1fd"
      />
      <path
        d="M214 124 C 184 107 157 108 150 118 L 150 134 C 157 124 184 123 214 138 Z"
        fill="#eef1fd"
      />
      {/* Page lines */}
      <path d="M98 122 C 115 114 132 113 143 117" stroke="#2e3591" strokeWidth="2.5" strokeLinecap="round" opacity="0.35" />
      <path d="M98 129 C 115 121 132 120 143 124" stroke="#2e3591" strokeWidth="2.5" strokeLinecap="round" opacity="0.25" />
      <path d="M202 122 C 185 114 168 113 157 117" stroke="#2e3591" strokeWidth="2.5" strokeLinecap="round" opacity="0.35" />
      <path d="M202 129 C 185 121 168 120 157 124" stroke="#2e3591" strokeWidth="2.5" strokeLinecap="round" opacity="0.25" />

      {/* Sprout growing from the book */}
      <path d="M150 112 C 150 92 150 82 150 72" stroke="#2bb061" strokeWidth="4" strokeLinecap="round" />
      <path d="M150 88 C 138 86 128 76 128 62 C 142 62 150 72 150 88 Z" fill="#2bb061" />
      <path d="M150 76 C 162 74 172 64 172 50 C 158 50 150 60 150 76 Z" fill="#00d8d8" />

      {/* Pencil */}
      <g transform="rotate(32 248 92)">
        <rect x="238" y="52" width="20" height="62" rx="4" fill="#f57a3d" />
        <rect x="238" y="52" width="20" height="10" rx="4" fill="#fbbf24" />
        <path d="M238 114 L 248 134 L 258 114 Z" fill="#fde7d4" />
        <path d="M244 126 L 248 134 L 252 126 Z" fill="#031b4e" />
      </g>

      {/* Sparkles and dots */}
      <path d="M96 62 l3.5 9 9 3.5 -9 3.5 -3.5 9 -3.5 -9 -9 -3.5 9 -3.5 Z" fill="#00d8d8" />
      <path d="M196 44 l2.8 7 7 2.8 -7 2.8 -2.8 7 -2.8 -7 -7 -2.8 7 -2.8 Z" fill="#f57a3d" />
      <circle cx="226" cy="30" r="4" fill="#2bb061" />
      <circle cx="74" cy="92" r="4" fill="#2e3591" opacity="0.5" />
      <circle cx="282" cy="120" r="5" fill="#f59db5" />
    </svg>
  );
}
