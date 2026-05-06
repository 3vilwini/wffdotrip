<script lang="ts">
	import {
		addlCompensationCoverageOptions,
		AddlCompItem,
		compensationFrequencyOptions,
		addlCompItemOptions
	} from '$lib/content/compensation';
	import { fieldLabels } from '$lib/content/misc';
	import {
		jobExperienceOptions,
		jobObtainedViaOptions,
		contractLengthUnitOptions,
		contractTypeOptions,
		numEmployeesOptions
	} from '$lib/content/jobDetails';
	import { currency, countryIcons, countryOptions, countryShortCode } from '$lib/content/country';
	import { projectTypeOptions } from '$lib/content/projectType';
	import { getWorkerTypeLabel } from '$lib/content/workerType';
	import { getEmployerTypeLabel } from '$lib/content/employerType';

	import { siteState, yarndingsText } from '$lib/states.svelte';

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
	class="z-20 {row
		? 'max-h-[calc(100dvh-55px)] bg-amber-50'
		: 'max-h-0'} fixed bottom-0 w-full overflow-auto border-t bg-lightgrey transition-[height,max-height]"
>
	{#if row}
		<div class="flex flex-col pb-12">
			<div class="flex min-h-14 flex-col">
				<div class="flex cursor-pointer items-center justify-between p-2">
					<div class="flex items-center gap-2">
						{#if row.country}
							<div class="flex w-6 justify-center text-center font-yarndings text-3xl leading-none">
								{yarndingsText[row.id % yarndingsText.length]}
							</div>
						{/if}
						{#if row.worker_type}
							<div class="text-lg leading-none xl:text-2xl">
								{getWorkerTypeLabel(row.worker_type.value)}
							</div>
						{/if}
					</div>

					<div class=" border border-dashed border-black text-white">
						<div
							onclick={() => (row = null)}
							class="flex size-8 cursor-pointer items-center justify-center bg-black"
						>
							×
						</div>
					</div>
				</div>

				<div class="flex grow flex-col gap-6 p-2">
					<div>
						{#if row.year}
							<div class="text-[17.25px]">{row.year}</div>
						{/if}
						<div class="font-mono text-xs">
							{#if row.job_title}
								<div>{row.job_title}</div>
							{/if}
							{#if row.project_type}
								<div>
									{#if projectTypeOptions[row.project_type?.value]}
										{projectTypeOptions[row.project_type.value][siteState.language]}
									{/if}
								</div>
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
								<div>{getEmployerTypeLabel(row.employer_type.value).split('(')[0]}</div>
							{/if}
							{#if row.country}
								<div>
									{#if row.city}
										{row.city},
									{/if}
									{countryOptions[row.country.value][siteState.language]}
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
							<div class="flex justify-between p-3 text-lg">
								<div class="tracking-wide">
									{row.compensation_amount}{currency[row.country.value]}
								</div>
								<div class="font-serif">
									{compensationFrequencyOptions[row.compensation_frequency.value][
										siteState.language
									]}
								</div>
							</div>
						</div>
					{/if}
					{#if row.country && (row.addl_comp_accommodation || row.addl_comp_commission || row.addl_comp_health_insurance || row.addl_comp_meals || row.addl_comp_per_diem || row.addl_comp_production_budget || row.addl_comp_public_transportation || row.addl_comp_sale_of_work || row.addl_comp_transport_of_work || row.addl_comp_travel || row.addl_comp_accessibility_budget)}
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
												{#if key === 'SALE_OF_WORK' || key === 'PRODUCTION_BUDGET' || key === 'PER_DIEM' || key === 'ACCESSIBILITY_BUDGET'}
													{row['addl_comp_' + key.toLowerCase()]}{currency[row.country.value]}
												{:else if key === 'COMMISSION'}
													{row['addl_comp_' + key.toLowerCase()]}%
												{:else}
													{addlCompensationCoverageOptions[
														row['addl_comp_' + key.toLowerCase()].value
													][siteState.language]}
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
		</div>
	{/if}
</div>
