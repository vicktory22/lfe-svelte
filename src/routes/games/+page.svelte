<script lang="ts">
	import Game from '$lib/Game.svelte';
	import Nav from '$lib/Nav.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<Nav>
	<h1 class="text-xl">Games</h1>

	{#each data.games as game}
		<div class="flex flex-col">
			<Game {game} />
		</div>
	{/each}
</Nav>
