// <!-- {
//   "svelte.plugin.svelte.compilerWarnings": {
//     "a11y-click-events-have-key-events": "ignore"
//   }
// } -->

//import adapter from '@sveltejs/adapter-static';
import adapter from '@sveltejs/adapter-auto'
//import { vitePreprocess } from '@sveltejs/kit/vite';
//import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
// const config = {
// 	// Consult https://github.com/sveltejs/svelte-preprocess
// 	// for more information about preprocessors
// 	//preprocess: preprocess(),
// 	preprocess: preprocess(),

// 	kit: {
// 		adapter: adapter()
// 	}
// };

const config = {
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: 'index.html',
			precompress: false
		})
	}
}

export default config
