<script src="/updates/updates.js">
	import Fa from 'svelte-fa'
  import Taskr from './Taskr.svelte'
  import { faGithubAlt } from '@fortawesome/free-brands-svg-icons'
  import { updates } from '/res/scripts/updates';
</script>

<section class = "py-16 px-3 lg:px-40 min-h-screen max-h-max txt">
<h3 class="text-2xl underline">Welcome Home!</h3>

<br>
<div class = "flex flex-col lg:flex-row ">
  <div id = "updates" class="lg:basis-3/5">
    <h3 class="text-2xl text-center underline">Updates</h3>
    <ul class="flex-col mainBorder m-auto w-[90vw] lg:w-[40vw]">
      
    {#each updates as {date,update,link}, i}
      <li class="grid grid-cols-6 p-1"> 
        <h4 class="col-span-5 mx-2">{date}</h4>
        {#if link!=""}
          <a class = "text-center row-span-2 my-auto text-3xl w-fill hover:bg-pri3 dark:hover:bg-pri2dark rounded-xl bord" href={link}><Fa class="inline" icon="{faGithubAlt}"/></a>
        {/if}
        <p class="col-span-5 lg:basis-2/5">{update}</p>
    {/each}
    </ul>
  </div>
  <Taskr />
</div>
<br>
<h3 class="text-2xl text-center underline">
Current Project: Rebuild the Site using the new stack.</h3>
<p class="indent-8 text-xl">
Working with a new stack for my website, previously this was mainly Apache
and a custom HTML build framework I had written in C++.
<a href="https://github.com/sbacon-/chancho/"><Fa class="inline" icon="{faGithubAlt}"/></a>
Ultimately this has proved to be too limiting and due to my poor documentation on how to use, it became instant legacy code. So I've decided to make the move to a new stack.
Currently: Node, Svelte, TailwindCSS, NGINX
My hope is to use NGINX as a reverse proxy, which will allow me serve more dynamic content through Node.
Svelte and Tailwind are proving to be incredibly fast and light weight.
<br>
For those brave enough to join, the minecraft server should still be running: <em>mc.chancho.dev</em><br>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis id assumenda reiciendis laborum perferendis recusandae suscipit pariatur architecto dignissimos beatae ullam quos asperiores omnis necessitatibus accusantium ad labore dolorum, aliquam fugit provident sequi tempora nihil! Officia ea quasi, ut soluta minus expedita ducimus modi atque odit aperiam exercitationem beatae, voluptatum inventore!
</p>
<ul id="library"></ul>
</section>
