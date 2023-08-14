<script lang="ts">
    import ProjectCard from './ProjectCard.svelte';
    import ProjectGroup from './ProjectGroup.svelte';

    import SvelteClientDisc from '../descriptions/SvelteClient.svelte';
    import PhysicsEngineDisc from '../descriptions/PhysicsEngine.svelte';
    import Todo from '../descriptions/Todo.svelte';
</script>

<div class="grid grid-cols-5 p-8">
    <ProjectGroup title="Personal Site" yOffset={0}>
        <ProjectCard title="Svelte Client" description={SvelteClientDisc} scale={1} xAlign={0} yOffset={0} id="site" />
        <ProjectCard title="Physics Engine" description={PhysicsEngineDisc} scale={1} xAlign={3} yOffset={0} />
    </ProjectGroup>
    <ProjectGroup title="News Aggregator" yOffset={0}>
        <ProjectCard title="Client" description={Todo} scale={1} xAlign={0} yOffset={100} />
        <ProjectCard title="Server" description={Todo} scale={1} xAlign={3} yOffset={-50} />
    </ProjectGroup>
    <ProjectGroup title="Rust Connect Four" yOffset={0}>
        <ProjectCard title="Client" description={Todo} scale={1} xAlign={1} yOffset={0} />
        <ProjectCard title="Server" description={Todo} scale={1} xAlign={1} yOffset={0} />
    </ProjectGroup>
    <ProjectCard title="Robotics Codebase" description={Todo} scale={1} xAlign={2} yOffset={100} />
    <ProjectCard title="Database Link Finder" description={Todo} scale={1} xAlign={0} yOffset={100} />
    <ProjectCard title="3D Maze Generator" description={Todo} scale={1} xAlign={3} yOffset={100} />
    <ProjectCard title="Asteroids" description={Todo} scale={1} xAlign={0} yOffset={100} />
</div>