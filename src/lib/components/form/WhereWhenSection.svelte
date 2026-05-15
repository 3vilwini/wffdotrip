<script lang="ts">
	import FormSelect from './FormSelect.svelte';
	import { formState } from '$lib/states.svelte';
	import { fieldLabels, yearOption2010OrBefore } from '$lib/content/misc';
	import { countryOptions } from '$lib/content/country';

	import FormSectionHeader from './FormSectionHeader.svelte';
	import { siteState } from '$lib/states.svelte';
	import FormSimpleInput from './FormSimpleInput.svelte';
	import FormOption from './FormOption.svelte';

	let { formPage } = $props();

	let thisYear = new Date().getFullYear();
	let minYear = 2011;
	const yearOptions: number[] = [];
	for (let i = thisYear; i >= minYear; i--) {
		yearOptions.push(i);
	}
</script>

<div class="my-8 flex w-full gap-4">
	<div class="flex size-6 items-center justify-center text-center font-yarndings text-3xl">a</div>
	<div
		role="presentation"
		onmouseenter={() => (siteState.currFormSection = 'whereWhen')}
		class="w-full"
	>
		<FormSectionHeader>
			{formPage.whereWhenSectionTitle[siteState.language]}
		</FormSectionHeader>
		<div class="flex gap-4 max-sm:flex-wrap">
			<FormSelect
				bind:boundValue={formState.selectedCountry}
				name="country"
				class="basis-full sm:basis-1/4"
				required
			>
				<FormOption value="" isDefault>{fieldLabels.country[siteState.language]}</FormOption>

				{#each Object.entries(countryOptions) as [key, value] (key)}
					<FormOption value={key}>{value[siteState.language]}</FormOption>
				{/each}
			</FormSelect>

			<FormSimpleInput
				class="basis-full sm:basis-1/2"
				name="city"
				placeholder={fieldLabels.city[siteState.language]}
			></FormSimpleInput>

			<FormSelect
				bind:boundValue={formState.selectedYear}
				name="year"
				class="basis-full sm:basis-1/4"
				required
			>
				<FormOption value="" isDefault>{fieldLabels.year[siteState.language]}</FormOption>
				{#each yearOptions as year (year)}
					<FormOption value={year}>{year}</FormOption>
				{/each}
				<FormOption value="2010">{yearOption2010OrBefore[siteState.language]}</FormOption>
			</FormSelect>
		</div>
	</div>
</div>
