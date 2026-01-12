<script lang="ts">
	import SubmissionForm from '$lib/components/SubmissionForm.svelte';
	let { data } = $props();
	console.log(data);
</script>

<div class="relative flex w-dvw divide-x">
	<div class="relative basis-1/4">
		<div class="fixed top-0 w-1/4 p-4">Login</div>
	</div>
	<div class="basis-1/2">
		<SubmissionForm formPage={data.formPage}></SubmissionForm>
	</div>
	<div class="relative basis-1/4">
		<div class="fixed top-0 w-1/4 p-4">Help</div>
	</div>
</div>
