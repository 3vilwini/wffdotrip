<script lang="ts">
	import DoubleArrowButton from './DoubleArrowButton.svelte';

	import {
		jobExperienceOptions,
		compensationFrequencyOptions,
		contractTypeOptions
	} from './../../staticContent.ts';
	import {
		countryOptions,
		countryShortCode,
		AddlCompItem,
		currency,
		addlCompItemOptions,
		getEmployerTypeLabel,
		getWorkerTypeLabel,
		addlCompensationCoverageOptions,
		fieldLabels,
		numEmployeesOptions,
		jobObtainedViaOptions,
		contractLengthUnitOptions
	} from '$lib/staticContent';
	import { siteState, yarndingsText } from '$lib/states.svelte';
	import doubleArrow from '$lib/assets/doubleArrow.svg';
	let { row = $bindable() } = $props();
</script>

<!-- 
Created on: "2026-02-01T00:09:30.603243Z"

addl_notes: ""

artist_residency_q_1: "asdfasdfasdf"

artist_residency_q_2: "asdfasdfasdf"

artist_residency_q_3: null

id: 466

order: "2.00000000000000000000"

user_id: "user_38DwbOwozKaMYrb50IznRmw9t7R"

verified: true
-->

<div
	class="transition-transform {row
		? 'translate-x-0'
		: 'translate-x-full '} absolute top-0 right-0 z-2 h-[calc(100dvh-3.5rem)] w-[25dvw] max-w-sm min-w-xs border-l bg-lightgrey"
>
	{#if row}
		<div class="flex h-[calc(100dvh-3.5rem)] flex-col gap-6 overflow-auto p-6">
			<div class="flex items-center gap-2">
				{#if row.city}
					<div class="flex w-6 justify-center text-center font-yarndings text-3xl leading-none">
						{yarndingsText[row.city.length % yarndingsText.length]}
					</div>
				{/if}
				{#if row.worker_type}
					<div class="text-2xl leading-none">{getWorkerTypeLabel(row.worker_type.value)}</div>
				{/if}
			</div>

			<div class="">
				{#if row.year}
					<div class="text-lg">{row.year}</div>
				{/if}
				<div class="font-mono text-xs">
					{#if row.job_title}
						<div>{row.job_title}</div>
					{/if}
					{#if row.job_details}
						<div>{row.job_details}</div>
					{/if}
					{#if row.job_experience}
						<div>
							{jobExperienceOptions[row.job_experience.value] +
								' ' +
								fieldLabels.yearsOfExperience[siteState.language]}
						</div>
					{/if}
					{#if row.job_obtained_via}
						<div>{jobObtainedViaOptions[row.job_obtained_via.value][siteState.language]}</div>
					{/if}
				</div>
			</div>
			<div>
				{#if row.employer_name}
					<div class="font-serif text-lg tracking-tight">{row.employer_name}</div>
				{/if}
				<div class="font-mono text-xs">
					{#if row.employer_type}
						<div>{getEmployerTypeLabel(row.employer_type.value)}</div>
					{/if}
					{#if row.city && row.country}
						<div>{row.city}, {countryOptions[row.country.value][siteState.language]}</div>
					{/if}
					{#if row.num_employees}
						<div>
							{numEmployeesOptions[row.num_employees.value] +
								' ' +
								fieldLabels.employees[siteState.language]}
						</div>
					{/if}
					{#if row.employer_details}
						<div>{row.employer_details}</div>
					{/if}
				</div>
			</div>

			<div>
				{#if row.contract_type}
					<div class="text-lg">
						{contractTypeOptions[row.contract_type.value][siteState.language]}
					</div>
				{/if}
				<div class="font-mono text-xs">
					{#if row.contract_num_hours}
						<div>
							{row.contract_num_hours + ' ' + fieldLabels.perWeek[siteState.language]}
						</div>
					{/if}
					{#if row.contract_length && row.contract_length_unit}
						<div>
							{row.contract_length}
							{contractLengthUnitOptions[row.contract_length_unit.value][siteState.language]}
						</div>
					{/if}
					{#if row.worker_status && row.country}
						<div>{countryShortCode[row.country.value]}—{row.worker_status}</div>
					{/if}
				</div>
			</div>

			{#if row.compensation_amount && row.compensation_frequency && row.country}
				<div class="border border-dashed">
					<div class="flex justify-between bg-black p-3 text-lg text-white">
						<div class="font-serif tracking-tight">
							{compensationFrequencyOptions[row.compensation_frequency.value][siteState.language]}
						</div>
						{row.compensation_amount}{currency[row.country.value]}
					</div>
				</div>
			{/if}
			{#if row.country && (row.addl_comp_accommodation || row.addl_comp_commission || row.addl_comp_health_insurance || row.addl_comp_meals || row.addl_comp_per_diem || row.addl_comp_production_budget || row.addl_comp_public_transportation || row.addl_comp_sale_of_work || row.addl_comp_transport_of_work || row.addl_comp_travel)}
				<div>
					<div class="text-lg">Additional Compensation</div>
					<div class="font-mono text-xs">
						{#each Object.keys(AddlCompItem) as key}
							{#if row['addl_comp_' + key.toLowerCase()]}
								<div class="flex justify-between gap-2 py-0.5 not-last:border-b">
									<div>
										{addlCompItemOptions[AddlCompItem[key]][siteState.language]}
									</div>
									<div>
										{#if key === 'SALE_OF_WORK' || key === 'PRODUCTION_BUDGET' || key === 'PER_DIEM'}
											{row['addl_comp_' + key.toLowerCase()]}{currency[row.country.value]}
										{:else}
											{addlCompensationCoverageOptions[row['addl_comp_' + key.toLowerCase()].value][
												siteState.language
											]}
										{/if}
									</div>
								</div>
							{/if}
						{/each}
					</div>
				</div>
			{/if}
			<div class="flex flex-col gap-2 font-mono text-xs">
				{#if row.satisfied_with_compensation}
					<div>{fieldLabels.satisfiedWithCompensation[siteState.language]}</div>
				{/if}
				{#if row.satisfied_with_conditions}
					<div>{fieldLabels.satisfiedWithConditions[siteState.language]}</div>
				{/if}
				{#if row.treated_fairly}
					<div>{fieldLabels.treatedFairly[siteState.language]}</div>
				{/if}
				{#if row.paid_late}
					<div>{fieldLabels.compensationLate[siteState.language]}</div>
				{/if}
			</div>
		</div>
		<button
			onclick={() => (row = null)}
			class="absolute top-[calc(50dvh-2.5rem)] left-0 -translate-x-6.5 cursor-pointer border border-dashed"
		>
			<DoubleArrowButton flip={true}></DoubleArrowButton>
		</button>
	{/if}
</div>
