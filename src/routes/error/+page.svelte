<script lang="ts">
	import { resolve } from '$app/paths';
	import { miscLabels } from '$lib/content/misc';
	import { siteState } from '$lib/states.svelte';
</script>

<div>
	There has been an error submitting the form. Please try again in 1 minute. If the problem
	continues, you can anonymously submit a bug with a screenshot of the entry <a
		href="https://framaforms.org/workforfreerip-bug-report-1778160852"
		target="_blank">here</a
	>.
	<div>
		<a href={resolve('/form')}>{miscLabels.backToForm[siteState.language]}</a>
	</div>
</div>
