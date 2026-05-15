<script lang="ts">
	import { siteState } from '$lib/states.svelte';
	let { showMobileLanguageMenu = $bindable() } = $props();
</script>

<div
	class="{showMobileLanguageMenu
		? 'bg-black text-white'
		: ''} flex size-8.5 cursor-pointer items-center justify-center border border-dashed font-mono text-xs"
>
	{siteState.language}
</div>
