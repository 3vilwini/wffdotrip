<script lang="ts">
	import { siteState } from '$lib/states.svelte';
	import BlockContent from '../blockContent/BlockContent.svelte';

	let { formPage } = $props();
	let helpText = $derived(formPage[`${siteState.currFormSection}HelpText`]);
	let helpTextSpecificLanguage = $derived(helpText ? helpText[siteState.language] : '');
</script>

<div class="max-w-xs font-mono text-xs pt-13">
	<BlockContent value={helpTextSpecificLanguage}></BlockContent>
</div>
