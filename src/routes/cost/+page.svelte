<script lang="ts">
	import logo3 from '$lib/assets/logo3.png';
	import {siteState} from '$lib/states.svelte';
	import BlockContent from '$lib/components/blockContent/BlockContent.svelte';

	let { data } = $props();
</script>



<div class="flex items-center px-4 h-14 w-full border-b">
	<div class="flex w-full flex-row justify-between items-center ">
		<a href="/" class="cursor-pointer">
			<img src={logo3} class="w-60 cursor-pointer" />
		</a>
		<div class="flex items-center font-mono text-xs text-center">
			How much does this website cost?
		</div>
		<div class="w-60">
		</div>
	</div>
</div>

<div class="w-full p-16 flex flex-col gap-16 max-w-[1500px] mx-auto">
	<div class="flex flex-wrap gap-16 justify-evenly">
		{#each data.costPage.sectionOne as item, idx}
			<div class="flex flex-col items-center basis-1/4">
				<div class="{idx % 2 === 0 ? 'font-sans' : 'font-serif tracking-tight'} text-2xl mb-2 text-center">
					{item.title[siteState.language]}
				</div>
				<div class="text-center text-xs font-mono">
					<BlockContent value={item.description[siteState.language]}></BlockContent>
				</div>
			</div>
		{/each}
	</div>
	<div class=" text-xs font-mono text-center max-w-3xl mx-auto">
		<BlockContent value={data.costPage.sectionTwo[siteState.language]}></BlockContent>
	</div>
	<div class="flex flex-wrap justify-between">
		{#each data.costPage.sectionThree as item, idx}
			<div class="flex flex-col items-center basis-1/5">
				<div class="{idx % 2 === 0 ? 'font-sans' : 'font-serif tracking-tight'} text-2xl mb-2 text-center">
					{item.title[siteState.language]}
				</div>
				<div class="text-center text-xs font-mono">
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
