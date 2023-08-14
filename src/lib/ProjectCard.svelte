<script lang="ts">

    import type { ComponentType } from "svelte";

    export let title: string;
    export let description: ComponentType;
    export let languages: string[] = [];
    export let frameworks: string[] = [];
    export let scale: number;
    export let xAlign: 0 | 1 | 2 | 3;
    export let yOffset: number;
    export let width: 1 | 2 | 3 = 2;
    export let id = "";

</script>

<div
    {id}
    style={`transform: scale(${scale}); margin-top: ${yOffset}px; grid-column: ${xAlign + 1} / ${xAlign + width + 1};`}
    class="bg-gray-400 rounded p-4 relative min-h-[600px]"
>
    <p class="font-bold">{title}</p>
    <svelte:component this={description} />
    {#each languages as lang}
        <p>{lang}</p>
    {/each}
    {#each frameworks as frame}
        <p>{frame}</p>
    {/each}
</div>
<div style={`grid-column: ${5 - xAlign};`}></div>
