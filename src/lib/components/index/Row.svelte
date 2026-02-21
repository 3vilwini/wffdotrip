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
	let { row, isSelected, onclick } = $props();
</script>

<div
	{onclick}
	class="items-top flex flex-row {siteState.indexW > 768
		? ''
		: ' pb-3'} cursor-pointer gap-x-2 border-b px-3 py-1 {isSelected
		? 'bg-lightgrey'
		: ''} hover:bg-lightgrey"
>
	{#if row.city}
		<div class="flex shrink-0 gap-x-2">
			<div class="flex w-6 justify-center text-center font-yarndings text-3xl">
				{yarndingsText[row.city.length % yarndingsText.length]}
			</div>
			<div
				class="{siteState.indexW > 768 ? 'w-24' : 'w-18'} shrink-0 grow-0 pt-3 font-mono text-xs"
			>
				{row.city}
			</div>
		</div>
	{/if}
	<div class="items-top flex grow flex-wrap justify-between gap-x-4">
		<div class=" pt-1.75 leading-none {siteState.indexW > 768 ? '' : 'flex flex-col gap-2'}">
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
			class="{siteState.indexW > 768 ? 'pt-1.5' : 'flex flex-col gap-2 pt-1.25'}
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
			<div class=" pt-3 font-mono text-[9px]">
				{contractTypeOptions[row.contract_type.value][siteState.language]}
			</div>
		{/if}

		{#if row.compensation_amount && row.compensation_frequency && row.country}
			<div class="{siteState.indexW > 768 ? 'pt-1.75' : 'pt-1.5 '} ">
				<div
					class="{siteState.indexW > 768
						? 'flex-row gap-1'
						: 'flex-col items-center'} flex w-min border border-dashed px-2 py-1 font-mono text-[9px] whitespace-nowrap"
				>
					<div>
						{row.compensation_amount}{currency[row.country.value]}
					</div>
					<div>
						{compensationFrequencyOptions[row.compensation_frequency.value][siteState.language]}
					</div>
				</div>
			</div>
		{/if}
	</div>
</div>
