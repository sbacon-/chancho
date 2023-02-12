<script>
	import { onMount } from "svelte";
	import Fa from "svelte-fa";
	import { faGithub,faStackOverflow,faLinkedin} from "@fortawesome/free-brands-svg-icons";
	import { faAnglesDown,faPlus,faYinYang,faSun,faMoon,faComputer,faCookieBite} from "@fortawesome/free-solid-svg-icons";

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
				break;
			case 1:
				darkMode();
				break;
			case 2:
				systemMode();
				break;
		}
		deactivateModeSelect();
		deactivateDrop();
	}

</script>

<nav class="group fixed flex-col w-screen top-0 left-0 neu border-b-2 shadow-md transition-all" on:mouseenter={activateDrop} on:mouseleave={deactivateDrop}>
	<div class="flex">
		<div class="navItem">
			<a class="txt text-2xl" href="/">
				<h1>
					CHANCHO<i class="lText text-xl">.dev</i>
				</h1>
			</a>
		</div>
		<div class="navItemLarge txt text-2xl">
			<Fa id="navIcon" class="group-hover:animate-bounce transition-all graphUI" icon={faAnglesDown}/>
		</div>
	</div>
	<div class="flex txt text-2xl h-0 scale-0 group-hover:h-16 group-hover:scale-100 transition-all duration-75 md:duration-300">
		<div class="navItemLarge">
			<h2>Projects</h2>
			<ul>
				<li>
				</li>
			</ul>
		</div>
		<div class="navItem flex">
					<a href="/#" class="hBack block w-10 lg:w-20" on:click={()=>setMode(0)}>
						<Fa icon={faSun}/>
					</a>
					<a href="/#" class="hBack block w-10 lg:w-20" on:click={()=>setMode(1)}>
						<Fa icon={faMoon}/>
					</a>
					<a href="/#" class="hBack block w-10 lg:w-20" on:click={()=>setMode(2)}>
						<Fa icon={faComputer}/>
					</a>
		</div>
	</div>
</nav>
