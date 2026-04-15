<script lang="ts">
	import { navMenuItems } from '$lib/content/misc';
	import BlockContent from '$lib/components/blockContent/BlockContent.svelte';
	import { siteState } from '$lib/states.svelte.js';
	import { onMount } from 'svelte';
	import { SignedIn, SignedOut, SignIn, SignOutButton } from 'svelte-clerk';
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
	<div class={field ? '' : 'opacity-0'}>
		<SignIn
			fallbackRedirectUrl="/form"
			oauthFlow="redirect"
			routing="path"
			path="/form"
			signUpFallbackRedirectUrl="/form"
			signUpForceRedirectUrl="/form"
			withSignUp={true}
			appearance={{
				elements: {
					main: '!flex-shrink !max-w-sm !w-full !font-mono',
					rootBox: '!flex-shrink !w-full !flex-grow !flex',
					cardBox: '!shadow-none !rounded-none',
					card: '!bg-transparent !rounded-none !p-0.5',
					form: '!gap-4',
					formFieldLabel: '!hidden',
					formFieldInput:
						'!text-xl !px-1 !font-serif !shadow-none !tracking-tight !rounded-none !bg-transparent !border-0 !border-b !border-b-black',
					formButtonPrimary:
						'!self-end !text-white !text-lg !font-sans !bg-transparent !p-0 !uppercase !border-dashed !border !border-black !rounded-none  ![appearence:none]  !shadow-none !rounded-none !w-min',
					buttonArrowIcon: '!hidden',
					footer: '!hidden',
					header: '!hidden'
				}
			}}
		/>
	</div>
	<div class="mt-12">
		<a href="/faq#privacy-policy" class="font-mono text-xs hover:underline"
			>{navMenuItems.privacy[siteState.language]} &rightarrow;&#xFE0E;</a
		>
	</div>
</SignedOut>
<SignedIn>
	<div class="flex flex-col gap-4">
		<div class="border border-dashed px-4 py-3 pt-2">
			{#if data && data.user && data.user.emailAddresses && data.user.emailAddresses.length >= 1 && data.user.emailAddresses[0].emailAddress}
				<div class="font-serif text-xl tracking-tight">
					{data.user.emailAddresses[0].emailAddress}
				</div>
			{/if}
			<div class="mt-2 flex justify-between gap-4">
				<SignOutButton class="cursor-pointer text-left font-mono text-xs hover:underline"
				></SignOutButton>
				<a href="/dashboard" class="cursor-pointer font-mono text-xs hover:underline">Dashboard →</a
				>
			</div>
		</div>
	</div>
</SignedIn>
