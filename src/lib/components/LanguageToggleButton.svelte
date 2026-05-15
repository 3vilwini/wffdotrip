<script lang="ts">
	import { Language, siteState } from '$lib/states.svelte';
	let { language, children } = $props();
	const setLanguage = (language: Language) => {
		siteState.language = language;
	};
</script>


<button
	class={`cursor-pointer rounded-full px-3 py-1 border transition ${
		language === siteState.language
			? 'border-current'
			: 'border-transparent'
	} hover:border-dashed hover:border-current`}
	onclick={() => {
		setLanguage(language);
	}}
>
	{@render children()}
</button>
