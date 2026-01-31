<script lang="ts">
	import { SignedIn, SignOutButton } from 'svelte-clerk';
	import logo from '$lib/assets/logo.png';
	let { data, children } = $props();
</script>

<div class=" flex flex-col gap-12">
	<div class="flex justify-between p-8">
		<a href="/">
			<img src={logo} class="w-48" />
		</a>
		<SignedIn>
			<div class="flex gap-8">
				<div>
					{data.user ? data.user.emailAddresses[0].emailAddress : ''}
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
