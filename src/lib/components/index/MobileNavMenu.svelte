<script lang="ts">
	import { siteState, Language } from '$lib/states.svelte';
	import { languageOptions, navMenuItems } from '$lib/staticContent';
</script>

<div class="w-full">
		<a
			href="/faq"
			class="cursor-pointer border-b border-white border-dotted bg-black px-4 py-4 flex justify-center items-center text-lg text-white"
		>
			{navMenuItems.faq[siteState.language]}
		</a>
        <a
			href="/faq#privacy-policy"
			class="cursor-pointer border-b border-white border-dotted bg-black px-4 py-4 flex justify-center items-center text-lg text-white"
		>
			{navMenuItems.privacy[siteState.language]}
		</a>
        <a
			href="/cost"
			class="cursor-pointer border-b border-white border-dotted bg-black px-4 py-4 flex justify-center items-center text-lg text-white"
		>
			{navMenuItems.cost[siteState.language]}
		</a>
</div>
