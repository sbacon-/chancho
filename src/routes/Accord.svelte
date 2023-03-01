<script>

    /*Counting is difficult*/
    let count_2 = 1;
    let count = [count_2];
    let dice = 6;

    function rollAll(){
        for(let i = 0; i<count.length; i++){
            count[i]= Math.floor(Math.random()*(dice))+1;
            //console.log(count[i]);
        }
    }

</script>
<div class="mainBorder m-auto w-max p-8">
    <form on:submit|preventDefault={rollAll} >
    <input type="number" bind:value={dice} min=2 max=100 class="p-3 bg-pri3 dark:bg-pri2dark border-2 border-text dark:border-textdark rounded-3xl transition-color duration-1000">
    <h3 class=text-3xl> # of rolls: {count.length} </h3>
    <input type="range" bind:value={count.length} min=1 max=10>
    
    {#each count as count_index, i}
        <h3 class=text-3xl> x<sub>{i}</sub>: {count[i]} </h3>
        <!--input type="range" bind:value={count[i]} min=1 max=100-->
    {/each}
    </form>
</div>
