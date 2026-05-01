import type { Config } from "tailwindcss";
const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lime: {
          DEFAULT: "#D4FF00",
          light: "#E8FF66",
          dark: "#B8E600",
        },
        charcoal: {
          DEFAULT: "#1A1A1A",
          light: "#2A2A2A",
        },
        cream: {
          DEFAULT: "#FAFAF5",
          dark: "#F0F0E0",
        },
      },
      /** Geist Sans via next/font (see root layout)—same neo-grotesque role as Inter / comparable marketing stacks */
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;