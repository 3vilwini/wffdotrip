import type { PageLoad } from './$types';
import { getAllVerifiedRows } from '$lib/baserow';
export const load = (async ({ locals }) => {
	const rows = await getAllVerifiedRows();
	return { rows };
}) satisfies PageLoad;
