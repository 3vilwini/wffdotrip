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
	<div class=" w-0 min-w-60 grow basis-1/4">
		<div class="sticky top-0 p-4">
			<a href="/">
				<img src={logo} class="mb-4 w-60" />
			</a>
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
	<div class="  w-0 shrink grow basis-1/4">
		<div class="fixed top-0 p-4">
			<FormHelp formPage={data.formPage}></FormHelp>
		</div>
	</div>
</div>
