<script lang="ts">
	import { miscLabels } from '$lib/content/misc';
	import { siteState } from '$lib/states.svelte';
</script>

<div>
	{miscLabels.formErrorMessage[siteState.language]}
	<div>
		<a href="/form">{miscLabels.backToForm[siteState.language]}</a>
	</div>
</div>
