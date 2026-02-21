<script lang="ts">
	import { fieldLabels } from '$lib/staticContent.js';

	import { siteState } from '$lib/states.svelte';
</script>

<a
	href="/form"
	class="fixed bottom-2 left-[calc(50dvw)] translate-x-[-50%] cursor-pointer border border-dashed bg-black px-3 py-2 sm:px-6 sm:py-3 text-white uppercase sm:bottom-13.5"
>
	{fieldLabels.submitAnEntry[siteState.language]}
</a>
