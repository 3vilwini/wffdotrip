<script lang="ts">
	import sortIcon from '$lib/assets/sort.svg';
	import searchIcon from '$lib/assets/search.svg';
	import { indexHeaderLabels } from '$lib/staticContent';
	import { filteredResultsState, siteState } from '$lib/states.svelte';
	import FilterPanel from './FilterPanel.svelte';
	import DoubleArrowButton from './DoubleArrowButton.svelte';
</script>

<div class="relative flex h-14 items-center border-b pr-2 pl-3 text-2xl">
	<div class="flex w-42 shrink-0 grow-0 items-center gap-3">
		<div class="flex h-8 w-8 cursor-pointer border border-dashed">
			<button
				onclick={() => (siteState.showFilterPanel = !siteState.showFilterPanel)}
				class="cursor-pointer bg-black p-1.5"
			>
				<img src={searchIcon} />
			</button>
		</div>
		<!-- <div>
			<img src={sortIcon} />
		</div> -->
	</div>
	<div class="flex w-full justify-between">
		<div>
			{indexHeaderLabels.worker[siteState.language]}
		</div>
		<div class="font-serif">
			{indexHeaderLabels.employer[siteState.language]}
		</div>
		<div>
			{indexHeaderLabels.contract[siteState.language]}
		</div>
		<div>
			{indexHeaderLabels.wage[siteState.language]}
		</div>
	</div>
	<div
		class="absolute top-0 {siteState.showFilterPanel
			? 'translate-y-0'
			: '-translate-y-full'} left-0 z-1 w-full transition-transform"
	>
		<FilterPanel></FilterPanel>
		<button
			onclick={() => (siteState.showFilterPanel = false)}
			class="{siteState.showFilterPanel
				? ''
				: 'hidden'} absolute -bottom-6.25 left-[calc(50%-0.75rem)] rotate-90 cursor-pointer border border-dashed"
		>
			<DoubleArrowButton></DoubleArrowButton>
		</button>
	</div>
</div>
{#if filteredResultsState.rows}
	<div class="h-14 border-b p-3 flex gap-4 items-center justify-between">
		<div>
			{filteredResultsState?.rows?.results?.length} Filtered Results
		</div>
		<div>
			<button onclick={() => filteredResultsState.rows = null} class="cursor pointer bg-black border-dashed border px-3 py-1 text-white">
				Show All Results
			</button>
		</div>
	</div>
{/if}
