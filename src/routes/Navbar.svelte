<script> 
	import Fa from 'svelte-fa'
	import Dropmenu from './Dropmenu.svelte'
  import { faGithub } from '@fortawesome/free-brands-svg-icons'
  import { faStackOverflow } from '@fortawesome/free-brands-svg-icons'
  import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
	
	let drop = {display: false, toggle:toggleDrop}

	function activateDrop(){
		drop.display = true;
	}
	function toggleDrop(){
		drop.display = !drop.display;
	}
</script>
<div class="fixed flex top-0 left-0 w-screen h-16 bg-black text-3xl text-white shadow-2xl">
	<div class = "w-1/3 text-left text-5xl italic hover:text-bright">
	<h3>CHANCHO.dev</h3>
	</div>
	<div on:mouseover={activateDrop} class = "w-1/3 flex">
	<i class="grow">Projects</i>
	<i class="grow">About</i>
	</div>
	<div class = "h-auto w-1/3 flex">
		<Fa class = "grow hover:text-bright" icon={faStackOverflow} /> 
		<Fa class = "grow hover:text-bright" icon={faGithub} /> 
		<Fa class = "grow hover:text-bright" icon={faLinkedin} />
	</div>
</div>

{#if drop.display}
	<Dropmenu {... drop} />
{/if}

