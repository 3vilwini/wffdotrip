<script lang="ts">
	import FormSelect from './FormSelect.svelte';
	import { formState } from '$lib/states.svelte';
	import { fieldLabels } from '$lib/content/misc';
	import {
		contractTypeOptions,
		workerStatusOptions,
		ContractType,
		contractLengthUnitOptions
	} from '$lib/content/jobDetails';

	import FormSectionHeader from './FormSectionHeader.svelte';
	import { siteState } from '$lib/states.svelte';

	import FormSimpleInput from './FormSimpleInput.svelte';
	import FormOption from './FormOption.svelte';

	let { formPage } = $props();
</script>

<div class="my-8 flex w-full gap-4">
	<div class="flex size-6 items-center justify-center text-center font-yarndings text-3xl">c</div>

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
				bind:boundValue={formState.selectedContractType}
				name="contract_type"
				class="w-full sm:basis-[calc(50%-0.5rem)]"
				required
			>
				<FormOption value="" isDefault={true}
					>{fieldLabels.contractType[siteState.language]}</FormOption
				>
				{#each Object.entries(contractTypeOptions) as [key, value] (key)}
					<FormOption value={key}>{value[siteState.language]}</FormOption>
				{/each}
			</FormSelect>

			{#if formState.selectedCountry}
				<FormSelect required name="worker_status" class="w-full sm:basis-[calc(50%-0.5rem)]">
					<FormOption value="" isDefault>
						{fieldLabels.workerStatus[siteState.language][formState.selectedCountry]}
					</FormOption>
					{#each workerStatusOptions[formState.selectedCountry] as option (option)}
						<FormOption value={option}>{option}</FormOption>
					{/each}
				</FormSelect>
			{/if}

			{#if formState.selectedContractType}
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

				{#if formState.selectedContractType !== ContractType.FULLTIME && formState.selectedContractType !== ContractType.PARTTIME}
					<div class="flex w-full sm:basis-[calc(50%-0.5rem)]">
						<FormSimpleInput
							name="contract_length"
							type="number"
							placeholder={fieldLabels.contractLength[siteState.language]}
							class="grow border-r-0"
						></FormSimpleInput>

						<FormSelect name="contract_length_unit" class="w-20">
							{#each Object.entries(contractLengthUnitOptions) as [key, value] (key)}
								<FormOption value={key} isDefault={false}>{value[siteState.language]}</FormOption>
							{/each}
						</FormSelect>
					</div>
				{/if}
			{/if}
		</div>
	</div>
</div>
