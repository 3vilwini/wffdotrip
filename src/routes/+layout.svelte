<script lang="ts">
	import './layout.css';
	import SiteFooter from '$lib/components/SiteFooter.svelte';
	import { ClerkProvider } from 'svelte-clerk';

	let { data, children } = $props();
	let defaultTitle = 'Mobile Agencies — Pedagogies';
	let defaultDek =
		'A collective platform reimagining architectural vocabularies through decolonial, feminist, and ecological pedagogies.';
	let url = 'https://www.mobileagenciespedagogies.com';
	let domain = 'mobileagenciespedagogies.com';

</script>

<svelte:head>
	<link rel="icon" href={data?.siteMetadata?.favicon?.url ? data.siteMetadata.favicon.url : ''} />
	<title>{data?.siteMetadata?.siteTitle ? data.siteMetadata.siteTitle : defaultTitle}</title>
	<meta
		name="description"
		content={data?.siteMetadata?.siteDescription ? data.siteMetadata.siteDescription : defaultDek}
	/>
	<meta name="keywords" content={data?.siteMetadata?.keyWords ? data.siteMetadata.keyWords : ''} />

	<!-- Facebook Meta Tags -->
	<meta property="og:url" content={url} />
	<meta property="og:type" content="website" />
	<meta
		property="og:title"
		content={data.siteMetadata.siteTitle ? data.siteMetadata.siteTitle : defaultTitle}
	/>
	<meta
		property="og:description"
		content={data.siteMetadata.siteDescription ? data.siteMetadata.siteDescription : defaultDek}
	/>
	<meta
		property="og:image"
		content={data.siteMetadata.siteImgURL ? data.siteMetadata.siteImgURL : ''}
	/>

	<!-- Twitter Meta Tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="twitter:domain" content={domain} />
	<meta property="twitter:url" content={url} />
	<meta
		name="twitter:title"
		content={data.siteMetadata.siteTitle ? data.siteMetadata.siteTitle : defaultTitle}
	/>
	<meta
		name="twitter:description"
		content={data.siteMetadata.siteDescription ? data.siteMetadata.siteDescription : defaultDek}
	/>
	<meta
		name="twitter:image"
		content={data.siteMetadata.siteImgURL ? data.siteMetadata.siteImgURL : ''}
	/>
</svelte:head>

<ClerkProvider>
	<div class="pb-16 sm:pb-13.75">
		{@render children()}
	</div>
</ClerkProvider>

<SiteFooter></SiteFooter>
