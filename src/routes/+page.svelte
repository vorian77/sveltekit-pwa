<!-- <h1 class="text-3xl font-bold underline">Hello world!</h1>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
	}
</style> -->
<script>
	import { Page, Navbar, Block, Button, List, ListItem, BlockTitle } from 'konsta/svelte';

	import { Geolocation } from '@capacitor/geolocation';

	let loc = null;
	async function getCurrentPosition() {
		const res = await Geolocation.getCurrentPosition();
		loc = res;
	}
</script>

<!-- <script lang="ts">
	import { Page, Navbar, Block, Button, List, ListItem, BlockTitle } from 'konsta/svelte';
</script>

<Page>
	<Navbar title="My App" />

	<Block strong>
		<p>Here is your SvelteKit & Konsta UI app. Let's see what we have here.</p>
	</Block>
	<BlockTitle>Navigation</BlockTitle>
	<List>
		<ListItem href="/about/" title="About" />
		<ListItem href="/form/" title="Form" />
	</List>

	<Block strong class="flex space-x-4">
		<Button>Button 1</Button>
		<Button>Button 2</Button>
	</Block>
</Page> -->

<Page>
	<Navbar title="My App" />

	<Block strong>
		<p>Here is your SvelteKit & Konsta UI app. Let's see what we have here.</p>
	</Block>
	<BlockTitle>Navigation</BlockTitle>
	<List>
		<ListItem href="/about/" title="About" />
		<ListItem href="/form/" title="Form" />
	</List>

	<Block strong class="flex space-x-4">
		<Button>Button 10</Button>
		<Button>Button 2</Button>
	</Block>

	<div>
		<h1>Geolocation</h1>
		<p>Your location is:</p>
		<p>Latitude: {loc?.coords.latitude}</p>
		<p>Longitude: {loc?.coords.longitude}</p>

		<button on:click={getCurrentPosition}> Get Current Location </button>
	</div>
</Page>
