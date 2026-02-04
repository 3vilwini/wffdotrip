<script lang="ts">
	import { addlCompItemOptions } from '$lib/staticContent';
	import { siteState } from '$lib/states.svelte';
	let { item, value } = $props();
</script>

<div class="flex justify-between gap-2 py-0.5 not-last:border-b">
	<div>
		{addlCompItemOptions[item][siteState.language]}
	</div>
	<div class="text-right">
		{value}
	</div>
</div>
