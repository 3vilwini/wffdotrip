<script lang="ts">
	import logo from '$lib/assets/logo.png';
	import BlockContent from '$lib/components/blockContent/BlockContent.svelte';
	import { siteState } from '$lib/states.svelte';
	import { slide, fly } from 'svelte/transition';
	let { data } = $props();
</script>

<div>
	<div class="flex flex-col gap-8 p-3 font-mono text-xs sm:flex-row sm:p-6 sm:pt-4">
		<div class="relative sm:w-0 sm:basis-1/2 lg:basis-1/3">
			<div class="w-[25dvw] max-w-sm min-w-xs pr-12">
				<a href="/" class="mb-4 flex ">
					<img src={logo} class="w-60" />
				</a>
				<div>
					<BlockContent value={data.faqPage.intro[siteState.language]}></BlockContent>
				</div>
			</div>
		</div>
		<div  in:fly={{ duration: 150, x: '-25%' }} class="flex flex-col pt-2 sm:w-0 sm:basis-1/2 lg:basis-2/3 lg:flex-row lg:gap-8">
			<div class="sm:basis-1/2">
				{#each data.faqPage.col2Questions as qa}
					<div class="mb-8">
						<div class="mb-4 font-sans text-xl leading-[1.2]">
							{qa.question[siteState.language]}
						</div>
						<div>
							<BlockContent value={qa.answer[siteState.language]}></BlockContent>
						</div>
					</div>
				{/each}
			</div>
			<div class="sm:basis-1/2">
				{#each data.faqPage.col3Questions as qa}
					<div class="mb-8">
						<div class="mb-4 font-sans text-xl leading-[1.2]">
							{qa.question[siteState.language]}
						</div>
						<div>
							<BlockContent value={qa.answer[siteState.language]}></BlockContent>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>

	<div 
		id="submissions-faq"
		class="mt-16 flex flex-col gap-8 p-3 font-mono text-xs sm:mt-0 sm:flex-row sm:p-8"
	>
		<div class="relative sm:w-0 sm:basis-1/2 lg:basis-1/3">
			<div class="inline-flex gap-4 font-sans text-xl">
				<span>↓</span>
				<a href="#submissions-faq" class="scroll-mt-20">
					{data.faqPage.submissionsFAQHeader[siteState.language]}
				</a>
			</div>
		</div>
		<div class="flex flex-col sm:w-0 sm:basis-1/2 lg:basis-2/3 lg:flex-row lg:gap-8">
			<div class="sm:basis-1/2">
				{#each data.faqPage.submissionsCol2Questions as qa}
					<div class="mb-8">
						<div class="mb-4 font-sans text-xl leading-[1.2]">
							{qa.question[siteState.language]}
						</div>
						<div>
							<BlockContent value={qa.answer[siteState.language]}></BlockContent>
						</div>
					</div>
				{/each}
			</div>
			<div class="sm:basis-1/2">
				{#each data.faqPage.submissionsCol3Questions as qa}
					<div class="mb-8">
						<div class="mb-4 font-sans text-xl leading-[1.2]">
							{qa.question[siteState.language]}
						</div>
						<div>
							<BlockContent value={qa.answer[siteState.language]}></BlockContent>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>

	<div
		id="privacy-policy"
		class="mt-16 flex flex-col gap-8 p-3 font-mono text-xs sm:mt-0 sm:flex-row sm:p-8"
	>
		<div class="relative sm:w-0 sm:basis-1/2 lg:basis-1/3">
			<div class="inline-flex gap-4 font-sans text-xl">
				<span>↓</span>
				<a href="#privacy-policy" class="scroll-mt-20">
					{data.faqPage.privacyPolicyHeader[siteState.language]}
				</a>
			</div>
		</div>
		<div class="flex flex-col sm:w-0 sm:basis-1/2 lg:basis-2/3 lg:flex-row lg:gap-8">
			<div class="sm:basis-1/2">
				<BlockContent value={data.faqPage.privacyPolicyCol2[siteState.language]}></BlockContent>
			</div>
			<div class="sm:basis-1/2">
				<BlockContent value={data.faqPage.privacyPolicyCol3[siteState.language]}></BlockContent>
			</div>
		</div>
	</div>
</div>
