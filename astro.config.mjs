import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // REPLACE: set to the real domain once it is known (used for sitemap, canonical and Open Graph URLs).
  site: 'https://www.rosysessentials.co.ke',
  integrations: [sitemap()],
});
