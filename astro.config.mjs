// astro.config.mjs
import { defineConfig } from 'astro/config';
import vercel from '@astro/adapters/vercel';

export default defineConfig({
  adapter: vercel(),  // Este es el adaptador que conecta tu proyecto con Vercel
});

