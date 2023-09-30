import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client/web';
import { games, picks, teams } from '../../../src/lib/server/db.schema';
import { json } from '@sveltejs/kit';
import { eq } from 'drizzle-orm';

export async function onRequestGet({ env }) {
  const db = drizzle(createClient({ url: env.SECRET_DB_URL, authToken: env.SECRET_DB_AUTH_TOKEN }));

  let query = db
    .select()
    .from(picks)
    .innerJoin(teams, eq(picks.teamId, teams.teamId))
    .innerJoin(games, eq(picks.gameId, games.gameId));


  const picksQuery = await query.orderBy(picks.weekId).all();

  return json(picksQuery);
};
