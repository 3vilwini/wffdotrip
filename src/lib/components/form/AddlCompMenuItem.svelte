<script lang="ts">
	let { children, onclick } = $props();
</script>

<div {onclick} class="border border-dotted bg-white px-4 py-2 hover:bg-black hover:text-white cursor-pointer">
	{@render children()}
</div>
