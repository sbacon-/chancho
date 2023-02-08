<script>
	/*Chancho Dot Dev v 23.02.07*/
	export let name;
	export let version;
	export let frontend;
	import Navbar from './Navbar.svelte';
	import Home from './Home.svelte';
	let src = '/src/image.png'; 
	let string = 'this string contains some <strong>HTML!!!</strong>';
</script>

<Navbar class="w-screen" />
<div>
	<Home/>
</div>

<!--
<h1 class="text-4xl font-bold underline">Welcome to {name}</h1>
<p class="font-bold"> HOST: Linux 6.1.9 x86_64 (Fedora 37) </p>
<p> STACK: {frontend.join(', ')} </p>
<Button/>
<Hello love={frontendstack[1]}/>
<Hello love={frontend[0]}/>
<Hello/>
<div class = "p-6 max-w-sm mx-auto bg-white rounded-3xl shadow-2xl">
	<div>
		<img class="h-12 w-12 flex items-center"{src} alt="ai generated architecture">
  </div>
  <div>
    <div class="text-xl font-medium text-black">ChitChat</div>
    <p class="text-slate-500">You have a new message!</p>
  </div>
</div>
<Array/>
<p> {@html string} </p>
-->
<style lang="postcss">
	:global(html) {
		background-color: theme(colors.primary);
	}
</style>

