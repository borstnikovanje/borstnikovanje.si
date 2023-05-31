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
          "linear-gradient(90deg, #D8A277 20.33%, #B0B3C9 89.63%)",
        grain: "url('/photos/background-images/background-grain.jpg')",
        hero: "url('/photos/background-images/background-header.jpg')",
        programme: "url('/photos/background-images/background-programme.png')",
        newsletter:
          "url('/photos/background-images/background-newsletter.jpg')",
        linktree: "url('/photos/background-images/background-linktree.jpg')",
      },
    },
  },
  plugins: [],
};
