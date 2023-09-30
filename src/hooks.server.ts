import { SECRET_DB_URL, SECRET_DB_AUTH_TOKEN } from '$env/static/private';
import type { Handle } from '@sveltejs/kit';
import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client/http';
import { getWeekId } from '$lib/server/weeks.service';

export const handle: Handle = async ({ event, resolve }) => {
	// load database
	event.locals.db = drizzle(createClient({ url: SECRET_DB_URL, authToken: SECRET_DB_AUTH_TOKEN }));

	// load weekId
	event.locals.weekId = getWeekId()!;

	if (event.url.pathname.startsWith('/api/games')) {
		console.log('cheking cookies');
	}

	const response = await resolve(event);
	return response;
};
