import { clerkClient } from 'svelte-clerk/server';
import type { LayoutLoad } from './$types';
import { getRowsByEmail } from '$lib/baserow';
export const load = (async ({ locals }) => {
    const { userId } = locals.auth();
    if (userId) {
        let user = await clerkClient.users.getUser(userId);
        user = JSON.parse(JSON.stringify(user));

        const email = user.emailAddresses[0].emailAddress;
        let rows = {}
        if(email){
            rows = await getRowsByEmail(email);
        }
        return { user, rows };
    }
}) satisfies LayoutLoad;
