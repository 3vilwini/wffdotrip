<script lang="ts">
	let { showMobileNavMenu = $bindable() } = $props();
</script>

<div
	class="{showMobileNavMenu
		? 'bg-black text-white'
		: ''}  flex size-9 cursor-pointer items-center justify-center rounded-full border border-dashed font-mono text-xs"
>
	<div class="relative -top-0.5">...</div>
</div>
