import { submitForm } from '$lib/baserow';
import type { Actions } from './$types';
import { fail } from '@sveltejs/kit';

export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		console.log(formData);
		const reqBody = {} as { [key: string]: any };
		formData.forEach((value, key) => {
			reqBody[key] = value.toString();
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
