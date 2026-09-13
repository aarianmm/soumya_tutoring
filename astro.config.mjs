// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// Static output — deployed to Cloudflare Pages.
// The /functions directory at the project root is picked up by Pages
// automatically and served at /api/*.
export default defineConfig({
  site: 'https://eureka-academy.pages.dev',
  output: 'static',

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [sitemap()],
});