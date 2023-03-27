<script>
    /*Counting is difficult*/
    let count = [];
    let dice = "3d6";
    const regex = /d/

    function rollAll(){
        count.length = dice.split(regex)[0];
        for(let i = 0; i<count.length; i++){
            count[i]= Math.floor(Math.random()*(dice.split(regex)[1]))+1;
            //console.log(count[i]);
        }
    }

</script>
<div class="mainBorder m-auto p-8">
    <form on:submit|preventDefault={rollAll} >
    <input type="text" bind:value={dice} min=2 class="p-3 bg-pri3 dark:bg-pri2dark border-2 border-text dark:border-textdark rounded-3xl transition-color duration-1000">
    {#each count as count_index, i}
        <h3 class=text-3xl> x<sub>{i}</sub>: {count[i]} </h3>
        <!--input type="range" bind:value={count[i]} min=1 max=100-->
    {/each}
    </form>
</div>
