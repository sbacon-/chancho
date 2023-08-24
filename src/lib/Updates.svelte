<script>
  import Fa from 'svelte-fa';
  import {faGithubAlt}  from '@fortawesome/free-brands-svg-icons';
  import {faCookie,faVideo}  from '@fortawesome/free-solid-svg-icons';
let updates = [
//VIM 6yy
  {
    "date":"08/24/23",
    "update":"Llama 2: Text Completion",
    "link":"/ai",
    "icon":"github"
  },
  {
    "date":"08/19/23",
    "update":"User Authentication with SurrealDB",
    "link":"https://github.com/sbacon-/chancho",
    "icon":"github"
  },
  {
    "date":"05/13/23",
    "update":"Created Apps Page. HI MOM!",
    "link":"https://github.com/sbacon-/chancho",
    "icon":"github"
  },
  {
    "date":"05/08/23",
    "update":"Updated updates and some SurrealQL",
    "link":"https://github.com/sbacon-/chancho",
    "icon":"github"
  },
  {
    "date":"04/30/23",
    "update":"Site Layout Update",
    "link":"https://github.com/sbacon-/chancho",
    "icon":"github"
  },
  {
    "date":"04/23/23",
    "update":"Dog Spotlight: Rose & Doby",
    "link":"https://chancho.dev/videos/rose_doby.mp4",
    "icon":"video"
  },
  {
    "date":"04/10/23",
    "update":"Updating the site layout, starting to learn Ruby and Rust",
    "link":"https://github.com/sbacon-/chancho",
    "icon":"github"
  },
  {
    "date":"03/06/23",
    "update":"Amoeba_Tech_Demo_Prototype_pre-alpha (╯°□°)╯︵ ┻━┻",
    "link":"https://chancho.dev/videos/amoeba_tech_demo.mp4",
    "icon":"video"
  },
  {
    "date":"03/01/23",
    "update":"Added a simulated dice roll default 1d6 up to 10d100, later removed arbitrary limit of 100",
    "link":"",
    "icon":""
  },
  {
    "date":"02/19/23",
    "update":"Made a11y changes to lightMode transitions for photosensitive users and added hrefs to interactive elements. Also, increased the font size of tasks for improved readability",
    "link":"",
    "icon":""
  },
  {
    "date":"02/18/23",
    "update":"Dog Spotlight: Bentley (Benz)",
    "link":"https://chancho.dev/videos/benz.mp4",
    "icon":"video"
  },
  {
    "date":"02/16/23",
    "update":"Politely asked the todo manager to work better. Been using this primarily for taking notes. I may move the app to it's own page soon.",
    "link":"https://github.com/sbacon-/chancho",
    "icon":"github"
  },
  {
    "date":"02/15/23",
    "update":"Setup a todoList (taskr), currently only works with local storage.",
    "link":"",
    "icon":""
  },
  {
    "date":"02/12/23",
    "update":"Finished setting up the new Backend for site refresh",
    "link":"",
    "icon":""
  },
  {
    "date":"02/10/23",
    "update":"Implementing a dark mode and responsive design",
    "link":"",
    "icon":""
  },
  {
    "date":"02/08/23",
    "update":"Rebuilding the site in Svelte & TailwindCSS",
    "link":"https://github.com/sbacon-/chancho",
    "icon":"github"
  },
  {
    "date":"11/31/22",
    "update":"Found a use for Amoeba in executing macros in video games, calls for a re-write",
    "link":"https://github.com/sbacon-/AMOEBA",
    "icon":"github"
  },
  {
    "date":"10/27/22",
    "update":"CSS Updates, minor changes to Amoeba",
    "link":"",
    "icon":""
  },
  {
    "date":"05/20/22",
    "update":"Back from Vacaction, refactored gdChessTrainer to use UCI notation",
    "link":"",
    "icon":""
  },
  {
    "date":"05/08/22",
    "update":"Just completed some consulting work for excel macros",
    "link":"",
    "icon":""
  }
  ]

  let shown = true;
  function toggle(){ shown = !shown; }

  let showing = 0;
  function increment(){if(showing<updates.length-1)showing++};
  function decrement(){if(showing!=0)showing--};

</script>
<div id = "updates" class="grid grid-cols-4">
    <ul class="bord col-span-4">
    <h3 class="px-3">Updates<em class="red-txt">!!</em></h3>
    {#each updates as {date,update,link,icon}, i}
        {#if i == showing}
      <li class="bg-neu dark:bg-neudark grid grid-cols-4 border-4 border-pri3 dark:border-pri2dark rounded-3xl"> 
        <h4 class="text-center txt-bg col-span-3 col-start-1 rounded-tl-2xl">{date}</h4>
        {#if icon != ""}
            <a class = "m-auto px-4 col-start-4 row-span-2
            text-4xl text-center 
            hover:border-4 rounded-xl border-pri2 dark:border-pri3dark
            hover:text-pri2 dark:hover:text-pri3dark transition-all" 
            href={link}>
            {#if icon == "video"}
              <Fa class="" icon="{faVideo}"/>
            {:else if icon =="github"}
              <Fa class="" icon="{faGithubAlt}"/>
            {/if}
          </a>
        {:else}
        {/if}
        <p class="col-span-3 border-pri3 dark:border-pri2dark border-r-4">{update}</p>
        {/if}
    {/each}
    <button on:click={decrement}>
    <h3 class="px-3 underline">next</h3>
    </button>
    <button on:click={increment}>
    <h3 class="px-3 underline">prev</h3>
    </button>


    </ul>
    </div>
