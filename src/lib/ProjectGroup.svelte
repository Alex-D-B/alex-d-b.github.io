<script lang="ts">
    export let title: string;
    export let yOffset: number;
</script>

<div style={`margin-top: ${yOffset}px; grid-column-start: 1; grid-column: 2 / 5;`}>
    <p class="text-white">{title}</p>
</div>
<slot />