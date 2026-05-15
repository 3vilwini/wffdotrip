<script lang="ts">
	let { portableText } = $props();

</script>


	<a
		href={portableText.value.href}
		target=""
		class=" cursor-pointer underline hover:no-underline"
	>
		{portableText.plainTextContent}
	</a>
