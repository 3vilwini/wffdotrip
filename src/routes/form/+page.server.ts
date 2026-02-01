import { submitForm } from '$lib/baserow';
import type { Actions } from './$types';
import { fail } from '@sveltejs/kit';
import { clerkClient } from 'svelte-clerk/server';
import { getFormPage } from '$lib/sanity';
import type { PageLoad } from './$types';
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
}) satisfies PageLoad;

export const actions = {
	default: async ({ request, locals }) => {
		const formData = await request.formData();
		console.log(formData);
		const reqBody = {} as { [key: string]: any };
		formData.forEach((value, key) => {
			if (key === 'email') {
				console.log( locals.auth().userId);
				reqBody[key] = locals.auth().userId;
				value.toString();
			} else {
				reqBody[key] = value.toString();
			}
		});

		if (request.method === 'POST') {
			try {
				const response = await submitForm(reqBody);
				if (response.status === 200) {
					return { success: true };
				}
			} catch (error: any) {
				console.error(error);
				const errorMessage = error?.message ? error.message : 'error occurred when submitting form';
				return fail(422, { error: errorMessage });
			}
		}
	}
} satisfies Actions;
