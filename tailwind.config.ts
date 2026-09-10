import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        graphite: "#12161C",
        charcoal: "#12161C",
        steel: "#5B6774",
        slate: "#5B6774",
        mist: "#F1F4F7",
        sand: "#FFFFFF",
        line: "#E2E7EC",
        cyan: {
          DEFAULT: "#0FB4C4",
          dim: "#0C8F9C",
          soft: "#E5F8FA",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      maxWidth: {
        content: "1280px",
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(180deg, rgba(79,216,224,0) 0%, rgba(79,216,224,0.06) 50%, rgba(79,216,224,0) 100%)",
      },
      keyframes: {
        "trace-draw": {
          "0%": { strokeDashoffset: "1200" },
          "100%": { strokeDashoffset: "0" },
        },
        "drift": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "trace-draw": "trace-draw 2.4s ease-out forwards",
        "drift": "drift 40s linear infinite",
        "fade-up": "fade-up 0.7s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
