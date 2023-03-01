<script>
  import Fa from 'svelte-fa';
  import {updates} from '/res/scripts/updates';
  import {faGithubAlt}  from '@fortawesome/free-brands-svg-icons';
  import {faCookie,faVideo}  from '@fortawesome/free-solid-svg-icons';

  let shown = true;/*mmmm Cookies*/
  function toggle(){ shown = !shown; }
</script>

  <div id = "updates" class="lg:basis-3/5">
      <a href="/#" on:click|preventDefault={toggle}>
    <h3 class="text-2xl text-center underline">Updates</h3>
      </a>
    <ul class="p-3 flex-col mainBorder m-auto w-[90vw] lg:w-[40vw]">
      
    {#if shown}
    {#each updates as {date,update,link,icon}, i}
      <li class="grid grid-cols-6 p-1"> 
        <h4 class="col-span-5 mx-2">{date}</h4>
        {#if link!=""}
          <a class = "text-center row-span-2 my-auto text-3xl w-fill hover:bg-pri3 dark:hover:bg-pri2dark rounded-xl bord" href={link}>
            {#if icon == "video"}
              <Fa class="inline" icon="{faVideo}"/>
            {:else if icon =="github"}
              <Fa class="inline" icon="{faGithubAlt}"/>
            {/if}
          </a>
        {/if}
        <p class="col-span-5 lg:basis-2/5">{update}</p>
    {/each}
    {:else}
      <a class="w-[90vw] lg:w-[40vw] flex m-auto" href="/#" on:click|preventDefault={toggle}>
              <Fa class="text-center inline" icon="{faCookie}"/>
      </a>
    {/if}
    </ul>
	</div>
