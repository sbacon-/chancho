<script>
	import Fa from "svelte-fa";
	import { faGithub,faStackOverflow,faLinkedin} from "@fortawesome/free-brands-svg-icons";
	import { 
		faPlus,
		faSun,faMoon,faComputer,
		faCookieBite} from "@fortawesome/free-solid-svg-icons";
</script>

		<!-- LOGO or TITLE -->
		<h3 class="p-3 col-span-1">
			<a class="" href="/">
				<h1>CHANCHO<em class="red-txt">.dev</em></h1>
			</a>
		</h3>
        <!--PLUS-->
        <nav class="p-3 col-span-3 group">
        <nav class=" text-md gui-svg ">
            <Fa class="group-hover:rotate-45 transition-all" icon={faPlus}/>
            <a href="./apps" class="navbord invisible group-hover:visible">Apps</a>

            <a href="." class="navbord invisible group-hover:visible">Home</a>
		</nav>
        </nav>
        <!--DarkMode-->
		<div class="p-3 col-span-1 md:text-3xl gui-svg ">
            <button class="" on:click={lightMode}>
                    <Fa icon={faSun}/>
            </button>
            <button class="" on:click={darkMode}>
                    <Fa icon={faMoon}/>
            </button>
        </div>
        <!--Navigation-->
        <nav class="
            col-span-3
            col-start-2
            m-auto
               hidden group-hover:flex
            text-xs group-hover:text-3xl 
            scale-0 group-hover:scale-100
            transition-all ">
			<ul>
				<li>
                    <!--
                    <a href="/dice">Dice</a><br>
                    <a href="/taskr">Taskr</a><br>
                    -->
				</li>
			</ul>
		</nav>
