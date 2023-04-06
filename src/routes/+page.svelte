<script>
	import { routeToPage } from '$lib/nav'
	//routeToPage('demo', false)
</script>

<ion-content fullscreen>
	<h1>Welcome</h1>
	<button on:click={() => routeToPage('auth/login', false)}>Login</button>
	<button on:click={() => routeToPage('auth/signup', false)}>Signup</button>
	<button on:click={() => routeToPage('demo', false)}>Demo</button>
</ion-content>
