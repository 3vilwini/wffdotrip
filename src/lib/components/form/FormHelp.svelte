<script lang="ts">
	import { siteState } from '$lib/states.svelte';
	import BlockContent from '../blockContent/BlockContent.svelte';

	let { formPage } = $props();
	console.log(formPage);
	let helpText = $derived(formPage[`${siteState.currFormSection}HelpText`]);
    let helpTextSpecificLanguage = $derived(helpText ? helpText[siteState.language] : '')
	console.log(`${siteState.currFormSection}HelpText`);
	console.log(formPage[`${siteState.currFormSection}HelpText`]);

</script>

<div class="text-xs font-mono max-w-xs">
	<BlockContent value={helpTextSpecificLanguage}></BlockContent>
</div>
