<script lang="ts">
	import { SignedIn, SignedOut } from 'svelte-clerk';
	import SubmissionForm from '$lib/components/form/SubmissionForm.svelte';
	import SubmissionFormPreview from '$lib/components/form/SubmissionFormPreview.svelte';
	import { siteState } from '$lib/states.svelte.js';
	import FormHelp from '$lib/components/form/FormHelp.svelte';
	import logo from '$lib/assets/logo2.png';
	let { data, children } = $props();
</script>

<div class=" flex w-full divide-x">
	<div class=" w-0  basis-1/4 grow min-w-60">
		<div class="sticky top-0 p-4">
			<img src={logo} class="w-60 mb-4">
			{@render children()}
		</div>
	</div>
	<div class="max-w-2xl">
		<SignedOut>
			<SubmissionFormPreview formPage={data.formPage}></SubmissionFormPreview>
		</SignedOut>
		<SignedIn>
			<SubmissionForm
				userID={data.user ? data.user.id : ''}
				formPage={data.formPage}
			></SubmissionForm>
		</SignedIn>
	</div>
	<div class="  w-0 basis-1/4 grow shrink">
		<div class="fixed top-0 p-4">
			<FormHelp formPage={data.formPage}></FormHelp>
		</div>
	</div>
</div>
