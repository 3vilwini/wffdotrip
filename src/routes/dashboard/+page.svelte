<script lang="ts">
	import { SignedIn, SignedOut, SignOutButton, SignIn } from 'svelte-clerk';
	import logo from '$lib/assets/logo.png';
	import { siteState } from '$lib/states.svelte';
	import DashboardRow from '$lib/components/DashboardRow.svelte';
	let { data } = $props();
</script>

	<SignedOut>
		<div class="flex w-dvw flex-col justify-center gap-4">
			<div class="px-2 text-center font-mono text-xs">Log-in or Sign up to view Dashboard</div>
			<SignIn
				fallbackRedirectUrl="/dashboard"
				oauthFlow="redirect"
				routing="path"
				path="/dashboard"
				signUpFallbackRedirectUrl="/dashboard"
				signUpForceRedirectUrl="/dashboard"
				withSignUp={true}
				appearance={{
					elements: {
						main: '!flex-shrink !max-w-sm !w-full !font-mono',
						rootBox: '!flex-shrink !w-full !flex-grow !flex !justify-center',
						cardBox: '!shadow-none !rounded-none',
						card: '!bg-transparent !rounded-none !p-2 !pr-4',
						form: '!gap-4',
						formFieldLabel: '!hidden',
						formFieldInput: '!text-xs !rounded-none',
						formButtonPrimary:
							'!self-end !text-black !rounded-none !bg-transparent ![appearence:none]  !text-xs  !border-none !shadow-none !rounded-none !w-min !p-0 hover:underline',
						footer: '!hidden',
						header: '!hidden'
					}
				}}
			/>
		</div>
	</SignedOut>

	<SignedIn>
		<div class=" p-8">
			<div class="flex border border-dotted p-4">
				<div>
					{#if siteState.formSubmitted}
						<div>Thanks, your submission has been recorded!</div>
					{:else}
						<div>Thanks for your submission(s)!</div>
					{/if}

					<div>
						Entries are manually approved before appearing, but your identity remains completely
						anonymous.
					</div>
				</div>
				<div>
					<a
						href="/form"
						class="flex items-center justify-center border px-2 hover:bg-black hover:text-white"
						>Submit a new entry</a
					>
				</div>
			</div>
		</div>

		<div>
			<div class="flex items-baseline gap-4 px-8 py-4">
				<div class="text-2xl">Your Submissions</div>
				<div class="font-mono text-xs">5 entries</div>
			</div>

			<div>
				{#each data.rows.results as row}
					<DashboardRow {row}></DashboardRow>
				{/each}
			</div>
		</div>
	</SignedIn>

