<script lang="ts">

    import type { ComponentType } from "svelte";

    export let title: string;
    export let description: ComponentType;
    export let languages: string[];
    export let frameworks: string[] = [];
    export let scale: number;
    export let xAlign: 0 | 1 | 2 | 3;
    export let yOffset: number;
    export let width: 1 | 2 | 3 = 2;
    export let id = "";
    export let date = "";

</script>

<div
    {id}
    style={`transform: scale(${scale}); margin-top: ${yOffset}px; grid-column: ${xAlign + 1} / ${xAlign + width + 1};`}
    class="bg-gray-400 rounded p-4 text-left relative"
>
    <p class="font-bold text-center">{title}</p>
    <svelte:component this={description} />
    <p class="mt-4 text-sm font-bold">Languages and Frameworks Used:</p>
    {#each [languages, frameworks] as category}
        <ul class="flex space-x-2 my-2">
            {#each category as item}
                <li class="text-xs px-2 py-1 rounded bg-blue-500">{item}</li>
            {/each}
        </ul>
    {/each}
    <p class="text-right text-gray-700 text-sm font-semibold">{date}</p>
</div>
<div style={`grid-column: ${5 - xAlign};`}></div>
