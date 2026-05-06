<script lang="ts">
	import logo from '$lib/assets/logo.png';
	import SubmissionForm from '$lib/components/form/SubmissionForm.svelte';
	import FormHelp from '$lib/components/form/FormHelp.svelte';
	import MobileIndexHeader from '$lib/components/index/MobileIndexHeader.svelte';
	let { data, children } = $props();

	import { navMenuItems } from '$lib/content/misc';
	import { siteState } from '$lib/states.svelte.js';
	import { onMount } from 'svelte';
	import { SignedIn, SignedOut, SignIn, SignOutButton } from 'svelte-clerk';
	import { page } from '$app/state';
	let field: HTMLElement | null = $state(null);

	let headerStyle = $derived(page.url.pathname === '/form' ? '!hidden' : '');
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

<div class="sticky top-0 z-10 bg-white lg:hidden">
	<MobileIndexHeader></MobileIndexHeader>
</div>
<div class=" flex w-full flex-col max-lg:items-center lg:flex-row lg:divide-x">
	<div class=" max-sm:w-full lg:w-[25dvw] lg:max-w-sm lg:min-w-xs lg:shrink-0 lg:grow-0">
		<div class="sticky top-0 p-2 max-lg:w-full sm:p-6 sm:pt-4">
			<a href="/" class="mb-8 flex hidden w-[80%] max-w-80 lg:block">
				<img src={logo} class="w-full max-w-60" />
			</a>

			{@render children()}

			<SignedOut>
				<div>
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
								card: '!bg-transparent !rounded-none !p-1 !pr-4',
								form: '!gap-4 !text-xs !font-normal',
								formFieldLabel: '!hidden',
								formFieldInput:
									'!text-xl !px-1 !font-serif !shadow-none !tracking-tight !rounded-none !bg-transparent !border-0 !border-b !border-b-black',
								formButtonPrimary:
									'!self-end !text-white !text-lg !font-sans !bg-transparent !p-0 !uppercase !border-dashed !border !border-black !rounded-none  ![appearence:none]  !shadow-none !rounded-none !w-min',
								buttonArrowIcon: '!hidden',
								footer: '!hidden',
								header: headerStyle,
								// formButtonPrimary:
								// 	'!self-end !text-black !rounded-none !bg-transparent ![appearence:none]  !text-xs  !border-none !shadow-none !rounded-none !w-min !p-0 hover:underline',
								headerTitle: '!text-xl sm:!text-2xl !font-normal !text-left',
								formHeader: '!text-lg',
								formHeaderSubtitle: '!text-xs !mt-0 !font-mono !text-left !text-black',
								identityPreview: '!border !p-2 !mt-4 !text-xs !font-mono !text-black',
								identityPreviewText: '!text-xs !text-black',
								formResendCodeLink: '!text-xs !text-black !font-mono !mt-0 !text-left !opacity-100'
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
							<a href="/dashboard" class="cursor-pointer font-mono text-xs hover:underline"
								>Dashboard →</a
							>
						</div>
					</div>
				</div>
			</SignedIn>
		</div>
	</div>
	<div class="flex w-full shrink grow justify-center">
		<div class="w-full max-w-2xl">
			<SignedOut>
				<div class="pointer-events-none max-h-[calc(100dvh-3.5rem)] overflow-hidden opacity-30">
					<SubmissionForm userID={data.user ? data.user.id : ''} formPage={data.formPage}
					></SubmissionForm>
				</div>
			</SignedOut>
			<SignedIn>
				<SubmissionForm userID={data.user ? data.user.id : ''} formPage={data.formPage}
				></SubmissionForm>
			</SignedIn>
		</div>
	</div>

	<div class="  hidden w-0 lg:block lg:w-[25dvw] lg:max-w-sm lg:min-w-xs lg:shrink-0 lg:grow-0">
		<div class="fixed top-0 p-4">
			<FormHelp formPage={data.formPage}></FormHelp>
		</div>
	</div>
</div>
