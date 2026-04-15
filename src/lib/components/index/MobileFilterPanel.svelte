<script>
	import { compensationFrequencyOptions } from '$lib/content/compensation';
	import { contractTypeOptions } from '$lib/content/jobDetails';
	import { countryOptions } from '$lib/content/country';
	import { employerTypeOptions } from '$lib/content/employerType';
	import { fieldLabels, indexHeaderLabels } from '$lib/content/misc';
	import { workerTypeOptions } from '$lib/content/workerType';

	import { siteState, filteredResultsState } from '$lib/states.svelte';
	import FormCheckbox from '../form/FormCheckbox.svelte';
	import { enhance } from '$app/forms';

	let isSubmitting = $state(false);

	let { showFilterPanel = $bindable() } = $props();
</script>

<div class="sticky top-3 right-3 z-10 flex justify-end pr-3">
	<div class=" border border-dashed border-black text-white">
		<div
			onclick={() => (showFilterPanel = false)}
			class="flex size-8 cursor-pointer items-center justify-center bg-black"
		>
			×
		</div>
	</div>
</div>

<div class=" relative -top-3 w-full border-b bg-white p-3 pt-0 pb-14">
	<form
		use:enhance={({ formElement, formData, action, cancel, submitter }) => {
			isSubmitting = true;
			return async ({ result, update }) => {
				isSubmitting = false;
				showFilterPanel = false;
				filteredResultsState.rows = result.data.response;
				filteredResultsState.filtersApplied = {
					country: [],
					workerType: [],
					employerType: [],
					contractType: [],
					compensationFrequency: []
				};
				formData.forEach((value, key) => {
					if (key.startsWith('country-')) {
						const country = key.split('-')[1];
						filteredResultsState.filtersApplied.country.push(country);
					} else if (key.startsWith('worker_type-')) {
						const workerTypeGroup = key.split('-')[1];
						filteredResultsState.filtersApplied.workerType.push(workerTypeGroup);
					} else if (key.startsWith('employer_type-')) {
						const employerTypeGroup = key.split('-')[1];
						filteredResultsState.filtersApplied.employerType.push(employerTypeGroup);
					} else if (key.startsWith('contract_type-')) {
						const contractType = key.split('-')[1];
						filteredResultsState.filtersApplied.contractType.push(contractType);
					} else if (key.startsWith('compensation_frequency-')) {
						const compensationFrequency = key.split('-')[1];
						filteredResultsState.filtersApplied.compensationFrequency.push(compensationFrequency);
					}
				});
				console.log(filteredResultsState.filtersApplied);
			};
		}}
		method="POST"
		action="/"
		class=" font-mono text-xs"
	>
		<div class="flex flex-col justify-between gap-4">
			<div>
				<div class="mb-4 font-sans text-[19px] leading-none">
					{fieldLabels.country[siteState.language]}
				</div>
				<div class="flex flex-col gap-2">
					{#each Object.entries(countryOptions) as [key, value]}
						<FormCheckbox name={'country-' + key} label={value[siteState.language]}></FormCheckbox>
					{/each}
				</div>
			</div>
			<div>
				<div class="mb-4 font-sans text-[19px] leading-none">
					{indexHeaderLabels.worker[siteState.language]}
				</div>
				<div class="flex flex-col gap-2">
					{#each Object.entries(workerTypeOptions) as [key, value]}
						<FormCheckbox name={'worker_type-' + key} label={value.groupLabel[siteState.language]}
						></FormCheckbox>
					{/each}
				</div>
			</div>
			<div>
				<div class="mb-4 font-serif text-xl leading-none tracking-tight">
					{indexHeaderLabels.employer[siteState.language]}
				</div>
				<div class="flex flex-col gap-2">
					{#each Object.entries(employerTypeOptions) as [key, value]}
						<FormCheckbox name={'employer_type-' + key} label={value.groupLabel[siteState.language]}
						></FormCheckbox>
					{/each}
				</div>
			</div>
			<div>
				<div class="mb-4 font-sans text-[19px] leading-none">
					{indexHeaderLabels.contract[siteState.language]}
				</div>
				<div class="flex flex-col gap-2">
					{#each Object.entries(contractTypeOptions) as [key, value]}
						<FormCheckbox name={'contract_type-' + key} label={value[siteState.language]}
						></FormCheckbox>
					{/each}
				</div>
			</div>
			<div>
				<div class="mb-4 font-serif text-xl leading-none tracking-tight">
					{indexHeaderLabels.wage[siteState.language]}
				</div>
				<div class="flex flex-col gap-2">
					{#each Object.entries(compensationFrequencyOptions) as [key, value]}
						<FormCheckbox name={'compensation_frequency-' + key} label={value[siteState.language]}
						></FormCheckbox>
					{/each}
				</div>
			</div>
		</div>
		<div class="flex justify-center">
			<button
				type="submit"
				class="  mt-6 cursor-pointer border border-dashed bg-black px-6 py-3 font-sans text-base text-white uppercase disabled:opacity-50"
				disabled={isSubmitting}
			>
				Search
			</button>
		</div>
	</form>
</div>
