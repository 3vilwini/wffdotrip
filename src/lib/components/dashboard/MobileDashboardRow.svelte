<script lang="ts">
	import X from '../X.svelte';

	import { enhance } from '$app/forms';

	import { siteState, yarndingsText } from '$lib/states.svelte';
	import {
		countryOptions,
		getWorkerTypeLabel,
		numEmployeesOptions,
		contractTypeOptions,
		compensationFrequencyOptions,
		jobExperienceOptions,
		getEmployerTypeLabel,
		projectTypeOptions,
		currency
	} from '$lib/staticContent';
	import EditRowModal from './EditRowModal.svelte';
	import { afterNavigate, goto, invalidateAll } from '$app/navigation';
	import DashboardRowAddlCompLine from './DashboardRowAddlCompLine.svelte';
	import MobileSelectedRow from '../index/MobileSelectedRow.svelte';
	import MobileDashboardSelectedRow from './MobileDashboardSelectedRow.svelte';
	let { row, formPage } = $props();
	let showEditModal = $state(false);
	let showDeleteModal = $state(false);
	let showExpandedEntry = $state(false);

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
	<div class="fixed top-0 left-0 z-20 flex h-dvh w-dvw justify-center pt-15.75">
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
	<div class="fixed top-0 left-0 z-20 flex h-dvh w-dvw items-center justify-center py-12 pb-24">
		<div>
			<div
				class="relative flex max-w-2xl flex-col justify-center gap-4 overflow-auto border border-black bg-white px-12 py-12 font-mono text-xs leading-normal"
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
					class="flex items-center justify-center gap-3"
				>
					<input maxlength="250" hidden name="row_id" value={row.id ? row.id : ''} />

					<button
						class="cursor-pointer border px-3 py-1.5 uppercase hover:bg-black hover:text-white"
					>
						Delete
					</button>
					<div
						onclick={() => {
							showDeleteModal = false;
						}}
						class="cursor-pointer border px-3 py-1.5 uppercase hover:bg-black hover:text-white"
					>
						Cancel
					</div>
				</form>
			</div>
		</div>
	</div>
{/if}

<div
	onclick={() => (showExpandedEntry = !showExpandedEntry)}
	class="flex w-full justify-between gap-4 border-b p-3 pt-2 font-mono text-xs leading-normal"
>
	<div class="align-center flex grow flex-col gap-1">
		<div class="flex items-center gap-4 pb-3">
			{#if row.city && row.country}
				<div class="flex basis-1/2 items-center gap-2">
					<div class="flex w-6 justify-center text-center font-yarndings text-3xl leading-none">
						{yarndingsText[row.city.length % yarndingsText.length]}
					</div>
					<div>
						{row.city}, {countryOptions[row.country.value][siteState.language]}
					</div>
				</div>
			{/if}
			<div class="flex basis-1/2 justify-between">
				<div>
					{row.verified ? 'Validated' : 'Pending'}
				</div>
				{#if row.year}
					<div>
						{row.year}
					</div>
				{/if}
			</div>
		</div>

		<div class="flex items-baseline gap-2">
			{#if row.worker_type}
				<div class=" font-sans text-[17.25px]">
					{getWorkerTypeLabel(row.worker_type.value)}
				</div>
			{/if}
			{#if row.job_title}
				<div class="">
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
		<div class="flex items-baseline gap-2">
			{#if row.employer_name}
				<div class=" font-serif text-lg leading-[1] tracking-tight">
					{row.employer_name}
				</div>
			{/if}

			{#if row.contract_type}
				<div class="">{contractTypeOptions[row.contract_type.value][siteState.language]}</div>
			{/if}
		</div>
	</div>
	{#if row.compensation_amount && row.compensation_frequency && row.country}
		<div class="mt-1 flex items-start">
			<div
				class=" flex flex-col items-center justify-center border border-dashed px-3 py-1 text-[9px] whitespace-nowrap uppercase"
			>
				<div class="font-sans text-base">
					{row.compensation_amount}{currency[row.country.value]}
				</div>
				<div>
					{compensationFrequencyOptions[row.compensation_frequency.value][siteState.language]}
				</div>
			</div>
		</div>
	{/if}
</div>

<div class="fixed -bottom-px left-0 w-full bg-lightgrey">
	<div
		class="z-30 {showExpandedEntry
			? 'h-[calc(100dvh-62px)]'
			: 'h-0'} w-full overflow-auto border-t bg-lightgrey transition-[height]"
	>
		<div class="flex justify-between p-3">
			<div class="flex gap-3">
				<div class="border border-dashed border-black">
					<div
						onclick={() => (showEditModal = true)}
						class="cursor-pointer bg-black p-3 px-3 py-2 text-white"
					>
						Edit
					</div>
				</div>
				<div class="border border-dashed border-black">
					<div
						onclick={() => (showDeleteModal = true)}
						class="cursor-pointer bg-black p-3 px-3 py-2 text-white"
					>
						Delete
					</div>
				</div>
			</div>
			<div class="border border-dashed border-black">
				<div
					onclick={() => (showExpandedEntry = false)}
					class="cursor-pointer bg-black p-3 px-3 py-2 text-white"
				>
					Back to all entries
				</div>
			</div>
		</div>
		<MobileDashboardSelectedRow {row}></MobileDashboardSelectedRow>
	</div>
</div>
