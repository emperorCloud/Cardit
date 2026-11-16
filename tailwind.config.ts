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
        // ── Neutres (on garde tes valeurs, on supprime les doublons)
        graphite: "#12161C",
        charcoal: "#12161C", // alias de graphite — on tranche : utilise graphite partout
        steel: "#5B6774",
        slate: "#5B6774",    // alias de steel — on tranche : utilise steel partout
        mist: "#F1F4F7",
        sand: "#FFFFFF",
        line: "#E2E7EC",

        // ── Cyan (signature)
        cyan: {
          DEFAULT: "#0FB4C4",
          dim: "#0C8F9C",
          soft: "#E5F8FA",
        },

        // ── NOUVEAU : bleu-nuit profond pour les sections dark (rupture visuelle)
        navy: {
          DEFAULT: "#0A1220",  // plus profond que graphite → hiérarchie des noirs
          soft: "#131D2E",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      maxWidth: {
        content: "1200px", // resserré premium (était 1280)
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(180deg, rgba(79,216,224,0) 0%, rgba(79,216,224,0.06) 50%, rgba(79,216,224,0) 100%)",
        // NOUVEAU : halo cyan radial pour les sections dark
        "cyan-halo":
          "radial-gradient(circle at 50% 0%, rgba(15,180,196,0.25) 0%, rgba(15,180,196,0) 60%)",
      },
      boxShadow: {
        // NOUVEAU : ombres cyan diffuse (premium, pas fluo)
        "cyan-sm": "0 8px 24px -8px rgba(15,180,196,0.45)",
        "cyan-md": "0 16px 40px -16px rgba(15,180,196,0.5)",
        "card":    "0 20px 40px -24px rgba(18,22,28,0.18)",
      },
      keyframes: {
        "trace-draw": {
          "0%": { strokeDashoffset: "1200" },
          "100%": { strokeDashoffset: "0" },
        },
        drift: {
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
        drift: "drift 40s linear infinite",
        "fade-up": "fade-up 0.7s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;