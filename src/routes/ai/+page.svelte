<script>
	/*Chancho Dot Dev v 23.08.19
	const siteData = {
		name:"chancho.dev",
		version:"23.2.8",
		frontend: ["Svelte","TailWindCSS, NodeJS"],
		backend: ["SurrealDB","Llama2","NGINX","Fedora Server 37"]
	}
	*/
    import {onMount, onDestroy} from 'svelte'
    import { Surreal } from 'surrealdb.js';
    import TextComplete from '$lib/ai/TextComplete.svelte';
    import ChatComplete from '$lib/ai/ChatComplete.svelte';

    const db = new Surreal();
    let user;
    let log_status="";
    let mode="Text Complete";
    let history = ["hello llama2","..."];
    let rec_interval;
    let dark;

    let sys = "";
    let prompt = "";

    function switchText(){
        mode=(mode=="Text Complete"?"Chat Complete":"Text Complete");
        receive();
    }

    //Style
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
    function back(){window.location.assign("/");}
    async function clear(){
        prompt = "";
        if(mode=="Chat Complete"){
            try{
                let query = await db.query("UPDATE tcprompt SET mode=time::now() WHERE user=$user AND mode=$mode",{user:user, mode:mode});

            }catch{
                log_status="invalid"
            }
            
        }
    }


    async function surrealdb(){
        await db.connect('https://chancho.dev');
        auth()
    }
    async function auth(){
        try{
            let tok = await db.authenticate(localStorage.getItem('token'));
            let query = await db.query("SELECT user FROM user");
            user = query[0].result[0].user;
            log_status="auth"
        }catch{
            log_status="invalid"
        }
        receive();
    }
    async function send(){
        const created = await db.create('tcprompt',{pr:prompt, re:"...", ts:"..." ,mode:mode, user:user});
        prompt = "";
    }
    async function receive(){
        try{
            let query = await db.query("SELECT * FROM tcprompt WHERE user=$user AND mode=$mode ORDER BY ts DESC",{mode:mode, user:user});
            history = [];
            for(let pr in query[0].result){
                history.push(query[0].result[pr].pr);
                history.push(query[0].result[pr].re);
            }
            
        }catch{
            log_status="invalid"
        }
    }

    onMount(()=>{
        receive();
        rec_interval = setInterval(receive,1000);
        surrealdb();
        initDarkMode();
    })
    onDestroy(()=>{
        clearInterval(rec_interval);
    })
</script>
<div class="page">
    <section class="pagesec">
{#if log_status=="auth"}
    <article class="app bord ui-form">
        <h1 class="ui-label">Welcome, {user.split('@')[0]}</h1>
        <button on:click={switchText} class="ui-button">{mode}</button>
            {#if mode=="Text Complete"}
                <TextComplete history={history} />
                <div class="">
                <input type="text" class="grow ui-input bord" bind:value={prompt} placeholder="prompt..."/>
                <button on:click={send} class="ui-button">send</button>
                </div>
            {:else if mode=="Chat Complete"}
                <ChatComplete history={history} />
                <div class="">
                <input type="text" class="grow ui-input bord" bind:value={sys} placeholder="system..."/>
                <button on:click={clear} class="ui-button">clear</button>
                </div>
                <div class="">
                <input type="text" class="grow ui-input bord" bind:value={prompt} placeholder="prompt..."/>
                <button on:click={send} class="ui-button">send</button>
                </div>
            {:else}
            {/if}
    </article>
    <br>

    <button on:click={back} class="ui-button">back</button>
{:else if log_status=="invalid"}
    <h1>Something went wrong :(</h1>
    <button on:click={back} class="ui-button">back</button>
{:else}
    <button on:click={back} class="ui-button">back</button>
{/if}
    </section>
</div>
