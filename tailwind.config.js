/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./templates/**/*.html"],
  theme: {
    extend: {
      colors: {
        // Light Surfaces
        sand: {
          DEFAULT: "#F2EDE4",
          dk: "#DED6C8",
          lt: "#F8F5EF",
        },
        cream: "#FAF8F3",

        // Dark Surfaces — Timber
        timber: {
          DEFAULT: "#1A1410",
          mid: "#2A2118",
          lt: "#3A2E22",
          edge: "#4A3D2E",
        },

        // Ink (Text)
        ink: {
          DEFAULT: "#1E1A14",
          mid: "#3D3428",
          faded: "#6B5F50",
        },
        stone: "#8A7E6E",

        // Core Brand — Saddle
        saddle: {
          DEFAULT: "#6B3A1F",
          lt: "#7E4828",
          dk: "#5A3018",
        },

        // Primary Action — Forest Green
        forest: {
          DEFAULT: "#2E6B45",
          lt: "#3A8458",
          dk: "#245838",
        },

        // Wonder Accent — Copper
        copper: {
          DEFAULT: "#B8652A",
          lt: "#D07A35",
          dim: "rgba(184,101,42,0.15)",
          glow: "rgba(184,101,42,0.08)",
        },

        // Supporting Colors
        river: {
          DEFAULT: "#3A6B6E",
          lt: "#4A8A8E",
        },
        sage: {
          DEFAULT: "#5A7A52",
          lt: "#6E9466",
        },
        golden: {
          DEFAULT: "#C8900A",
          lt: "#E0A820",
        },
      },
      fontFamily: {
        display: ["Bitter", "Georgia", "serif"],
        body: ["Lora", "Georgia", "serif"],
        ui: ["Barlow Semi Condensed", "Arial Narrow", "sans-serif"],
        mono: ["Source Code Pro", "Courier New", "monospace"],
      },
      borderRadius: {
        DEFAULT: "4px",
        sm: "4px",
        md: "4px",
        lg: "4px",
        xl: "4px",
        "2xl": "4px",
        "3xl": "4px",
        full: "9999px",
      },
    },
  },
  plugins: [],
};
