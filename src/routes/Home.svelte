<script>
	import Fa from 'svelte-fa'
  import { faGithubAlt } from '@fortawesome/free-brands-svg-icons'

  let updates = [
  {
    "date":"02/08/23",
    "update":"Rebuilding the site in Svelte & TailwindCSS",
    "link":"https://github.com/sbacon-/chancho/tree/svelte"
  },
  {
    "date":"12/31/22",
    "update":"Found a use for Amoeba in executing macros in video games, calls for a re-write",
    "link":"https://github.com/sbacon-/AMOEBA"
  },
  {
    "date":"11/27/22",
    "update":"CSS Updates, minor changes to Amoeba",
    "link":"https://github.com/sbacon-/AMOEBA"
  },
  {
    "date":"06/20/22",
    "update":"Back from Vacaction, refactored gdChessTrainer to use UCI notation",
    "link":"/proj/gdchesstrainer"
  },
  {
    "date":"06/08/22",
    "update":"Just completed some consulting work for excel macros",
    "link":""
  }
  ]

  

</script>

<section class = "p-20 text-white">
<h3 class="text-2xl underline">Welcome Home!</h3>

<br>
<h3 class="text-center text-xl underline">
Updates</h3>
<ul class="flex-col bg-gray-800 border-4 border-white">
{#each updates as {date,update,link}}
  <li class="grid grid-cols-6 p-1"> 
    <h4 class="border-b-2 border-white">{date}</h4>
    <p class="border-b-2 col-span-4">{update}</p>
    {#if link!=""}
      <a class = "border-b-2 text-center" href={link}><Fa class="inline" icon="{faGithubAlt}"/></a>
    {/if}
{/each}
</ul>
<br>
<h3 class="text-xl text-center underline">
Current Project: Rebuild the Site using the new stack.</h3>
<p>

<br>
Working with a new stack for my website, previously this was mainly Apache
and a custom HTML build framework I had written in C++.
<a href="https://github.com/sbacon-/chancho/"><Fa class="inline" icon="{faGithubAlt}"/></a>
Ultimately this has proved to be too limiting (instant legacy code). So I've decided to make the move to a new stack.
Currently: Node, Svelte, TailwindCSS, NGINX
My hope is to use NGINX as a reverse proxy, which will allow me serve more dynamic content through Node.
Svelte and Tailwind are proving to be incredibly fast and light weight.
<br>
For those brave enough to join, the minecraft server should still be running: <em>mc.chancho.dev</em><br>
</p>
<ul id="library"></ul>
</section>

