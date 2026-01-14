<script lang="ts">
	import { SignedIn, SignOutButton } from 'svelte-clerk';
	import logo from '$lib/assets/logo.png';
	import { siteState } from '$lib/states.svelte';
	let { data } = $props();
</script>

<div class=" flex flex-col gap-12">
	<div class="flex justify-between p-4">
		<div>
			<img src={logo} class="w-48" />
		</div>
		<div class="flex gap-8">
			<div>
				{data.user.emailAddresses[0].emailAddress}
			</div>
			<div>Deactivate account</div>
			<div>
				<SignedIn>
					<SignOutButton></SignOutButton>
				</SignedIn>
			</div>
		</div>
	</div>

	{#if siteState.formSubmitted}
		<div class=" p-4">
			<div class="flex border border-dotted p-4">
				<div>
					<div>Thanks, your submission has been recorded!</div>
					<div>
						Entries are manually approved before appearing, but your identity remains completely
						anonymous.
					</div>
				</div>
				<div>Submit a new entry</div>
			</div>
		</div>
	{/if}

	<div>
		<div class="p-4">
			<div>Your Submissions</div>
			<div>5 entries</div>
		</div>

		<div>each row</div>
	</div>
</div>
