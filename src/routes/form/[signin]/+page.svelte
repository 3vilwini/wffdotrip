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
			rootBox: '!flex-shrink !w-full !flex-grow !flex',
			cardBox: '!shadow-none !rounded-none',
			card: '!bg-transparent !rounded-none !p-2 !pr-4',
			form: '!gap-4 !text-xs !font-normal',
			formFieldLabel: '!hidden',
			formFieldInput: '!text-xs !rounded-none',
			formButtonPrimary:
				'!self-end !text-black !rounded-none !bg-transparent ![appearence:none]  !text-xs  !border-none !shadow-none !rounded-none !w-min !p-0 hover:underline',
			footer: '!hidden',
			header: '!font-mono !text-xs',
			headerTitle: '!text-xs !font-normal',
			formHeader: '!text-xs',
			formHeaderSubtitle: '!text-xs !mt-4',
			identityPreview: '!border !p-2 !mt-4 !text-xs',
			identityPreviewText: '!text-xs',
			formResendCodeLink: '!text-xs !mt-2'

			
		}
	}}
/>
