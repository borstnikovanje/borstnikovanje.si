/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#E6E6F4",
          100: "#D1D1EB",
          200: "#A0A0D5",
          300: "#7272C0",
          400: "#4848A2",
          500: "#343475",
          600: "#29295C",
          700: "#1F1F47",
          800: "#14142E",
          900: "#0B0B19",
          950: "#05050B",
        },
      },
      fontFamily: {
        "tan-pearl": ["Tan Pearl", "serif"],
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        cerklje: "url('/photos/landing-page/cerklje-na-gorenjskem.jpg')",
        "nav-gradient":
          "linear-gradient(90deg, #D8A277 20.33%, #B0B3C9 89.63%)",
        grain: "url('/photos/background-images/background-grain.jpg')",
        hero: "url('/photos/background-images/background-header.jpg')",
        programme: "url('/photos/background-images/background-programme.png')",
        newsletter:
          "url('/photos/background-images/background-newsletter.jpg')",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [],
};
