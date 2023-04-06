<!-- <script>
	import '../app.css';
</script>

<slot /> -->
<script>
	import '../app.css';
	import { App } from 'konsta/svelte';
</script>

<!-- <script>
	import '../app.css';
	import { APP_NAME } from '$lib/constants';
	import { App } from 'konsta/svelte';

	/* disable right click */
	// document.addEventListener('contextmenu', (event) => event.preventDefault());
</script>

<svelte:head>
	<title>{APP_NAME}</title>
	<meta name="description" content={APP_NAME} />
</svelte:head>

<App theme="ios">
	<slot />
</App> -->

<App safeAreas theme="ios">
	<slot />
</App>
