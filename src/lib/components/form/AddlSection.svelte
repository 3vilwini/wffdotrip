<script lang="ts">
	import FormSectionHeader from './FormSectionHeader.svelte';
	import { siteState } from '$lib/states.svelte';

	let { formPage } = $props();
</script>

<div class="my-8 flex w-full gap-4">
	<div class="flex size-6 items-center justify-center text-center font-yarndings text-3xl">h</div>
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
