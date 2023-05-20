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
    },
  },
  plugins: [],
};
