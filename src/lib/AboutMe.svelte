<script lang="ts">
    import photo from '../assets/self.jpg';
</script>

<div class="text-black bg-slate-100 py-8 grid grid-flow-row">
    <div class="text-left mt-[15%]">
      <img src={photo} alt="Portrait" style="width: 25%;" class="rounded-md ml-auto mr-auto mb-4" />
      <p>&emsp;&emsp;Hey there, I'm Alex Broihier, currently a Math, Stats, and Computer Science student at UIUC. This site is currently still being worked on. In its current state, it is essentially a glorified resume, but I will be adding more to it so the site becomes much more than that.</p>
    </div>
    <!-- <a href="/">Resume</a> -->

    <!-- WORK EXPERIENCE -->
    <p class="font-bold mt-8">Work Experience:</p>
    <div class="flex justify-between">
      <p class="font-bold">Undergraduate Course Assistant (Present: Data Structures, Past: Intro to CS II Honors)</p>
      <p>January 2023 - Present</p>
    </div>
    <ul class="list-disc list-inside text-left">
      <li>Create new online graded problems to help assess course knowledge</li>
      <li>Help students learn by answering questions during weekly office hours</li>
    </ul>
    <div class="flex justify-between">
      <p class="font-bold">iD Tech Instructor</p>
      <p>June 2023 - August 2023</p>
    </div>
    <ul class="list-disc list-inside text-left">
      <li>Taught robotics engineering and programming through a course partnership with BattleBots</li>
      <li>Managed a class with up to 11 students along with weekly logistics</li>
    </ul>

    <!-- EXTRACURRICULAR ACTIVITIES -->
    <p class="font-bold mt-8">Extracurricular Activities:</p>
    <div class="flex justify-between">
      <p class="font-bold">PeopleWeave Research Group</p>
      <p>April 2023 - Present</p>
    </div>
    <ul class="list-disc list-inside text-left">
      <li>Automate data collection to power the algorithms developed by other teams</li>
      <li>Utilize AWS infrastructure to bolster development workflow and data scraper performance</li>
    </ul>
    <div class="flex justify-between">
      <p class="font-bold">High School VEX Robotics Competition Lead Designer, Builder, and Programmer</p>
      <p>August 2018 - May 2022</p>
    </div>
    <ul class="list-disc list-inside text-left">
      <li>Leveraged CAD in Autodesk Inventor to speed up the design process, getting robots in the field 3+ weeks faster</li>
      <li>Ensured deadlines were met so the robot would be competition ready</li>
      <li>Introduced teammates to version control using Git, collectively saving 6+ hours</li>
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
    <p class="font-bold mt-8">Relevant Coursework:</p>
    <div class="flex flex-wrap justify-evenly">
      {#each ['Data Structures', 'Computer Architecture', 'Software Design Lab', 'Data Science Discovery', 'Abstract Linear Algebra'] as course}
        <p class="text-left px-2">{course}</p>
      {/each}
    </div>
    <p class="font-bold mt-8">Current Coursework:</p>
    <div class="flex flex-wrap justify-evenly">
      {#each ['Algorithms', 'Database Systems', 'Numerical Methods', 'Statistics and Probability II', 'Statistical Modeling I'] as course}
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
