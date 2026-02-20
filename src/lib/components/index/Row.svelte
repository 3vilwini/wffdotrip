<script lang="ts">
	import { compensationFrequencyOptions } from './../../staticContent.ts';
	import { siteState, yarndingsText } from '$lib/states.svelte';
	import {
		currency,
		contractTypeOptions,
		getEmployerTypeLabel,
		getWorkerTypeLabel,
		numEmployeesOptions
	} from '$lib/staticContent';
	let { row, isSelected, rowContainerW, onclick } = $props();
	let w = $derived(rowContainerW);
</script>

<div
	{onclick}
	class="items-top flex {w > 768
		? ''
		: ' pb-2'} cursor-pointer gap-x-2 border-b py-1 pr-2 pl-2 {isSelected
		? 'bg-lightgrey'
		: ''} hover:bg-lightgrey"
>
	{#if row.city}
		<div class="flex shrink-0 gap-x-2">
			<div class="flex w-6 justify-center text-center font-yarndings text-3xl">
				{yarndingsText[row.city.length % yarndingsText.length]}
			</div>
			<div class="w-24 shrink-0 grow-0 pt-3 font-mono text-xs">
				{row.city}
			</div>
		</div>
	{/if}
	<div
		class="items-top flex {w > 768
			? 'flex-row'
			: 'flex-col'} grow flex-wrap justify-between gap-x-4"
	>
		<div class="pt-1.75 leading-none">
			{#if row.worker_type}
				<span class="text-[17.25px] leading-tight tracking-[-0.01em]">
					{getWorkerTypeLabel(row.worker_type.value)}
				</span>
			{/if}
			{#if row.job_title}
				<span class="relative -top-1.25 -mb-1.25 font-mono text-[9px]">
					{row.job_title}
				</span>
			{/if}
		</div>

		<div
			class="{w > 768 ? 'pt-1.5' : ''}
			 leading-none"
		>
			{#if row.employer_type}
				<span class="font-serif text-lg leading-tight tracking-[-0.01em]">
					{getEmployerTypeLabel(row.employer_type.value)}
				</span>
			{/if}

			{#if row.num_employees}
				<span class="relative -top-1.25 -mb-1.25 font-mono text-[9px] whitespace-nowrap">
					{numEmployeesOptions[row.num_employees.value]}
				</span>
			{/if}
		</div>

		{#if row.contract_type}
			<div class="{w > 768 ? 'pt-3 ' : 'pt-1'} font-mono text-xs">
				{contractTypeOptions[row.contract_type.value][siteState.language]}
			</div>
		{/if}

		{#if row.compensation_amount && row.compensation_frequency && row.country}
			<div class="{w > 768 ? 'pt-1.75' : 'pt-1.5 '} ">
				<div class="w-min rounded-full border px-2 py-1 font-mono text-[9px] whitespace-nowrap">
					{row.compensation_amount}{currency[row.country]}
					{compensationFrequencyOptions[row.compensation_frequency.value][siteState.language]}
				</div>
			</div>
		{/if}
	</div>
</div>
