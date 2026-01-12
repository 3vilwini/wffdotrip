<script lang="ts">
	import { Language, siteState } from '$lib/states.svelte';
	let { language, children } = $props();
	const setLanguage = (language: Language) => {
		siteState.language = language;
	};
</script>

<button
	class="cursor-pointer {language === siteState.language ? 'underline' : ''}"
	onclick={() => {
		setLanguage(language);
	}}
>
	{@render children()}
</button>
