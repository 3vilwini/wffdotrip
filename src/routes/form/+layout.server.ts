import { clerkClient } from 'svelte-clerk/server';
import { getFormPage } from '$lib/sanity';
import type { LayoutLoad } from './$types';
export const load = (async ({ locals }) => {
    const formPage = await getFormPage();
    const { userId } = locals.auth();
    if (userId) {
        let user = await clerkClient.users.getUser(userId);
        user = JSON.parse(JSON.stringify(user));
        return { user, formPage };
    } else {
        return { formPage };
    }
}) satisfies LayoutLoad;