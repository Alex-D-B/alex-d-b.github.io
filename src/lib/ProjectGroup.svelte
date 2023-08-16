<script lang="ts">
    export let title: string;
    export let yOffset: number;
</script>

<div style={`margin-top: ${yOffset}px; grid-column-start: 1; grid-column: 2 / 5;`}>
    <p class="font-bold bg-gray-400 rounded px-4 py-2 inline-block">{title}</p>
</div>
<slot />