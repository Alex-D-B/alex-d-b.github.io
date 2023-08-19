<script lang="ts">
    import ProjectCard from './ProjectCard.svelte';
    import ProjectGroup from './ProjectGroup.svelte';

    import SvelteClientDisc from '../descriptions/SvelteClient.svelte';
    import PhysicsEngineDisc from '../descriptions/PhysicsEngine.svelte';
    import NewsAggregatorClientDisc from '../descriptions/NewsAggregatorClient.svelte';
    import NewsAggregatorServerDisc from '../descriptions/NewsAggregatorServer.svelte';
    import RustConnectFourClientDisc from '../descriptions/RustConnectFourClient.svelte';
    import RustConnectFourServerDisc from '../descriptions/RustConnectFourServer.svelte';
    import RoboticsCodebaseDisc from '../descriptions/RoboticsCodebase.svelte';
    import DatabaseLinkScraperDisc from '../descriptions/DatabaseLinkScraper.svelte';
    import MazeGeneratorDisc from '../descriptions/MazeGenerator.svelte';
    import AsteroidsDisc from '../descriptions/Asteroids.svelte';
</script>

<div style={`margin-bottom: ${window.innerHeight}px;`} class="grid grid-cols-5 p-8">
    <!-- <ProjectGroup title="Personal Site" yOffset={-100}> -->
        <ProjectCard title="Personal Site" description={SvelteClientDisc} languages={['JavaScript', 'TypeScript']} frameworks={['Svelte']} scale={1} xAlign={0} yOffset={0} id="site" />
        <ProjectCard title="Physics Engine" description={PhysicsEngineDisc} languages={['Rust']} scale={1} xAlign={3} yOffset={0} />
    <!-- </ProjectGroup> -->
    <!-- <ProjectGroup title="News Aggregator" yOffset={0}> -->
        <ProjectCard title="News Aggregator Client" description={NewsAggregatorClientDisc} languages={['JavaScript', 'TypeScript']} frameworks={['Next.js', 'React', 'MongoDB', 'Prisma']} scale={1} xAlign={0} yOffset={0} id="news client" />
        <ProjectCard title="News Aggregator Server" description={NewsAggregatorServerDisc} languages={['Python']} frameworks={['Parsel', 'MongoDB', 'OpenAI']} scale={1} xAlign={3} yOffset={-50} id="news server" />
    <!-- </ProjectGroup> -->
    <!-- <ProjectGroup title="Rust Connect Four" yOffset={0}> -->
        <ProjectCard title="Rust Connect Four Server" description={RustConnectFourServerDisc} languages={['Rust']} scale={1} xAlign={3} yOffset={100} id="connect four server" />
        <ProjectCard title="Rust Connect Four Client" description={RustConnectFourClientDisc} languages={['Rust']} frameworks={['Yew']} scale={1} xAlign={0} yOffset={-100} id="connect four client" />
    <!-- </ProjectGroup> -->
    <ProjectCard title="Robotics Codebase" description={RoboticsCodebaseDisc} languages={['C++', 'JavaScript']} scale={1} xAlign={1} yOffset={100} id="robotics" />
    <ProjectCard title="Database Link Scraper" description={DatabaseLinkScraperDisc} languages={['Python']} scale={1} xAlign={2} yOffset={100} id="db scraper" />
    <ProjectCard title="3D Maze Generator" description={MazeGeneratorDisc} languages={['C#']} frameworks={['Unity']} scale={1} xAlign={1} yOffset={100} id="maze" />
    <ProjectCard title="Asteroids" description={AsteroidsDisc} languages={['JavaScript']} scale={1} xAlign={0} yOffset={100} id="asteroids" />
</div>
