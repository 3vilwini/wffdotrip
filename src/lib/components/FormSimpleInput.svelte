<script>
	let { name, placeholder, type = 'text', class: className = '', required=false } = $props();
</script>

<input maxlength="99" class="border-0 border-b text-xs {className}" {name} {placeholder} {type} {required} />
