<script lang="ts">
    let { children, class: className = '' } = $props();
</script>
<p class="relative not-last:mb-4 leading-[1.4] {className}">
    {@render children()}
</p>