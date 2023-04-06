<!-- {
  "svelte.plugin.svelte.compilerWarnings": {
    "a11y-click-events-have-key-events": "ignore"
  }
} -->
<script>
	import { Geolocation } from '@capacitor/geolocation';

	let loc = null;
	async function getCurrentPosition() {
		const res = await Geolocation.getCurrentPosition();
		loc = res;
	}
</script>

<!-- <h1 class="text-3xl font-bold underline">Hello world!</h1>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
	}
</style> -->
<!-- <script>
	import { Page, Navbar, Block, Button, List, ListItem, BlockTitle } from 'konsta/svelte';

	import { Geolocation } from '@capacitor/geolocation';
	import { Camera, CameraResultType } from '@capacitor/camera';

	let loc = null;
	async function getCurrentPosition() {
		const res = await Geolocation.getCurrentPosition();
		loc = res;
	}

	let picture = './src/cup.jpg';
	const takePicture = async () => {
		const image = await Camera.getPhoto({
			quality: 90,
			allowEditing: true,
			resultType: CameraResultType.Uri
		});

		// image.webPath will contain a path that can be set as an image src.
		// You can access the original file using image.path, which can be
		// passed to the Filesystem API to read the raw data of the image,
		// if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
		picture = image.webPath;
		alert(picture);

		// Can be set to the src of an image now
		//imageElement.src = imageUrl;
	};
</script> -->

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

<!-- <Page>
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

	<Block strong>
		<div>
			<h1>Geolocation</h1>
			<p>Your location is:</p>
			<p>Latitude: {loc?.coords.latitude}</p>
			<p>Longitude: {loc?.coords.longitude}</p>

			<button on:click={getCurrentPosition}> Get Current Location </button>
		</div>
	</Block>

	<Block strong>
		<div>
			<Button onClick={takePicture}>Take picture1</Button>
			<img class="fit-picture" src={picture} alt="pic from camera" />
		</div>
	</Block>
</Page> -->

<ion-header translucent="true">
	<ion-toolbar>
		<ion-buttons slot="start">
			<ion-menu-button />
		</ion-buttons>
		<ion-buttons slot="end"> A button </ion-buttons>
		<ion-title>Card</ion-title>
	</ion-toolbar>
</ion-header>

<ion-content fullscreen>
	<ion-button>Default1</ion-button>
	<ion-button disabled="true">Disabled</ion-button>

	<ion-card>
		<ion-card-header>
			<ion-card-subtitle>Card Subtitle</ion-card-subtitle>
			<ion-card-title>Card Title</ion-card-title>
		</ion-card-header>

		<ion-card-content>
			Keep close to Nature's heart... and break clear away, once in awhile, and climb a mountain or
			spend a week in the woods. Wash your spirit clean.
		</ion-card-content>
	</ion-card>
	<h1>Geolocation</h1>
	<p>Your location is:</p>
	<p>Latitude: {loc?.coords.latitude}</p>
	<p>Longitude: {loc?.coords.longitude}</p>

	<button on:click={getCurrentPosition}> Get Current Location </button>
</ion-content>
