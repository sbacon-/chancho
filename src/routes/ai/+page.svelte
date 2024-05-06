<script>
    import {onMount, onDestroy} from 'svelte'
    import { Surreal } from 'surrealdb.js';
    import TextComplete from '$lib/ai/TextComplete.svelte';

    const db = new Surreal();
    let user, id;
    let reply = null;
    let log_status="";
    let mode="Chat Complete";
    let response=false;
    let history = ["hello llama3","..."];
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
                let query = await db.query("UPDATE tcprompt SET mode=time::now() WHERE user=$user AND mode=$mode",{user:id, mode:mode});

            }catch{
                log_status="invalid"
            }
            
        }
    }
    async function surrealdb(){
        await db.connect('https://chancho.dev/rpc');
        auth()
    }
    async function auth(){
        try{
            let tok = await db.authenticate(localStorage.getItem('token'));
            let query = await db.query("SELECT name,id FROM user");
            user = query[0].result[0].name;
            id = query[0].result[0].id;
            log_status="auth"
        }catch{
            log_status="invalid"
        }
        receive();
    }
    async function send(){
        const created = await db.create('tcprompt',{pr:prompt.replaceAll(',',''), re:"...", ts:"..." ,mode:mode,response:response, user:id});
	if(mode=="Chat Complete" && reply!=null && response){
		const query = await db.query("RELATE "+created[0].id+"-> replies -> "+reply+";");
	}
        prompt = "";
    }
    async function receive(){
        try{
            let query = await db.query("SELECT * FROM tcprompt WHERE user=$user AND mode=$mode ORDER BY ts DESC",{mode:mode, user:id});
            history = [];
	    if (query[0].result.length != 0) reply=query[0].result[0].id;
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
        <div>
                <button on:click={switchText} class="p-2 m-2 bord ui-button">{mode}</button>
                <button on:click={back} class="p-2 m-2 bord ui-button">back</button>
        </div>
	<h1 class="ui-label">Welcome, {user==null?"guest":user}! </h1>
        <div class="">
            <input type="text" class="p-2 m-2 ui-input bord" bind:value={prompt} placeholder="prompt..."/>
            <button on:click={send} class="p-2 m-2 bord ui-button">send</button>
		{#if mode=="Chat Complete"}
			<input class="p-2 ui-input" type="checkbox" bind:checked={response}/> as response
		{/if}
        </div>
        <TextComplete history={history} />
    </article>
    <br>
{:else if log_status=="invalid"}
    <h1>Something went wrong :(</h1>
    <button on:click={back} class="ui-button">back</button>
{:else}
    <button on:click={back} class="ui-button">back</button>
{/if}
    </section>
</div>
