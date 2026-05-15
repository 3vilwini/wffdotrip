import { clerkClient } from 'svelte-clerk/server';
import { getFormPage } from '$lib/sanity';
import type { LayoutLoad } from './$types';
import { siteState } from '$lib/states.svelte';
export const load = (async ({ locals }) => {
    const formPage = await getFormPage();
    const { userId } = locals.auth();
    if (userId) {
        let user = await clerkClient.users.getUser(userId);
        user = JSON.parse(JSON.stringify(user));
        siteState.user = user;
        return { user, formPage };
    } else {
        return { formPage };
    }
}) satisfies LayoutLoad;