<script lang="ts">
	let { portableText } = $props();

</script>


	<a
		href={portableText.value.href}
		target=""
		class=" cursor-pointer underline hover:underline"
	>
		{portableText.plainTextContent}
	</a>