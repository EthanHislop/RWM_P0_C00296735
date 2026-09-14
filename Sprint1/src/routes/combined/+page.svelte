<script lang="ts">
    import { combinedFilter } from "$lib/combined/combined";
    let raw = $state('1 3 7 9 4');
    let input = $derived(
        raw.trim().split(/\s+/).filter(Boolean).map(Number)
    );
    let output = $derived(combinedFilter(input));
</script>

<h1>Combined (mine -> peer)</h1>
<label>Input <input bind:value={raw} /></label>
<p>Output: {output.join('')}</p>