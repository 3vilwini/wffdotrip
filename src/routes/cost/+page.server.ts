import type { PageLoad } from './$types';
import { getCostPage } from '$lib/sanity';

export const load = (async () => {
	const costPage = await getCostPage();
	return { costPage };
}) satisfies PageLoad;
