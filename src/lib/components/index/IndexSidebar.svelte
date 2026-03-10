<script lang="ts">
	import logo from '$lib/assets/logo.png';
	import logo2 from '$lib/assets/logo2.png';
	import { siteState } from '$lib/states.svelte';
	import { countryOptions } from '$lib/staticContent';
	import BlockContent from '../blockContent/BlockContent.svelte';
	import DoubleArrowButton from './DoubleArrowButton.svelte';
	let { indexPage, numRowsPerCountry } = $props();

	let collapsed = $state(false);
	let innerContainerW = $state(0);
</script>

<div
	bind:clientWidth={innerContainerW}
	class="{collapsed
		? 'w-14 min-w-14 shrink-0 grow-0'
		: 'w-[25dvw] max-w-sm min-w-xs'} relative flex h-[calc(100dvh-3.5rem)] transition-[width,min-width]"
>
	<div style="width: {innerContainerW}px;" class="fixed">
		<div
			style="width: {innerContainerW}px;"
			class=" flex h-[calc(100dvh-3.5rem)] {collapsed
				? ''
				: ' p-6 pt-4'} fixed top-0 flex-col gap-4 overflow-auto border-r font-mono text-xs"
		>
			{#if collapsed}
				<img
					src={logo2}
					class="absolute top-3 left-12.25 w-40 min-w-40 shrink-0 grow-0 origin-top-left rotate-90"
				/>
			{:else}
				<img src={logo} class="w-60" />
				<div>
					<BlockContent value={indexPage.siteDescription[siteState.language]}></BlockContent>
				</div>
				<div class="mt-4">{indexPage.representedCountriesHeader[siteState.language]}</div>
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
				<div class="mt-4">
					{indexPage.getInvolvedHeader[siteState.language]}
				</div>
				<div>
					<BlockContent value={indexPage.getInvolvedDescription[siteState.language]}></BlockContent>
				</div>
			{/if}
		</div>
		<button
			onclick={() => (collapsed = !collapsed)}
			class="absolute top-[calc(50dvh-2.5rem)] -right-12.75 z-10 -translate-x-6.5 cursor-pointer border border-dashed"
		>
			<DoubleArrowButton flip={collapsed}></DoubleArrowButton>
		</button>
	</div>
</div>
