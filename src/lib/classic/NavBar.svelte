<script>
    import {onMount} from 'svelte';
    import Fa from "svelte-fa"; 
    import {faGithubAlt, faLinkedin, faStackOverflow} from '@fortawesome/free-brands-svg-icons';
    onMount(()=>{
        populate_library();
    })
    let display = false;
    let library = [];
    function populate_library(){
        fetch('/res/scripts/library.json')
                .then(response => response.json())
                .then(data => {
                    library=data;
                });
    }
    function displayNav(){
        display = !display;
    }
</script>
<header class="h-[7%] neu txt font-mono flex justify-between">
    <h1 class="text-4xl w-[30%] px-[15px] py-[32px] hover:italic flex justify-center">
        <a href="/">CHANCHO<em class="text-sm">.dev</em></a>
    </h1>
    <nav class="h-full w-[30%] px-[15px] py-[32px]">
    <ul class="h-full text-center flex justify-evenly">
        <button 
            class="text-sm w-[25%] pri2-bg ui-button ui-border pri2-bord" 
            href="/classic/"
        >
            <li>Home</li>
        </button>
        <button 
            class="text-sm w-[25%] pri2-bg ui-button ui-border pri2-bord" 
            onclick={displayNav}
        >
            <li>Projects</li>
        </button>
        <button 
            class="text-sm w-[25%] pri2-bg ui-button ui-border pri2-bord" 
            href="/classic/About.html"
        >
            <li>About</li>
        </button>
    </ul>
    {#if display}
        <ol class="border-4 pri3-bord relative z-10 m-[16px] list-none flex flex-col">
            {#each library as project}
                {#if project.navigation}
                    <li class="border-t-4 pri3-bord bg-pri2 dark:bg-pri2dark hover:bg-pri3 dark:hover:bg-pri3dark">
                        <a href="/classic{project.reference}">
                            {project.title}
                        </a>
                    </li>
                {/if}
            {/each}
        </ol>
    {/if}
    </nav>
    <!--Profiles-->
    <p class="text-4xl w-[30%] flex justify-end">
        <a class="p-[16px]" href="https://github.com/sbacon-" aria-label="GitHub">
            <Fa icon={faGithubAlt}/></a>
        <a class="p-[16px]" href="https://www.linkedin.com/in/TomChumley" aria-label="LinkedIn">
            <Fa icon={faLinkedin}/></a>
        <a class="p-[16px]" href="https://stackoverflow.com/users/11916061/tom-chumley" aria-label="StackOverflow">
            <Fa icon={faStackOverflow}/></a>
    </p>
</header>