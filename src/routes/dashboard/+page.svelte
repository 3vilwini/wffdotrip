<script lang="ts">
	import { SignedIn, SignedOut, SignOutButton, SignIn } from 'svelte-clerk';
	import { siteState } from '$lib/states.svelte';
	import DashboardRow from '$lib/components/dashboard/DashboardRow.svelte';
	import MobileDashboardRow from '$lib/components/dashboard/MobileDashboardRow.svelte';
	let { data } = $props();
</script>

<SignedOut>
	<div class="flex w-dvw flex-col justify-center items-center gap-4">
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
					main: '!flex-shrink !max-w-sm  !font-mono',
					rootBox: '!flex-shrink !flex-grow !flex',
					cardBox: '!shadow-none !rounded-none',
					card: '!bg-transparent !rounded-none !p-0.5',
					form: '!gap-4',
					formFieldLabel: '!hidden',
					formFieldInput:
						'!text-xl !px-1 !font-serif !shadow-none !tracking-tight !rounded-none !bg-transparent !border-0 !border-b !border-b-black',
					formButtonPrimary:
						' !text-white !text-lg !font-sans !bg-transparent !p-0 !uppercase !border-dashed !border !border-black !rounded-none  ![appearence:none]  !shadow-none !rounded-none !w-min',
					buttonArrowIcon: '!hidden',
					footer: '!hidden',
					header: '!hidden'
				}
			}}
		/>
	</div>
</SignedOut>

<SignedIn>
	<div class="p-3 sm:p-8">
		<div class="flex flex-col justify-between gap-4 sm:flex-row sm:border sm:border-dashed sm:p-4">
			<div class="flex flex-col gap-1">
				{#if siteState.formSubmitted}
					<div>Thanks, your submission has been recorded!</div>
				{:else}
					<div>Thanks for your submission(s)!</div>
				{/if}

				<div class="font-mono text-xs">
					Entries are manually approved before appearing, but your identity remains completely
					anonymous.
				</div>
			</div>
			<div class="flex items-center gap-3">
				<a
					href="/"
					class="flex items-center justify-center border border-dashed bg-black px-4 py-2 whitespace-nowrap text-white hover:bg-white hover:text-black"
					>Back to Index
				</a>
				<a
					href="/form"
					class="flex items-center justify-center border border-dashed bg-black px-4 py-2 whitespace-nowrap text-white hover:bg-white hover:text-black"
					>Submit a new entry
				</a>
			</div>
		</div>
	</div>

	<div>
		<div class="flex items-baseline gap-4 px-3 py-4 max-sm:pt-12 sm:px-8">
			<div class="text-2xl">Your Submissions</div>
			<div class="font-mono text-xs">{data.rows.results.length} entries</div>
		</div>

		<div class="border-t sm:hidden">
			{#each data.rows.results as row}
				<MobileDashboardRow {row} formPage={data.formPage}></MobileDashboardRow>
			{/each}
		</div>
		<div class="hidden sm:block">
			{#each data.rows.results as row}
				<DashboardRow {row} formPage={data.formPage}></DashboardRow>
			{/each}
		</div>
	</div>
</SignedIn>
