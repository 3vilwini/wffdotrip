<script lang="ts">
	import X from './X.svelte';

	import { enhance } from '$app/forms';

	import {
		addlCompensationCoverageOptions,
		fieldLabels,
		jobObtainedViaOptions,
		addlCompItems,
		AddlCompItem
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
	import EditRowModal from './EditRowModal.svelte';
	import { afterNavigate, goto, invalidateAll } from '$app/navigation';
	let { row, formPage } = $props();
	let rowExpanded = $state(false);
	let showEditModal = $state(false);
	let showDeleteModal = $state(false);

	afterNavigate(() => {
		showEditModal = false;
		showDeleteModal = false;
		invalidateAll();
	});

	const closeEditModal = () => {
		showEditModal = false;
	};
</script>

{#if showEditModal}
	<div class="fixed top-0 left-0 flex h-dvh w-dvw justify-center py-12 pb-24">
		<div
			class="relative max-w-2xl overflow-scroll border border-black bg-white px-4 pb-12 font-mono text-xs leading-normal"
		>
			<EditRowModal bind:showEditModal {row} {formPage}></EditRowModal>
			<div
				onclick={() => {
					showEditModal = false;
				}}
			>
				<div class="absolute top-4 right-4 h-4 w-4 origin-center rotate-45 transition-transform">
					<div class="absolute left-[0.5px] h-4 w-2 border-r"></div>
					<div class="absolute top-[0.5px] h-2 w-4 border-b"></div>
				</div>
			</div>
		</div>
	</div>
{/if}

{#if showDeleteModal}
	<div class="fixed top-0 left-0 flex h-dvh w-dvw items-center justify-center py-12 pb-24">
		<div>
			<div
				class="relative flex max-w-2xl flex-col justify-center gap-4 overflow-scroll border border-black bg-white px-12 pt-12 pb-4 font-mono text-xs leading-normal"
			>
				Are you sure you want to delete?
				<form
					use:enhance={({ formElement, formData, action, cancel, submitter }) => {
						return async ({ result, update }) => {
							if (result.type === 'success') {
								goto('/dashboard');
							}
						};
					}}
					method="POST"
					action="/dashboard?/delete"
					class="flex items-center justify-center"
				>
					<input maxlength="250" hidden name="row_id" value={row.id ? row.id : ''} />

					<button
						class="cursor-pointer border px-3 py-1.5 uppercase hover:bg-black hover:text-white"
					>
						Delete
					</button>
				</form>
				<div
					onclick={() => {
						showDeleteModal = false;
					}}
				>
					<X></X>
				</div>
			</div>
		</div>
	</div>
{/if}

<div class="border-t pr-4 pl-8 font-mono text-xs leading-normal last:border-b">
	<div class="align-center flex justify-between gap-4 pt-3 pb-2">
		<div class="flex basis-1/4 gap-4">
			{#if row.city && row.country}
				<div class="basis-1/2">
					{row.city}, {countryOptions[row.country][siteState.language]}
				</div>
			{/if}
			<div class="basis-1/3">
				{row.verified ? 'Validated' : 'Pending'}
			</div>
			{#if row.year}
				<div class="basis-1/6">
					{row.year}
				</div>
			{/if}
		</div>

		<div class="flex basis-1/4 gap-2">
			{#if row.worker_category}
				<div class="font-sans text-lg leading-3">
					{getWorkerTypeLabel(row.worker_category, siteState.language)}
				</div>
			{/if}
			{#if row.job_title}
				<div>
					{row.job_title}
				</div>
			{/if}
		</div>

		<div class="basis-1/5 font-serif text-lg leading-2.5">
			{#if row.employer_name}
				{row.employer_name}
			{/if}
		</div>

		<div class="flex basis-1/5 justify-between">
			{#if row.contract_type}
				<div>{contractTypeOptions[row.contract_type][siteState.language]}</div>
			{/if}
			{#if row.compensation_amount && row.compensation_frequency}
				<div>
					<div
						class="-mt-0.5 rounded-full border px-2 py-0.5 text-[9px] whitespace-nowrap uppercase"
					>
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
			{/if}
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
							onclick={() => (showEditModal = true)}
							class="cursor-pointer border px-3 py-1.5 uppercase hover:bg-black hover:text-white"
						>
							Edit
						</button>
						<button
							onclick={() => (showDeleteModal = true)}
							class="cursor-pointer border px-3 py-1.5 uppercase hover:bg-black hover:text-white"
						>
							Delete
						</button>
					</div>
				</div>

				<div class="basis-1/4">
					{#if row.job_details}
						<div>
							{row.job_details}
						</div>
					{/if}
					{#if row.job_experience}
						<div>
							{jobExperienceOptions[row.job_experience][siteState.language]} of experience
						</div>
					{/if}
					{#if row.job_obtained_via}
						<div class="mb-4">
							{jobObtainedViaOptions[row.job_obtained_via][siteState.language]}
						</div>
					{/if}
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
					{#if row.employer_type}
						<div>
							{getEmployerTypeLabel(row.employer_type, siteState.language)}
						</div>
					{/if}
					{#if row.num_employees}
						<div class="mb-4">
							{numEmployeesOptions[row.num_employees][siteState.language]}
						</div>
					{/if}
					{#if row.contract_num_hours}
						<div>
							{row.contract_num_hours} hours / week
						</div>
					{/if}
					{#if row.contract_length && row.contract_length_unit}
						<div>
							{row.contract_length}
							{row.contract_length_unit.value} contract
						</div>
					{/if}
					{#if row.worker_status}
						<div>
							{row.worker_status}
						</div>
					{/if}
				</div>
				<div class="basis-1/5">
					{#if row.addl_comp_sale_of_work || row.addl_comp_production || row.addl_comp_travel || row.addl_comp_accommodation || row.addl_comp_transport_of_works}
						<div class="mb-4">Additional Compensation</div>
						{#if row.addl_comp_sale_of_work}
							<div class="flex justify-between gap-2">
								<div>
									{addlCompItems[AddlCompItem.SALE_OF_WORK][siteState.language]}
								</div>
								<div>
									{row.addl_comp_sale_of_work}
								</div>
							</div>
						{/if}
						{#if row.addl_comp_production_budget}
							<div class="flex justify-between gap-2">
								<div>
									{addlCompItems[AddlCompItem.PRODUCTION_BUDGET][siteState.language]}
								</div>
								<div>
									{row.addl_comp_production_budget}
								</div>
							</div>
						{/if}
						{#if row.addl_comp_transport_of_work}
							<div class="flex justify-between gap-2">
								<div>
									{addlCompItems[AddlCompItem.TRANSPORT_OF_WORK][siteState.language]}
								</div>
								<div>
									{addlCompensationCoverageOptions[row.addl_comp_transport_of_work.value][
										siteState.language
									]}
								</div>
							</div>
						{/if}
						{#if row.addl_comp_travel}
							<div class="flex justify-between gap-2">
								<div>
									{addlCompItems[AddlCompItem.TRAVEL][siteState.language]}
								</div>
								<div>
									{addlCompensationCoverageOptions[row.addl_comp_travel.value][siteState.language]}
								</div>
							</div>
						{/if}
						{#if row.addl_comp_accommodation}
							<div class="flex justify-between gap-2">
								<div>
									{addlCompItems[AddlCompItem.ACCOMMODATION][siteState.language]}
								</div>
								<div>
									{addlCompensationCoverageOptions[row.addl_comp_accommodation.value][
										siteState.language
									]}
								</div>
							</div>
						{/if}
						{#if row.addl_comp_meals}
							<div class="flex justify-between gap-2">
								<div>
									{addlCompItems[AddlCompItem.MEALS][siteState.language]}
								</div>
								<div>
									{#if addlCompensationCoverageOptions[row.addl_comp_meals.value]}
										{addlCompensationCoverageOptions[row.addl_comp_meals.value][siteState.language]}
									{/if}
								</div>
							</div>
						{/if}
						{#if row.addl_comp_per_diem}
							<div class="flex justify-between gap-2">
								<div>
									{addlCompItems[AddlCompItem.PER_DIEM][siteState.language]}
								</div>
								<div>
									{row.addl_comp_production_budget}
								</div>
							</div>
						{/if}
						{#if row.addl_comp_health_insurance}
							<div class="flex justify-between gap-2">
								<div>
									{addlCompItems[AddlCompItem.HEALTH_INSURANCE][siteState.language]}
								</div>
								<div>
									{#if addlCompensationCoverageOptions[row.addl_comp_health_insurance.value]}
										{addlCompensationCoverageOptions[row.addl_comp_health_insurance.value][siteState.language]}
									{/if}
								</div>
							</div>
						{/if}
						{#if row.addl_comp_public_transportation}
							<div class="flex justify-between gap-2">
								<div>
									{addlCompItems[AddlCompItem.PUBLIC_TRANSPORTATION][siteState.language]}
								</div>
								<div>
									{#if addlCompensationCoverageOptions[row.addl_comp_public_transportation.value]}
										{addlCompensationCoverageOptions[row.addl_comp_public_transportation.value][siteState.language]}
									{/if}
								</div>
							</div>
						{/if}
						{#if row.addl_comp_commission}
							<div class="flex justify-between gap-2">
								<div>
									{addlCompItems[AddlCompItem.COMMISSION][siteState.language]}
								</div>
								<div>
									{#if addlCompensationCoverageOptions[row.addl_comp_commission.value]}
										{addlCompensationCoverageOptions[row.addl_comp_commission.value][siteState.language]}
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
