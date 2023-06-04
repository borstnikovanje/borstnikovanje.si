const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: colors.neutral[50],
        "primary-foreground": colors.neutral[950],
        muted: colors.neutral[500],
      },
      fontFamily: {
        "tan-pearl": ["Tan Pearl", "serif"],
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        cerklje: "url('/photos/landing-page/cerklje-na-gorenjskem.jpg')",
        "nav-gradient":
          "linear-gradient(90deg, rgba(58,49,127,1) 0%, rgba(70,69,146,1) 29%, rgba(242,104,68,1) 84%)",
        grain: "url('/photos/background-images/background-grain.jpg')",
        hero: "url('/photos/background-images/background-header.jpg')",
        programme: "url('/photos/background-images/background-programme.png')",
        "programme-gradient":
          "linear-gradient(98.73deg, #D782BB 25.89%, #E8D292 120.13%)",
        newsletter:
          "url('/photos/background-images/background-newsletter.jpg')",
        linktree: "url('/photos/background-images/background-linktree.jpg')",
        donate: "url('/photos/background-images/background-donate.jpg')",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
