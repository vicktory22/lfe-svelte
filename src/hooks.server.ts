import type { Handle } from '@sveltejs/kit';
import { getWeekId } from '$lib/server/weeks.service';

export const handle: Handle = async ({ event, resolve }) => {
	// load weekId
	event.locals.weekId = getWeekId()!;

	if (event.url.pathname.startsWith('/api/games')) {
		console.log('cheking cookies');
	}

	const response = await resolve(event);
	return response;
};
