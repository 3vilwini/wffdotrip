<script lang="ts">
	import LanguageToggle from './LanguageToggle.svelte';
</script>

<div class="fixed bottom-0 left-0 flex h-14 w-full justify-between border-t bg-white p-4">
	<div class="basis-1/3 flex items-center">
		<LanguageToggle></LanguageToggle>
	</div>
	<div class="basis-1/3 grow flex justify-center">
		<div class="self-center font-mono text-xs">How much does this website cost?</div>
	</div>
	<div class="basis-1/3"></div>
</div>
