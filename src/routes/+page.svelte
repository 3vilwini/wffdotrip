<script lang="ts">
	import Row from '$lib/components/index/Row.svelte';
	import IndexSidebar from '$lib/components/index/IndexSidebar.svelte';
	import { onMount } from 'svelte';
	import { countryOptions, fieldLabels } from '$lib/staticContent.js';
	import CurrentResidentBanner from '$lib/components/index/CurrentResidentBanner.svelte';
	import IndexHeader from '$lib/components/index/IndexHeader.svelte';
	import SelectedRow from '$lib/components/index/SelectedRow.svelte';
	import { filteredResultsState, siteState } from '$lib/states.svelte';
	let { data } = $props();
	let numRowsPerCountry = $state({});
	let selectedRows = $state([]);
	let rows = $derived(
		filteredResultsState.rows ? filteredResultsState.rows.results : data.rows.results
	);

	const addRow = (row) => {
		if (selectedRows.length < 5) {
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
</script>

<div class="relative flex w-full overflow-x-hidden">
	<IndexSidebar indexPage={data.indexPage} {numRowsPerCountry}></IndexSidebar>
	<div class="grow">
		<IndexHeader></IndexHeader>
		<div class="flex flex-col">
			{#each rows as row}
				<Row {row} isSelected={selectedRows.find(r => r.id === row.id)} onclick={() => addRow(row)}></Row>
			{/each}
		</div>
	</div>
	<SelectedRow bind:rows={selectedRows}></SelectedRow>
	<CurrentResidentBanner></CurrentResidentBanner>
</div>

<a
	href="/form"
	class="fixed bottom-13.5 left-[calc(50dvw)] translate-x-[-50%] cursor-pointer border border-dashed bg-black px-6 py-3 text-white uppercase"
>
	{fieldLabels.submitAnEntry[siteState.language]}
</a>
