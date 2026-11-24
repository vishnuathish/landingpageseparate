import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Exact brand colors extracted from ksirs.in
        brand: {
          DEFAULT: "#2e3591", // royal indigo — primary brand color
          banner: "#2d348f",
          navy: "#031b4e", // deep navy — headings / dark sections
          orange: "#f57a3d", // accent orange
          green: "#2bb061", // accent green
          teal: "#00d8d8", // highlight teal
        },
      },
      fontFamily: {
        heading: ["var(--font-jost)", "sans-serif"],
        body: ["var(--font-jost)", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      animation: {
        "float-slow": "float 9s ease-in-out infinite",
        "float-slower": "float 13s ease-in-out infinite",
        "spin-slow": "spin 24s linear infinite",
        marquee: "marquee 36s linear infinite",
        "marquee-fast": "marquee 22s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0) translateX(0)" },
          "50%": { transform: "translateY(-28px) translateX(14px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      boxShadow: {
        card: "0 1px 2px rgba(3,27,78,0.04), 0 12px 32px -12px rgba(3,27,78,0.12)",
        "card-hover":
          "0 2px 4px rgba(3,27,78,0.06), 0 24px 48px -16px rgba(46,53,145,0.25)",
      },
    },
  },
  plugins: [],
};

export default config;
