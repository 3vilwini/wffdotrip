<script>
	let { name, label } = $props();
</script>

<label class="flex gap-4 text-xs leading-normal">
	<input {name} type="checkbox" />
	<span class="pt-0.5">
		{label}
	</span>
</label>
