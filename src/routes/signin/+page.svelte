<script lang="ts">
	import { PUBLIC_CLERK_KEY } from '$env/static/public';
	import Clerk from '@clerk/clerk-js';
	import { onMount } from 'svelte';

	const clerkFrontendApi = `pk_${PUBLIC_CLERK_KEY}`;

	let signInElement: any;

	onMount(async () => {
		const clerk = new Clerk(clerkFrontendApi);
		await clerk.load();

		clerk.mountSignIn(signInElement, {
			signUpUrl: '/signup',
			afterSignInUrl: '/',
			redirectUrl: '/'
		});
	});
</script>

<div bind:this={signInElement} />
