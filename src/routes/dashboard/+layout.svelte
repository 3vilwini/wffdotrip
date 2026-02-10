<script lang="ts">
	import { SignedIn, SignOutButton } from 'svelte-clerk';
	import logo from '$lib/assets/logo.png';
	let { data, children } = $props();
</script>

<div class=" flex flex-col gap-12">
	<div class="flex items-start justify-between p-8">
		<a href="/" class="cursor-pointer">
			<img src={logo} class="w-48" />
		</a>
		<SignedIn>
			<div class="flex items-center gap-8">
				<div class="font-serif text-xl tracking-tight">
					{data.user ? data.user.emailAddresses[0].emailAddress : ''}
				</div>
				<div class="font-mono text-xs">Deactivate account</div>
				<div class="cursor-pointer font-mono text-xs hover:underline">
					<SignOutButton class="cursor-pointer hover:underline"></SignOutButton>
				</div>
			</div>
		</SignedIn>
	</div>

	{@render children()}
</div>
