<script lang="ts">
	import { fieldLabels } from '$lib/content/misc.js';

	import { siteState } from '$lib/states.svelte';
</script>



<a
	href="/form"
	class="fixed bottom-3 left-[calc(50dvw)] translate-x-[-50%] cursor-pointer px-3 py-2 sm:px-6 sm:py-3 uppercase sm:bottom-13.5
	bg-black text-white border border-transparent
	hover:bg-white hover:text-black hover:border-black hover:border-dashed"
>
	{fieldLabels.submitAnEntry[siteState.language]}
</a>
