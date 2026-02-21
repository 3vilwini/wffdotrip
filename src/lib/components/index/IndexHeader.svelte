<script lang="ts">
	import sortIcon from '$lib/assets/sort.svg';
	import searchIcon from '$lib/assets/search.svg';
	import { indexHeaderLabels } from '$lib/staticContent';
	import { filteredResultsState, siteState } from '$lib/states.svelte';
	import FilterPanel from './FilterPanel.svelte';
	import DoubleArrowButton from './DoubleArrowButton.svelte';
</script>

<div class="relative flex h-14 items-center border-b pr-2 pl-3 text-lg xl:text-2xl">
	<div class="flex {siteState.indexW > 768 ? 'w-33' : 'w-28'} shrink-0 grow-0 items-center gap-3">
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
	<div class="flex w-full justify-between items-baseline">
		<div class="text-[17px] xl:text-[23px]">
			{indexHeaderLabels.worker[siteState.language]}
		</div>
		<div class="font-serif tracking-tight">
			{indexHeaderLabels.employer[siteState.language]}
		</div>
		<div class="text-[17px] xl:text-[23px]">
			{indexHeaderLabels.contract[siteState.language]}
		</div>
		<div class="font-serif tracking-tight">
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
	<div class="flex h-14 items-center justify-between gap-4 border-b p-3">
		<div class="font-mono text-xs">
			{filteredResultsState?.rows?.results?.length} Filtered Results
		</div>
		<div>
			<button
				onclick={() => (filteredResultsState.rows = null)}
				class="cursor-pointer border border-dashed bg-black px-3 py-1 text-white"
			>
				Show All Rows
			</button>
		</div>
	</div>
{/if}
