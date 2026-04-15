<script lang="ts">
	import FormSectionHeader from './FormSectionHeader.svelte';
	import { siteState } from '$lib/states.svelte';
	import BlockContent from '../blockContent/BlockContent.svelte';

	let { formPage } = $props();
</script>

<div class="my-8 flex w-full gap-4">
	<div class="flex size-6 items-center justify-center text-center font-yarndings text-3xl">g</div>
	<div
		role="presentation"
		onmouseenter={() => (siteState.currFormSection = 'artistQuestions')}
		class="w-full"
	>
		<FormSectionHeader>
			{formPage.artistSectionTitle[siteState.language]}
		</FormSectionHeader>

		<div class="flex flex-col gap-4">
			<BlockContent value={formPage.artistSectionContent[siteState.language]}></BlockContent>

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
