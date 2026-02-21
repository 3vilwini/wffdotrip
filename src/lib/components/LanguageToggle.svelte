<script lang="ts">
	import LanguageToggleButton from './LanguageToggleButton.svelte';
	import { Language } from '$lib/states.svelte';
</script>

<div class="flex gap-8 font-mono text-xs">
	<LanguageToggleButton language={Language.EN}>EN</LanguageToggleButton>
	<LanguageToggleButton language={Language.FR}>FR</LanguageToggleButton>
	<LanguageToggleButton language={Language.IT}>IT</LanguageToggleButton>
	<!-- <LanguageToggleButton language={Language.ES}>ES</LanguageToggleButton> -->
</div>
