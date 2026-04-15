<script lang="ts">
	import FormSelect from '../form/FormSelect.svelte';
	import { enhance } from '$app/forms';
	import { resolve } from '$app/paths';

	import {
		addlCompensationCoverageOptions,
		AddlCompItem,
		compensationFrequencyOptions,
		addlCompItemOptions
	} from '$lib/content/compensation';
	import { fieldLabels, yearOption2010OrBefore } from '$lib/content/misc';
	import {
		jobExperienceOptions,
		jobObtainedViaOptions,
		contractLengthUnitOptions,
		contractTypeOptions,
		numEmployeesOptions,
		ContractType,
		workerStatusOptions
	} from '$lib/content/jobDetails';
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
	import { currency, countryOptions, Country } from '$lib/content/country';
	import {
		workerTypeOptions,
		WorkerType,
		getWorkerTypeHelpText,
		getWorkerTypeSubgroup,
		WorkerTypeSubgroup
	} from '$lib/content/workerType';
	import { employerTypeOptions } from '$lib/content/employerType';

	import FormSectionHeader from '../form/FormSectionHeader.svelte';
	import { siteState } from '$lib/states.svelte';
	import BlockContent from '../blockContent/BlockContent.svelte';
	import FormCheckbox from '../form/FormCheckbox.svelte';
	import FormSimpleInput from '../form/FormSimpleInput.svelte';
	import FormOption from '../form/FormOption.svelte';
	import { goto } from '$app/navigation';
	import AddlCompensationContainer from '../form/AddlCompensationContainer.svelte';
	import AddlCompMenuItem from '../form/AddlCompMenuItem.svelte';
	import X from '$lib/components/X.svelte';

	let { row, formPage, showEditModal = $bindable() } = $props();
	let isSubmitting = $state(false);
	let selectedCountry: Country | undefined = $state(row.country.value);
	let selectedYear: number | undefined = $state(parseInt(row.year));
	let selectedContractType: ContractType | undefined = $state(row.contract_type.value);
	let selectedWorkerType: WorkerType | undefined = $state(row.worker_type.value);
	let selectedWorkerTypeHelpText = $derived(getWorkerTypeHelpText(selectedWorkerType));
	let selectedWorkerTypeSubgroup = $derived(getWorkerTypeSubgroup(selectedWorkerType));

	let thisYear = new Date().getFullYear();
	let minYear = 2011;
	const yearOptions: number[] = [];
	for (let i = thisYear; i >= minYear; i--) {
		yearOptions.push(i);
	}

	let showAddlCompMenu = $state(false);
	const toggleAddlCompMenu = () => {
		showAddlCompMenu = !showAddlCompMenu;
	};

	let initAddlCompFieldsShown = {};
	Object.keys(addlCompItemOptions).forEach((key) => {
		if (row['addl_comp_' + key.toLowerCase()]) {
			initAddlCompFieldsShown[key] = true;
		} else {
			initAddlCompFieldsShown[key] = false;
		}
	});

	let addlCompFieldsShown = $state(initAddlCompFieldsShown);

	const showAddlCompField = (key: AddlCompItem) => {
		showAddlCompMenu = false;
		addlCompFieldsShown[key] = true;
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
					siteState.formSubmitted = true;
					goto(resolve('/dashboard'));
				}
			};
		}}
		method="POST"
		action="/dashboard?/edit"
	>
		<div class="flex flex-col gap-8">
			<input maxlength="250" hidden name="row_id" value={row.id} />

			<FormCheckbox required name="disclaimer" label={formPage.disclaimer[siteState.language]}
			></FormCheckbox>

			<div role="presentation" onmouseenter={() => (siteState.currFormSection = 'whereWhen')}>
				<FormSectionHeader>
					{formPage.whereWhenSectionTitle[siteState.language]}
				</FormSectionHeader>
				<div class="flex gap-4">
					<FormSelect bind:boundValue={selectedCountry} name="country" class="basis-1/4">
						<FormOption value="" isDefault>{fieldLabels.country[siteState.language]}</FormOption>

						{#each Object.entries(countryOptions) as [key, value] (key)}
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
						{#each yearOptions as year (year)}
							<FormOption value={year}>{year}</FormOption>
						{/each}
						<FormOption value="2010">{yearOption2010OrBefore[siteState.language]}</FormOption>
					</FormSelect>
				</div>
			</div>

			<div role="presentation" onmouseenter={() => (siteState.currFormSection = 'employer')}>
				<FormSectionHeader>
					{formPage.employerSectionTitle[siteState.language]}
				</FormSectionHeader>
				<div class="flex flex-wrap gap-4">
					<FormSelect
						boundValue={row.employer_type.value}
						class="w-0 basis-[calc(50%-0.5rem)]"
						name="employer_type"
					>
						<FormOption value="" isDefault
							>{fieldLabels.employerType[siteState.language]}</FormOption
						>
						{#each Object.entries(employerTypeOptions) as [key, section] (key)}
							<optgroup class="px-0.5 text-grey" label={section.groupLabel[siteState.language]}>
								{#each Object.entries(section.options) as [key, value] (key)}
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
						boundValue={row.num_employees.value}
						name="num_employees"
						class="basis-[calc(50%-0.5rem)]"
					>
						<FormOption value="" isDefault
							>{fieldLabels.numEmployees[siteState.language]}</FormOption
						>
						{#each Object.entries(numEmployeesOptions) as [key, value] (key)}
							<FormOption value={key}
								>{value + ' ' + fieldLabels.employees[siteState.language]}</FormOption
							>
						{/each}
					</FormSelect>
				</div>
			</div>

			<div role="presentation" onmouseenter={() => (siteState.currFormSection = 'terms')}>
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
						{#each Object.entries(contractTypeOptions) as [key, value] (key)}
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
							{#each workerStatusOptions[selectedCountry] as option (option)}
								<FormOption value={option}>{option}</FormOption>
							{/each}
						</FormSelect>
					{/if}

					{#if selectedContractType}
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

						{#if selectedContractType !== ContractType.FULLTIME && selectedContractType !== ContractType.PARTTIME}
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
									{#each Object.entries(contractLengthUnitOptions) as [key, value] (key)}
										<FormOption value={key}>{value[siteState.language]}</FormOption>
									{/each}
								</FormSelect>
							</div>
						{/if}
					{/if}
				</div>
			</div>

			<div role="presentation" onmouseenter={() => (siteState.currFormSection = 'job')}>
				<FormSectionHeader>
					{formPage.jobSectionTitle[siteState.language]}
				</FormSectionHeader>
				<div class="flex flex-wrap gap-4">
					<FormSelect
						bind:boundValue={selectedWorkerType}
						name="worker_type"
						class=" basis-[calc(50%-0.5rem)]"
					>
						<FormOption value="" isDefault>{fieldLabels.workerType[siteState.language]}</FormOption>
						{#each Object.entries(workerTypeOptions) as [key, section] (key)}
							<optgroup class="px-0.5 text-grey" label={section.groupLabel[siteState.language]}>
								{#each Object.entries(section.options) as [key, value] (key)}
									<option value={key} class="pl-8 text-black"
										>{value.label[siteState.language]}</option
									>
								{/each}
							</optgroup>
						{/each}
					</FormSelect>

					{#if selectedContractType}
						{#if selectedContractType === ContractType.INDEPENDENT || selectedContractType === ContractType.FULLTIME_TEMP || selectedContractType === ContractType.PARTTIME_TEMP}
							<FormSelect
								boundValue={row.project_type?.value ? row.project_type.value : ''}
								name="project_type"
								class="w-full sm:basis-[calc(50%-0.5rem)]"
								required
							>
								<FormOption value="" isDefault
									>{fieldLabels.projectType[siteState.language]}</FormOption
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
								class="basis-[calc(50%-0.5rem)]"
								value={row.job_title}
							/>
						{/if}
					{/if}

					<textarea
						name="job_details"
						placeholder="{fieldLabels.jobDetails[siteState.language]} {selectedWorkerTypeHelpText}"
						class="field-sizing-content basis-full border-0 border-b text-xs"
						maxlength="250"
						value={row.job_details}
					></textarea>

					<FormSelect
						boundValue={row.job_experience?.value ? row.job_experience.value : ''}
						name="job_experience"
						class="basis-[calc(50%-0.5rem)]"
					>
						<FormOption value="" isDefault
							>{fieldLabels.jobExperience[siteState.language]}</FormOption
						>
						{#each Object.entries(jobExperienceOptions) as [key, value] (key)}
							<FormOption value={key}
								>{value + ' ' + fieldLabels.yearsOfExperience[siteState.language]}</FormOption
							>
						{/each}
					</FormSelect>

					<FormSelect
						boundValue={row.job_obtained_via?.value ? row.job_obtained_via.value : ''}
						name="job_obtained_via"
						class="basis-[calc(50%-0.5rem)]"
					>
						<FormOption value="" isDefault
							>{fieldLabels.jobObtainedVia[siteState.language]}</FormOption
						>
						{#each Object.entries(jobObtainedViaOptions) as [key, value] (key)}
							<FormOption value={key}>{value[siteState.language]}</FormOption>
						{/each}
					</FormSelect>
				</div>
			</div>

			<div role="presentation" onmouseenter={() => (siteState.currFormSection = 'compensation')}>
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
						{#if selectedCountry}
							<div class="relative -left-12 flex items-center pr-4">
								{currency[selectedCountry]}
							</div>
						{/if}
						<FormSelect
							boundValue={row.compensation_frequency.value}
							name="compensation_frequency"
							class="w-30"
						>
							<FormOption value=""
								>{fieldLabels.compensationFrequency[siteState.language]}</FormOption
							>
							{#each Object.entries(compensationFrequencyOptions) as [key, value] (key)}
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
				<div class="relative py-4">
					<button type="button" onclick={toggleAddlCompMenu} class="group flex items-center gap-4">
						<div
							class="flex h-6 w-6 cursor-pointer items-center justify-center border group-hover:bg-black group-hover:text-white"
						>
							+
						</div>
						<div class="">{fieldLabels.addlComp[siteState.language]}</div>
					</button>
					{#if showAddlCompMenu}
						<div class="absolute top-4 left-8 flex flex-col gap-1 sm:w-50">
							{#each Object.entries(addlCompItemOptions) as [key, langOptions] (key)}
								{#if !addlCompFieldsShown[key]}
									<AddlCompMenuItem onclick={() => showAddlCompField(key)}
										>{langOptions[siteState.language]}</AddlCompMenuItem
									>
								{/if}
							{/each}
						</div>
					{/if}
				</div>
				<div class="flex flex-col gap-2">
					{#each Object.entries(addlCompFieldsShown) as [key, val] (key)}
						{#if val}
							<AddlCompensationContainer>
								{addlCompItemOptions[key][siteState.language]}
								<div class="flex items-center gap-4">
									{#if key === 'SALE_OF_WORK'}
										<div class="flex w-48">
											<FormSimpleInput
												name="addl_comp_sale_of_work"
												type="number"
												placeholder={fieldLabels.compensationAmount[siteState.language]}
												class="w-48 border-b-0"
												required
												value={row.addl_comp_sale_of_work}
											/>
											{#if selectedCountry}
												<div
													class="relative -left-12 flex w-0 shrink-0 grow-0 basis-0 items-center"
												>
													{currency[selectedCountry]}
												</div>
											{/if}
										</div>
									{:else if key === 'PRODUCTION_BUDGET'}
										<div class="flex w-48">
											<FormSimpleInput
												name="addl_comp_production_budget"
												type="number"
												placeholder={fieldLabels.compensationAmount[siteState.language]}
												class="w-48 border-b-0"
												required
												value={row.addl_comp_production_budget}
											/>
											{#if selectedCountry}
												<div
													class="relative -left-12 flex w-0 shrink-0 grow-0 basis-0 items-center"
												>
													{currency[selectedCountry]}
												</div>
											{/if}
										</div>
									{:else if key === 'ACCESSIBILITY_BUDGET'}
										<div class="flex w-48">
											<FormSimpleInput
												name="addl_comp_accessibility_budget"
												type="number"
												placeholder={fieldLabels.compensationAmount[siteState.language]}
												class="w-48 border-b-0"
												required
												value={row.addl_comp_accessibility_budget}
											/>
											{#if selectedCountry}
												<div
													class="relative -left-12 flex w-0 shrink-0 grow-0 basis-0 items-center"
												>
													{currency[selectedCountry]}
												</div>
											{/if}
										</div>
									{:else if key === 'PER_DIEM'}
										<div class="flex w-48">
											<FormSimpleInput
												name="addl_comp_per_diem"
												type="number"
												placeholder={fieldLabels.compensationAmount[siteState.language]}
												class=" w-48 border-b-0"
												required
												value={row.addl_comp_per_diem}
											/>
											{#if selectedCountry}
												<div
													class="relative -left-12 flex w-0 shrink-0 grow-0 basis-0 items-center"
												>
													{currency[selectedCountry]}
												</div>
											{/if}
										</div>
									{:else if key === 'COMMISSION'}
										<div class="flex w-48">
											<FormSimpleInput
												name="addl_comp_commission"
												type="number"
												placeholder={fieldLabels.compensationPercentage[siteState.language]}
												class=" w-48 border-b-0"
												required
												value={row.addl_comp_commission}
											/>
											<div class="relative -left-12 flex w-0 shrink-0 grow-0 basis-0 items-center">
												%
											</div>
										</div>
									{:else}
										<FormSelect
											name={'addl_comp_' + key.toLowerCase()}
											class="w-48 border-b-0"
											required
											boundValue={row['addl_comp_' + key.toLowerCase()]
												? row['addl_comp_' + key.toLowerCase()].value
												: ''}
										>
											{#each Object.entries(addlCompensationCoverageOptions) as [key, value] (key)}
												<FormOption value={key}>{value[siteState.language]}</FormOption>
											{/each}
										</FormSelect>
									{/if}
									<div
										class=" relative flex cursor-pointer items-center justify-center text-sm font-bold"
										onclick={() => (addlCompFieldsShown[key] = false)}
									>
										<X></X>
									</div>
								</div>
							</AddlCompensationContainer>
						{:else}
							<input hidden name={'addl_comp_' + key.toLowerCase()} value={null} />
						{/if}
					{/each}
				</div>
			</div>

			<div role="presentation" onmouseenter={() => (siteState.currFormSection = 'sentiment')}>
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

			<div role="presentation" onmouseenter={() => (siteState.currFormSection = 'addl')}>
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
