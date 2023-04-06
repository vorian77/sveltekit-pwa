<!-- {
  "svelte.plugin.svelte.compilerWarnings": {
    "a11y-click-events-have-key-events": "ignore"
  }
} -->
<script>
	import { Geolocation } from '@capacitor/geolocation'
	import { Camera, CameraResultType } from '@capacitor/camera'

	let loc = null
	async function getCurrentPosition() {
		const res = await Geolocation.getCurrentPosition()
		loc = res
	}

	let picture = './src/cup.jpg'
	const takePicture = async () => {
		const image = await Camera.getPhoto({
			quality: 90,
			allowEditing: true,
			resultType: CameraResultType.Uri
		})
		picture = image.webPath
	}
</script>

<ion-content fullscreen>
	<ion-card>
		<ion-title size="large">Ionic - Geolocation</ion-title>
		<p>Your location is:</p>
		<p>Latitude: {loc?.coords.latitude}</p>
		<p>Longitude: {loc?.coords.longitude}</p>
		<ion-button on:click={getCurrentPosition}> Get Current Location </ion-button>
	</ion-card>

	<ion-card>
		<ion-title size="large">Ionic - Camera</ion-title>
		<img class="fit-picture" src={picture} alt="pic from camera" />
		<ion-button on:click={takePicture}>Take Picture</ion-button>
	</ion-card>
</ion-content>

<style>
	ion-title {
		--color: #21a461;
	}
</style>
