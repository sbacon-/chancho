<script>

    /*Counting is difficult*/
    /*Stack Weight: 4.5*/
    let count_2 = 27;
    let count = [count_2];

</script>
<div class="mainBorder m-auto w-max p-8">
    {#each count as count_index, i}
        <h3 class=text-3xl> x<sub>{i}</sub>: {count[i]} </h3>
        <input type="range" bind:value={count[i]} min=0 max=100>

    {/each}
    <h3 class=text-3xl> Count of Counts: {count.length} </h3>
    <input type="range" bind:value={count.length} min=1 max=10>
</div>
