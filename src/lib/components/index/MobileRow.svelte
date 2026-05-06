<script lang="ts">
	import { compensationFrequencyOptions } from '$lib/content/compensation';
	import { currency, countryIcons, countryOptions } from '$lib/content/country';
	import { getEmployerTypeLabel } from '$lib/content/employerType';
	import { getWorkerTypeLabel } from '$lib/content/workerType';
	import { contractTypeOptions, numEmployeesOptions } from '$lib/content/jobDetails';
	import { projectTypeOptions } from '$lib/content/projectType';
	import { siteState } from '$lib/states.svelte';

	let { row, onclick } = $props();
</script>

<div {onclick} class="items-top flex cursor-pointer gap-x-2 border-b p-3 pt-2 hover:bg-lightgrey">
	<div class="items-top flex grow flex-col flex-wrap justify-between gap-0.25">
		{#if row.country}
			<div class="mb-1.75 flex shrink-0 items-center gap-x-2">
				<div class="flex w-6 justify-center text-center font-yarndings text-3xl">
					{countryIcons[row.country.value]}
				</div>

				<div class=" shrink-0 grow-0 pt-1 font-mono text-xs">
					{#if row.city}
						{row.city},
					{/if}
					{countryOptions[row.country.value][siteState.language]}
				</div>
			</div>
		{/if}
		<div class="leading-none">
			{#if row.worker_type}
				<span class="text-[17.25px] leading-tight tracking-[-0.01em]">
					{getWorkerTypeLabel(row.worker_type.value)}
				</span>
			{/if}
			{#if row.job_title}
				<span class="relative font-mono text-[9px]">
					{row.job_title}
				</span>
			{/if}
			{#if row.project_type}
				<span class="relative font-mono text-[9px]">
					{#if projectTypeOptions[row.project_type?.value]}
						{projectTypeOptions[row.project_type.value][siteState.language]}
					{/if}
				</span>
			{/if}
		</div>

		<div
			class="
			 leading-none"
		>
			{#if row.employer_type}
				<span class="font-serif text-lg leading-tight tracking-[-0.01em]">
					{getEmployerTypeLabel(row.employer_type.value).split('(')[0]}
				</span>
			{/if}

			{#if row.num_employees}
				<span class="relative font-mono text-[9px] whitespace-nowrap">
					{numEmployeesOptions[row.num_employees.value]}
				</span>
			{/if}
		</div>

		{#if row.contract_type}
			<div class="pt-1 font-mono text-xs">
				{contractTypeOptions[row.contract_type.value][siteState.language]}
			</div>
		{/if}
	</div>
	{#if row.compensation_amount && row.compensation_frequency && row.country}
		<div class="pt-1">
			<div
				class="flex w-min flex-col items-center border border-dashed px-2 py-1 font-mono text-xs whitespace-nowrap"
			>
				<div class="font-sans text-base">
					{row.compensation_amount}{currency[row.country.value]}
				</div>
				<div>
					{compensationFrequencyOptions[row.compensation_frequency.value][siteState.language]}
				</div>
			</div>
		</div>
	{/if}
</div>
