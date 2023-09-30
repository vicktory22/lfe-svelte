import { fromPromise } from "$lib/try-catch";
import type { PageLoad } from "./$types";
import { error } from "@sveltejs/kit";

export const load: PageLoad = async ({ fetch, params }) => {
  const fetchGamesResult = await fromPromise(fetch("/api/games").then((res) => res.json()));

  if (fetchGamesResult.isErr()) {
    throw error(500, "Could not fetch games");
  }

  const games = fetchGamesResult.unwrap();

  const game = games.find((game: any) => game.games.gameId.toString() === params.id);

  if (!game) {
    throw error(404, "Game not found");
  }

  return { game };
};
