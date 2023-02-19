<script>
	/*Chancho Dot Dev v 23.02.07*/
	import Navbar from './Navbar.svelte';
	import Home from './Home.svelte';
    import { init } from 'svelte/internal';
</script>

<svelte:head>
	<script src="/res/scripts/darkMode.js">init();</script>
</svelte:head>

<div id="main" class="neu">
	<Navbar/>
	<Home/>
	<!--
	<Footer/>
	-->
</div>
