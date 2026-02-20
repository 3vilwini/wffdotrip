<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import SiteFooter from '$lib/components/SiteFooter.svelte';
	import type { Snippet } from 'svelte';
	import { ClerkProvider } from 'svelte-clerk';

	let { children }: { children: Snippet } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<ClerkProvider>
	<div class="pb-13.75">
		{@render children()}
	</div>
</ClerkProvider>

<SiteFooter></SiteFooter>
