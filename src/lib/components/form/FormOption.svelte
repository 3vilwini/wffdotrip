<script lang="ts">
	let { value, children, isDefault = false, class: className = '' } = $props();
</script>

<option {value} class="px-2 {isDefault ? 'text-grey' : ''} {className}">
	{@render children()}
</option>
