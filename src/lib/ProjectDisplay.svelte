<script lang="ts">
    import ProjectCard from './ProjectCard.svelte';
    import ProjectGroup from './ProjectGroup.svelte';
</script>

<div class="grid grid-cols-3 p-8 grid-flow-row grid-rows-6">
    <ProjectCard title="Physics Engine" description="The thing running on this website." scale={1} xAlign={0} yOffset={300} rowNum={0} />
    <ProjectCard title="Personal Site" description="The very thing this is." scale={1} xAlign={2} yOffset={200} rowNum={0} />
    <!-- <ProjectGroup title="News Aggregator">
        <ProjectCard title="Client" description="TODO" scale={1} xAlign={0} yOffset={400} />
        <ProjectCard title="Server" description="TODO" scale={1} xAlign={0} yOffset={400} />
    </ProjectGroup> -->
    <!-- <ProjectGroup title="Rust Connect Four">
        <ProjectCard title="Client" description="TODO" scale={1} xAlign={0} yOffset={400} />
        <ProjectCard title="Server" description="TODO" scale={1} xAlign={0} yOffset={400} />
    </ProjectGroup> -->
    <!-- <ProjectCard title="Robotics Codebase" description="TODO" scale={1} xAlign={0} yOffset={400} /> -->
    <!-- <ProjectCard title="Database Link Finder" description="TODO" scale={1} xAlign={0} yOffset={400} /> -->
    <!-- <ProjectCard title="3D Maze Generator" description="TODO" scale={1} xAlign={0} yOffset={400} /> -->
    <!-- <ProjectCard title="Asteroids" description="TODO" scale={1} xAlign={0} yOffset={400} /> -->
</div>