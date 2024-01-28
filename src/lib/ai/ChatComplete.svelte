<script>
    export let history = ["llama2-13b","..."];
</script>
<ul class="flex flex-col">
{#each history as hist, i}
    <li>
    {#if i%2==0}
    <p class="p-3 border-2 border-neu dark:border-neudark rounded-t-xl rounded-bl-xl ml-24 mt-4 bg-pri2 dark:bg-pri2dark text-right">{hist}</p>
    {:else}
    <p class="p-3 border-2 border-pri2 dark:border-pri2dark rounded-t-xl rounded-br-xl mr-24 mt-4 bg-neu dark:bg-neudark text-left">{hist}</p>
    {/if}
    </li>
{/each}
</ul>
