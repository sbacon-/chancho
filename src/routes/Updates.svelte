<script>
  import Fa from 'svelte-fa';
  import {updates} from '/res/scripts/updates';
  import {faGithubAlt}  from '@fortawesome/free-brands-svg-icons';
  import {faCookie,faVideo}  from '@fortawesome/free-solid-svg-icons';

  let shown = true;
  function toggle(){ shown = !shown; }
</script>
<div id = "updates" class="">
    <ul class="border-4 m-4 
        border-pri2 dark:border-pri3dark
        rounded-3xl
        ">
    <h3 class="text-3xl p-3 underline">Updates<em class="red-txt">!!</em></h3>
    {#each updates as {date,update,link,icon}, i}
      <li class="grid grid-cols-5"> 
        <h4 class="text-center txt-bg rounded-r-3xl col-span-2 lg:col-span-1">{date}</h4>
        {#if icon != ""}
            <a class = "py-1.5 col-start-5 row-span-2 
            text-4xl txt-bg text-center 
            border-b-4 border-pri3 dark:border-pri2dark hover:border-neu
            rounded-t-3xl hover:rounded-none transition-all" 
            href={link}>
            {#if icon == "video"}
              <Fa class="" icon="{faVideo}"/>
            {:else if icon =="github"}
              <Fa class="" icon="{faGithubAlt}"/>
            {/if}
          </a>
        {:else}
            <div class = "h-full col-start-5 row-span-2 
                border-b-4 border-pri3 dark:border-pri2dark">
          </div>
        {/if}
        <p class="col-span-4 border-b-4 border-pri3 dark:border-pri2dark">{update}</p>
    {/each}
    <h3 class="text-3xl p-3 underline">stay tuned for more<em class="red-txt">!!</em></h3>
    </ul>
    </div>
