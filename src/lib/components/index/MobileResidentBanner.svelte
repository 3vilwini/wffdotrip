<script lang="ts">
	import { miscLabels } from '$lib/content/misc';
	import { siteState } from '$lib/states.svelte';
</script>

<div class="flex h-16 items-center justify-center bg-black px-2 py-1 text-white sm:hidden">
	{miscLabels.currentlyInBeta[siteState.language]}
</div>
