/* eslint-disable @typescript-eslint/no-explicit-any */
import { createClient } from '@sanity/client';
import groq from 'groq';
import { createImageUrlBuilder } from '@sanity/image-url';
import type { Image } from '@sanity/types';

import { PUBLIC_SANITY_DATASET, PUBLIC_SANITY_PROJECT_ID } from '$env/static/public';

if (!PUBLIC_SANITY_PROJECT_ID || !PUBLIC_SANITY_DATASET) {
	throw new Error('Did you forget to run sanity init --env?');
}

export const client = createClient({
	projectId: PUBLIC_SANITY_PROJECT_ID,
	dataset: PUBLIC_SANITY_DATASET,
	useCdn: false, // `false` if you want to ensure fresh data
	apiVersion: '2026-01-10' // date of setup
});

//url builder

const builder = createImageUrlBuilder(client);

export function urlFor(source: Image) {
	return builder.image(source);
}

export const getThumbnailImg = (imgRef: Image) => {
	return urlFor(imgRef).width(600).fit('max').url();
};

export const getImgUrl = (imgRef: Image) => {
	return urlFor(imgRef).width(1600).fit('max').url();
};

export async function getSiteInfo(): Promise<any> {
	return await client.fetch(groq`*[_id=="siteMetadata"][0]{
        ...,
        favicon{
            ...,
            "url": asset->url
        }
    }`);
}

export async function getFormPage(): Promise<any> {
	return await client.fetch(groq`
        *[_id=="formPage"][0]
    `);
}

export async function getIndexPage(): Promise<any> {
	return await client.fetch(groq`
        *[_id=="indexPage"][0]
    `);
}

export async function getFAQPage(): Promise<any> {
	return await client.fetch(groq`
        *[_id=="faqPage"][0]
    `);
}

export async function getCostPage(): Promise<any> {
	return await client.fetch(groq`
        *[_id=="costPage"][0]
    `);
}
