import { goto } from '$app/navigation'

export function routeToPage(route: string, replaceState: boolean) {
	goto(`/${route}`, { replaceState })
}

export function goBack(defaultRoute = '/home') {
	const ref = document.referrer
	goto(ref.length > 0 ? ref : defaultRoute)
}
