<script lang="ts">
    import ProjectCard from './ProjectCard.svelte';
    import ProjectGroup from './ProjectGroup.svelte';
</script>

<div class="grid grid-cols-5 p-8">
    <ProjectGroup title="Personal Site" yOffset={0}>
        <ProjectCard title="Svelte Client" description="The very thing this is." scale={1} xAlign={0} yOffset={0} id="site" />
        <ProjectCard title="Physics Engine" description="The thing running on this website." scale={1} xAlign={3} yOffset={0} />
    </ProjectGroup>
    <ProjectGroup title="News Aggregator" yOffset={0}>
        <ProjectCard title="Client" description="TODO" scale={1} xAlign={0} yOffset={100} />
        <ProjectCard title="Server" description="TODO" scale={1} xAlign={3} yOffset={-50} />
    </ProjectGroup>
    <ProjectGroup title="Rust Connect Four" yOffset={0}>
        <ProjectCard title="Client" description="TODO" scale={1} xAlign={1} yOffset={0} />
        <ProjectCard title="Server" description="TODO" scale={1} xAlign={1} yOffset={0} />
    </ProjectGroup>
    <ProjectCard title="Robotics Codebase" description="TODO" scale={1} xAlign={2} yOffset={100} />
    <ProjectCard title="Database Link Finder" description="TODO" scale={1} xAlign={0} yOffset={100} />
    <ProjectCard title="3D Maze Generator" description="TODO" scale={1} xAlign={3} yOffset={100} />
    <ProjectCard title="Asteroids" description="TODO" scale={1} xAlign={0} yOffset={100} />
</div>