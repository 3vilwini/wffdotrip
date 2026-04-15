// src/routes/+layout.server.ts
import { buildClerkProps } from 'svelte-clerk/server';
import type { LayoutServerLoad } from './$types';
import { getSiteInfo } from '$lib/sanity';
export const load: LayoutServerLoad = async ({ locals }) => {
	const siteMetadata = await getSiteInfo();

	return {
		siteMetadata,
		...buildClerkProps(locals.auth())
	};
};
