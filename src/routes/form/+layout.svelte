<script lang="ts">
	import { SignedIn, SignedOut } from 'svelte-clerk';
	import SubmissionForm from '$lib/components/SubmissionForm.svelte';
	import SubmissionFormPreview from '$lib/components/SubmissionFormPreview.svelte';
	let { data, children } = $props();
</script>

<div class="relative flex w-dvw divide-x">
	<div class="relative basis-1/4">
		<div class="fixed top-0 w-1/4 p-4">
			{@render children()}
		</div>
	</div>
	<div class="w-2xl shrink-0">
		<SignedOut>
			<SubmissionFormPreview formPage={data.formPage}></SubmissionFormPreview>
		</SignedOut>
		<SignedIn>
			<SubmissionForm email={data.user.emailAddresses[0].emailAddress} formPage={data.formPage}></SubmissionForm>
		</SignedIn>
	</div>
	<div class="relative basis-1/4">
		<div class="fixed top-0 w-1/4 p-4">Help</div>
	</div>
</div>
