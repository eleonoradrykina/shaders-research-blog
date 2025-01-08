// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://eleonoradrykina.github.io/shaders-research-blog/',
	base: "/shaders-research-blog",
	integrations: [mdx(), sitemap()],
});
