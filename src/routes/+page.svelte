<Canvas w={w} h={h} hex_len={hex_len} hex_alt={hex_alt} measure={measure} dark={isDarkMode}/>
<nav style="width:{hex_alt*2}px; height:{hex_len*2}px;" class="m-auto text-center txt">
    <TownPortal pt={h/2-(3*hex_len/4)} pb={hex_len/4} dark={dark} dM={darkMode} lM={lightMode} hex_alt={hex_alt}/>
    <section>
    {#if log_status=="signin"}
        <SignIn db={db}/>
        <h2 on:click={signup}>need an account?</h2>
    {:else if log_status=="signup"}
        <SignUp db={db} back={back}/>
    {:else if log_status=="auth"}
        <Roulette />
        <Updates />
        <h2 on:click={signout} class="ui-button" >logout</h2>
    {/if}
    </section>
</nav>
<script>
import {onMount, onDestroy} from 'svelte'
import { Surreal } from 'surrealdb.js';
import Canvas from '$lib/Canvas.svelte';
import SignIn from '$lib/SignIn.svelte';
import SignUp from '$lib/SignUp.svelte';
import TownPortal from '$lib/TownPortal.svelte';
import Roulette from '$lib/Roulette.svelte';
import Updates from '$lib/Updates.svelte';

const db = new Surreal();
let log_status = "";

//Style
let w, h, hex_len, hex_alt, dark;
function measure(){
    w=window.innerWidth;
    h=window.innerHeight;
    hex_len=w>h?h/2:w/2;
    hex_alt=Math.sqrt(3)/2*hex_len;
}
function initDarkMode(){
    dark=isDarkMode();
    if(isDarkMode()){
        document.documentElement.classList.add('dark');
    }else{
        document.documentElement.classList.remove('dark');
    }
}
function lightMode(){
    localStorage.theme = 'light';
    initDarkMode();
    location.reload();
}
function darkMode(){
    localStorage.theme = 'dark';
    initDarkMode();
    location.reload();
}
function isDarkMode(){
    return localStorage.theme === 'dark' ||
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
}
function back(){
    log_status="signin"
}

async function surrealdb(){
    await db.connect('http://45.26.126.159:8000');
    auth()
}
async function auth(){
    try{
        let tok = await db.authenticate(localStorage.getItem('token'));
        log_status="auth"
    }catch{
        log_status="signin"
    }
}
function signup(){log_status="signup"};
function signout(){db.invalidate();log_status="";localStorage.setItem('token',"");location.reload()};

onMount(()=>{
    surrealdb();
    initDarkMode();
    measure();
    addEventListener("resize",measure);
})
</script>
