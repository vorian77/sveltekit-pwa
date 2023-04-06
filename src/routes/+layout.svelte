<script lang="ts">
	import { APP_NAME, APP_DESCRIPTION } from '$lib/constants' // here your menu component
	import { setupIonicBase } from 'ionic-svelte'
	setupIonicBase()
	import '$lib/theme/variables.css'
	/*
		The next command loads and registers all Ionic Webcomponents for you to use.
		This adds at least >800kb (uncompressed) to your bundle.
		You can also choose to import each component you want to use separately.
		It is recommended to do this in this file, as you only need to do such once. But you are free
		to do this elsewhere if you like to code-split differently.
		You can find these import lines to copy here - https://github.com/Tommertom/svelte-ionic-app/blob/main/components/all.js
	
		Please don't forget to import ion-app in this file when you decide to code-split:
		
	    import 'ionic-svelte/components/ion-app';
	*/
	import 'ionic-svelte/components/all'
</script>

<svelte:head>
	<title>{APP_NAME}</title>
	<meta name="description" content={APP_DESCRIPTION} />
</svelte:head>

<ion-app>
	<slot />
</ion-app>
