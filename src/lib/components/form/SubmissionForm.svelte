<script lang="ts">
	import { resolve } from '$app/paths';
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';

	import { siteState } from '$lib/states.svelte';

	import AddlSection from './AddlSection.svelte';
	import ArtistSection from './ArtistSection.svelte';
	import SentimentSection from './SentimentSection.svelte';
	import CompensationSection from './CompensationSection.svelte';
	import JobSection from './JobSection.svelte';
	import TermsSection from './TermsSection.svelte';
	import EmployerSection from './EmployerSection.svelte';
	import WhereWhenSection from './WhereWhenSection.svelte';

	import BlockContent from '../blockContent/BlockContent.svelte';
	import FormCheckbox from './FormCheckbox.svelte';

	let { formPage, userID } = $props();
	let isSubmitting = $state(false);
	let disclaimerIsChecked = $state(false);
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
					goto(resolve('/dashboard'));
				} else {
					goto(resolve('/error'));
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
				<WhereWhenSection {formPage}></WhereWhenSection>
				<EmployerSection {formPage}></EmployerSection>
				<TermsSection {formPage}></TermsSection>
				<JobSection {formPage}></JobSection>
				<CompensationSection {formPage}></CompensationSection>
				<SentimentSection {formPage}></SentimentSection>

				{#if formPage.showArtistQuestions}
					<ArtistSection {formPage}></ArtistSection>
				{/if}
				<AddlSection {formPage}></AddlSection>

				<div class="flex items-center justify-center pt-8">
					<button
						class="cursor-pointer border border-dashed bg-black px-4 py-2 font-sans text-xl text-white uppercase transition-colors"
						>{isSubmitting ? 'Submitting Form...' : 'Submit'}</button
					>
				</div>
			</div>
		</div>
	</form>
</div>
