<script lang="ts">
	import { compensationFrequencyOptions } from './../../staticContent.ts';
	import { siteState } from '$lib/states.svelte';
	import {
		currency,
		contractTypeOptions,
		getEmployerTypeLabel,
		getWorkerTypeLabel,
		numEmployeesOptions
	} from '$lib/staticContent';
	let { row, onclick } = $props();
</script>

<div {onclick} class="items-top flex cursor-pointer gap-2 border-b pl-3 pr-1.5 py-2 hover:bg-lightgrey">
	{#if row.city}
		<div class="w-40 shrink-0 grow-0 pt-1.5 font-mono text-xs">
			{row.city}
		</div>
	{/if}
	<div class="items-top flex grow justify-between gap-4">
		<span class="leading-none">
			{#if row.worker_type}
				<span class="text-lg leading-tight">
					{getWorkerTypeLabel(row.worker_type.value)}
				</span>
			{/if}
			{#if row.job_title}
				<span class="relative -top-1.25 -mb-1.25 font-mono text-[9px]">
					{row.job_title}
				</span>
			{/if}
		</span>

		<span class="leading-none">
			{#if row.employer_type}
				<span class="font-serif text-lg leading-tight tracking-tight">
					{getEmployerTypeLabel(row.employer_type.value)}
				</span>
			{/if}

			{#if row.num_employees}
				<span class="relative -top-1.25 -mb-1.25 font-mono text-[9px] whitespace-nowrap">
					{numEmployeesOptions[row.num_employees.value]}
				</span>
			{/if}
		</span>

		{#if row.contract_type}
			<div class="pt-1 font-mono text-xs">
				{contractTypeOptions[row.contract_type.value][siteState.language]}
			</div>
		{/if}

		{#if row.compensation_amount && row.compensation_frequency && row.country}
			<div>
				<div class="rounded-full border px-2 py-1 font-mono text-[9px] whitespace-nowrap">
					{row.compensation_amount}{currency[row.country]}
					{compensationFrequencyOptions[row.compensation_frequency.value][siteState.language]}
				</div>
			</div>
		{/if}
	</div>
</div>
