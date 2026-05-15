import type { PageLoad } from './$types';
import { getFAQPage } from '$lib/sanity';

export const load = (async () => {
	const faqPage = await getFAQPage();
	return { faqPage };
}) satisfies PageLoad;
