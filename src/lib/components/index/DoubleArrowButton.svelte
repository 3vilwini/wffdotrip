<script lang="ts">
	import doubleArrow from '$lib/assets/doubleArrow.svg';
	let { flip = false } = $props();
</script>

<div class="size-6 bg-black p-1">
	<img src={doubleArrow} class=" w-full {flip ? 'rotate-180' : ''}" />
</div>
