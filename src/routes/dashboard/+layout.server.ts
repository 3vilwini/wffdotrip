import { clerkClient } from 'svelte-clerk/server';
import type { LayoutLoad } from './$types';
import { getRowsByUserID } from '$lib/baserow';
import { siteState } from '$lib/states.svelte';
export const load = (async ({ locals }) => {
	const { userId } = locals.auth();
	if (userId) {
		let user = await clerkClient.users.getUser(userId);
		user = JSON.parse(JSON.stringify(user));
		siteState.user = user;
		let rows = {};
		if (user.id) {
			rows = await getRowsByUserID(user.id);
		}
		return { user, rows };
	}
}) satisfies LayoutLoad;
