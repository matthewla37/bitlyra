import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "logo-home": {
          "0%, 100%": { transform: "scale(1) rotate(0deg)" },
          "35%": { transform: "scale(0.88) rotate(-5deg)" },
          "65%": { transform: "scale(1.06) rotate(3deg)" },
        },
      },
      animation: {
        "logo-home":
          "logo-home 0.55s cubic-bezier(0.34, 1.45, 0.64, 1) both",
      },
      colors: {
        brand: {
          teal: "#0d9488",
          navy: "#0f766e",
          dark: "#134e4a",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        hero: [
          "var(--font-poppins)",
          "var(--font-inter)",
          "system-ui",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};

export default config;
