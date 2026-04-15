<script lang="ts">
	import X from '../X.svelte';

	import { enhance } from '$app/forms';
	import { resolve } from '$app/paths';

	import {
		addlCompensationCoverageOptions,
		AddlCompItem,
		compensationFrequencyOptions
	} from '$lib/content/compensation';
	import { fieldLabels, indexHeaderLabels, miscLabels } from '$lib/content/misc';
	import {
		jobExperienceOptions,
		jobObtainedViaOptions,
		contractLengthUnitOptions,
		contractTypeOptions,
		numEmployeesOptions
	} from '$lib/content/jobDetails';
	import { currency, countryIcons, countryOptions } from '$lib/content/country';
	import { projectTypeOptions } from '$lib/content/projectType';
	import { getWorkerTypeLabel } from '$lib/content/workerType';
	import { getEmployerTypeLabel } from '$lib/content/employerType';

	import { siteState } from '$lib/states.svelte';

	import EditRowModal from './EditRowModal.svelte';
	import { afterNavigate, goto, invalidateAll } from '$app/navigation';
	import DashboardRowAddlCompLine from './DashboardRowAddlCompLine.svelte';
	let { row, formPage } = $props();
	let rowExpanded = $state(false);
	let showEditModal = $state(false);
	let showDeleteModal = $state(false);

	afterNavigate(() => {
		showEditModal = false;
		showDeleteModal = false;
		invalidateAll();
	});

	// const closeEditModal = () => {
	// 	showEditModal = false;
	// };
</script>

