// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

import svelte from "@astrojs/svelte";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://dallas-roofing-partners.pages.dev",
  integrations: [sitemap(), svelte()],

  vite: {
    plugins: [tailwindcss()],
  },
});