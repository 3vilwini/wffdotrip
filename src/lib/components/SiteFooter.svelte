<script lang="ts">
	import LanguageToggle from './LanguageToggle.svelte';
	import { page } from '$app/state';
</script>

<div class="fixed bottom-0 left-0 flex h-14 w-full justify-between border-t bg-white p-4">
	<div class="flex basis-1/3 items-center">
		<LanguageToggle></LanguageToggle>
	</div>
	{#if page.url.pathname !== '/cost'}
		<div class="flex grow basis-1/3 justify-center">
			<a href="/cost" class="self-center font-mono text-xs">How much does this website cost?</a>
		</div>
	{/if}
	<div class="basis-1/3"></div>
</div>
