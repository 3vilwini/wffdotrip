<script>
	let { name, label, required = false, checked = $bindable(false) } = $props();
</script>

<label class="flex gap-4 text-xs leading-normal">
	<input bind:checked={checked} {name} type="checkbox" {required} />
	<span class="pt-0.5">
		{label}
	</span>
</label>
