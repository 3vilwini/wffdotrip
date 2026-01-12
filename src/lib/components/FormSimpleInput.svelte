<script>
	let { name, placeholder, type = 'text', class: className = '' } = $props();
</script>

<input class="border-0 border-b text-xs {className}" {name} {placeholder} {type} />
