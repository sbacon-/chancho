<script>
	import { onMount } from "svelte";
    import { init } from 'svelte/internal';
	import Fa from "svelte-fa";
	import { faGithub,faStackOverflow,faLinkedin} from "@fortawesome/free-brands-svg-icons";
	import { faAnglesDown,
		faPlus,
		faYinYang,
		faSun,faMoon,faComputer,
		faCookieBite} from "@fortawesome/free-solid-svg-icons";

	let drop = false;
	function activateDrop(){drop = true;}
	function deactivateDrop(){drop = false;}
	
	let modeSelect = false;
	function activateModeSelect(){modeSelect=true};
	function deactivateModeSelect(){modeSelect=false};
	function setMode(m){
		switch (m){
			case 0:
				lightMode();
				document.querySelector("#modeText").innerHTML="lightMode"
				break;
			case 1:
				darkMode();
				document.querySelector("#modeText").innerHTML="darkMode"
				break;
			case 2:
				systemMode();
				document.querySelector("#modeText").innerHTML="systemMode"
				break;
		}
		deactivateModeSelect();
		deactivateDrop();
	}

</script>

<svelte:head>
	<script src="/res/scripts/darkMode.js">init();</script>
</svelte:head>

<nav class="group flex-col 
	w-screen top-0 left-0 neu 
	border-b-2 shadow-md transition-all py-3" 
	on:mouseenter={activateDrop} on:mouseleave={deactivateDrop}>
	<div class="flex">
		<!-- LOGO or TITLE -->
		<div class="flex navItem">
			<a class="txt text-2xl grow rounded-3xl" href="/">
				<h1>
					CHANCHO<i class="lText text-xl">.dev</i>
				</h1>
			</a>
            <a href="" class="hBack block rounded-3xl">
                    <Fa icon={faYinYang}/>
            </a>
		</div>
        <!--SKIP NAV-->
        <div>
        </div>
        <!--BOUNCE-->
		<div class="navItemLarge txt text-2xl">
            <Fa id="navIcon" class="
                group-hover:animate-bounce 
                transition-all graphUI" icon={faAnglesDown}/>
		</div>
	</div>
	<div class="flex txt text-2xl h-0 scale-0 group-hover:h-max group-hover:scale-100 transition-all duration-75 md:duration-300">
		<div class="navItemLarge h-max">
			<h2>Projects</h2>
			<ul>
				<li>
                    <a href="/dice">Dice</a><br>
                    <a href="/taskr">Taskr</a><br>
				</li>
			</ul>
		</div>
		<div class="navItem flex">
			<div class="lg:w-fit flex 
				lg:border-4 border-pri3 dark:border-pri2 rounded-3xl 
				shadow-xl">
					<a href="" class="hBack block w-10 lg:w-20 lg:h-15 rounded-l-2xl" on:click={()=>setMode(0)}>
						<Fa icon={faSun}/>
					</a>
					<a href="" class="hBack block w-10 lg:w-20 lg:h-15" on:click={()=>setMode(1)}>
						<Fa icon={faMoon}/>
					</a>
					<a href="" class="hBack block w-10 lg:w-20 lg:h-15 rounded-r-2xl" on:click={()=>setMode(2)}>
						<Fa icon={faComputer}/>
					</a>
			</div>
			<div class="scale-0 lg:scale-100 my-auto">
				<h4 id="modeText">Mode<h4>
                    <!--MAKE THIS CHANGE WITH THE SELECTION-->
                </div>
		</div>
	</div>
</nav>
