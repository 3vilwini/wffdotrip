<script lang="ts">
	import { SignedIn, SignOutButton } from 'svelte-clerk';
	import logo from '$lib/assets/logo.png';
	import MobileIndexHeader from '$lib/components/index/MobileIndexHeader.svelte';
	import { miscLabels } from '$lib/content/misc';
	import { siteState } from '$lib/states.svelte.js';
	import { resolve } from '$app/paths';
	let { data, children } = $props();
</script>

<div class=" flex flex-col sm:gap-12">
	<div class="hidden items-start justify-between p-6 pt-4 sm:flex">
		<a href={resolve('/')} class="cursor-pointer">
			<img src={logo} class="w-60" />
		</a>
		<SignedIn>
			<div class="flex items-center gap-8">
				<div class="font-serif text-xl tracking-tight">
					{data.user ? data.user.emailAddresses[0].emailAddress : ''}
				</div>
				<!-- <div class="font-mono text-xs">Deactivate account</div> -->
				<div class="cursor-pointer font-mono text-xs hover:underline">
					<SignOutButton class="cursor-pointer hover:underline"
						>{miscLabels.signOut[siteState.language]}</SignOutButton
					>
				</div>
			</div>
		</SignedIn>
	</div>

	<div class="sticky top-0 bg-white sm:hidden">
		<MobileIndexHeader></MobileIndexHeader>
	</div>

	<SignedIn>
		<div class="mb-8 flex w-full items-center justify-between gap-8 p-3 sm:hidden">
			<div class="font-serif text-xl tracking-tight">
				{data.user ? data.user.emailAddresses[0].emailAddress : ''}
			</div>
			<div class="flex gap-8">
				<!-- <div class="font-mono text-xs">Deactivate account</div> -->
				<div class="cursor-pointer font-mono text-xs hover:underline">
					<SignOutButton class="cursor-pointer hover:underline"
						>{miscLabels.signOut[siteState.language]}</SignOutButton
					>
				</div>
			</div>
		</div>
	</SignedIn>

	{@render children()}
</div>
