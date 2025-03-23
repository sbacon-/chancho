<script>
    import {onMount,onDestroy} from 'svelte'
    import Fa from "svelte-fa";
    import {faSun,faMoon,faCalendar,faClock} from "@fortawesome/free-solid-svg-icons";
    let {dark, darkMode, lightMode, hex_len, adjust} = $props();
    let date =  $state("");
    let time =  $state("");
    let dtObj, timeInterval;
    function updateTime(){
        dtObj = new Date();
        date=dtObj.toLocaleDateString();
        time=dtObj.toLocaleTimeString();
    }
    onMount(()=>{
        updateTime();
        timeInterval = setInterval(updateTime,1000);
    });
    onDestroy(()=>{
        clearInterval(timeInterval);
    });
    let portal_height = $derived(hex_len/2);
    let portal_padding = $derived(hex_len/6);
</script>
<nav 
    style="
        padding:{portal_padding+adjust}px 0px {portal_padding}px 0px; 
        height:{portal_height+adjust}px"
    class="flex flex-col"
>
    <a href="/">chanchodotdev</a>
    <p class="hidden md:block">
        <Fa icon={faCalendar}/> {date}
        <Fa class="animate-spin" icon={faClock}/> {time}
    </p>
    {#if dark}
    <button onclick={lightMode} class="hover:animate-spin m-auto">
        <Fa icon={faMoon}/>
    </button>
    {:else}
    <button onclick={darkMode} class="hover:animate-spin m-auto">
        <Fa icon={faSun}/>
    </button>
    {/if}
</nav>