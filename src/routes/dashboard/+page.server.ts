import { clerkClient } from 'svelte-clerk/server';
import type { LayoutLoad } from './$types';
export const load = (async ({ locals }) => {
    const { userId } = locals.auth();
    if (userId) {
        let user = await clerkClient.users.getUser(userId);
        user = JSON.parse(JSON.stringify(user));
        return { user };
    }
}) satisfies LayoutLoad;
