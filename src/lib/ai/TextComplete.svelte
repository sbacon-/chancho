<script>
    export let history = ["llama2-13b","..."];
</script>
<div class="h-96 overflow-auto">
    {#each history as hist, i}
        {#if i%2==0}
        <p class="border-4">{hist}</p>
        {:else}
        <p class="m-2 border-double border-b-4 border-x-4">{hist}</p>
        {/if}
    {/each}
</div>