{#if showEditModal}
	<div class="fixed top-0 left-0 z-10 flex h-dvh w-dvw justify-center py-12 pb-24">
		<div
			class="relative max-w-2xl overflow-auto border border-black bg-white px-4 pb-12 font-mono text-xs leading-normal"
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
				{miscLabels.confirmDelete[siteState.language]}
				<form
					use:enhance={({ formElement, formData, action, cancel, submitter }) => {
						return async ({ result, update }) => {
							if (result.type === 'success') {
								goto(resolve('/dashboard'));
							}
						};
					}}
					method="POST"
					action="/dashboard?/delete"
					class="flex items-center justify-center gap-4"
				>
					<input maxlength="250" hidden name="row_id" value={row.id ? row.id : ''} />

					<button
						class="cursor-pointer border px-3 py-1.5 uppercase hover:bg-black hover:text-white"
					>
						{miscLabels.delete[siteState.language]}
					</button>
					<div
						onclick={() => {
							showDeleteModal = false;
						}}
						class="cursor-pointer border px-3 py-1.5 uppercase hover:bg-black hover:text-white"
					>
						{miscLabels.cancel[siteState.language]}
					</div>
				</form>
				<div
					class="absolute top-4 right-4"
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

<div
	onclick={() => {
		rowExpanded = !rowExpanded;
	}}
	class=" cursor-pointer border-t pr-4 pl-8 font-mono text-xs leading-normal last:border-b"
>
	<div class="align-center flex justify-between gap-4 pt-1 pb-1.5">
		<div class="flex basis-1/4 items-center gap-4">
			{#if row.country}
				<div class="flex h-8.5 w-6 text-center font-yarndings text-3xl leading-none">
					{countryIcons[row.country.value]}
				</div>
				<div class="basis-1/2 pt-0.75">
					{#if row.city}
						{row.city},
					{/if}
					{countryOptions[row.country.value][siteState.language]}
				</div>
			{/if}
			<div class="basis-1/3 pt-0.75">
				{row.verified ? 'Validated' : 'Pending'}
			</div>
			{#if row.year}
				<div class="basis-1/6 pt-0.75">
					{row.year}
				</div>
			{/if}
		</div>

		<div class="flex basis-1/4 gap-2">
			{#if row.worker_type}
				<div class="pt-2 font-sans text-[17.25px] leading-[1.2]">
					{getWorkerTypeLabel(row.worker_type.value)}
				</div>
			{/if}
			{#if row.job_title}
				<div class="pt-2.75">
					{row.job_title}
				</div>
			{/if}
			{#if row.project_type}
				<div class="pt-2.75">
					{#if projectTypeOptions[row.project_type?.value]}
						{projectTypeOptions[row.project_type.value][siteState.language]}
					{/if}
				</div>
			{/if}
		</div>

		<div class="relative basis-1/5 pt-2 font-serif text-lg leading-[1] tracking-tight">
			{#if row.employer_name}
				{row.employer_name}
			{/if}
		</div>

		<div class="flex basis-1/5 justify-between">
			{#if row.contract_type}
				<div class="pt-2.75">
					{contractTypeOptions[row.contract_type.value][siteState.language]}
				</div>
			{/if}
			{#if row.compensation_amount && row.compensation_frequency && row.country}
				<div class="pt-2.75">
					<div
						class="-mt-0.5 rounded-full border px-2 py-0.5 text-[9px] whitespace-nowrap uppercase"
					>
						{row.compensation_amount}{currency[row.country.value]}
						{compensationFrequencyOptions[row.compensation_frequency.value][siteState.language]}
					</div>
				</div>
			{/if}
		</div>
		<div class="pt-2">
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
							onclick={(e) => {
								e.stopImmediatePropagation();
								showEditModal = true;
							}}
							class="cursor-pointer border px-3 py-1.5 uppercase hover:bg-black hover:text-white"
						>
							Edit
						</button>
						<button
							onclick={(e) => {
								e.stopImmediatePropagation();
								showDeleteModal = true;
							}}
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
							{jobExperienceOptions[row.job_experience.value] +
								' ' +
								fieldLabels.yearsOfExperience[siteState.language]}
						</div>
					{/if}
					{#if row.job_obtained_via}
						<div class="mb-4">
							{jobObtainedViaOptions[row.job_obtained_via.value][siteState.language]}
						</div>
					{/if}
					{#if row.satisfied_with_compensation}
						<div class="mt-2 flex gap-2">
							<div>❀</div>
							<div>satisfied with compensation</div>
						</div>
					{/if}
					{#if row.satisfied_with_conditions}
						<div class="mt-2 flex gap-2">
							<div>❀</div>
							<div>satisfied with working conditions</div>
						</div>
					{/if}
					{#if row.treated_fairly}
						<div class="mt-2 flex gap-2">
							<div>❀</div>
							<div>treated fairly</div>
						</div>
					{/if}
				</div>
				<div class="basis-1/5">
					{#if row.employer_type}
						<div>
							{getEmployerTypeLabel(row.employer_type.value)}
						</div>
					{/if}
					{#if row.num_employees}
						<div class="mb-4">
							{numEmployeesOptions[row.num_employees.value] +
								' ' +
								fieldLabels.employees[siteState.language]}
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
							{contractLengthUnitOptions[row.contract_length_unit.value][siteState.language]}
							{indexHeaderLabels.contract[siteState.language]?.toLowerCase()}
						</div>
					{/if}
					{#if row.worker_status}
						<div>
							{row.worker_status}
						</div>
					{/if}
				</div>
				<div class="basis-1/5">
					{#if row.addl_comp_accommodation || row.addl_comp_commission || row.addl_comp_health_insurance || row.addl_comp_meals || row.addl_comp_per_diem || row.addl_comp_production_budget || row.addl_comp_public_transportation || row.addl_comp_sale_of_work || row.addl_comp_transport_of_work || row.addl_comp_travel || row.addl_comp_accessibility_budget}
						<div class="my-4">{fieldLabels.addlComp[siteState.language]}</div>
						{#if row.addl_comp_sale_of_work}
							<DashboardRowAddlCompLine
								item={AddlCompItem.SALE_OF_WORK}
								value={row.addl_comp_sale_of_work + currency[row.country.value]}
							></DashboardRowAddlCompLine>
						{/if}
						{#if row.addl_comp_production_budget}
							<DashboardRowAddlCompLine
								item={AddlCompItem.PRODUCTION_BUDGET}
								value={row.addl_comp_production_budget + currency[row.country.value]}
							></DashboardRowAddlCompLine>
						{/if}
						{#if row.addl_comp_accessibility_budget}
							<DashboardRowAddlCompLine
								item={AddlCompItem.ACCESSIBILITY_BUDGET}
								value={row.addl_comp_accessibility_budget + currency[row.country.value]}
							></DashboardRowAddlCompLine>
						{/if}
						{#if row.addl_comp_transport_of_work}
							<DashboardRowAddlCompLine
								item={AddlCompItem.TRANSPORT_OF_WORK}
								value={addlCompensationCoverageOptions[row.addl_comp_transport_of_work.value][
									siteState.language
								]}
							></DashboardRowAddlCompLine>
						{/if}
						{#if row.addl_comp_travel}
							<DashboardRowAddlCompLine
								item={AddlCompItem.TRAVEL}
								value={addlCompensationCoverageOptions[row.addl_comp_travel.value][
									siteState.language
								]}
							></DashboardRowAddlCompLine>
						{/if}
						{#if row.addl_comp_accommodation}
							<DashboardRowAddlCompLine
								item={AddlCompItem.ACCOMMODATION}
								value={addlCompensationCoverageOptions[row.addl_comp_accommodation.value][
									siteState.language
								]}
							></DashboardRowAddlCompLine>
						{/if}
						{#if row.addl_comp_meals}
							<DashboardRowAddlCompLine
								item={AddlCompItem.MEALS}
								value={addlCompensationCoverageOptions[row.addl_comp_meals.value][
									siteState.language
								]}
							></DashboardRowAddlCompLine>
						{/if}
						{#if row.addl_comp_per_diem}
							<DashboardRowAddlCompLine
								item={AddlCompItem.PER_DIEM}
								value={row.addl_comp_per_diem + currency[row.country.value]}
							></DashboardRowAddlCompLine>
						{/if}
						{#if row.addl_comp_health_insurance}
							<DashboardRowAddlCompLine
								item={AddlCompItem.HEALTH_INSURANCE}
								value={addlCompensationCoverageOptions[row.addl_comp_health_insurance.value][
									siteState.language
								]}
							></DashboardRowAddlCompLine>
						{/if}
						{#if row.addl_comp_public_transportation}
							<DashboardRowAddlCompLine
								item={AddlCompItem.PUBLIC_TRANSPORTATION}
								value={addlCompensationCoverageOptions[row.addl_comp_public_transportation.value][
									siteState.language
								]}
							></DashboardRowAddlCompLine>
						{/if}
						{#if row.addl_comp_commission}
							<DashboardRowAddlCompLine
								item={AddlCompItem.COMMISSION}
								value={row.addl_comp_commission + '%'}
							></DashboardRowAddlCompLine>
						{/if}
					{/if}
				</div>
				<div class="h-4 w-4"></div>
			</div>
		</div>
	</div>
</div>
