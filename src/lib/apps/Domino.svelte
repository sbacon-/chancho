<script>
    import Fa from "svelte-fa";
    import {faCrown} from  "@fortawesome/free-solid-svg-icons";
    let scoreboard = [
        {lead: false, id:0, name:"Player 1", score:0},
        {lead: false, id:1, name:"Player 2", score:0},
        {lead: false, id:2, name:"Player 3", score:0},
        {lead: false, id:3, name:"Player 4", score:0},
    ];
    function addPoints(n){scoreboard[n].score++;recalculateLeader();}
    function deductPoints(n){scoreboard[n].score--;recalculateLeader();}
    function addPlayer(){scoreboard.push({lead:false,id:scoreboard.length,name:"Player "+(scoreboard.length+1),score:0});recalculateLeader()};
    function deductPlayer(){scoreboard.pop();recalculateLeader()};
    function recalculateLeader(){
        let max = 0;
        for(let i =0; i<scoreboard.length; i++){
            if(scoreboard[i].score > max)
                max=scoreboard[i].score;
        }
        for(let j=0; j<scoreboard.length; j++){
            if(scoreboard[j].score == max){
                scoreboard[j].lead = true;
            }else{
                scoreboard[j].lead=false;
            }
        }
    }
</script>
<div class="app bord" >
        <h3>Score Sheet<em class="red-txt">!!</em></h3>
     <ul class="text-center grid grid-cols-6 auto-rows-auto rounded-xl">
        <li class="border-pri3 dark:border-pri2dark border-b-2 border-r-2">
        </li>
        <li class="col-span-2 border-pri3 dark:border-pri2dark border-b-2">
            Name
        </li> 
        <li class=" border-pri3 dark:border-pri2dark border-b-2">
            Score
        </li>
        <li class="col-span-2 border-pri3 dark:border-pri2dark border-b-2">
            <button class="w-5/12 border-text dark:border-textdark g border-x-4 rounded-xl" on:click={() => addPlayer()}>p+</button>
            <button class="w-5/12 border-text dark:border-textdark g border-x-4 rounded-xl" on:click={() => deductPlayer()}>p-</button>
        </li>
        {#each scoreboard as {lead,id,name,score},i}
            {#if lead}
                <li class="text-pri3 dark:text-pri2dark text-center border-r-2 border-pri3 dark:border-pri2dark"><Fa icon={faCrown}/></li>
            {:else}
                <li class="text-center border-r-2 border-pri3 dark:border-pri2dark"></li>
            {/if}
                <input class= "text-center bg-neu dark:bg-neudark col-span-2 border-b-2 border-pri3 dark:border-pri2dark" type="text" value={name}>
            <li>{score*5}</li>
            <li class="col-span-2">
                <button class="w-5/12 border-text dark:border-textdark g border-x-4 rounded-xl" on:click={() => addPoints(i)}>+</button>
                <button class="w-5/12 border-text dark:border-textdark g border-x-4 rounded-xl" on:click={() => deductPoints(i)}>-</button>
            </li>
        {/each} 
    </ul>
</div>
