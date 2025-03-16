<script>
  import Fa from 'svelte-fa';
  import {faGithubAlt}  from '@fortawesome/free-brands-svg-icons';
  import {faCookie,faVideo,faRobot}  from '@fortawesome/free-solid-svg-icons';
let updates = [
//VIM 6yy
  {
    "date":"2/10/25",
    "update":"Color of the year style update (Mocha Mousse).",
    "link":"https://github.com/sbacon-/chancho",
    "icon":"github"
  },
  {
    "date":"12/15/24",
    "update":"You must gather your party before venturing forth.",
    "link":"https://github.com/sbacon-/chancho",
    "icon":"github"
  },
  {
    "date":"11/18/24",
    "update":"A world of information rests in the palm of your hand, and networks for instantaneous communication span the globe. Yet a unified vision of our future has never been built. We compete in technology, culture, and politics. We have deadly weapons that could destroy our planet. Lead us carefully, but boldly, and build a global community that can stand for years to come. ",
    "link":"https://github.com/sbacon-/chancho",
    "icon":"github"
  },
  {
    "date":"09/10/24",
    "update":"newspaper taxis on the surface of mars waiting to burst into flames, no oxygen no combustion and the taxis run late. picture yourself on a train in a station with plastacine people with looking glass cars, certainly someone is there at the turnstyle to inform you the trains are running late on mars", "link":"https://github.com/sbacon-/chancho",
    "icon":"github"
  },
  {
    "date":"08/05/24",
    "update":"take the strike pad off the matchbook, and you can't ignite the muratric acid, there are 3 matches left in the box and 29 in the floor somewhere", "link":"https://github.com/sbacon-/chancho",
    "icon":"github"
  },
  {
    "date":"07/09/24",
    "update":"The llama3 relay has been restored after a suspected DoS attack", "link":"https://github.com/sbacon-/chancho",
    "icon":"github"
  },
  {
    "date":"07/01/24",
    "update":"This was a triumph! We have taken down the llama3 relay as it was both unprofitable and a violation of the TOS to try to predict the Pantone Color of the Year 2025 using Artificial Intelligence. It's Terracotta Sienna!", "link":"https://github.com/sbacon-/chancho",
    "icon":"github"
  },
  {
    "date":"05/06/24",
    "update":"set default ai chat-complete behaviour to send as a new dialogue. I expect (the rest of this update was completed by the AI): to see the full list of options when I press ctrl+space",
    "link":"https://github.com/sbacon-/chancho",
    "icon":"github"
  },
  {
    "date":"04/27/24",
    "update":"relay updated to use llama3-8b",
    "link":"https://github.com/sbacon-/chancho",
    "icon":"github"
  },
  {
    "date":"04/13/24",
    "update":"Classic Mode and Text/Chat Completion almost completely functional (for now)",
    "link":"https://github.com/sbacon-/chancho",
    "icon":"github"
  },
  {
    "date":"04/10/24",
    "update":"Uploaded everything to the cloudflare to resolve DNS issues",
    "link":"https://github.com/sbacon-/chancho",
    "icon":"github"
  },
  {
    "date":"04/06/24",
    "update":"Shutting down the AI for the week, will be back with electricity in 7 days. Thank you for your patience. Also, all acheivements have been acquired in Elden Ring (DLC soon)",
    "link":"",
    "icon":"robot"
  },
  {
    "date":"03/27/24",
    "update":"I've finally booked some time with the LLM relay (next Saturday 3/30). May just play Elden Ring instead, the DLC gonna be great. tom@chancho.dev for jolly cooperation",
    "link":"",
    "icon":"robot"
  },
  {
    "date":"03/10/24",
    "update":"Technical diffuiculaties: unplugged the llama2 relay as it was un-profitable, nothing works except the apps page please email your solutions to ai@chancho.dev or call us @ 911.",
    "link":"",
    "icon":"robot"
  },
  {
    "date":"01/26/24",
    "update":"Colour of the year update, added back button to apps page (first try)",
    "link":"https://github.com/sbacon-/chancho",
    "icon":"github"
  },
  {
    "date":"01/16/24",
    "update":"After a six-hundred percent reduction in staff, chanchodotdev's carbon footprint has been reduced by 5 employees and 1 cat.",
    "link":"",
    "icon":"robot"
  },
  {
    "date":"08/27/23",
    "update":"Llama 2: Chat Completion",
    "link":"/ai",
    "icon":"github"
  },
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
<div id = "updates">
    <ul class="bord bg-pri3 dark:bg-pri3dark">
    <h3 class="mx-auto">Updates<em>!!</em></h3>
    {#each updates as {date,update,link,icon}, i}
        {#if i == showing}
            <li class="border-x-8 border-t-4 border-pri2 dark:border-pri2dark grid grid-cols-3">
            <h4 class="text-center col-span-2 underline">{date}</h4>
            {#if icon != ""}
                <a class = "px-4 m-auto col-start-3 row-span-2
                text-4xl text-center 
                hover:border-4 rounded-xl border-pri2 dark:border-pri2dark
                hover:text-pri2 dark:hover:text-pri2dark transition-all" 
                href={link}>
                    {#if icon == "video"}
                      <Fa class="" icon="{faVideo}"/>
                    {:else if icon =="github"}
                      <Fa class="" icon="{faGithubAlt}"/>
                    {:else if icon =="robot"}
                      <Fa class="" icon="{faRobot}"/>
                    {/if}
                </a>
            {:else}
            {/if}
        <p class="p-3 col-span-2">{update}</p>
        {/if}
    {/each}
    <div class="flex justify-between">
    <button on:click={decrement}>
        <h3 class="ui-button px-3 rounded-bl-xl rounded-tr-xl">&lt;</h3>
    </button>
    <button on:click={increment}>
        <h3 class="ui-button px-3 rounded-br-xl rounded-tl-xl">&gt;</h3>
    </button>
    </div>
    </ul>
    </div>
