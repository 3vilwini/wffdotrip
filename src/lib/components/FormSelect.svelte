<script lang="ts">
	let { name, children, boundValue = $bindable(), class: className = '' } = $props();
</script>

<select
	bind:value={boundValue}
	{name}
	class="flex items-center border-0 border-b text-xs {boundValue
		? 'text-black'
		: 'text-grey'} {className}"
>
	{@render children()}
</select>
