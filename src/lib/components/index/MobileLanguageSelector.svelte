<script lang="ts">
	import { siteState, Language } from '$lib/states.svelte';
    import { languageOptions } from '$lib/staticContent';
    let { showMobileLanguageMenu=$bindable() }  = $props();
</script>

<div class="{showMobileLanguageMenu ? 'bg-black text-white' : ''} cursor-pointer flex size-8.5 items-center justify-center border border-dashed font-mono text-xs">
	{siteState.language}
</div>

