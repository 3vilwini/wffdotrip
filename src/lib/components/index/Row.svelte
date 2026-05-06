<script lang="ts">
	import { compensationFrequencyOptions } from '$lib/content/compensation';
	import { contractTypeOptions, numEmployeesOptions } from '$lib/content/jobDetails';
	import { currency, countryIcons, countryOptions } from '$lib/content/country';
	import { projectTypeOptions } from '$lib/content/projectType';
	import { getWorkerTypeLabel } from '$lib/content/workerType';
	import { getEmployerTypeLabel } from '$lib/content/employerType';

	import { siteState } from '$lib/states.svelte';

	let { row, isSelected, onclick } = $props();
</script>

<div
	{onclick}
	class="items-top flex flex-row {siteState.indexW > 768
		? ''
		: ' pb-3'} cursor-pointer gap-x-2 border-b px-3 py-0.5 {isSelected
		? 'bg-lightgrey'
		: ''} hover:bg-lightgrey"
>
	{#if row.country}
		<div class="flex shrink-0 gap-x-2">
			<div class="flex h-8.5 w-6 text-center font-yarndings text-3xl leading-[1]">
				{countryIcons[row.country.value]}
			</div>
			<div
				class="{siteState.indexW > 768 ? 'w-23' : 'w-18'} shrink-0 grow-0 pt-3 font-mono text-xs"
			>
				{#if row.city}
					{row.city}
				{:else}
					{countryOptions[row.country.value][siteState.language]}
				{/if}
			</div>
		</div>
	{/if}
	<div class="items-top flex grow justify-between gap-x-4">
		<div class=" pt-2 leading-none">
			{#if row.worker_type}
				<span class="text-[17.25px] leading-tight tracking-[-0.01em]">
					{getWorkerTypeLabel(row.worker_type.value)}
				</span>
			{/if}
			{#if row.job_title}
				<span class="relative -top-0.25 -mb-1.25 ml-1 font-mono text-[9px]">
					{row.job_title}
				</span>
			{/if}
			{#if row.project_type}
				<span class="relative -top-0.25 -mb-1.25 ml-1 font-mono text-[9px]">
					{#if projectTypeOptions[row.project_type?.value]}
						{projectTypeOptions[row.project_type.value][siteState.language]}
					{/if}
				</span>
			{/if}
		</div>

		<div
			class="pt-1.5
			 leading-none"
		>
			{#if row.employer_name}
				<span class="font-serif text-lg leading-tight tracking-[-0.01em]">
					{row.employer_name}
				</span>
			{:else if row.employer_type}
				<span class="font-serif text-lg leading-tight tracking-[-0.01em]">
					{getEmployerTypeLabel(row.employer_type.value).split('(')[0]}
				</span>
			{/if}

			{#if row.num_employees}
				<span class="relative -top-1.25 -mb-1.25 font-mono text-[9px] whitespace-nowrap">
					{numEmployeesOptions[row.num_employees.value]}
				</span>
			{/if}
		</div>

		{#if row.contract_type}
			<div class=" pt-3 font-mono text-[9px]">
				{contractTypeOptions[row.contract_type.value][siteState.language]}
			</div>
		{/if}

		{#if row.compensation_amount && row.compensation_frequency && row.country}
			<div class="{siteState.indexW > 768 ? 'pt-1.75' : 'pt-1.5 '} ">
				<div
					class="flex w-min flex-row gap-1 rounded-full border px-2 py-1 font-mono text-[9px] whitespace-nowrap"
				>
					<span>
						{row.compensation_amount}{currency[row.country.value]}
					</span>
					<span>
						{compensationFrequencyOptions[row.compensation_frequency.value][siteState.language]}
					</span>
				</div>
			</div>
		{/if}
	</div>
</div>
