import { deleteRow, editRow, submitForm } from '$lib/baserow';
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
	edit: async ({ request }) => {
		const formData = await request.formData();
		const reqBody = {} as { [key: string]: any };
		const row_id = formData.get('row_id')?.toString();
		formData.forEach((value, key) => {
			if (key !== row_id) {
				reqBody[key] = value.toString();
			}
		});

		if (request.method === 'POST' && row_id) {
			try {
				const response = await editRow(row_id, reqBody);
				if (response.status === 200) {
					return { success: true };
				}
			} catch (error: any) {
				console.error(error);
				const errorMessage = error?.message ? error.message : 'error occurred when submitting form';
				return fail(422, { error: errorMessage });
			}
		}
	},
	delete: async ({ request }) => {
		const formData = await request.formData();
		const row_id = formData.get('row_id')?.toString();

		if (request.method === 'POST' && row_id) {
			try {
				const response = await deleteRow(row_id);
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
