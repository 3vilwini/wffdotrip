<script lang="ts">
	import FormSelect from './FormSelect.svelte';
	import { enhance } from '$app/forms';
	import {
		fieldLabels,
		countryOptions,
		numEmployeesOptions,
		contractTypeOptions,
		yearOption2010OrBefore,
		employerTypeOptions,
		workerStatusOptions,
		Country,
		ContractType,
		compensationFrequencyOptions,
		contractLengthUnit,
		jobExperienceOptions,
		jobObtainedViaOptions,
		workerTypeOptions,
		WorkerType,
		addlCompensationCoverageOptions
	} from '$lib/staticContent';
	import FormSectionHeader from './FormSectionHeader.svelte';
	import { siteState } from '$lib/states.svelte';
	import BlockContent from './blockContent/BlockContent.svelte';
	import FormCheckbox from './FormCheckbox.svelte';
	import FormSimpleInput from './FormSimpleInput.svelte';
	import FormOption from './FormOption.svelte';
	import { goto } from '$app/navigation';
	import AddlCompensationContainer from './AddlCompensationContainer.svelte';

	let { row, formPage, showEditModal = $bindable() } = $props();
	let isSubmitting = $state(false);
	let selectedCountry: Country | undefined = $state(row.country);
	let selectedYear: number | undefined = $state(parseInt(row.year));
	let selectedContractType: ContractType | undefined = $state(row.contract_type);
	let selectedWorkerType: WorkerType | undefined = $state(row.worker_category);
	let selectedWorkerTypeHelpText = $state('');

	let thisYear = new Date().getFullYear();
	let minYear = 2011;
	const yearOptions: number[] = [];
	for (let i = thisYear; i >= minYear; i--) {
		yearOptions.push(i);
	}

	const setHelpText = (helpText: string) => {
		selectedWorkerTypeHelpText = helpText;
	};
</script>

