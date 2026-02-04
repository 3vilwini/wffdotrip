<script lang="ts">
	import { SignedIn, SignedOut, SignIn, SignInButton, UserButton } from 'svelte-clerk';
</script>

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
			rootBox: '!flex-shrink !w-full !flex-grow !flex !pt-8',
			cardBox: '!shadow-none !rounded-none',
			card: '!bg-transparent !rounded-none !p-2 !pr-4',
			form: '!gap-4 !text-xs !font-normal',
			formFieldLabel: '!hidden',
			formFieldInput: '!text-xs !rounded-none',
			formButtonPrimary:
				'!self-end !text-black !rounded-none !bg-transparent ![appearence:none]  !text-xs  !border-none !shadow-none !rounded-none !w-min !p-0 hover:underline',
			footer: '!hidden',
			header: ' ',
			headerTitle: '!text-xl sm:!text-2xl !font-normal !text-left',
			formHeader: '!text-lg',
			formHeaderSubtitle: '!text-xs !mt-0 !font-mono !text-left !text-black',
			identityPreview: '!border !p-2 !mt-4 !text-xs !font-mono !text-black',
			identityPreviewText: '!text-xs !text-black',
			formResendCodeLink: '!text-xs !text-black !font-mono !mt-0 !text-left !opacity-100'

			
		}
	}}
/>
