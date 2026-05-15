<script lang="ts">
	import BlockContent from '$lib/components/blockContent/BlockContent.svelte';
	import { siteState } from '$lib/states.svelte.js';
	import { onMount } from 'svelte';
	import { SignedOut } from 'svelte-clerk';
	let { data } = $props();
	let field: HTMLElement | null = $state(null);

	onMount(() => {
		field = document.getElementById('identifier-field');
		if (field) {
			field.setAttribute('placeholder', 'Email Address');
		} else {
			setTimeout(() => {
				setPlaceholder();
			}, 150);
		}
	});

	let setPlaceholder = () => {
		field = document.getElementById('identifier-field');
		if (field) {
			field.setAttribute('placeholder', 'Email Address');
		} else {
			setTimeout(() => {
				setPlaceholder();
			}, 150);
		}
	};
</script>

<SignedOut>
	<div class="mb-4 pt-8 text-2xl leading-tight">
		{data.formPage.loginHeader[siteState.language]}
	</div>
	<div class="font-mono text-xs leading-[1.4]">
		<BlockContent value={data.formPage.loginDek[siteState.language]}></BlockContent>
	</div>
</SignedOut>
