<script lang="ts">
	import SubmitEntryButton from '../lib/components/index/SubmitEntryButton.svelte';

	import Row from '$lib/components/index/Row.svelte';
	import IndexSidebar from '$lib/components/index/IndexSidebar.svelte';
	import { onMount } from 'svelte';
	import {
		compensationFrequencyOptions,
		contractTypeOptions,
		countryOptions,
		employerTypeOptions,
		fieldLabels,
		workerTypeOptions
	} from '$lib/staticContent.js';
	import CurrentResidentBanner from '$lib/components/index/CurrentResidentBanner.svelte';
	import IndexHeader from '$lib/components/index/IndexHeader.svelte';
	import SelectedRow from '$lib/components/index/SelectedRow.svelte';
	import { filteredResultsState, siteState } from '$lib/states.svelte';
	import MobileIndexHeader from '$lib/components/index/MobileIndexHeader.svelte';
	import BlockContent from '$lib/components/blockContent/BlockContent.svelte';
	import MobileResidentBanner from '$lib/components/index/MobileResidentBanner.svelte';
	import MobileFilterButton from '$lib/components/index/MobileFilterButton.svelte';
	import MobileFilterPanel from '$lib/components/index/MobileFilterPanel.svelte';
	import MobileSelectedRow from '$lib/components/index/MobileSelectedRow.svelte';
	import MobileRow from '$lib/components/index/MobileRow.svelte';

	let { data } = $props();
	let numRowsPerCountry = $state({});
	let selectedRows = $state([]);
	let selectedRowMobile = $state(null);
	let rows = $derived(
		filteredResultsState.rows ? filteredResultsState.rows.results : data.rows.results
	);

	let rowContainerW = $state(0);
	$effect(() => {
		siteState.indexW = rowContainerW;
	});

	const addRow = (row) => {
		selectedRowMobile = row;
		if (selectedRows.length < 10) {
			if (selectedRows.find((r) => r.id === row.id)) {
				// if the row is already selected, deselect it
				selectedRows = selectedRows.filter((r) => r.id !== row.id);
				row.isSelected = false;
				return;
			}
			if (selectedRows.length > 0) {
				selectedRows.forEach((r) => {
					r.isExpanded = false;
				});
			}
			row.isExpanded = true;
			row.isSelected = true;

			selectedRows = [...selectedRows, row];
		}
	};

	onMount(() => {
		for (let country of Object.keys(countryOptions)) {
			console.log(data.rows.results);
			numRowsPerCountry[country] = data.rows.results.filter((row) => {
				return row.country.value === country;
			}).length;
		}
	});

	let showMobileFilterPanel = $state(false);
</script>

<div class="sticky top-0 z-10 bg-white sm:hidden">
	<MobileIndexHeader indexPage={data.indexPage}></MobileIndexHeader>
</div>

<div class="border-b p-3 font-mono text-xs leading-[1.3] sm:hidden">
	<a href="/faq">
		<BlockContent value={data.indexPage.siteDescription[siteState.language]}></BlockContent>
	</a>
</div>

<div>
	<MobileResidentBanner></MobileResidentBanner>
</div>

<div class="sm:hidden">
	{#if filteredResultsState.rows}
		<div class="flex flex-col min-h-12 items-center justify-between gap-4 border-b p-3">
			<div class='flex flex-row justify-between items-center w-full'>
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
	{:else}
		<div
			onclick={() => {
				showMobileFilterPanel = !showMobileFilterPanel;
			}}
		>
			<MobileFilterButton></MobileFilterButton>
		</div>
	{/if}
</div>

<div
	class="fixed top-16 z-5 grid w-full bg-white {showMobileFilterPanel
		? 'grid-rows-[1fr]'
		: 'grid-rows-[0fr]'} transition-[grid-template-rows] sm:hidden"
>
	<div class="overflow-hidden">
		<div class=" max-h-[calc(100dvh-56px)] w-full overflow-auto">
			<MobileFilterPanel bind:showFilterPanel={showMobileFilterPanel}></MobileFilterPanel>
		</div>
	</div>
</div>

<div class="relative w-full overflow-x-hidden sm:flex sm:flex-row">
	<div class="hidden sm:block">
		<IndexSidebar indexPage={data.indexPage} {numRowsPerCountry}></IndexSidebar>
	</div>

	<div class="grow">
		<div class="hidden sm:block">
			<IndexHeader></IndexHeader>
		</div>
		<div bind:clientWidth={rowContainerW} class="flex flex-col">
			{#each rows as row}
				<div class="hidden sm:block">
					<Row
						{row}
						isSelected={selectedRows.find((r) => r.id === row.id)}
						onclick={() => addRow(row)}
					></Row>
				</div>
				<div class="sm:hidden">
					<MobileRow
						{row}
						isSelected={selectedRows.find((r) => r.id === row.id)}
						onclick={() => addRow(row)}
					></MobileRow>
				</div>
			{/each}
		</div>
	</div>
	<div class="hidden sm:block">
		<SelectedRow bind:rows={selectedRows}></SelectedRow>
	</div>
	<div class="hidden sm:block">
		<CurrentResidentBanner></CurrentResidentBanner>
	</div>
</div>

<SubmitEntryButton></SubmitEntryButton>

<div class="sm:hidden">
	<MobileSelectedRow bind:row={selectedRowMobile}></MobileSelectedRow>
</div>
