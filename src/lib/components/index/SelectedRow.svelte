<script lang="ts">
	import DoubleArrowButton from './DoubleArrowButton.svelte';
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
	let { rows = $bindable() } = $props();

	const expandRow = (row) => {
		rows.forEach((r) => {
			if (r.id !== row.id) {
				r.isExpanded = false;
			}
		});
		row.isExpanded = !row.isExpanded;
	};

	const removeRow = (row) => {
		rows = rows.filter((r) => r.id !== row.id);
	};

	let outerContainerW = $state(0);
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
	bind:clientWidth={outerContainerW}
	class="relative transition-[width,min-width] {rows.length > 0
		? 'z-2  w-[25dvw] max-w-sm min-w-xs'
		: ' z-1 w-14 min-w-14 '}  h-[calc(100dvh-55px)]"
>
	<div
		style="width: {outerContainerW}px"
		class=" {rows.length > 0
			? 'z-2  w-[25dvw] max-w-sm min-w-xs'
			: ' z-1 w-14 min-w-14 '} fixed top-0 right-0 h-[calc(100dvh-55px)] border-l bg-lightgrey"
	>
		{#if rows && rows.length > 0}
			<div class="flex h-[calc(100dvh-55px)] flex-col">
				{#each rows as row, idx}
					<div
						class="flex min-h-14 flex-col {row.isExpanded ? 'gap-6 overflow-auto ' : ' '} border-b"
					>
						<div
							class="flex cursor-pointer items-center justify-between {row.isExpanded
								? 'p-3 pb-0 '
								: ' px-3 py-3 '} "
							onclick={() => expandRow(row)}
						>
							<div class="flex items-center gap-2">
								{#if row.country}
									<div
										class="flex w-6 justify-center text-center font-yarndings text-3xl leading-none"
									>
										{yarndingsText[idx % yarndingsText.length]}
									</div>
								{/if}
								{#if row.worker_type}
									<div class="text-lg leading-none">
										{getWorkerTypeLabel(row.worker_type.value)}
									</div>
								{/if}
							</div>

							<div class=" border border-dashed border-black text-white">
								<div
									onclick={() => removeRow(row)}
									class="flex size-6 cursor-pointer items-center justify-center bg-black"
								>
									<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="7.82841" y1="2.17155" x2="2.17155" y2="7.8284" stroke="white"/>
<line x1="2.17155" y1="2.17159" x2="7.8284" y2="7.82845" stroke="white"/>
</svg>

								</div>
							</div>
						</div>

						<div
							class="grid {row.isExpanded
								? 'grid-rows-[1fr]'
								: 'grid-rows-[0fr]'} transition-[grid-template-rows]"
						>
							<div class="overflow-hidden">
								<div class="flex grow flex-col gap-6 px-6 pb-6">
									<div>
										{#if row.year}
											<div class="text-[17.25px]">{row.year}</div>
										{/if}
										<div class="font-mono text-xs leading-[1.6]">
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
											<div class="font-serif text-lg leading-[1.2] tracking-[-0.01em]">
												{row.employer_name}
											</div>
										{:else if row.employer_type}
											<div class="font-serif text-lg leading-[1.2] tracking-[-0.01em]">
												{getEmployerTypeLabel(row.employer_type.value)}
											</div>
										{/if}
										<div class="font-mono text-xs leading-[1.6]">
											{#if row.employer_type && row.employer_name}
												<div>{getEmployerTypeLabel(row.employer_type.value)}</div>
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
										<div class="font-mono text-xs leading-[1.6]">
											{#if row.contract_num_hours}
												<div>
													{row.contract_num_hours + ' ' + fieldLabels.perWeek[siteState.language]}
												</div>
											{/if}
											{#if row.contract_length && row.contract_length_unit}
												<div>
													{row.contract_length}
													{contractLengthUnitOptions[row.contract_length_unit.value][
														siteState.language
													]}
												</div>
											{/if}
											{#if row.worker_status && row.country}
												<div>{countryShortCode[row.country.value]}—{row.worker_status}</div>
											{/if}
										</div>
									</div>

									{#if row.compensation_amount && row.compensation_frequency && row.country}
										<div class="border border-dashed">
											<div class="flex justify-between p-3 py-2 text-lg">
												<div class="tracking-wide">
													{row.compensation_amount}
													{currency[row.country.value]}
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
											<div class="font-mono text-xs leading-[1.4]">
												{#each Object.keys(AddlCompItem) as key}
													{#if row['addl_comp_' + key.toLowerCase()]}
														<div class="flex justify-between gap-2 py-1 not-last:border-b">
															<div>
																{addlCompItemOptions[AddlCompItem[key]][siteState.language]}
															</div>
															<div class="text-right">
																{#if key === 'SALE_OF_WORK' || key === 'PRODUCTION_BUDGET' || key === 'PER_DIEM' || key === 'ACCESSIBILITY_BUDGET'}
																	{row['addl_comp_' + key.toLowerCase()]}{currency[
																		row.country.value
																	]}
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
									<div class="flex flex-col gap-3 font-mono text-xs leading-[1.6]">
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
					</div>
				{/each}
			</div>

			<button
				onclick={() => (rows = [])}
				class="absolute top-[calc(50dvh-2.5rem)] left-0 -translate-x-6.5 cursor-pointer border border-dashed"
			>
				<DoubleArrowButton flip={true}></DoubleArrowButton>
			</button>
		{/if}
	</div>
</div>
