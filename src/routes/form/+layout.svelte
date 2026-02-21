<script lang="ts">
	import { SignedIn, SignedOut } from 'svelte-clerk';
	import SubmissionForm from '$lib/components/form/SubmissionForm.svelte';
	import SubmissionFormPreview from '$lib/components/form/SubmissionFormPreview.svelte';
	import { siteState } from '$lib/states.svelte.js';
	import FormHelp from '$lib/components/form/FormHelp.svelte';
	import logo from '$lib/assets/logo2.png';
	import MobileIndexHeader from '$lib/components/index/MobileIndexHeader.svelte';
	let { data, children } = $props();
</script>

<div class="sticky top-0 z-10 bg-white lg:hidden">
	<MobileIndexHeader></MobileIndexHeader>
</div>
<div class=" flex w-full flex-col max-lg:items-center lg:flex-row lg:divide-x">
	<div class=" max-sm:w-full lg:w-0 lg:min-w-60 lg:grow lg:basis-1/4">
		<div class="sticky top-0 p-2 max-lg:w-full sm:p-4">
			{@render children()}
		</div>
	</div>
	<div class="max-w-2xl">
		<SignedOut>
			<SubmissionFormPreview formPage={data.formPage}></SubmissionFormPreview>
		</SignedOut>
		<SignedIn>
			<SubmissionForm userID={data.user ? data.user.id : ''} formPage={data.formPage}
			></SubmissionForm>
		</SignedIn>
	</div>
	<div class="  hidden w-0 shrink grow basis-1/4 lg:block">
		<div class="fixed top-0 p-4">
			<FormHelp formPage={data.formPage}></FormHelp>
		</div>
	</div>
</div>
