<script lang="ts">
	import Row from '$lib/components/index/Row.svelte';

	let { data } = $props();
	console.log(data);
</script>

<div class="flex">
	<div class="border-r"></div>
	<div>
		{#each data.rows.results as row}
			<Row {row}></Row>
		{/each}
	</div>
	<div class="border-l"></div>
</div>
