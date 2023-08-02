<script lang="ts">

    export let title: string;
    export let description: string;
    export let scale: number;

    // let className = `bg-gray-400 rounded p-4 absolute top-8 left-4 scale-{scale}`;

</script>

<div style={`transform: scale(${scale})`} class="bg-gray-400 rounded p-4 absolute top-8 left-4">
    <p class="font-bold">{title}</p>
    <div></div>
    <p>{description}</p>
</div>