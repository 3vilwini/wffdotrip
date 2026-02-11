<script lang="ts">
	import logo3 from '$lib/assets/logo3.png';
	import { siteState } from '$lib/states.svelte';
	import BlockContent from '$lib/components/blockContent/BlockContent.svelte';

	let { data } = $props();
</script>

<div class="flex h-14 w-full items-center border-b px-4">
	<div class="flex w-full flex-row items-center justify-between">
		<a href="/" class="cursor-pointer">
			<img src={logo3} class="w-60 cursor-pointer" />
		</a>
		<div class="flex items-center text-center font-mono text-xs">
			How much does this website cost?
		</div>
		<div class="w-60"></div>
	</div>
</div>

<div class="mx-auto flex w-full max-w-[1500px] flex-col gap-16 p-16">
	<div class="flex flex-wrap justify-evenly gap-16">
		{#each data.costPage.sectionOne as item, idx}
			<div class="flex basis-1/4 flex-col items-center">
				<div
					class="{idx % 2 === 0
						? 'font-sans text-[22px] '
						: 'font-serif  text-2xl'} mb-2 text-center tracking-[-0.01em]"
				>
					{item.title[siteState.language]}
				</div>
				<div class="text-center font-mono text-xs">
					<BlockContent value={item.description[siteState.language]}></BlockContent>
				</div>
			</div>
		{/each}
	</div>
	<div class=" mx-auto max-w-3xl text-center font-mono text-xs">
		<BlockContent value={data.costPage.sectionTwo[siteState.language]}></BlockContent>
	</div>
	<div class="flex flex-wrap justify-between">
		{#each data.costPage.sectionThree as item, idx}
			<div class="flex basis-1/5 flex-col items-center">
				<div
					class="{idx % 2 === 0
						? 'font-sans text-[22px]'
						: 'font-serif text-2xl'} mb-2 text-center tracking-[-0.01em]"
				>
					{item.title[siteState.language]}
				</div>
				<div class="text-center font-mono text-xs">
					<BlockContent value={item.description[siteState.language]}></BlockContent>
				</div>
				<div class="mt-4">
					{#each item.sponsors as sponsor}
						<div class="text-center leading-none">
							{sponsor[siteState.language]}
						</div>
					{/each}
				</div>
			</div>
		{/each}
	</div>
</div>
