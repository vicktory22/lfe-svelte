<script lang="ts">
	import { goto } from '$app/navigation';
	import Nav from '$lib/Nav.svelte';
	import TeamWithSpread from '$lib/TeamWithSpread.svelte';

	export let data: any;

	const game = data.game;
</script>

<Nav>
	<div class="flex flex-col justify-center p-2 h-screen">
		<div>
			<TeamWithSpread team={game.awayTeam} spread={-game.games.spread} />
		</div>

		<div class="divider">OR</div>

		<div>
			<TeamWithSpread team={game.homeTeam} spread={game.games.spread} />
		</div>
		<div class="mt-6">
			<button class="btn btn-solid-warning btn-block drop-shadow-lg" on:click={() => goto('/games')}
				>Cancel</button
			>
		</div>
	</div>
</Nav>
