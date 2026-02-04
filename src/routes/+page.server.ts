import type { PageLoad } from './$types';
import { getAllVerifiedRows } from '$lib/baserow';
import { getIndexPage } from '$lib/sanity';
export const load = (async ({ locals }) => {
	const indexPage = await getIndexPage();

	const rows = await getAllVerifiedRows();
	return { rows, indexPage };
}) satisfies PageLoad;
