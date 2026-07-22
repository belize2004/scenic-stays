// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://scenicstays.flowwebdesigner.com',
  outDir: 'dist',
  vite: {
    plugins: [tailwindcss()],
  },
});
