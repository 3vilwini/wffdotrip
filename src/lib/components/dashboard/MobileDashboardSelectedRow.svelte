<script lang="ts">
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

	let { row, showExpandedEntry = $bindable() } = $props();
</script>

{#if row}
	<div class="flex flex-col">
		<div class="flex items-start justify-between p-3">
			<div class="flex items-center gap-2">
				{#if row.city}
					<div class="flex w-6 justify-center text-center font-yarndings text-3xl leading-none">
						{yarndingsText[row.city.length % yarndingsText.length]}
					</div>
				{/if}
				{#if row.worker_type}
					<div class="text-lg leading-none xl:text-2xl">
						{getWorkerTypeLabel(row.worker_type.value)}
					</div>
				{/if}
			</div>
		</div>

		<div class="flex grow flex-col gap-6 p-3 pb-12">
			<div>
				{#if row.year}
					<div class="text-[17.25px]">{row.year}</div>
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
						<div>
							{jobObtainedViaOptions[row.job_obtained_via.value][siteState.language]}
						</div>
					{/if}
				</div>
			</div>
			<div>
				{#if row.employer_name}
					<div class="font-serif text-lg tracking-[-0.01em]">{row.employer_name}</div>
				{/if}
				<div class="font-mono text-xs">
					{#if row.employer_type}
						<div>{getEmployerTypeLabel(row.employer_type.value)}</div>
					{/if}
					{#if row.city && row.country}
						<div>
							{row.city}, {countryOptions[row.country.value][siteState.language]}
						</div>
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
					<div class="text-[17.25px] tracking-[-0.01em]">
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
						<div class="font-serif">
							{compensationFrequencyOptions[row.compensation_frequency.value][siteState.language]}
						</div>
						<div class="tracking-wide">
							{row.compensation_amount}{currency[row.country.value]}
						</div>
					</div>
				</div>
			{/if}
			{#if row.country && (row.addl_comp_accommodation || row.addl_comp_commission || row.addl_comp_health_insurance || row.addl_comp_meals || row.addl_comp_per_diem || row.addl_comp_production_budget || row.addl_comp_public_transportation || row.addl_comp_sale_of_work || row.addl_comp_transport_of_work || row.addl_comp_travel)}
				<div>
					<div class="mb-1 text-lg tracking-[-0.01em]">
						{fieldLabels.addlComp[siteState.language]}
					</div>
					<div class="font-mono text-xs">
						{#each Object.keys(AddlCompItem) as key}
							{#if row['addl_comp_' + key.toLowerCase()]}
								<div class="flex justify-between gap-2 py-1 not-last:border-b">
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
			<div class="flex flex-col gap-3 font-mono text-xs">
				{#if row.satisfied_with_compensation}
					<div class="flex gap-2">
						<div class="text-sm leading-[0.75]">❀</div>
						<div>
							{fieldLabels.satisfiedWithCompensation[siteState.language]}
						</div>
					</div>
				{/if}
				{#if row.satisfied_with_conditions}
					<div class="flex gap-2">
						<div class="text-sm leading-[0.75]">❀</div>
						<div>
							{fieldLabels.satisfiedWithConditions[siteState.language]}
						</div>
					</div>
				{/if}
				{#if row.treated_fairly}
					<div class="flex gap-2">
						<div class="text-sm leading-[0.75]">❀</div>
						<div>
							{fieldLabels.treatedFairly[siteState.language]}
						</div>
					</div>
				{/if}
				{#if row.paid_late}
					<div class="flex gap-2">
						<div class="text-sm leading-[0.75]">⚑</div>
						<div>
							{fieldLabels.compensationLate[siteState.language]}
						</div>
					</div>
				{/if}
			</div>
		</div>
	</div>
{/if}
