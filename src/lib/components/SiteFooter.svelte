<script lang="ts">
	import LanguageToggle from './LanguageToggle.svelte';
	import { navMenuItems } from '$lib/content/misc';
	import { siteState } from '$lib/states.svelte';
	import { page } from '$app/state';
	import { resolve } from '$app/paths';
</script>

<div
	class="fixed bottom-0 left-0 z-10 hidden h-14 w-full justify-between border-t bg-white p-4 sm:flex"
>
	<div class="flex basis-1/3 items-center">
		<LanguageToggle></LanguageToggle>
	</div>
	{#if page.url.pathname !== '/cost'}
		<div class="flex grow basis-1/3 justify-center">
			<a href={resolve('/cost')} class="self-center font-mono text-xs"
				>{navMenuItems.cost[siteState.language]}</a
			>
		</div>
	{/if}
	<div class="basis-1/3"></div>
</div>
