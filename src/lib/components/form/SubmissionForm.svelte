<script lang="ts">
	import FormSelect from './FormSelect.svelte';
	import { enhance } from '$app/forms';

	import { fieldLabels, yearOption2010OrBefore } from '$lib/content/misc';
	import { countryOptions, Country, currency } from '$lib/content/country';
	import {
		numEmployeesOptions,
		contractTypeOptions,
		workerStatusOptions,
		ContractType,
		contractLengthUnitOptions,
		jobObtainedViaOptions,
		jobExperienceOptions
	} from '$lib/content/jobDetails';
	import {
		compensationFrequencyOptions,
		addlCompensationCoverageOptions,
		AddlCompItem,
		addlCompItemOptions
	} from '$lib/content/compensation';
	import {
		workerTypeOptions,
		WorkerType,
		getWorkerTypeHelpText,
		getWorkerTypeSubgroup,
		WorkerTypeSubgroup
	} from '$lib/content/workerType';
	import { employerTypeOptions } from '$lib/content/employerType';
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
	import BlockContent from '../blockContent/BlockContent.svelte';
	import FormCheckbox from './FormCheckbox.svelte';
	import FormSimpleInput from './FormSimpleInput.svelte';
	import FormOption from './FormOption.svelte';
	import { goto } from '$app/navigation';
	import AddlCompensationContainer from './AddlCompensationContainer.svelte';
	import AddlCompMenuItem from './AddlCompMenuItem.svelte';
	import X from '../X.svelte';

	let { formPage, userID } = $props();
	let isSubmitting = $state(false);
	let selectedCountry: Country | undefined = $state();
	let selectedYear: number | undefined = $state();
	let selectedContractType: ContractType | undefined = $state();
	let selectedWorkerType: WorkerType | undefined = $state();
	let selectedWorkerTypeHelpText = $derived(getWorkerTypeHelpText(selectedWorkerType));
	let selectedWorkerTypeSubgroup = $derived(getWorkerTypeSubgroup(selectedWorkerType));
	let disclaimerIsChecked = $state(false);

	$inspect(disclaimerIsChecked);

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
		initAddlCompFieldsShown[key] = false;
	});

	let addlCompFieldsShown = $state(initAddlCompFieldsShown);

	const showAddlCompField = (key: AddlCompItem) => {
		showAddlCompMenu = false;
		addlCompFieldsShown[key] = true;
	};
</script>

