<script lang="ts">
	import Row from '$lib/components/index/Row.svelte';
	import IndexSidebar from '$lib/components/index/IndexSidebar.svelte';
	import { onMount } from 'svelte';
	import { countryOptions, fieldLabels } from '$lib/staticContent.js';
	import CurrentResidentBanner from '$lib/components/index/CurrentResidentBanner.svelte';
	import IndexHeader from '$lib/components/index/IndexHeader.svelte';
	import SelectedRow from '$lib/components/index/SelectedRow.svelte';
	import { siteState } from '$lib/states.svelte';
	let { data } = $props();
	let numRowsPerCountry = $state({});
	let selectedRow = $state(null);
	onMount(() => {
		for (let country of Object.keys(countryOptions)) {
			numRowsPerCountry[country] = data.rows.results.filter((row) => {
				return row.country === country;
			}).length;
		}
	});
</script>

<div class="relative flex w-full overflow-x-hidden">
	<IndexSidebar indexPage={data.indexPage} {numRowsPerCountry}></IndexSidebar>
	<div class="flex-grow">
		<IndexHeader></IndexHeader>
		<div class="flex flex-col">
			{#each data.rows.results as row}
				<Row {row} onclick={() => (selectedRow = row)}></Row>
			{/each}
		</div>
	</div>
	<CurrentResidentBanner></CurrentResidentBanner>
	<SelectedRow bind:row={selectedRow}></SelectedRow>
</div>

<a
	href="/form"
	class="fixed bottom-13.5 left-[calc(50dvw)] translate-x-[-50%] cursor-pointer border border-dashed bg-black px-6 py-3 text-white uppercase"
>
	{fieldLabels.submitAnEntry[siteState.language]}
</a>
