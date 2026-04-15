<script lang="ts">
	import FormSelect from './FormSelect.svelte';
	import { fieldLabels } from '$lib/content/misc';
	import { numEmployeesOptions } from '$lib/content/jobDetails';
	import { employerTypeOptions } from '$lib/content/employerType';

	import FormSectionHeader from './FormSectionHeader.svelte';
	import { siteState } from '$lib/states.svelte';

	import FormSimpleInput from './FormSimpleInput.svelte';
	import FormOption from './FormOption.svelte';

	let { formPage } = $props();
</script>

<div class="my-8 flex w-full gap-4">
	<div class="flex size-6 items-center justify-center text-center font-yarndings text-3xl">b</div>

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
				<FormOption value="" isDefault>{fieldLabels.employerType[siteState.language]}</FormOption>
				{#each Object.entries(employerTypeOptions) as [key, section] (key)}
					<optgroup class="px-0.5 text-grey" label={section.groupLabel[siteState.language]}>
						{#each Object.entries(section.options) as [key, value] (key)}
							<option class="pl-8 text-black" value={key}>{value[siteState.language]}</option>
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
				<FormOption value="" isDefault>{fieldLabels.numEmployees[siteState.language]}</FormOption>
				{#each Object.entries(numEmployeesOptions) as [key, value] (key)}
					<FormOption value={key}
						>{value + ' ' + fieldLabels.employees[siteState.language]}</FormOption
					>
				{/each}
			</FormSelect>
		</div>
	</div>
</div>
