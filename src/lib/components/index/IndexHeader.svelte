<script lang="ts">
	import searchIcon from '$lib/assets/search.svg';
	import { fieldLabels, indexHeaderLabels } from '$lib/content/misc';
	import { countryOptions } from '$lib/content/country';
	import { contractTypeOptions } from '$lib/content/jobDetails';
	import { compensationFrequencyOptions } from '$lib/content/compensation';
	import { workerTypeOptions } from '$lib/content/workerType';
	import { employerTypeOptions } from '$lib/content/employerType';

	import { filteredResultsState, siteState } from '$lib/states.svelte';
	import FilterPanel from './FilterPanel.svelte';
	import DoubleArrowButton from './DoubleArrowButton.svelte';
</script>

<div class="sticky top-0 flex h-14 items-center border-b pr-2 pl-3 text-lg xl:text-2xl">
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
	<div class="flex w-full items-baseline justify-between">
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
	<div class="flex min-h-14 flex-col justify-center gap-4 border-b p-3">
		<div class="flex w-full items-center justify-between">
			<div class="font-mono text-xs">
				{filteredResultsState?.rows?.results?.length} Filtered Results
			</div>
			<div>
				<button
					onclick={() => {
						filteredResultsState.rows = null;
						filteredResultsState.filtersApplied = {
							country: [],
							workerType: [],
							employerType: [],
							contractType: [],
							compensationFrequency: []
						};
					}}
					class="cursor-pointer border border-dashed bg-black px-3 py-1 text-white"
				>
					Show All Rows
				</button>
			</div>
		</div>
		<div class="w-full font-mono text-xs">
			{#each Object.entries(filteredResultsState.filtersApplied) as [key, value] (key)}
				{#if value.length > 0}
					<div>
						<span>{fieldLabels[key][siteState.language]}: </span>
						{#each value as filterValue, idx (idx)}
							<span>
								{#if key === 'country'}
									{countryOptions[filterValue][siteState.language]}
								{:else if key === 'workerType'}
									{workerTypeOptions[filterValue].groupLabel[siteState.language]}
								{:else if key === 'employerType'}
									{employerTypeOptions[filterValue].groupLabel[siteState.language]}
								{:else if key === 'contractType'}
									{contractTypeOptions[filterValue][siteState.language]}
								{:else if key === 'compensationFrequency'}
									{compensationFrequencyOptions[filterValue][siteState.language]}
								{/if}
								{#if idx < value.length - 1}{', '}
								{/if}
							</span>
						{/each}
					</div>
				{/if}
			{/each}
		</div>
	</div>
{/if}
