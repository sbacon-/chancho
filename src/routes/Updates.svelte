<script>
  import Fa from 'svelte-fa';
  import {updates} from '/res/scripts/updates';
  import {faGithubAlt}  from '@fortawesome/free-brands-svg-icons';
  import {faCookie,faVideo}  from '@fortawesome/free-solid-svg-icons';

  let shown = true;
  function toggle(){ shown = !shown; }

  let showing = 3;
  function increment(){showing++};
  function decrement(){showing--};

</script>
<div id = "updates" class="grid grid-cols-5">
    <ul class="bord
        col-span-5
        ">
    <h3 class="p-3">Updates<em class="red-txt">!!</em></h3>
    {#each updates as {date,update,link,icon}, i}
        {#if i < showing}
      <li class="grid grid-cols-4 border-4 border-pri3 dark:border-pri2dark m-3"> 
        <h4 class="text-center txt-bg col-span-3 col-start-1">{date}</h4>
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
        <p class="p-4 col-span-3">{update}</p>
        {/if}
    {/each}
    <button on:click={increment}>
    <h3 class="p-3 underline">more<em class="red-txt">!!</em></h3>
    </button>
    <button on:click={decrement}>
    <h3 class="p-3 underline">less<em class="red-txt">!!</em></h3>
    </button>


    </ul>
    </div>