<div class={isSubmitting ? 'opacity-20' : ''}>
	<div class="flex flex-col gap-4 py-4">
		<h1 class="text-center font-sans text-3xl">{formPage.editFormTitle[siteState.language]}</h1>
		<div class="flex flex-col gap-4">
			<BlockContent value={formPage.formIntro[siteState.language]}></BlockContent>
		</div>
	</div>
	<form
		use:enhance={({ formElement, formData, action, cancel, submitter }) => {
			isSubmitting = true;
			return async ({ result, update }) => {
				isSubmitting = false;
				if (result.type === 'success') {
					console.log('HEREEE');
					siteState.formSubmitted = true;
					goto('/dashboard');
				}
			};
		}}
		method="POST"
		action="/dashboard?/edit"
	>
		<div class="flex flex-col">
			<input maxlength="250" hidden name="row_id" value={row.id} />

			<FormCheckbox required name="disclaimer" label={formPage.disclaimer[siteState.language]}
			></FormCheckbox>

			<div onmouseenter={() => (siteState.currFormSection = 'whereWhen')}>
				<FormSectionHeader>
					{formPage.whereWhenSectionTitle[siteState.language]}
				</FormSectionHeader>
				<div class="flex gap-4">
					<FormSelect bind:boundValue={selectedCountry} name="country" class="basis-1/4">
						<FormOption value="" isDefault>{fieldLabels.country[siteState.language]}</FormOption>

						{#each Object.entries(countryOptions) as [key, value]}
							<FormOption value={key}>{value[siteState.language]}</FormOption>
						{/each}
					</FormSelect>

					<FormSimpleInput
						class="basis-1/2"
						name="city"
						placeholder={fieldLabels.city[siteState.language]}
						value={row.city}
					></FormSimpleInput>

					<FormSelect bind:boundValue={selectedYear} name="year" class="basis-1/4">
						<FormOption value="" isDefault>{fieldLabels.year[siteState.language]}</FormOption>
						{#each yearOptions as year}
							<FormOption value={year}>{year}</FormOption>
						{/each}
						<FormOption value="2010">{yearOption2010OrBefore[siteState.language]}</FormOption>
					</FormSelect>
				</div>
			</div>

			<div onmouseenter={() => (siteState.currFormSection = 'employer')}>
				<FormSectionHeader>
					{formPage.employerSectionTitle[siteState.language]}
				</FormSectionHeader>
				<div class="flex flex-wrap gap-4">
					<FormSelect
						boundValue={row.employer_type}
						class="w-0 basis-[calc(50%-0.5rem)]"
						name="employer_type"
					>
						<FormOption value="" isDefault
							>{fieldLabels.employerType[siteState.language]}</FormOption
						>
						{#each Object.values(employerTypeOptions) as section}
							<optgroup class="px-0.5 text-grey" label={section.groupLabel[siteState.language]}>
								{#each Object.entries(section.options) as [key, value]}
									<option class="pl-8 text-black" value={key}>{value[siteState.language]}</option>
								{/each}
							</optgroup>
						{/each}
					</FormSelect>

					<FormSimpleInput
						class="basis-[calc(50%-0.5rem)]"
						name="employer_name"
						placeholder={fieldLabels.employerName[siteState.language]}
						value={row.employer_name}
					></FormSimpleInput>

					<FormSelect
						boundValue={row.num_employees}
						name="num_employees"
						class="basis-[calc(50%-0.5rem)]"
					>
						<FormOption value="" isDefault
							>{fieldLabels.numEmployees[siteState.language]}</FormOption
						>
						{#each Object.entries(numEmployeesOptions) as [key, value]}
							<FormOption value={key}>{value[siteState.language]}</FormOption>
						{/each}
					</FormSelect>
				</div>
			</div>

			<div onmouseenter={() => (siteState.currFormSection = 'terms')}>
				<FormSectionHeader>
					{formPage.termsSectionTitle[siteState.language]}
				</FormSectionHeader>
				<div class="flex flex-wrap gap-4">
					<FormSelect
						bind:boundValue={selectedContractType}
						name="contract_type"
						class=" basis-[calc(50%-0.5rem)]"
					>
						<FormOption value="" isDefault
							>{fieldLabels.contractType[siteState.language]}</FormOption
						>
						{#each Object.entries(contractTypeOptions) as [key, value]}
							<FormOption value={key}>{value[siteState.language]}</FormOption>
						{/each}
					</FormSelect>

					{#if selectedCountry}
						<FormSelect
							boundValue={row.worker_status ? row.worker_status : ''}
							name="worker_status"
							class="basis-[calc(50%-0.5rem)]"
						>
							<FormOption value="" isDefault>
								{fieldLabels.workerStatus[siteState.language][selectedCountry]}
							</FormOption>
							{#each workerStatusOptions[selectedCountry] as option}
								<FormOption value={option}>{option}</FormOption>
							{/each}
						</FormSelect>
					{/if}

					{#if selectedContractType && selectedContractType !== ContractType.FULLTIME}
						<div class="flex basis-[calc(50%-0.5rem)]">
							<FormSimpleInput
								value={row.contract_length}
								name="contract_length"
								type="number"
								placeholder={fieldLabels.contractLength[siteState.language]}
								class="flex-grow border-r-0"
							></FormSimpleInput>

							<FormSelect
								boundValue={row.contract_length_unit?.value}
								name="contract_length_unit"
								class="w-20"
							>
								{#each Object.entries(contractLengthUnit) as [key, value]}
									<FormOption value={key}>{value[siteState.language]}</FormOption>
								{/each}
							</FormSelect>
						</div>

						<label class="flex basis-[calc(50%-0.5rem)] items-center">
							<FormSimpleInput
								name="contract_num_hours"
								type="number"
								placeholder={fieldLabels.contractNumHours[siteState.language]}
								class="grow"
								value={row.contract_num_hours}
							></FormSimpleInput>
							<span class="flex h-full items-center justify-center border-b px-2">
								{fieldLabels.perWeek[siteState.language]}
							</span>
						</label>
					{/if}
				</div>
			</div>

			<div onmouseenter={() => (siteState.currFormSection = 'job')}>
				<FormSectionHeader>
					{formPage.jobSectionTitle[siteState.language]}
				</FormSectionHeader>
				<div class="flex flex-wrap gap-4">
					<FormSelect
						bind:boundValue={selectedWorkerType}
						name="worker_category"
						class=" basis-[calc(50%-0.5rem)]"
					>
						<FormOption value="" isDefault
							>{fieldLabels.workerCategory[siteState.language]}</FormOption
						>
						{#each Object.values(workerTypeOptions) as section}
							<optgroup class="px-0.5 text-grey" label={section.groupLabel[siteState.language]}>
								{#each Object.entries(section.options) as [key, value]}
									<option
										onclick={() => setHelpText(value.detail[siteState.language])}
										value={key}
										class="pl-8 text-black">{value.label[siteState.language]}</option
									>
								{/each}
							</optgroup>
						{/each}
					</FormSelect>

					<FormSimpleInput
						name="job_title"
						placeholder={fieldLabels.jobTitle[siteState.language]}
						class="basis-[calc(50%-0.5rem)]"
						value={row.job_title}
					/>

					<textarea
						name="job_details"
						placeholder="{fieldLabels.jobDetails[siteState.language]} {selectedWorkerTypeHelpText}"
						class="field-sizing-content basis-full border-0 border-b text-xs"
						maxlength="250"
						value={row.job_details}
					></textarea>

					<FormSelect
						boundValue={row.job_experience}
						name="job_experience"
						class="basis-[calc(50%-0.5rem)]"
					>
						<FormOption value="" isDefault
							>{fieldLabels.jobExperience[siteState.language]}</FormOption
						>
						{#each Object.entries(jobExperienceOptions) as [key, value]}
							<FormOption value={key}>{value[siteState.language]}</FormOption>
						{/each}
					</FormSelect>

					<FormSelect
						boundValue={row.job_obtained_via}
						name="job_obtained_via"
						class="basis-[calc(50%-0.5rem)]"
					>
						<FormOption value="" isDefault
							>{fieldLabels.jobObtainedVia[siteState.language]}</FormOption
						>
						{#each Object.entries(jobObtainedViaOptions) as [key, value]}
							<FormOption value={key}>{value[siteState.language]}</FormOption>
						{/each}
					</FormSelect>
				</div>
			</div>

			<div onmouseenter={() => (siteState.currFormSection = 'compensation')}>
				<FormSectionHeader>
					{formPage.compensationSectionTitle[siteState.language]}
				</FormSectionHeader>
				<div class="flex flex-wrap gap-4">
					<div class="relative flex w-0 basis-[calc(50%-0.5rem)]">
						<FormSimpleInput
							name="compensation_amount"
							type="number"
							placeholder={fieldLabels.compensationAmount[siteState.language]}
							class="grow"
							value={row.compensation_amount}
						/>
						<FormSelect
							boundValue={row.compensation_frequency}
							name="compensation_frequency"
							class="w-30"
						>
							<FormOption value=""
								>{fieldLabels.compensationFrequency[siteState.language]}</FormOption
							>
							{#each Object.entries(compensationFrequencyOptions) as [key, value]}
								<FormOption value={key}>{value[siteState.language]}</FormOption>
							{/each}
						</FormSelect>
					</div>

					<div class=" basis-[calc(50%-0.5rem)] pt-1.5 pl-4">
						<FormCheckbox
							checked={row.paid_late}
							name="paid_late"
							label={fieldLabels.compensationLate[siteState.language]}
						></FormCheckbox>
					</div>
				</div>
				<div class="py-4">
					<div>{fieldLabels.addlComp[siteState.language]}</div>
				</div>
				<div class="flex flex-col gap-2">
					<AddlCompensationContainer>
						{fieldLabels.saleOfWork[siteState.language]}
						<FormSimpleInput
							name="addl_comp_sale_of_work"
							type="number"
							value={row.addl_comp_sale_of_work}
							placeholder={fieldLabels.compensationAmount[siteState.language]}
							class="w-48 border-b-0"
						/>
					</AddlCompensationContainer>

					<AddlCompensationContainer>
						{fieldLabels.production[siteState.language]}
						<FormSimpleInput
							value={row.addl_comp_production}
							name="addl_comp_production"
							type="number"
							placeholder={fieldLabels.compensationAmount[siteState.language]}
							class="w-48 border-b-0"
						/>
					</AddlCompensationContainer>

					<AddlCompensationContainer>
						{fieldLabels.travel[siteState.language]}

						<FormSelect
							boundValue={row.addl_comp_travel?.value}
							name="addl_comp_travel"
							class="w-48 border-b-0"
						>
							{#each Object.entries(addlCompensationCoverageOptions) as [key, value]}
								<FormOption value={key}>{value[siteState.language]}</FormOption>
							{/each}
						</FormSelect>
					</AddlCompensationContainer>

					<AddlCompensationContainer>
						{fieldLabels.accommodation[siteState.language]}

						<FormSelect
							boundValue={row.addl_comp_accommodation?.value}
							name="addl_comp_accommodation"
							class="w-48 border-b-0"
						>
							{#each Object.entries(addlCompensationCoverageOptions) as [key, value]}
								<FormOption value={key}>{value[siteState.language]}</FormOption>
							{/each}
						</FormSelect>
					</AddlCompensationContainer>

					<AddlCompensationContainer>
						{fieldLabels.transportOfWorks[siteState.language]}
						<FormSelect
							boundValue={row.addl_comp_transport_of_works?.value}
							name="addl_comp_transport_of_works"
							class="w-48 border-b-0"
						>
							{#each Object.entries(addlCompensationCoverageOptions) as [key, value]}
								<FormOption value={key}>{value[siteState.language]}</FormOption>
							{/each}
						</FormSelect>
					</AddlCompensationContainer>
				</div>
			</div>

			<div onmouseenter={() => (siteState.currFormSection = 'sentiment')}>
				<FormSectionHeader>
					{formPage.sentimentSectionTitle[siteState.language]}
				</FormSectionHeader>
				<div class="flex flex-col gap-4">
					<FormCheckbox
						checked={row.satisfied_with_compensation}
						name="satisfied_with_compensation"
						label={fieldLabels.satisfiedWithCompensation[siteState.language]}
					></FormCheckbox>
					<FormCheckbox
						checked={row.satisfied_with_conditions}
						name="satisfied_with_conditions"
						label={fieldLabels.satisfiedWithConditions[siteState.language]}
					></FormCheckbox>
					<FormCheckbox
						checked={row.treated_fairly}
						name="treated_fairly"
						label={fieldLabels.treatedFairly[siteState.language]}
					></FormCheckbox>
				</div>
			</div>

			<div onmouseenter={() => (siteState.currFormSection = 'addl')}>
				<FormSectionHeader>
					{formPage.addlSectionTitle[siteState.language]}
				</FormSectionHeader>
				<div>
					<textarea
						value={row.addl_notes}
						name="addl_notes"
						placeholder={formPage.addlSectionPlaceholder[siteState.language]}
						class="field-sizing-content w-full border-0 border-b text-xs leading-normal"
					></textarea>
				</div>
			</div>

			<div class="flex items-center justify-center gap-8 pt-8">
				<button
					class="cursor-pointer border px-4 py-2 transition-colors hover:bg-black hover:text-white"
					>{isSubmitting ? 'Submitting...' : 'Submit Edits'}</button
				>
				<div
					onclick={() => (showEditModal = false)}
					class="cursor-pointer border px-4 py-2 transition-colors hover:bg-black hover:text-white"
				>
					Cancel
				</div>
			</div>
		</div>
	</form>
</div>
