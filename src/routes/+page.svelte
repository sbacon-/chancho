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
</script>

<div class=
  "min-h-screen 
  w-[90vw]
  m-auto
  txt neu 
  grid grid-cols-5 auto-rows-min 
  text-center md:text-3xl">
    <nav class="group grid col-span-5 grid-cols-5 auto-rows-min text-center">
        <Nav/>
    </nav>
    <section class="col-span-5">
        <Home/>
    </section>
	<!--<Footer/>-->
</div>
