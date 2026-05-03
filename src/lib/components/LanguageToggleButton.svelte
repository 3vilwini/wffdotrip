<script lang="ts">
	import { Language, siteState } from '$lib/states.svelte';
	let { language, children } = $props();
	const setLanguage = (language: Language) => {
		siteState.language = language;
	};
</script>


<button
	class={`cursor-pointer flex items-center justify-center w-10 h-10 rounded-full border ${
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
