<script>
    import {onMount,onDestroy} from 'svelte'
    import Fa from "svelte-fa";
    import {faSun,faMoon,faCalendar,faClock} from "@fortawesome/free-solid-svg-icons";
    export let pt, pb, dark, dM, lM, hex_alt;

    let date, time, dtObj, timeInterval;
    function updateTime(){
        dtObj = new Date();
        date=dtObj.toLocaleDateString();
        time=dtObj.toLocaleTimeString();
    }
    function startOver(){
        location.reload();
    }

    onMount(()=>{
        updateTime();
        timeInterval = setInterval(updateTime,1000);
    });
    onDestroy(()=>{
        clearInterval(timeInterval);
    });
</script>

<nav style="padding-top:{pt}px; padding-bottom:{pb/2}px" class="flex flex-col max-w-[{hex_alt*2}px]">
    <button on:click={startOver}>chanchodotdev</button>
    <p class="hidden md:block"><Fa icon={faCalendar}/> {date} <Fa class="animate-spin" icon={faClock}/> {time}</p>
{#if dark}
<button on:click={lM} class="hover:animate-spin">
    <Fa icon={faMoon}/>
</button>
{:else}
<button on:click={dM} class="hover:animate-spin">
    <Fa icon={faSun}/>
</button>
{/if}
</nav>

