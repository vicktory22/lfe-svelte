<script lang="ts">
  import { PUBLIC_CLERK_KEY } from '$env/static/public';
	import Clerk from '@clerk/clerk-js';
	import { onMount } from 'svelte';

	const clerkFrontendApi = `pk_${PUBLIC_CLERK_KEY}`;

	let signUpElement: any;

	onMount(async () => {
		const clerk = new Clerk(clerkFrontendApi);
		console.log('first clerk', clerk);
		await clerk.load({
			signInUrl: '/signin',
			signUpUrl: '/signup',
			afterSignInUrl: '/app',
			afterSignUpUrl: '/app'
		});

		console.log('clerk', clerk);

		clerk.mountSignUp(signUpElement);
	});
</script>

<div bind:this={signUpElement} />
