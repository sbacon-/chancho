<script>
    let { history } = $props();
</script>

<ul>
    {#each history as hist, i}
        {#if i % 2 == 0}
            <li
                class="p-4 border-4 pri3-bord rounded-t-2xl rounded-bl-2xl ml-24 mt-3 pri2-bg text-right"
            >
                {hist}
            </li>
        {:else}
            <li
                class="p-4 border-4 pri3-bord rounded-t-2xl rounded-br-2xl mr-24 text-left"
            >
                {hist}
            </li>
        {/if}
    {/each}
</ul>
