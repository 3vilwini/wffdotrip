import { getFormPage } from '$lib/sanity';
import type { PageLoad } from './$types';
export const load = (async () => {
	const formPage = await getFormPage();
	return { formPage };
}) satisfies PageLoad;
