// @ts-check
import cloudflare from "@astrojs/cloudflare";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import embeds from "astro-embed/integration";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	site: "https://example.com",
	integrations: [embeds(), mdx(), sitemap(), tailwind()],
	output: "hybrid",
	adapter: cloudflare({
		platformProxy: {
			enabled: true,
		},
	}),
});
