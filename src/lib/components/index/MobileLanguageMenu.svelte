<script lang="ts">
	import { siteState, Language } from '$lib/states.svelte';
	import { languageOptions } from '$lib/content/country';
</script>

<div class="w-full">
	{#each Object.entries(languageOptions) as [key, value]}
		<div
			onclick={() => (siteState.language = key as Language)}
			class="cursor-pointer border-b border-white border-dashed bg-black px-4 py-4 flex justify-center items-center text-lg text-white"
		>
			{value}
		</div>
	{/each}
</div>
