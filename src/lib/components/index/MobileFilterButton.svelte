<script>
	import { miscLabels } from "$lib/content/misc";
	import { siteState } from "$lib/states.svelte";

</script>
<div class="border-b h-16 font-mono text-xs flex justify-center items-center">{miscLabels.filter[siteState.language]}</div>
