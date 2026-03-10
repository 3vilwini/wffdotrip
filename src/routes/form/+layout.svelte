<script lang="ts">
	import logo from '$lib/assets/logo.png';
	import { SignedIn, SignedOut } from 'svelte-clerk';
	import SubmissionForm from '$lib/components/form/SubmissionForm.svelte';
	import FormHelp from '$lib/components/form/FormHelp.svelte';
	import MobileIndexHeader from '$lib/components/index/MobileIndexHeader.svelte';
	let { data, children } = $props();
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
		</div>
	</div>
	<div class="flex w-full shrink grow justify-center">
		<div class="w-full max-w-2xl">
			<SignedOut>
				<div class="pointer-events-none opacity-30 overflow-hidden max-h-[calc(100dvh-3.5rem)] ">
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
