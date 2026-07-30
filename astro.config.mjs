// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://nodosur.org',
  integrations: [
    tailwind({
      applyBaseStyles: false, // Controlamos los estilos base manualmente en global.css
    }),
    react(),
    sitemap(),
  ],
  vite: {
    optimizeDeps: {
      exclude: ['@resvg/resvg-js'],
    },
  },
});
