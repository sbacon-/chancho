<script>
	/*Chancho Dot Dev v 23.02.07*/
	export let name;
	export let version;
	export let frontend;
	import Navbar from './Navbar.svelte';
	import Home from './Home.svelte';
	import { onMount } from 'svelte';
	onMount(async()=>{
	});
</script>

<svelte:head>
	<script src="/res/scripts/darkMode.js">


	</script>

</svelte:head>

<div id="main" class="
					neu
					xl:w-2/3 md:w-auto 
					xl:border-x-8 md:border-0 
					border-text dark:border-textdark
					h-screen
					m-auto">

	<Navbar/>
	<Home/>
	<!--
	<Footer/>
	-->
</div>