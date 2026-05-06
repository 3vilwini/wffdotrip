<script lang="ts">
	import { siteState } from '$lib/states.svelte';
	import BlockContent from '$lib/components/blockContent/BlockContent.svelte';
	import MobileIndexHeader from '$lib/components/index/MobileIndexHeader.svelte';
	import { fly } from 'svelte/transition';
	let { data } = $props();
</script>

<div in:fly={{ y: '100%', duration: 150 }}>
	<div class="sticky top-0 z-10 bg-white">
		<MobileIndexHeader></MobileIndexHeader>
	</div>
	<div class="flex items-center justify-center px-3 pt-8 font-mono text-xs sm:hidden">
		How much does this website cost?
	</div>
	<div class="mx-auto flex w-full max-w-[1500px] flex-col gap-16 p-3 pt-16 sm:p-16">
		<div class="flex flex-wrap justify-evenly gap-16">
			{#each data.costPage.sectionOne as item, idx}
				<div class="flex basis-full flex-col items-center sm:basis-1/4">
					<div
						class="{idx % 2 === 0
							? 'font-sans text-[22px] '
							: 'font-serif text-2xl'} mb-2 text-center leading-[1.2] tracking-[-0.01em]"
					>
						{item.title[siteState.language]}
					</div>
					<div class="text-center font-mono text-xs leading-[1.4]">
						<BlockContent value={item.description[siteState.language]}></BlockContent>
					</div>
				</div>
			{/each}
		</div>

		<div class="mx-auto max-w-3xl text-center font-mono text-xs">
			<BlockContent value={data.costPage.sectionTwo[siteState.language]}></BlockContent>
		</div>

		<div class="flex flex-wrap justify-between gap-16 sm:gap-0">
			{#each data.costPage.sectionThree as item, idx}
				<div class="flex flex-col items-center sm:basis-1/5">
					{#if item.title}
						<div
							class="{idx % 2 === 0
								? 'font-sans text-[22px]'
								: 'font-serif text-2xl'} mb-2 text-center tracking-[-0.01em]"
						>
							{item.title[siteState.language]}
						</div>
					{/if}
					{#if item.description}
						<div class="text-center font-mono text-xs">
							<BlockContent value={item.description[siteState.language]}></BlockContent>
						</div>
					{/if}

					{#if item.sponsors && item.sponsors.length > 0}
						<div class="mt-4">
							{#each item.sponsors as sponsor}
								<div class="text-center leading-none">
									{sponsor[siteState.language]}
								</div>
							{/each}
						</div>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</div>
