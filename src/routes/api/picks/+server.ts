import { games, picks, teams } from "$lib/server/db.schema";
import { json } from "@sveltejs/kit";
import type { RequestHandler } from "@sveltejs/kit";
import { eq } from "drizzle-orm";

export const GET: RequestHandler = async ({ locals, url }) => {
  const getAll = url.searchParams.get("all");

  let query = locals.db
    .select()
    .from(picks)
    .innerJoin(teams, eq(picks.teamId, teams.teamId))
    .innerJoin(games, eq(picks.gameId, games.gameId));

  if (!getAll) {
    // TODO: get userId from session
    query = query.where(eq(picks.userId, '1'));
  }

  const picksQuery = await query
    .orderBy(picks.weekId)
    .all();

  return json(picksQuery);
}
