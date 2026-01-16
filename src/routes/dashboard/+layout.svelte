<script lang="ts">
	import { SignedIn, SignedOut, SignOutButton, SignIn } from 'svelte-clerk';
	import logo from '$lib/assets/logo.png';
	import { siteState } from '$lib/states.svelte';
	import DashboardRow from '$lib/components/DashboardRow.svelte';
	let { data, children } = $props();
</script>

<div class=" flex flex-col gap-12">
	<div class="flex justify-between p-8">
		<div>
			<img src={logo} class="w-48" />
		</div>
		<SignedIn>
			<div class="flex gap-8">
				<div>
					{data.user.emailAddresses[0].emailAddress}
				</div>
				<div>Deactivate account</div>
				<div>
					<SignOutButton></SignOutButton>
				</div>
			</div>
		</SignedIn>
	</div>

	{@render children()}
</div>
