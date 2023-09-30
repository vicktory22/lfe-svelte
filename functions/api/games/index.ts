import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client/web';
import { games, teams } from '../../../src/lib/server/db.schema';
import { alias } from 'drizzle-orm/sqlite-core';
import { eq } from 'drizzle-orm';
import { json } from '@sveltejs/kit';

export async function onRequestGet({ env }) {
  const db = drizzle(createClient({ url: env.SECRET_DB_URL, authToken: env.SECRET_DB_AUTH_TOKEN }));

  const homeTeam = alias(teams, 'homeTeam');
  const awayTeam = alias(teams, 'awayTeam');

  const gamesQuery = await db
    .select()
    .from(games)
    .innerJoin(homeTeam, eq(games.homeTeamId, homeTeam.teamId))
    .innerJoin(awayTeam, eq(games.awayTeamId, awayTeam.teamId))
    .where(eq(games.weekId, 4))
    .orderBy(games.gameTime)
    .all();

  return json(gamesQuery);
}
