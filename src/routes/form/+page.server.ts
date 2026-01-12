import { submitForm } from '$lib/baserow';
import type { Actions } from './$types';

export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		console.log(formData);
		const data = {} as { [key: string]: any };
		formData.forEach((value, key) => {
			data[key] = value.toString();
		});
		console.log(data);

		if (request.method === 'POST') {
			let response = await submitForm(data);
			console.log(response.body);
		}
	}
} satisfies Actions;
