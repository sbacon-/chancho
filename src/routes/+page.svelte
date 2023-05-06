<script>
	/*Chancho Dot Dev v 23.02.07
	const siteData = {
		name:"chancho.dev",
		version:"23.2.8",
		frontend: ["Svelte","TailWindCSS, NodeJS"],
		backend: ["NGINX","Fedora Server 37"]
	}
	*/
	import Home from './Home.svelte';
	import Nav from "./Navbar.svelte";
    import Accord from "./apps/Dice.svelte";
    import Taskr from "./apps/Taskr.svelte";
    let apps = ["Home","Accord","Taskr"];
    let selection = 0;
</script>


<div class=
  "min-h-screen 
  m-auto
  txt neu 
  grid grid-cols-5 auto-rows-min 
  text-center md:text-3xl">
    <nav class="w-[90vw] xl:w-[40vw] m-auto group grid col-span-5 grid-cols-5 auto-rows-min text-center">
        <Nav/>
    </nav>
    <section class="w-[90vw] m-auto col-span-5">
        <Taskr/>
        <Accord/>
        <Home/>
    </section>
	<!--<Footer/>-->
</div>
