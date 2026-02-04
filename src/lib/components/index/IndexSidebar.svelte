<script lang="ts">
	import logo from '$lib/assets/logo.png';
	import logo2 from '$lib/assets/logo2.png';
	import { siteState } from '$lib/states.svelte';
	import { countryOptions } from '$lib/staticContent';
	import BlockContent from '../blockContent/BlockContent.svelte';
	let { indexPage, numRowsPerCountry } = $props();
</script>

<div
	class="flex h-[calc(100dvh-3.5rem)] w-[25dvw] max-w-sm min-w-xs flex-col gap-4 overflow-auto border-r p-6 font-mono text-xs"
>
	<img src={logo} class="w-60" />
	<div>
		<BlockContent value={indexPage.siteDescription[siteState.language]}></BlockContent>
	</div>
	<div>
		<div>{indexPage.representedCountriesHeader[siteState.language]}</div>
	</div>
	<div>
		<BlockContent value={indexPage.representedCountriesDescription[siteState.language]}
		></BlockContent>
	</div>
	<div class="flex flex-col gap-2 border border-dotted p-2">
		{#each Object.entries(countryOptions) as [key, labels]}
			<div class="flex justify-between">
				<div>{labels[siteState.language]}</div>
				<div>{numRowsPerCountry[key]}</div>
			</div>
		{/each}
	</div>
	<div>
		{indexPage.getInvolvedHeader[siteState.language]}
	</div>
	<div>
		<BlockContent value={indexPage.getInvolvedDescription[siteState.language]}></BlockContent>
	</div>
</div>