<div class="px-4 pb-12 font-mono text-xs leading-normal {isSubmitting ? 'opacity-20' : ''}">
	<div class="flex flex-col gap-4 py-4">
		<h1 class="text-center font-sans text-3xl">{formPage.formTitle[siteState.language]}</h1>
		<div
			class="grid {disclaimerIsChecked
				? 'grid-rows-[0fr]'
				: 'grid-rows-[1fr]'} transition-[grid-template-rows]"
		>
			<div class="overflow-hidden">
				<div class="flex flex-col gap-4">
					<BlockContent value={formPage.formIntro[siteState.language]}></BlockContent>
				</div>
			</div>
		</div>
	</div>
	<form
		use:enhance={({ formElement, formData, action, cancel, submitter }) => {
			isSubmitting = true;
			return async ({ result, update }) => {
				isSubmitting = false;
				if (result.type === 'success') {
					siteState.formSubmitted = true;
					goto('/dashboard');
				} else {
					goto('/error');
				}
				// update();
			};
		}}
		method="POST"
		action="/form"
	>
		<div class="flex flex-col">
			<input maxlength="250" hidden name="user_id" value={userID} />
			<FormCheckbox
				bind:checked={disclaimerIsChecked}
				required
				name="disclaimer"
				label={formPage.disclaimer[siteState.language]}
			></FormCheckbox>
			<div class={disclaimerIsChecked ? '' : 'pointer-events-none cursor-not-allowed opacity-30'}>
				<div class="my-8 flex w-full gap-4">
					<div class="flex size-6 items-center justify-center text-center font-yarndings text-3xl">
						a
					</div>
					<div
						role="presentation"
						onmouseenter={() => (siteState.currFormSection = 'whereWhen')}
						class="w-full"
					>
						<FormSectionHeader>
							{formPage.whereWhenSectionTitle[siteState.language]}
						</FormSectionHeader>
						<div class="flex gap-4 max-sm:flex-wrap">
							<FormSelect
								bind:boundValue={selectedCountry}
								name="country"
								class="basis-full sm:basis-1/4"
								required
							>
								<FormOption value="" isDefault>{fieldLabels.country[siteState.language]}</FormOption
								>

								{#each Object.entries(countryOptions) as [key, value]}
									<FormOption value={key}>{value[siteState.language]}</FormOption>
								{/each}
							</FormSelect>

							<FormSimpleInput
								class="basis-full sm:basis-1/2"
								name="city"
								placeholder={fieldLabels.city[siteState.language]}
							></FormSimpleInput>

							<FormSelect
								bind:boundValue={selectedYear}
								name="year"
								class="basis-full sm:basis-1/4"
								required
							>
								<FormOption value="" isDefault>{fieldLabels.year[siteState.language]}</FormOption>
								{#each yearOptions as year}
									<FormOption value={year}>{year}</FormOption>
								{/each}
								<FormOption value="2010">{yearOption2010OrBefore[siteState.language]}</FormOption>
							</FormSelect>
						</div>
					</div>
				</div>

				<div class="my-8 flex w-full gap-4">
					<div class="flex size-6 items-center justify-center text-center font-yarndings text-3xl">
						b
					</div>

					<div
						role="presentation"
						onmouseenter={() => (siteState.currFormSection = 'employer')}
						class="w-full"
					>
						<FormSectionHeader>
							{formPage.employerSectionTitle[siteState.language]}
						</FormSectionHeader>
						<div class="flex w-full flex-wrap gap-4">
							<FormSelect class="w-full sm:basis-[calc(50%-0.5rem)]" name="employer_type" required>
								<FormOption value="" isDefault
									>{fieldLabels.employerType[siteState.language]}</FormOption
								>
								{#each Object.values(employerTypeOptions) as section}
									<optgroup class="px-0.5 text-grey" label={section.groupLabel[siteState.language]}>
										{#each Object.entries(section.options) as [key, value]}
											<option class="pl-8 text-black" value={key}
												>{value[siteState.language]}</option
											>
										{/each}
									</optgroup>
								{/each}
							</FormSelect>

							<FormSimpleInput
								class="w-full sm:basis-[calc(50%-0.5rem)]"
								name="employer_name"
								placeholder={fieldLabels.employerName[siteState.language]}
							></FormSimpleInput>

							<FormSelect name="num_employees" class="w-full sm:basis-[calc(50%-0.5rem)]" required>
								<FormOption value="" isDefault
									>{fieldLabels.numEmployees[siteState.language]}</FormOption
								>
								{#each Object.entries(numEmployeesOptions) as [key, value]}
									<FormOption value={key}
										>{value + ' ' + fieldLabels.employees[siteState.language]}</FormOption
									>
								{/each}
							</FormSelect>
						</div>
					</div>
				</div>
				<div class="my-8 flex w-full gap-4">
					<div class="flex size-6 items-center justify-center text-center font-yarndings text-3xl">
						c
					</div>

					<div
						role="presentation"
						onmouseenter={() => (siteState.currFormSection = 'terms')}
						class="w-full"
					>
						<FormSectionHeader>
							{formPage.termsSectionTitle[siteState.language]}
						</FormSectionHeader>
						<div class="flex w-full flex-wrap gap-4">
							<FormSelect
								bind:boundValue={selectedContractType}
								name="contract_type"
								class="w-full sm:basis-[calc(50%-0.5rem)]"
								required
							>
								<FormOption value="" isDefault={true}
									>{fieldLabels.contractType[siteState.language]}</FormOption
								>
								{#each Object.entries(contractTypeOptions) as [key, value]}
									<FormOption value={key}>{value[siteState.language]}</FormOption>
								{/each}
							</FormSelect>

							{#if selectedCountry}
								<FormSelect
									required
									name="worker_status"
									class="w-full sm:basis-[calc(50%-0.5rem)]"
								>
									<FormOption value="" isDefault>
										{fieldLabels.workerStatus[siteState.language][selectedCountry]}
									</FormOption>
									{#each workerStatusOptions[selectedCountry] as option}
										<FormOption value={option}>{option}</FormOption>
									{/each}
								</FormSelect>
							{/if}

							{#if selectedContractType}
								<label class="flex w-full items-center sm:basis-[calc(50%-0.5rem)]">
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

								{#if selectedContractType !== ContractType.FULLTIME && selectedContractType !== ContractType.PARTTIME}
									<div class="flex w-full sm:basis-[calc(50%-0.5rem)]">
										<FormSimpleInput
											name="contract_length"
											type="number"
											placeholder={fieldLabels.contractLength[siteState.language]}
											class="flex-grow border-r-0"
										></FormSimpleInput>

										<FormSelect name="contract_length_unit" class="w-20">
											{#each Object.entries(contractLengthUnitOptions) as [key, value]}
												<FormOption value={key} isDefault={false}
													>{value[siteState.language]}</FormOption
												>
											{/each}
										</FormSelect>
									</div>
								{/if}
							{/if}
						</div>
					</div>
				</div>

				<div class="my-8 flex w-full gap-4">
					<div class="flex size-6 items-center justify-center text-center font-yarndings text-3xl">
						d
					</div>
					<div role="presentation" onmouseenter={() => (siteState.currFormSection = 'job')}>
						<FormSectionHeader>
							{formPage.jobSectionTitle[siteState.language]}
						</FormSectionHeader>
						<div class="flex flex-wrap gap-4">
							<FormSelect
								bind:boundValue={selectedWorkerType}
								name="worker_type"
								class="w-full sm:basis-[calc(50%-0.5rem)]"
								required
							>
								<FormOption value="" isDefault
									>{fieldLabels.workerType[siteState.language]}</FormOption
								>
								{#each Object.values(workerTypeOptions) as section}
									<optgroup class="px-0.5 text-grey" label={section.groupLabel[siteState.language]}>
										{#each Object.entries(section.options) as [key, value]}
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
										class="w-full sm:basis-[calc(50%-0.5rem)]"
									/>
								{/if}
							{/if}

							<textarea
								name="job_details"
								placeholder="{fieldLabels.jobDetails[
									siteState.language
								]} {selectedWorkerTypeHelpText}"
								class="field-sizing-content w-full border-0 border-b text-xs [word-break:break-word]"
								maxlength="250"
							></textarea>

							<FormSelect name="job_experience" class="w-full sm:basis-[calc(50%-0.5rem)]">
								<FormOption value="" isDefault
									>{fieldLabels.jobExperience[siteState.language]}</FormOption
								>
								{#each Object.entries(jobExperienceOptions) as [key, value]}
									<FormOption value={key}
										>{value + ' ' + fieldLabels.yearsOfExperience[siteState.language]}</FormOption
									>
								{/each}
							</FormSelect>

							<FormSelect name="job_obtained_via" class="w-full sm:basis-[calc(50%-0.5rem)]">
								<FormOption value="" isDefault
									>{fieldLabels.jobObtainedVia[siteState.language]}</FormOption
								>
								{#each Object.entries(jobObtainedViaOptions) as [key, value]}
									<FormOption value={key}>{value[siteState.language]}</FormOption>
								{/each}
							</FormSelect>
						</div>
					</div>
				</div>
				<div class="my-8 flex w-full gap-4">
					<div class="flex size-6 items-center justify-center text-center font-yarndings text-3xl">
						e
					</div>
					<div
						role="presentation"
						onmouseenter={() => (siteState.currFormSection = 'compensation')}
						class="w-full"
					>
						<FormSectionHeader>
							{formPage.compensationSectionTitle[siteState.language]}
						</FormSectionHeader>
						<div class="flex flex-wrap gap-4">
							<div class="relative flex w-full sm:w-0 sm:basis-[calc(50%-0.5rem)]">
								<FormSimpleInput
									name="compensation_amount"
									type="number"
									placeholder={fieldLabels.compensationAmount[siteState.language]}
									class="grow"
									required
								/>
								{#if selectedCountry}
									<div class="relative -left-12 flex items-center pr-4">
										{currency[selectedCountry]}
									</div>
								{/if}
								<FormSelect name="compensation_frequency" class="w-30" required>
									<!-- <FormOption value="" isDefault
										>{fieldLabels.compensationFrequency[siteState.language]}</FormOption
									> -->
									{#each Object.entries(compensationFrequencyOptions) as [key, value]}
										<FormOption value={key}>{value[siteState.language]}</FormOption>
									{/each}
								</FormSelect>
							</div>

							<div class="w-full pt-1.5 max-sm:pb-4 sm:basis-[calc(50%-0.5rem)] sm:pl-4">
								<FormCheckbox
									name="paid_late"
									label={fieldLabels.compensationLate[siteState.language]}
								></FormCheckbox>
							</div>
						</div>
						<div class="relative py-4">
							<button
								type="button"
								onclick={toggleAddlCompMenu}
								class="group flex items-center gap-4"
							>
								<div
									class="flex h-6 w-6 cursor-pointer items-center justify-center border group-hover:bg-black group-hover:text-white"
								>
									+
								</div>
								<div class="">{fieldLabels.addlComp[siteState.language]}</div>
							</button>
							{#if showAddlCompMenu}
								<div class="absolute top-4 left-8 flex flex-col gap-1 sm:w-50">
									{#each Object.entries(addlCompItemOptions) as [key, langOptions]}
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
							{#each Object.entries(addlCompFieldsShown) as [key, val]}
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
													/>
													<div
														class="relative -left-12 flex w-0 shrink-0 grow-0 basis-0 items-center"
													>
														%
													</div>
												</div>
											{:else}
												<FormSelect
													name={'addl_comp_' + key.toLowerCase()}
													class="w-48 border-b-0"
													required
												>
													{#each Object.entries(addlCompensationCoverageOptions) as [optKey, value]}
														<FormOption value={optKey}>{value[siteState.language]}</FormOption>
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
								{/if}
							{/each}
						</div>
					</div>
				</div>
				<div class="my-8 flex w-full gap-4">
					<div class="flex size-6 items-center justify-center text-center font-yarndings text-3xl">
						f
					</div>
					<div
						role="presentation"
						onmouseenter={() => (siteState.currFormSection = 'sentiment')}
						class="w-full"
					>
						<FormSectionHeader>
							{formPage.sentimentSectionTitle[siteState.language]}
						</FormSectionHeader>
						<div class="flex w-full flex-col gap-4">
							<FormCheckbox
								name="satisfied_with_compensation"
								label={fieldLabels.satisfiedWithCompensation[siteState.language]}
							></FormCheckbox>
							<FormCheckbox
								name="satisfied_with_conditions"
								label={fieldLabels.satisfiedWithConditions[siteState.language]}
							></FormCheckbox>
							<FormCheckbox
								name="treated_fairly"
								label={fieldLabels.treatedFairly[siteState.language]}
							></FormCheckbox>
						</div>
					</div>
				</div>

				{#if formPage.showArtistQuestions}
					<div class="my-8 flex w-full gap-4">
						<div
							class="flex size-6 items-center justify-center text-center font-yarndings text-3xl"
						>
							g
						</div>
						<div
							role="presentation"
							onmouseenter={() => (siteState.currFormSection = 'artistQuestions')}
							class="w-full"
						>
							<FormSectionHeader>
								{formPage.artistSectionTitle[siteState.language]}
							</FormSectionHeader>

							<div class="flex flex-col gap-4">
								<BlockContent value={formPage.artistSectionContent[siteState.language]}
								></BlockContent>

								{#each formPage.artistQuestions.questions as question}
									<div class="mb-4">
										<div class="pb-2">{question.questionLabel[siteState.language]}</div>
										<textarea
											name={question.dbFieldName}
											class="field-sizing-content w-full border-0 border-b text-xs leading-normal [word-break:break-word]"
										></textarea>
									</div>
								{/each}
							</div>
						</div>
					</div>
				{/if}
				<div class="my-8 flex w-full gap-4">
					<div class="flex size-6 items-center justify-center text-center font-yarndings text-3xl">
						h
					</div>
					<div
						class="w-full"
						role="presentation"
						onmouseenter={() => (siteState.currFormSection = 'addlSection')}
					>
						<FormSectionHeader>
							{formPage.addlSectionTitle[siteState.language]}
						</FormSectionHeader>
						<div>
							<textarea
								name="addl_notes"
								placeholder={formPage.addlSectionPlaceholder[siteState.language]}
								class="field-sizing-content w-full border-0 border-b text-xs leading-normal [word-break:break-word]"
							></textarea>
						</div>
					</div>
				</div>

				<div class="flex items-center justify-center pt-8">
					<button
						class="cursor-pointer border border-dashed bg-black px-4 py-2 font-sans text-xl text-white uppercase transition-colors"
						>{isSubmitting ? 'Submitting Form...' : 'Submit Form'}</button
					>
				</div>
			</div>
		</div>
	</form>
</div>
