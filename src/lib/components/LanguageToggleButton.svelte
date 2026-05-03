<script lang="ts">
	import { Language, siteState } from '$lib/states.svelte';
	let { language, children } = $props();
	const setLanguage = (language: Language) => {
		siteState.language = language;
	};
</script>


<button
	class={`cursor-pointer rounded-full px-3 py-1 border ${
		language === siteState.language
			? 'border-current'
			: 'border-transparent'
	}`}
	onclick={() => {
		setLanguage(language);
	}}
>
	{@render children()}
</button>
