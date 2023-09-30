<script lang="ts">
	import { goto } from '$app/navigation';
	import { isBefore } from 'date-fns';
	import GameTime from './GameTime.svelte';
	import Spread from './Spread.svelte';
	import GameDetails from './GameDetails.svelte';
	import { format } from 'date-fns-tz';

	type Game = {
		gameId: string;
		gameTime: Date;
		disabled: boolean;
		showDateHeader: boolean;
		spread: number;
		homeTeam: {
			abbreviation: string;
			name: string;
			logo: string;
		};
		awayTeam: {
			abbreviation: string;
			name: string;
			logo: string;
		};
	};

	export let game: Game;
</script>

{#if game.showDateHeader}
	<div class="mt-8 mb-4 text-md font-bold uppercase">
		{format(game.gameTime, 'EEEE, MMMM do')}
	</div>
{/if}

<div
	class="card my-4 card-border drop-shadow-lg max-w-full cursor-pointer"
	on:click={() => goto(`/games/${game.gameId}`)}
	on:keydown={() => undefined}
	role="button"
	tabindex="0"
>
	<div class="card-body p-2 pb-4">
		<div class="flex flex-col">
			<div class="flex flex-nowrap justify-between p-2 pb-4">
				<GameTime gameTime={game.gameTime} />

				{#if isBefore(new Date(), game.gameTime)}
					<Spread
						spread={game.spread}
						homeTeam={game.homeTeam.abbreviation}
						awayTeam={game.awayTeam.abbreviation}
					/>
				{/if}
			</div>
			<div>
				<GameDetails awayTeam={game.awayTeam} homeTeam={game.homeTeam} />
			</div>
		</div>
	</div>
</div>
