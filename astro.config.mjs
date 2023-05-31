import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import image from "@astrojs/image";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  integrations: [
    mdx(),
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    react(),
    image(),
  ],
  vite: {
    ssr: {
      noExternal: ["@radix-ui/*"],
    },
  },
  output: "hybrid",
  adapter: cloudflare(),
  experimental: {
    hybridOutput: true,
  },
});
