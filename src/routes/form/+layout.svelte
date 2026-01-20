<script lang="ts">
	import { SignedIn, SignedOut } from 'svelte-clerk';
	import SubmissionForm from '$lib/components/SubmissionForm.svelte';
	import SubmissionFormPreview from '$lib/components/SubmissionFormPreview.svelte';
	import { siteState } from '$lib/states.svelte.js';
	import FormHelp from '$lib/components/FormHelp.svelte';
	let { data, children } = $props();
</script>

<div class=" flex w-dvw divide-x">
	<div class=" w-0  basis-1/4 grow">
		<div class="sticky top-0 p-4">
			{@render children()}
		</div>
	</div>
	<div class="max-w-2xl shrink-0">
		<SignedOut>
			<SubmissionFormPreview formPage={data.formPage}></SubmissionFormPreview>
		</SignedOut>
		<SignedIn>
			<SubmissionForm
				email={data.user ? data.user.emailAddresses[0].emailAddress : ''}
				formPage={data.formPage}
			></SubmissionForm>
		</SignedIn>
	</div>
	<div class="  w-0 basis-1/4 grow">
		<div class="fixed top-0 p-4">
			<FormHelp formPage={data.formPage}></FormHelp>
		</div>
	</div>
</div>
