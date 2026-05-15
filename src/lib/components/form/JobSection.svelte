<script lang="ts">
	import FormSelect from './FormSelect.svelte';
	import { formState } from '$lib/states.svelte';
	import { fieldLabels } from '$lib/content/misc';
	import {
		ContractType,
		jobObtainedViaOptions,
		jobExperienceOptions
	} from '$lib/content/jobDetails';
	import {
		workerTypeOptions,
		getWorkerTypeHelpText,
		getWorkerTypeSubgroup,
		WorkerTypeSubgroup
	} from '$lib/content/workerType';
	import {
		projectTypeOptions,
		projectTypeGroupOne,
		projectTypeGroupTwo,
		projectTypeGroupThree,
		projectTypeGroupFour,
		projectTypeGroupFive,
		projectTypeGroupSix,
		projectTypeGroupSeven
	} from '$lib/content/projectType';

	import FormSectionHeader from './FormSectionHeader.svelte';
	import { siteState } from '$lib/states.svelte';
	import FormSimpleInput from './FormSimpleInput.svelte';
	import FormOption from './FormOption.svelte';

	let { formPage } = $props();

	let selectedWorkerTypeHelpText = $derived(getWorkerTypeHelpText(formState.selectedWorkerType));
	let selectedWorkerTypeSubgroup = $derived(getWorkerTypeSubgroup(formState.selectedWorkerType));
</script>

<div class="my-8 flex w-full gap-4">
	<div class="flex size-6 items-center justify-center text-center font-yarndings text-3xl">d</div>
	<div role="presentation" onmouseenter={() => (siteState.currFormSection = 'job')}>
		<FormSectionHeader>
			{formPage.jobSectionTitle[siteState.language]}
		</FormSectionHeader>
		<div class="flex flex-wrap gap-4">
			<FormSelect
				bind:boundValue={formState.selectedWorkerType}
				name="worker_type"
				class="w-full sm:basis-[calc(50%-0.5rem)]"
				required
			>
				<FormOption value="" isDefault>{fieldLabels.workerType[siteState.language]}</FormOption>
				{#each Object.entries(workerTypeOptions) as [key, section] (key)}
					<optgroup class="px-0.5 text-grey" label={section.groupLabel[siteState.language]}>
						{#each Object.entries(section.options) as [key, value] (key)}
							<option value={key} class="pl-8 text-black">{value.label[siteState.language]}</option>
						{/each}
					</optgroup>
				{/each}
			</FormSelect>

			{#if formState.selectedContractType}
				{#if formState.selectedContractType === ContractType.INDEPENDENT}
					<FormSelect name="project_type" class="w-full sm:basis-[calc(50%-0.5rem)]" required>
						<FormOption value="" isDefault>{fieldLabels.projectType[siteState.language]}</FormOption
						>
						{#if selectedWorkerTypeSubgroup === WorkerTypeSubgroup.CREATION || selectedWorkerTypeSubgroup === WorkerTypeSubgroup.WRITING || selectedWorkerTypeSubgroup === WorkerTypeSubgroup.CURATION}
							{#each projectTypeGroupOne as projectType (projectType)}
								<option value={projectType} class="pl-8 text-black">
									{projectTypeOptions[projectType][siteState.language]}
								</option>
							{/each}
						{:else if selectedWorkerTypeSubgroup === WorkerTypeSubgroup.PRODUCTION}
							{#each projectTypeGroupTwo as projectType (projectType)}
								<option value={projectType} class="pl-8 text-black">
									{projectTypeOptions[projectType][siteState.language]}
								</option>
							{/each}
						{:else if selectedWorkerTypeSubgroup === WorkerTypeSubgroup.MEDIATION_AND_HOSPITALITY}
							{#each projectTypeGroupThree as projectType (projectType)}
								<option value={projectType} class="pl-8 text-black">
									{projectTypeOptions[projectType][siteState.language]}
								</option>
							{/each}
						{:else if selectedWorkerTypeSubgroup === WorkerTypeSubgroup.MANAGEMENT_AND_ADMIN}
							{#each projectTypeGroupFour as projectType (projectType)}
								<option value={projectType} class="pl-8 text-black">
									{projectTypeOptions[projectType][siteState.language]}
								</option>
							{/each}
						{:else if selectedWorkerTypeSubgroup === WorkerTypeSubgroup.COMMUNICATION_AND_DOCUMENTATION}
							{#each projectTypeGroupFive as projectType (projectType)}
								<option value={projectType} class="pl-8 text-black">
									{projectTypeOptions[projectType][siteState.language]}
								</option>
							{/each}
						{:else if selectedWorkerTypeSubgroup === WorkerTypeSubgroup.OPERATIONS_AND_IT}
							{#each projectTypeGroupSix as projectType (projectType)}
								<option value={projectType} class="pl-8 text-black">
									{projectTypeOptions[projectType][siteState.language]}
								</option>
							{/each}
						{:else if selectedWorkerTypeSubgroup === WorkerTypeSubgroup.LEGAL_AND_FINANCE}
							{#each projectTypeGroupSeven as projectType (projectType)}
								<option value={projectType} class="pl-8 text-black">
									{projectTypeOptions[projectType][siteState.language]}
								</option>
							{/each}
						{/if}
					</FormSelect>
				{:else}
					<FormSimpleInput
						name="job_title"
						placeholder={fieldLabels.jobTitle[siteState.language]}
						class="w-full sm:basis-[calc(50%-0.5rem)]"
					/>
				{/if}
			{/if}

			<textarea
				name="job_details"
				placeholder="{fieldLabels.jobDetails[siteState.language]} {selectedWorkerTypeHelpText}"
				class="field-sizing-content w-full border-0 border-b text-xs [word-break:break-word]"
				maxlength="250"
			></textarea>

			<FormSelect name="job_experience" class="w-full sm:basis-[calc(50%-0.5rem)]">
				<FormOption value="" isDefault>{fieldLabels.jobExperience[siteState.language]}</FormOption>
				{#each Object.entries(jobExperienceOptions) as [key, value] (key)}
					<FormOption value={key}
						>{value + ' ' + fieldLabels.yearsOfExperience[siteState.language]}</FormOption
					>
				{/each}
			</FormSelect>

			<FormSelect name="job_obtained_via" class="w-full sm:basis-[calc(50%-0.5rem)]">
				<FormOption value="" isDefault>{fieldLabels.jobObtainedVia[siteState.language]}</FormOption>
				{#each Object.entries(jobObtainedViaOptions) as [key, value] (key)}
					<FormOption value={key}>{value[siteState.language]}</FormOption>
				{/each}
			</FormSelect>
		</div>
	</div>
</div>
