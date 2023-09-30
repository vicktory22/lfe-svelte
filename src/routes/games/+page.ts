import { fromPromise } from '$lib/try-catch';
import { fromUnixTime, isAfter } from 'date-fns';
import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';
import { format } from 'date-fns-tz';

export const load: PageLoad = async ({ fetch }) => {
	const fetchGamesResult = await fromPromise(fetch('/api/games').then((res) => res.json()));

	if (fetchGamesResult.isErr()) {
		throw error(500, 'Could not fetch games');
	}

	let latestGameDate = new Date();

	const games = fetchGamesResult.unwrap().map((game: any) => {
		const gameTime = fromUnixTime(game.games.gameTime);
		const disabled = isAfter(new Date(), gameTime);
		let showDateHeader = false;

		if (format(latestGameDate, 'yyyyMMdd') !== format(gameTime, 'yyyyMMdd')) {
			latestGameDate = gameTime;
			showDateHeader = true;
		}

		return {
			gameId: game.games.gameId,
			gameTime,
			disabled,
			showDateHeader,
			spread: game.games.spread,
			homeTeam: {
				abbreviation: game.homeTeam.abbreviation,
				shortName: game.homeTeam.shortName,
				logo: game.homeTeam.logo
			},
			awayTeam: {
				abbreviation: game.awayTeam.abbreviation,
				shortName: game.awayTeam.shortName,
				logo: game.awayTeam.logo
			}
		};
	});

	return { games };
};
