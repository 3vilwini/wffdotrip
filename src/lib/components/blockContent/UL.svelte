<script lang="ts">
	let { children } = $props();
</script>

<ul class="relative left-4 flex list-disc flex-col">
	{@render children()}
</ul>
