import { SECRET_DB_URL, SECRET_DB_AUTH_TOKEN } from '$env/static/private';
import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client/http';
import { games, teams } from '$lib/server/db.schema';
import { json } from '@sveltejs/kit';
import { alias } from 'drizzle-orm/sqlite-core';
import type { RequestHandler } from '@sveltejs/kit';
import { eq } from 'drizzle-orm';

export const GET: RequestHandler = async ({ locals }) => {
  const db = drizzle(createClient({ url: SECRET_DB_URL, authToken: SECRET_DB_AUTH_TOKEN }));
	const homeTeam = alias(teams, 'homeTeam');
	const awayTeam = alias(teams, 'awayTeam');

	const gamesQuery = await db
		.select()
		.from(games)
		.innerJoin(homeTeam, eq(games.homeTeamId, homeTeam.teamId))
		.innerJoin(awayTeam, eq(games.awayTeamId, awayTeam.teamId))
		.where(eq(games.weekId, locals.weekId))
		.orderBy(games.gameTime)
		.all();

	return json(gamesQuery);
};
