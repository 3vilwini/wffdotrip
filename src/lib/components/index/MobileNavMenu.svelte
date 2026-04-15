<script lang="ts">
	import { siteState } from '$lib/states.svelte';
	import { navMenuItems } from '$lib/content/misc';
</script>

<div class="w-full">
	<a
		href="/faq"
		class="flex cursor-pointer items-center justify-center border-b border-dashed border-white bg-black px-4 py-4 text-lg text-white"
	>
		{navMenuItems.faq[siteState.language]}
	</a>
	<a
		href="/faq#privacy-policy"
		class="flex cursor-pointer items-center justify-center border-b border-dashed border-white bg-black px-4 py-4 text-lg text-white"
	>
		{navMenuItems.privacy[siteState.language]}
	</a>
	<a
		href="/cost"
		class="flex cursor-pointer items-center justify-center border-b border-dashed border-white bg-black px-4 py-4 text-lg text-white"
	>
		{navMenuItems.cost[siteState.language]}
	</a>
</div>
