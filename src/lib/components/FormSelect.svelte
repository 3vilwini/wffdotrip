<script lang="ts">
	let { name, children, boundValue = $bindable(), class: className = '', required=false } = $props();
</script>

<select
	bind:value={boundValue}
	{name}
	{required}
	class="flex items-center w-0 border-0 border-b text-xs pr-1 {boundValue
		? 'text-black'
		: 'text-grey'} {className}"
>
	{@render children()}
</select>
