<script lang="ts">
	import FormSelect from './FormSelect.svelte';
	import { formState } from '$lib/states.svelte';

	import { fieldLabels } from '$lib/content/misc';
	import { currency } from '$lib/content/country';

	import {
		compensationFrequencyOptions,
		addlCompensationCoverageOptions,
		AddlCompItem,
		addlCompItemOptions
	} from '$lib/content/compensation';

	import FormSectionHeader from './FormSectionHeader.svelte';
	import { siteState } from '$lib/states.svelte';
	import FormCheckbox from './FormCheckbox.svelte';
	import FormSimpleInput from './FormSimpleInput.svelte';
	import FormOption from './FormOption.svelte';
	import AddlCompensationContainer from './AddlCompensationContainer.svelte';
	import AddlCompMenuItem from './AddlCompMenuItem.svelte';
	import X from '../X.svelte';

	let { formPage } = $props();
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

<div class="my-8 flex w-full gap-4">
	<div class="flex size-6 items-center justify-center text-center font-yarndings text-3xl">e</div>
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
				{#if formState.selectedCountry}
					<div class="relative -left-12 flex items-center pr-4">
						{currency[formState.selectedCountry]}
					</div>
				{/if}
				<FormSelect name="compensation_frequency" class="w-30" required>
					{#each Object.entries(compensationFrequencyOptions) as [key, value] (key)}
						<FormOption value={key}>{value[siteState.language]}</FormOption>
					{/each}
				</FormSelect>
			</div>

			<div class="w-full pt-1.5 max-sm:pb-4 sm:basis-[calc(50%-0.5rem)] sm:pl-4">
				<FormCheckbox name="paid_late" label={fieldLabels.compensationLate[siteState.language]}
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
									/>
									{#if formState.selectedCountry}
										<div class="relative -left-12 flex w-0 shrink-0 grow-0 basis-0 items-center">
											{currency[formState.selectedCountry]}
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
									{#if formState.selectedCountry}
										<div class="relative -left-12 flex w-0 shrink-0 grow-0 basis-0 items-center">
											{currency[formState.selectedCountry]}
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
									{#if formState.selectedCountry}
										<div class="relative -left-12 flex w-0 shrink-0 grow-0 basis-0 items-center">
											{currency[formState.selectedCountry]}
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
									{#if formState.selectedCountry}
										<div class="relative -left-12 flex w-0 shrink-0 grow-0 basis-0 items-center">
											{currency[formState.selectedCountry]}
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
									<div class="relative -left-12 flex w-0 shrink-0 grow-0 basis-0 items-center">
										%
									</div>
								</div>
							{:else}
								<FormSelect
									name={'addl_comp_' + key.toLowerCase()}
									class="w-48 border-b-0"
									required
								>
									{#each Object.entries(addlCompensationCoverageOptions) as [optKey, value] (optKey)}
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
