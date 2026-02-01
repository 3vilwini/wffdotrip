<script lang="ts">
	import { compensationFrequencyOptions } from './../../staticContent.ts';
	import { siteState } from '$lib/states.svelte';
	import {
		currency,
		contractTypeOptions,
		getEmployerTypeLabel,
		getWorkerTypeLabel,
		numEmployeesOptions
	} from '$lib/staticContent';
	let { row } = $props();
</script>

<div class="flex gap-4">
	<div>
		{row.city}
	</div>
	<div>
		{getWorkerTypeLabel(row.worker_type, siteState.language)}
	</div>
	<div>
		{getEmployerTypeLabel(row.employer_type, siteState.language)}
	</div>
	<div>
		{numEmployeesOptions[row.num_employees][siteState.language].split(' ')[0]}
	</div>
	<div>
		{contractTypeOptions[row.contract_type][siteState.language]}
	</div>
	<div>
		{row.compensation_amount}{currency[row.country]}
		{compensationFrequencyOptions[row.compensation_frequency][siteState.language]}
	</div>
</div>
