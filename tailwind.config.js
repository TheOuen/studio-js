/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx,ts,tsx,mdx}',
    './components/**/*.{js,jsx,ts,tsx,mdx}',
    './app/**/*.{js,jsx,ts,tsx,mdx}',
    './src/**/*.{js,jsx,ts,tsx,mdx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "rgb(38 38 38)",
        input: "rgb(64 64 64)",
        ring: "rgb(255 255 255)",
        background: "rgb(0 0 0)",
        foreground: "rgb(255 255 255)",
        primary: {
          DEFAULT: "rgb(255 255 255)",
          foreground: "rgb(0 0 0)",
        },
        secondary: {
          DEFAULT: "rgb(38 38 38)",
          foreground: "rgb(255 255 255)",
        },
        destructive: {
          DEFAULT: "rgb(239 68 68)",
          foreground: "rgb(255 255 255)",
        },
        muted: {
          DEFAULT: "rgb(38 38 38)",
          foreground: "rgb(161 161 170)",
        },
        accent: {
          DEFAULT: "rgb(38 38 38)",
          foreground: "rgb(255 255 255)",
        },
        popover: {
          DEFAULT: "rgb(0 0 0)",
          foreground: "rgb(255 255 255)",
        },
        card: {
          DEFAULT: "rgb(0 0 0)",
          foreground: "rgb(255 255 255)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}