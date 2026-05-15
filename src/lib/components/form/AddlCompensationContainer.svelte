<script lang="ts">
	let { children } = $props();
</script>

<div class="border border-dashed px-2">
	<label class="flex items-center justify-between">
		{@render children()}
	</label>
</div>
