<script lang="ts">
    import ProjectCard from './ProjectCard.svelte';
    
    import LargeCompilerDisc from '../descriptions/LargeCompiler.svelte'
    import DockerCloneDisc from '../descriptions/DockerClone.svelte'
    import ResumeParserDisc from '../descriptions/ResumeParser+PersonalWebsiteContentGenerator.svelte'
    import SpearDisc from '../descriptions/SpearTextEditor.svelte'
    import SmallCompilerDisc from '../descriptions/SmallCompilerandInterpreter.svelte';
    import BusTripsDisc from '../descriptions/BusTripPlanner.svelte';
    import SvelteClientDisc from '../descriptions/SvelteClient.svelte';
    import PhysicsEngineDisc from '../descriptions/PhysicsEngine.svelte';
    import NewsAggregatorClientDisc from '../descriptions/NewsAggregatorClient.svelte';
    import NewsAggregatorServerDisc from '../descriptions/NewsAggregatorServer.svelte';
    import SPIMbotDisc from '../descriptions/SPIMbot.svelte';
    import RustConnectFourClientDisc from '../descriptions/RustConnectFourClient.svelte';
    import RustConnectFourServerDisc from '../descriptions/RustConnectFourServer.svelte';
    import RoboticsCodebaseDisc from '../descriptions/VEXRoboticsCompetitionRobotControlCodebase.svelte';
    import DatabaseLinkScraperDisc from '../descriptions/DatabaseRelevantLinkFinder.svelte';
    import MazeGeneratorDisc from '../descriptions/3DMazeGenerationAlgorithm.svelte';
    import AsteroidsDisc from '../descriptions/AsteroidsGame.svelte';
</script>

<div style={`margin-bottom: ${window.innerHeight}px;`} class="grid grid-cols-5 p-8">
    <ProjectCard description={LargeCompilerDisc} scale={1} xAlign={1} yOffset={100} />
    <ProjectCard description={DockerCloneDisc} scale={1} xAlign={0} yOffset={100} />
    <ProjectCard description={ResumeParserDisc} scale={1} xAlign={3} yOffset={-50} />
    <ProjectCard description={SpearDisc} scale={1} xAlign={2} yOffset={100} />
    <ProjectCard description={SmallCompilerDisc} scale={1} xAlign={1} yOffset={100} />
    <ProjectCard description={BusTripsDisc} scale={1} xAlign={3} yOffset={100} id="bustrips" />
    <!-- <ProjectGroup title="Personal Site" yOffset={-100}> -->
        <ProjectCard description={SvelteClientDisc} scale={1} xAlign={0} yOffset={0} id="site" />
        <ProjectCard description={PhysicsEngineDisc} scale={1} xAlign={3} yOffset={0} />
    <!-- </ProjectGroup> -->
    <!-- <ProjectGroup title="News Aggregator" yOffset={0}> -->
        <ProjectCard description={NewsAggregatorClientDisc} scale={1} xAlign={0} yOffset={0} id="news client" />
        <ProjectCard description={NewsAggregatorServerDisc} scale={1} xAlign={3} yOffset={-50} id="news server" />
    <!-- </ProjectGroup> -->
    <ProjectCard description={SPIMbotDisc} scale={1} xAlign={1} yOffset={100} id="spimbot" />
    <!-- <ProjectGroup title="Rust Connect Four" yOffset={0}> -->
        <ProjectCard description={RustConnectFourServerDisc} scale={1} xAlign={3} yOffset={100} id="connect four server" />
        <ProjectCard description={RustConnectFourClientDisc} scale={1} xAlign={0} yOffset={-100} id="connect four client" />
    <!-- </ProjectGroup> -->
    <ProjectCard description={RoboticsCodebaseDisc} scale={1} xAlign={1} yOffset={100} id="robotics" />
    <ProjectCard description={DatabaseLinkScraperDisc} scale={1} xAlign={2} yOffset={100} id="db scraper" />
    <ProjectCard description={MazeGeneratorDisc} scale={1} xAlign={1} yOffset={100} id="maze" />
    <ProjectCard description={AsteroidsDisc} scale={1} xAlign={0} yOffset={100} id="asteroids" />
</div>
