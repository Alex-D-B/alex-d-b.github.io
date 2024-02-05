<script lang="ts">
    import ProjectCard from './ProjectCard.svelte';
    import ProjectGroup from './ProjectGroup.svelte';

    import CompilerDisc from '../descriptions/Compiler.svelte';
    import BusTripsDisc from '../descriptions/BusTrips.svelte';
    import SvelteClientDisc from '../descriptions/SvelteClient.svelte';
    import PhysicsEngineDisc from '../descriptions/PhysicsEngine.svelte';
    import NewsAggregatorClientDisc from '../descriptions/NewsAggregatorClient.svelte';
    import NewsAggregatorServerDisc from '../descriptions/NewsAggregatorServer.svelte';
    import SPIMbotDisc from '../descriptions/SPIMbot.svelte';
    import RustConnectFourClientDisc from '../descriptions/RustConnectFourClient.svelte';
    import RustConnectFourServerDisc from '../descriptions/RustConnectFourServer.svelte';
    import RoboticsCodebaseDisc from '../descriptions/RoboticsCodebase.svelte';
    import DatabaseLinkScraperDisc from '../descriptions/DatabaseLinkScraper.svelte';
    import MazeGeneratorDisc from '../descriptions/MazeGenerator.svelte';
    import AsteroidsDisc from '../descriptions/Asteroids.svelte';
</script>

<div style={`margin-bottom: ${window.innerHeight}px;`} class="grid grid-cols-5 p-8">
    <ProjectCard title="Compiler" description={CompilerDisc} languages={['C']} scale={1} xAlign={1} yOffset={100} id="compiler" date="December 2023 - January 2024" />
    <ProjectCard title="Bus Trip Planner" description={BusTripsDisc} languages={['Python', 'Django', 'TypeScript', 'React', 'Next.js', 'MySQL']} scale={1} xAlign={3} yOffset={100} id="bustrips" date="November 2023 - December 2023" />
    <!-- <ProjectGroup title="Personal Site" yOffset={-100}> -->
        <ProjectCard title="Personal Site" description={SvelteClientDisc} languages={['JavaScript', 'TypeScript']} frameworks={['Svelte']} scale={1} xAlign={0} yOffset={0} id="site" date="July 2023 - August 2023" />
        <ProjectCard title="Physics Engine" description={PhysicsEngineDisc} languages={['Rust']} scale={1} xAlign={3} yOffset={0} date="July 2023 - August 2023" />
    <!-- </ProjectGroup> -->
    <!-- <ProjectGroup title="News Aggregator" yOffset={0}> -->
        <ProjectCard title="News Aggregator Client" description={NewsAggregatorClientDisc} languages={['JavaScript', 'TypeScript']} frameworks={['Next.js', 'React', 'MongoDB', 'Prisma']} scale={1} xAlign={0} yOffset={0} id="news client" date="May 2023 - July 2023" />
        <ProjectCard title="News Aggregator Server" description={NewsAggregatorServerDisc} languages={['Python']} frameworks={['Parsel', 'MongoDB', 'OpenAI']} scale={1} xAlign={3} yOffset={-50} id="news server" date="May 2023 - July 2023" />
    <!-- </ProjectGroup> -->
    <ProjectCard title="SPIMbot" description={SPIMbotDisc} languages={['MIPS ASM']} scale={1} xAlign={1} yOffset={100} id="spimbot" date="April 2023" />
    <!-- <ProjectGroup title="Rust Connect Four" yOffset={0}> -->
        <ProjectCard title="Rust Connect Four Server" description={RustConnectFourServerDisc} languages={['Rust']} scale={1} xAlign={3} yOffset={100} id="connect four server" date="November 2022 - December 2022" />
        <ProjectCard title="Rust Connect Four Client" description={RustConnectFourClientDisc} languages={['Rust']} frameworks={['Yew']} scale={1} xAlign={0} yOffset={-100} id="connect four client" date="November 2022 - December 2022" />
    <!-- </ProjectGroup> -->
    <ProjectCard title="Robotics Codebase" description={RoboticsCodebaseDisc} languages={['C++', 'JavaScript']} scale={1} xAlign={1} yOffset={100} id="robotics" date="February 2021 - May 2022" />
    <ProjectCard title="Database Link Scraper" description={DatabaseLinkScraperDisc} languages={['Python']} scale={1} xAlign={2} yOffset={100} id="db scraper" date="October 2021" />
    <ProjectCard title="3D Maze Generator" description={MazeGeneratorDisc} languages={['C#']} frameworks={['Unity']} scale={1} xAlign={1} yOffset={100} id="maze" date="April 2021 - May 2021" />
    <ProjectCard title="Asteroids" description={AsteroidsDisc} languages={['JavaScript']} scale={1} xAlign={0} yOffset={100} id="asteroids" date="September 2020 - December 2020" />
</div>
