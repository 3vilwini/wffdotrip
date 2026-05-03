<script lang="ts">
	import { siteState } from '$lib/states.svelte';
	import BlockContent from '../blockContent/BlockContent.svelte';

	let { formPage } = $props();
	let helpText = $derived(formPage[`${siteState.currFormSection}HelpText`]);
	let helpTextSpecificLanguage = $derived(helpText ? helpText[siteState.language] : '');
</script>


<script>
	let { helpTextSpecificLanguage } = $props();

	function getFirstChar(blocks) {
		const text =
			blocks?.find(b => b.children)?.children?.find(c => c.text)?.text ?? "";
		return text?.[0] ?? "";
	}
</script>

<div class="max-w-xs font-mono text-xs pt-13">
	<div class="flex items-start gap-2">
		<div class="flex size-6 items-center justify-center text-center font-yarndings text-3xl">
			{getFirstChar(helpTextSpecificLanguage)}
		</div>

		<div class="flex-1">
			<BlockContent value={helpTextSpecificLanguage} />
		</div>
	</div>
</div>
