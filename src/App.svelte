<script lang="ts">
    import svelteLogo from './assets/svelte.svg';
    import viteLogo from '/vite.svg';
    import Counter from './lib/Counter.svelte';
    import Sim from './lib/Sim.svelte';
</script>

<main>
    <Sim />
</main>

<style global lang="postcss">
    @tailwind utilities;
    @tailwind components;
    @tailwind base;
</style>