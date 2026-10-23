import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // REPLACE: set to the real domain once it is known (used for sitemap, canonical and Open Graph URLs).
  // The GitHub Pages demo build overrides site and base via env vars — see .github/workflows/deploy.yml.
  site: process.env.SITE_URL ?? 'https://www.rosysessentials.co.ke',
  base: process.env.BASE_PATH ?? '/',
  integrations: [
    sitemap({
      // Utility pages stay out of search results
      filter: (page) => !page.includes('/thank-you/') && !page.includes('/404'),
    }),
  ],
});
