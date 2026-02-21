<script lang="ts">
	let { portableText } = $props();

</script>


	<a
		href={portableText.value.href}
		target="_blank"
		class=" cursor-pointer hover:underline"
	>
		{portableText.plainTextContent}
	</a>