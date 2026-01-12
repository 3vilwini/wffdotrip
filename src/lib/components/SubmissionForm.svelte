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
		WorkerType
	} from '$lib/staticContent';
	import FormSectionHeader from './FormSectionHeader.svelte';
	import { siteState } from '$lib/states.svelte';
	import BlockContent from './blockContent/BlockContent.svelte';
	import FormCheckbox from './FormCheckbox.svelte';
	import FormSimpleInput from './FormSimpleInput.svelte';
	import FormOption from './FormOption.svelte';

	let { formPage } = $props();

	let formSubmitted = $state(false);
	let selectedCountry: Country | undefined = $state();
	let selectedYear: number | undefined = $state();
	let selectedContractType: ContractType | undefined = $state();
	let selectedWorkerType: WorkerType | undefined = $state();
	let selectedWorkerTypeHelpText = $state('');

	let showAddlCompensation = $state(false);
	const toggleAddlCompensation = () => {
		showAddlCompensation = !showAddlCompensation;
	};

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

<div class="px-4 pb-12 font-mono text-xs leading-normal">
	<div class="flex flex-col gap-4 py-4">
		<h1 class="text-center font-sans text-3xl">{formPage.formTitle[siteState.language]}</h1>
		<div class="flex flex-col gap-4">
			<BlockContent value={formPage.formIntro[siteState.language]}></BlockContent>
		</div>
	</div>
	<form
		use:enhance={({ formElement, formData, action, cancel, submitter }) => {
			if (formSubmitted) {
				cancel();
			}
			return async ({ result, update }) => {
				if (result.type === 'success') {
					formSubmitted = true;
					setTimeout(() => {
						formSubmitted = false;
					}, 2000);
				}
				update();
			};
		}}
		method="POST"
		action="/form"
	>
		<div class="flex flex-col">
			<FormCheckbox name="disclaimer" label={formPage.disclaimer[siteState.language]}
			></FormCheckbox>

			<div>
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

			<div>
				<FormSectionHeader>
					{formPage.employerSectionTitle[siteState.language]}
				</FormSectionHeader>
				<div class="flex flex-wrap gap-4">
					<FormSelect class="basis-[calc(50%-0.5rem)]" name="employer_type">
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
					></FormSimpleInput>

					<FormSelect name="num_employees" class="basis-[calc(50%-0.5rem)]">
						<FormOption value="" isDefault
							>{fieldLabels.numEmployees[siteState.language]}</FormOption
						>
						{#each Object.entries(numEmployeesOptions) as [key, value]}
							<FormOption value={key}>{value[siteState.language]}</FormOption>
						{/each}
					</FormSelect>
				</div>
			</div>

			<div>
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
						<FormSelect name="worker_status" class="basis-[calc(50%-0.5rem)]">
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
								name="contract_length"
								type="number"
								placeholder={fieldLabels.contractLength[siteState.language]}
								class="flex-grow border-r-0"
							></FormSimpleInput>

							<FormSelect name="contract_length_unit">
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
							></FormSimpleInput>
							<span class="flex h-full items-center justify-center border-b px-2">
								{fieldLabels.perWeek[siteState.language]}
							</span>
						</label>
					{/if}
				</div>
			</div>

			<div>
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
					/>

					<textarea
						name="job_details"
						placeholder="{fieldLabels.jobDetails[siteState.language]} {selectedWorkerTypeHelpText}"
						class="field-sizing-content basis-full border-0 border-b text-xs"
					></textarea>

					<FormSelect name="job_experience" class="basis-[calc(50%-0.5rem)]">
						<FormOption value="" isDefault
							>{fieldLabels.jobExperience[siteState.language]}</FormOption
						>
						{#each Object.entries(jobExperienceOptions) as [key, value]}
							<FormOption value={key}>{value[siteState.language]}</FormOption>
						{/each}
					</FormSelect>

					<FormSelect name="job_obtained_via" class="basis-[calc(50%-0.5rem)]">
						<FormOption value="" isDefault
							>{fieldLabels.jobObtainedVia[siteState.language]}</FormOption
						>
						{#each Object.entries(jobObtainedViaOptions) as [key, value]}
							<FormOption value={key}>{value[siteState.language]}</FormOption>
						{/each}
					</FormSelect>
				</div>
			</div>

			<div>
				<FormSectionHeader>
					{formPage.compensationSectionTitle[siteState.language]}
				</FormSectionHeader>
				<div class="flex flex-wrap gap-4">
					<div class="flex basis-[calc(50%-0.5rem)]">
						<FormSimpleInput
							name="compensation_amount"
							type="number"
							placeholder={fieldLabels.compensationAmount[siteState.language]}
							class="grow"
						/>
						<FormSelect name="compensation_frequency">
							<FormOption value=""
								>{fieldLabels.compensationFrequency[siteState.language]}</FormOption
							>
							{#each Object.entries(compensationFrequencyOptions) as [key, value]}
								<FormOption value={key}>{value[siteState.language]}</FormOption>
							{/each}
						</FormSelect>
					</div>

					<div class=" basis-[calc(50%-0.5rem)] pt-1.5 pl-4">
						<FormCheckbox name="paid_late" label={fieldLabels.compensationLate[siteState.language]}
						></FormCheckbox>
					</div>
				</div>
				<div class="py-4">
					<button type="button" onclick={toggleAddlCompensation} class="group flex gap-4">
						<div class="cursor-pointer border px-2 group-hover:bg-black group-hover:text-white">
							+
						</div>
						<div>Add additional compensation</div>
					</button>
				</div>
				{#if showAddlCompensation}
					<div>Sale of work</div>
					<div>Production</div>
					<div>Travel</div>
					<div>Accomodation</div>
					<div>Transport of works</div>
				{/if}
			</div>

			<div>
				<FormSectionHeader>
					{formPage.sentimentSectionTitle[siteState.language]}
				</FormSectionHeader>
				<div class="flex flex-col gap-4">
					<FormCheckbox
						name="satisfied_with_compensation"
						label={fieldLabels.satisfiedWithCompensation[siteState.language]}
					></FormCheckbox>
					<FormCheckbox
						name="satisfied_with_conditions"
						label={fieldLabels.satisfiedWithConditions[siteState.language]}
					></FormCheckbox>
					<FormCheckbox name="treated_fairly" label={fieldLabels.treatedFairly[siteState.language]}
					></FormCheckbox>
				</div>
			</div>

			<div>
				<FormSectionHeader>
					{formPage.addlSectionTitle[siteState.language]}
				</FormSectionHeader>
				<div>
					<textarea
						name="addl_notes"
						placeholder={formPage.addlSectionHelpText[siteState.language]}
						class="field-sizing-content w-full border-0 border-b text-xs leading-normal"
					></textarea>
				</div>
			</div>
			<div class="flex items-center justify-center pt-8">
				<button class="cursor-pointer border px-4 py-2">Submit Form</button>
			</div>
		</div>
	</form>
</div>
