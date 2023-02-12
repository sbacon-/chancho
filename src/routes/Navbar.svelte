<script>
	import Fa from "svelte-fa";
	import { faGithub,faStackOverflow,faLinkedin} from "@fortawesome/free-brands-svg-icons";
	import { faPlus,faSun,faMoon,faComputer,faCookieBite} from "@fortawesome/free-solid-svg-icons";

	let drop = false;
	function activateDrop() {
		drop = true;
	}
	function deactivateDrop() {
		drop = false;
	}
</script>

<div
	on:mouseenter={activateDrop}
	on:mouseleave={deactivateDrop}
	class="navBar group"
>
	<div class="flex">
		<div class="w-1/3 text-left hover:text-bright m-auto">
			<a
				class="text-text dark:text-textdark hover:text-text hover:dark:text-textdark"
				href="/"
			>
				<h1>
					CHANCHO<i class="text-pri1 dark:text-pri1dark text-md"
						>.dev</i
					>
				</h1>
			</a>
		</div>
		<a
			href="/#"
			class="txt hover:text-current text-2 w-max m-auto"
		>
			<Fa
				id="navPlus"
				class="group-hover:rotate-45 transition-all text-pri2 dark:text-pri2dark"
				icon={faPlus}
			/>
		</a>
		<div class="w-1/3 text-right m-auto">
			<div class="text-center inline">
			<a href="/#">
				<Fa
					class="text-pri2 dark:text-pri3dark inline filter"
					icon={faCookieBite}/>
			
			</a>
			<a href="/#" on:click={lightMode}>
				<Fa
					class="text-pri2 dark:text-pri3dark inline filter"
					icon={faSun}/>
			</a>
			<a href="/#" on:click={darkMode}>
				<Fa
					class="text-pri2 dark:text-pri3dark inline filter"
					icon={faMoon}/>
			</a>
			<a href="/#" on:click={systemMode}>
				<Fa
					class="text-pri2 dark:text-pri3dark inline filter"
					icon={faComputer}/>
			</a>
			<b>>></b>
			</div>
		
			<a href="https://github.com/sbacon-"
				><Fa
					class="text-pri3 dark:text-pri3dark inline filter drip"
					icon={faGithub}
				/>
			</a>
			<a href="https://stackoverflow.com/users/11916061/tom-chumley"
				><Fa
					class="text-pri3 dark:text-pri3dark inline filter drip"
					icon={faStackOverflow}
				/>
			</a>
			<a href="https://linkedin.com/in/TomChumley"
				><Fa
					class="text-pri3 dark:text-pri3dark inline filter drip"
					icon={faLinkedin}
				/>
			</a>
		</div>
	</div>
	<div class="dropMenu">
		<div class="grow">
			Recent
		</div>
		<div>
			Featured
		</div>
	
	</div>
</div>
