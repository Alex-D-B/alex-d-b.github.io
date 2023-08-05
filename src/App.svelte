<script lang="ts">
    import Sim from './lib/Sim.svelte';
    import ProjectCard from './lib/ProjectCard.svelte';
</script>

<main>
    <Sim />
    <!-- <ProjectCard title="Physics Engine" description="this" scale={1} /> -->
</main>

<style global lang="postcss">
    @tailwind utilities;
    @tailwind components;
    @tailwind base;
</style>