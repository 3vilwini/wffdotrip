<script lang="ts">
	import logo from '$lib/assets/logo.png';
	import logo2 from '$lib/assets/logo2.png';
	import { siteState } from '$lib/states.svelte';
	import { countryOptions } from '$lib/staticContent';
	import BlockContent from '../blockContent/BlockContent.svelte';
	import DoubleArrowButton from './DoubleArrowButton.svelte';
	let { indexPage, numRowsPerCountry } = $props();

	let collapsed = $state(false);
</script>

<div class="relative">
	<div
		class=" flex h-[calc(100dvh-3.5rem)] {collapsed
			? 'w-14 min-w-14 shrink-0 grow-0'
			: 'w-[25dvw] max-w-sm min-w-xs p-6'} relative flex-col gap-4 overflow-auto border-r font-mono text-xs transition-[width,min-width]"
	>
		{#if collapsed}
			<img src={logo2} class="w-40 min-w-40 absolute grow-0 shrink-0 rotate-90 origin-top-left left-12.25 top-3  " />
		{:else}
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
		{/if}
	</div>
	<button
		onclick={() => (collapsed = !collapsed)}
		class="absolute top-[calc(50dvh-2.5rem)] -right-12.75 -translate-x-6.5 cursor-pointer border border-dashed"
	>
		<DoubleArrowButton flip={collapsed}></DoubleArrowButton>
	</button>
</div>
