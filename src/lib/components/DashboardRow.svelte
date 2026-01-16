<script lang="ts">
	import {
		addlCompensationCoverageOptions,
		fieldLabels,
		jobObtainedViaOptions
	} from './../staticContent.ts';
	import { siteState } from '$lib/states.svelte';
	import {
		Country,
		countryOptions,
		getWorkerTypeLabel,
		numEmployeesOptions,
		contractTypeOptions,
		compensationFrequencyOptions,
		jobExperienceOptions,
		getEmployerTypeLabel
	} from '$lib/staticContent';
	let { row } = $props();
	let rowExpanded = $state(false);
</script>

<div class="border-t pr-4 pl-8 font-mono text-xs leading-normal last:border-b">
	<div class="align-center flex justify-between gap-4 pt-3 pb-2">
		<div class="flex basis-1/4 gap-4">
			<div class="basis-1/2">
				{row.city}, {countryOptions[row.country][siteState.language]}
			</div>
			<div class="basis-1/3">
				{row.verified ? 'Validated' : 'Pending'}
			</div>
			<div class="basis-1/6">
				{row.year}
			</div>
		</div>

		<div class="flex basis-1/4 gap-2">
			<div class="font-sans text-lg leading-3">
				{getWorkerTypeLabel(row.worker_category, siteState.language)}
			</div>
			<div>
				{row.job_title}
			</div>
		</div>

		<div class="basis-1/5 font-serif text-lg leading-2.5">
			{row.employer_name}
		</div>

		<div class="flex basis-1/5 justify-between">
			<div>{contractTypeOptions[row.contract_type][siteState.language]}</div>
			<div>
				<div class="-mt-0.5 rounded-full border px-2 py-0.5 text-[9px] whitespace-nowrap uppercase">
					{row.compensation_amount}{row.country === Country.UK
						? '£'
						: row.country === Country.FRANCE
							? '€'
							: row.country === Country.ITALY
								? '€'
								: row.country === Country.SPAIN
									? '€'
									: ''}
					{compensationFrequencyOptions[row.compensation_frequency][siteState.language]}
				</div>
			</div>
		</div>
		<div
			onclick={() => {
				rowExpanded = !rowExpanded;
			}}
		>
			<div
				class="relative h-4 w-4 {rowExpanded
					? 'rotate-45'
					: 'rotate-0'} origin-center transition-transform"
			>
				<div class="absolute left-[0.5px] h-4 w-2 border-r"></div>
				<div class="absolute top-[0.5px] h-2 w-4 border-b"></div>
			</div>
		</div>
	</div>
	<div
		class="grid {rowExpanded
			? 'grid-rows-[1fr]'
			: 'grid-rows-[0fr]'} transition-[grid-template-rows]"
	>
		<div class="overflow-hidden">
			<div class="flex items-end justify-between gap-4 pb-4">
				<div class="basis-1/4">
					<div class="flex gap-2">
						<button
							class="cursor-pointer border px-3 py-1.5 uppercase hover:bg-black hover:text-white"
						>
							Edit
						</button>
						<button
							class="cursor-pointer border px-3 py-1.5 uppercase hover:bg-black hover:text-white"
						>
							Delete
						</button>
					</div>
				</div>

				<div class="basis-1/4">
					<div>
						{row.job_details}
					</div>
					<div>
						{jobExperienceOptions[row.job_experience][siteState.language]} of experience
					</div>
					<div class="mb-4">
						{jobObtainedViaOptions[row.job_obtained_via][siteState.language]}
					</div>
					{#if row.satisfied_with_compensation}
						<div class="my-2 flex gap-2">
							<div>❀</div>
							<div>satisfied with compensation</div>
						</div>
					{/if}
					{#if row.satisfied_with_conditions}
						<div class="my-2 flex gap-2">
							<div>❀</div>
							<div>satisfied with working conditions</div>
						</div>
					{/if}
					{#if row.treated_fairly}
						<div class="my-2 flex gap-2">
							<div>❀</div>
							<div>treated fairly</div>
						</div>
					{/if}
				</div>
				<div class="basis-1/5">
					<div>
						{getEmployerTypeLabel(row.employer_type, siteState.language)}
					</div>
					<div class="mb-4">
						{numEmployeesOptions[row.num_employees][siteState.language]}
					</div>
					<div>
						{row.contract_num_hours} hours / week
					</div>
					<div>
						{row.contract_length}
						{row.contract_length_unit.value} contract
					</div>
					<div>
						{row.worker_status}
					</div>
				</div>
				<div class="basis-1/5">
					{#if row.addl_comp_sale_of_work || row.addl_comp_production || row.addl_comp_travel || row.addl_comp_accommodation || row.addl_comp_transport_of_works}
						<div class="mb-4">Additional Compensation</div>
						{#if row.addl_comp_sale_of_work}
							<div class="flex justify-between gap-2">
								<div>
									{fieldLabels.saleOfWork[siteState.language]}
								</div>
								<div>
									{row.addl_comp_sale_of_work}
								</div>
							</div>
						{/if}
						{#if row.addl_comp_production}
							<div class="flex justify-between gap-2">
								<div>
									{fieldLabels.production[siteState.language]}
								</div>
								<div>
									{row.addl_comp_production}
								</div>
							</div>
						{/if}
						{#if row.addl_comp_travel}
							<div class="flex justify-between gap-2">
								<div>
									{fieldLabels.travel[siteState.language]}
								</div>
								<div>
									{addlCompensationCoverageOptions[row.addl_comp_travel.value][siteState.language]}
								</div>
							</div>
						{/if}
						{#if row.addl_comp_accommodation}
							<div class="flex justify-between gap-2">
								<div>
									{fieldLabels.accommodation[siteState.language]}
								</div>
								<div>
									{addlCompensationCoverageOptions[row.addl_comp_accommodation.value][
										siteState.language
									]}
								</div>
							</div>
						{/if}
						{#if row.addl_comp_transport_of_works}
							<div class="flex justify-between gap-2">
								<div>
									{fieldLabels.transportOfWorks[siteState.language]}
								</div>
								<div>
									{#if addlCompensationCoverageOptions[row.addl_comp_transport_of_works.value]}
										{addlCompensationCoverageOptions[row.addl_comp_transport_of_works.value][
											siteState.language
										]}
									{/if}
								</div>
							</div>
						{/if}
					{/if}
				</div>
				<div class="h-4 w-4"></div>
			</div>
		</div>
	</div>
</div>
