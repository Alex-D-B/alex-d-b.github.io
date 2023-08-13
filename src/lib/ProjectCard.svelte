<script lang="ts">

    export let title: string;
    export let description: string;
    export let languages: string[] = [];
    export let frameworks: string[] = [];
    export let scale: number;
    export let xAlign: 0 | 1 | 2;
    export let yOffset: number;
    export let rowNum: number;

</script>

<div
    style={`transform: scale(${scale}); margin-top: ${yOffset}px; grid-column: ${xAlign + 1}; grid-row: ${rowNum + 1};`}
    class="bg-gray-400 rounded p-4 relative"
>
    <p class="font-bold">{title}</p>
    <div></div>
    <p>{description}</p>
    {#each languages as lang}
        <p>{lang}</p>
    {/each}
    {#each frameworks as frame}
        <p>{frame}</p>
    {/each}
</div>
