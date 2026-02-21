<script lang="ts">
	import BlockContent from '../blockContent/BlockContent.svelte';
	import logo2 from '$lib/assets/logo2.png';
	import { siteState } from '$lib/states.svelte';
	import MobileLanguageSelector from './MobileLanguageSelector.svelte';
	import MobileLanguageMenu from './MobileLanguageMenu.svelte';
	import MobileNavSelector from './MobileNavSelector.svelte';
	import MobileNavMenu from './MobileNavMenu.svelte';

	let showMobileLanguageMenu = $state(false);
	let showMobileNavMenu = $state(false);

	const toggleLanguageMenu = () => {
		showMobileLanguageMenu = !showMobileLanguageMenu;
		showMobileNavMenu = false;
	};

	const toggleNavMenu = () => {
		showMobileLanguageMenu = false;
		showMobileNavMenu = !showMobileNavMenu;
	};
</script>

<div class="flex h-14 flex-col gap-6 border-b p-2">
	<div class="flex items-center justify-between">
		<a href="/">
			<img src={logo2} class="w-36" />
		</a>
		<div class="flex items-center gap-4">
			<div onclick={toggleLanguageMenu}>
				<MobileLanguageSelector bind:showMobileLanguageMenu></MobileLanguageSelector>
			</div>
			<div onclick={toggleNavMenu}>
				<MobileNavSelector bind:showMobileNavMenu></MobileNavSelector>
			</div>
		</div>
	</div>
</div>

<div
	class="grid {showMobileLanguageMenu
		? 'grid-rows-[1fr]'
		: 'grid-rows-[0fr]'} absolute w-full transition-[grid-template-rows]"
>
	<div onclick={() => (showMobileLanguageMenu = !showMobileLanguageMenu)} class="overflow-hidden">
		<MobileLanguageMenu></MobileLanguageMenu>
	</div>
</div>

<div
	class="grid {showMobileNavMenu
		? 'grid-rows-[1fr]'
		: 'grid-rows-[0fr]'} absolute w-full transition-[grid-template-rows]"
>
	<div onclick={() => (showMobileNavMenu = !showMobileNavMenu)} class="overflow-hidden">
		<MobileNavMenu></MobileNavMenu>
	</div>
</div>
