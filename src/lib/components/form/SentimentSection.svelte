<script lang="ts">
	import { fieldLabels } from '$lib/content/misc';

	import FormSectionHeader from './FormSectionHeader.svelte';
	import { siteState } from '$lib/states.svelte';
	import FormCheckbox from './FormCheckbox.svelte';

	let { formPage } = $props();
</script>

<div class="my-8 flex w-full gap-4">
	<div class="flex size-6 items-center justify-center text-center font-yarndings text-3xl">f</div>
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
			<FormCheckbox name="treated_fairly" label={fieldLabels.treatedFairly[siteState.language]}
			></FormCheckbox>
		</div>
	</div>
</div>
