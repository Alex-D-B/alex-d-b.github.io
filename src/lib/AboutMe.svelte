<script lang="ts">
    import photo from '../assets/self.jpg';
</script>

<div class="text-black bg-slate-100 py-8 grid grid-flow-row">
    <div class="text-left mt-[15%]">
      <img src={photo} alt="Portrait" style="width: 25%;" class="rounded-md ml-auto mr-auto mb-4" />
      <p>&emsp;&emsp;Hey there, I'm Alex Broihier, currently a Math, Stats, and Computer Science student at UIUC. This site is meant to highlight some of my work was originally planned to be much bigger in scale (each project would be its own planet in a solar system). I have put off further work until some time in the future, but I hope you enjoy the site as is.</p>
    </div>
    <!-- <a href="/">Resume</a> -->

    <!-- WORK EXPERIENCE -->
    <div class="flex justify-between">
      <p class="font-bold">Box: Software Engineering Intern</p>
      <p>May 2024 &#8212; Present</p>
    </div>
    <ul class="list-disc list-inside text-left">
      <li>Implementing distributed event processing using <b>Apache Helix</b> and <b>Zookeeper</b> to split work over 10+ processes</li>
      <li>Engineering a configurable framework in <b>Java</b> and <b>Redis</b> to concurrently process 100,000+ events per second</li>
      <li>Providing an internal events API and service with <b>OpenAPI</b> and <b>Spring Boot</b> deployed with <b>Kubernetes</b></li>
    </ul>
    <div class="flex justify-between">
      <p class="font-bold">Undergraduate Course Assistant</p>
      <p>January 2023 &#8212; Present</p>
    </div>
    <ul class="list-disc list-inside text-left">
      <li>Currently working on the <i>Data Structures</i> course, previously worked on the <i>Algorithms</i> and <i>Into to CS II Honors</i> courses</li>
      <li>Create and maintain online <b>C++</b> problems in <b>Docker</b> application to assess course knowledge of 800+ students</li>
      <li>Run lab sections and office hours to help students learn course concepts and use <b>GDB</b> and <b>Valgrind</b> to debug</li>
    </ul>
    <div class="flex justify-between">
      <p class="font-bold">iD Tech Instructor</p>
      <p>June 2023 &#8212; August 2023</p>
    </div>
    <ul class="list-disc list-inside text-left">
      <li>Taught robotics engineering and <b>C++</b> programming through a course partnership with BattleBots</li>
      <li>Managed classes of 10+ students along with weekly logistics</li>
    </ul>

    <!-- EXTRACURRICULAR ACTIVITIES -->
    <p class="font-bold mt-8">Extracurricular Activities:</p>
    <div class="flex justify-between">
      <p class="font-bold">IBM Accelerate: Software Development Track</p>
      <p>June 2024 &#8212; Present</p>
    </div>
    <ul class="list-disc list-inside text-left">
      <li>Studying software design topic such as full stack development and application security with IBM leaders</li>
      <li>Collaborating in groups of 10+ participants to progress through weekly coding projects</li>
    </ul>
    <div class="flex justify-between">
      <p class="font-bold">Compilers Research</p>
      <p>January 2024 &#8212; Present</p>
    </div>
    <ul class="list-disc list-inside text-left">
      <li>Apply compiler methodologies to data science to increase performance</li>
      <li>Construct novel benchmarks for dataframes, uncovering over 600x performance differences between libraries</li>
      <li>Future Work: leverage LLMs to dynamically generate pattern matching rules</li>
    </ul>
    <div class="flex justify-between">
      <p class="font-bold">PeopleWeave Research Project</p>
      <p>April 2023 &#8212; January 2024</p>
    </div>
    <ul class="list-disc list-inside text-left">
      <li>Automate collection of authorship data in <b>Python</b> with <b>Parsel</b> to power models developed by other teams</li>
      <li>Utilize AWS and multithreading to bolster development workflow and data scraper performance (5x speedup)</li>
    </ul>
    <div class="flex justify-between">
      <p class="font-bold">VEX Robotics Competition Lead Designer, Builder, and Programmer</p>
      <p>August 2018 &#8212; May 2022</p>
    </div>
    <ul class="list-disc list-inside text-left">
      <li>Leveraged <b>CAD</b> in <b>Autodesk Inventor</b> to speed up the design process, getting robots in the field 3+ weeks faster</li>
      <li>Ensured deadlines were met so the robot would be competition ready </li>
      <li>Introduced teammates to version control using <b>Git</b>, collectively saving 6+ hours</li>
      <li>Guided other teams so they could succeed as well</li>
    </ul>

    <!-- EDUCATION -->
    <p class="font-bold mt-8">Education:</p>
    <p class="font-bold text-left">University of Illinois at Urbana Champaign</p>
    <div class="flex justify-between">
      <p class="italic">Bachelor of Science in Statistics and Computer Science</p>
      <p>Expected May 2026</p>
    </div>
    <p class="italic text-left">Bachelor of Science in Mathematics</p>
    <p class="italic text-left">James Scholar</p>
    <p class="text-sm text-left">Or will likely end up finishing my Bachelors in 2025 and doing Masters for 2026</p>
    <p class="font-bold mt-8">Relevant Coursework:</p>
    <div class="flex flex-wrap justify-evenly">
      {#each ['Data Structures', 'Computer Architecture', 'Software Design Lab', 'Data Science Discovery', 'Abstract Linear Algebra'] as course}
        <p class="text-left px-2">{course}</p>
      {/each}
    </div>
    <div class="flex flex-wrap justify-evenly">
      {#each ['Algorithms', 'Database Systems', 'Numerical Methods', 'Statistics and Probability II', 'Statistical Modeling I'] as course}
        <p class="text-left px-2">{course}</p>
      {/each}
    </div>
    <p class="font-bold mt-8">Current Coursework:</p>
    <div class="flex flex-wrap justify-evenly">
      {#each ['System Programming', 'Programming Languages and Compilers', 'Statistical Modeling II', 'Abstract Algebra', 'Differential Equations'] as course}
        <p class="text-left px-2">{course}</p>
      {/each}
    </div>
    <p class="font-bold mt-8">Continue scrolling to look at some of my projects:</p>
</div>

<style>
    * {
        grid-column: 2;
        grid-template-columns: 2fr 5fr 2fr;
    }
</style>
