<script lang="ts">
	import sortIcon from '$lib/assets/sort.svg';
	import searchIcon from '$lib/assets/search.svg';
	import { indexHeaderLabels } from '$lib/staticContent';
	import { siteState } from '$lib/states.svelte';
</script>

<div class="flex h-14 items-center border-b pl-3 pr-2 text-2xl">
	<div class="flex w-42 grow-0 shrink-0 items-center gap-3">
		<div class="flex h-8 w-8 border border-dashed">
			<div class="bg-black p-1.5">
				<img src={searchIcon} />
			</div>
		</div>
		<div>
			<img src={sortIcon} />
		</div>
	</div>
	<div class="flex justify-between w-full">
		<div>
			{indexHeaderLabels.worker[siteState.language]}
		</div>
		<div class="font-serif">
			{indexHeaderLabels.employer[siteState.language]}
		</div>
		<div>
			{indexHeaderLabels.contract[siteState.language]}
		</div>
		<div>
			{indexHeaderLabels.wage[siteState.language]}
		</div>
	</div>
</div>
