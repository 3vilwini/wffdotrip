<script lang="ts">
	let { name, children, boundValue = $bindable(), class: className = '', required=false, value=undefined } = $props();
	let defaultValue = $derived(boundValue ? boundValue : value)
</script>

<select
	bind:value={defaultValue}
	{name}
	{required}
	class="flex items-center w-0 border-0 border-b text-xs pr-1 {defaultValue
		? 'text-black'
		: 'text-grey'} {className}"
>
	{@render children()}
</select>
