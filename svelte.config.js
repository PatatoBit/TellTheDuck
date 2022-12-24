import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
import seqPreprocessor from 'svelte-sequential-preprocessor';
import { preprocessThrelte } from '@threlte/preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors

	kit: {
		adapter: adapter()
	},

	preprocess: seqPreprocessor([vitePreprocess(), preprocessThrelte()])
};

export default config;
