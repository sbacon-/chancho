<script>
	/*Chancho Dot Dev v 23.02.07
	const siteData = {
		name:"chancho.dev",
		version:"23.2.8",
		frontend: ["Svelte","TailWindCSS, NodeJS"],
		backend: ["NGINX","Fedora Server 37"]
	}
	*/
	import Accord from './Accord.svelte';
	import Nav from "../Navbar.svelte";
</script>

<div class=
  "min-h-screen 
  txt neu 
  grid grid-cols-5 auto-rows-min 
  text-center md:text-3xl">
    <nav class="w-[90vw] lg:w-[40vw] m-auto group grid col-span-5 grid-cols-5 auto-rows-min text-center">
        <Nav/>
    </nav>
    <section class="col-span-5">
        <Accord/>
    </section>
	<!--<Footer/>-->
</div>
