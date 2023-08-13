<script lang="ts">
    import Sim from './lib/Sim.svelte';
    import ProjectDisplay from './lib/ProjectDisplay.svelte';
    import AboutMe from './lib/AboutMe.svelte';
</script>

<main class="min-w-full">
    <Sim />
    <AboutMe />
    <ProjectDisplay />
</main>

<style global lang="postcss">
    @tailwind utilities;
    @tailwind components;
    @tailwind base;
</style>