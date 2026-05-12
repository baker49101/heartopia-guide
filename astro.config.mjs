import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://xdxz.qichuan.xyz',
  output: 'static',
  integrations: [sitemap()]
});
