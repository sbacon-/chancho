<script>
	import Fa from "svelte-fa";
	import { faGithub,faStackOverflow,faLinkedin} from "@fortawesome/free-brands-svg-icons";
	import { 
		faPlus,
		faSun,faMoon,faComputer,
		faCookieBite} from "@fortawesome/free-solid-svg-icons";
</script>

		<!-- LOGO or TITLE -->
		<div class="p-3 col-span-1">
			<a class="" href="/">
				<h1>CHANCHO<em class="red-txt">.dev</em></h1>
			</a>
		</div>
        <!--PLUS-->
        <div class="p-3 col-span-3 
            text-3xl gui-svg 
            group-hover:rotate-45 transition-all">
            <Fa class="" icon={faPlus}/>
		</div>
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
            col-span-5
            text-xs group-hover:text-3xl 
            scale-0 group-hover:scale-100
            transition-all ">
			<ul>
				<li>
                    <a href="/dice">Dice</a><br>
                    <a href="/taskr">Taskr</a><br>
				</li>
			</ul>
		</nav>
