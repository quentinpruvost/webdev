import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte'],
	preprocess: [vitePreprocess()],

	kit: {
		adapter: adapter({
			// pages: 'build', (valeur par défaut)
			// assets: 'build', (valeur par défaut)
			
			// ON AJOUTE CETTE LIGNE
			fallback: '404.html'
		}),

		// ON AJOUTE CETTE SECTION pour pré-rendre toutes les pages
		prerender: {
			entries: ['*']
		}
	}
};

export default config;