<script lang="ts">
	import {
		SignedIn,
		SignedOut,
		SignIn,
		SignOutButton,
	} from 'svelte-clerk';
	let { data } = $props();
</script>

<SignedOut>
	<div class="px-2 font-mono text-xs">
	Log-in or Sign up

	</div>
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
				form: '!gap-4',
				formFieldLabel: '!hidden',
				formFieldInput: '!text-xs !rounded-none',
				formButtonPrimary: '!self-end !text-black !rounded-none !bg-transparent ![appearence:none]  !text-xs  !border-none !shadow-none !rounded-none !w-min !p-0 hover:underline',
				footer: '!hidden',
				header: '!hidden'
			}
		}}
	/>
</SignedOut>
<SignedIn>
	<div>{data.user.emailAddresses[0].emailAddress}</div>
	<SignOutButton></SignOutButton>
</SignedIn>
