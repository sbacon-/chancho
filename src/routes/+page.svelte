<Canvas w={w} h={h} hex_len={hex_len} hex_alt={hex_alt} measure={measure} dark={isDarkMode}/>
<nav style="width:{hex_alt*2}px; height:{hex_len*2}px;" class="m-auto text-center txt">
  <TownPortal pt={h/2-(3*hex_len/4)} pb={hex_len/4} dark={dark} dM={darkMode} lM={lightMode} hex_alt={hex_alt}/>
  <section>
    <Roulette w={w} h={h} hex_len={hex_len} hex_alt={hex_alt} display_options_menu={display_options_menu}/>
    <Updates />
  </section>
</nav>
<script>
	/*Chancho Dot Dev
	const siteData = {
		name:"chancho.dev",
		version:"24.5.6",
		frontend: ["Svelte","TailWindCSS, NodeJS"],
		backend: ["SurrealDB","Rust","Llama3","NGINX","Fedora Server 37"]
	}
	*/
  import {onMount} from 'svelte'
  import Canvas from '$lib/Canvas.svelte';
  import TownPortal from '$lib/TownPortal.svelte';
  import Roulette from '$lib/Roulette.svelte';
  import Updates from '$lib/Updates.svelte';

  //Style
  let w, h, hex_len, hex_alt, dark, display_options_menu=false;
  function measure(){
      w=window.innerWidth;
      h=window.innerHeight;
      hex_len=w>h?h/2:w/2;
      hex_alt=Math.sqrt(3)/2*hex_len;
  }
  function initDarkMode(){
      dark=isDarkMode();
      if(isDarkMode()){
          document.documentElement.classList.add('dark');
      }else{
          document.documentElement.classList.remove('dark');
      }
  }
  function lightMode(){
      localStorage.theme = 'light';
      initDarkMode();
      location.reload();
  }
  function darkMode(){
      localStorage.theme = 'dark';
      initDarkMode();
    location.reload();
  }
  function isDarkMode(){
      return localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
  }

  onMount(()=>{
      initDarkMode();
      measure();
      addEventListener("resize",measure);
      window.addEventListener("keydown", function(event) {
        if(event.ctrlKey && event.key == " "){
          display_options_menu = !display_options_menu
      }});
  })
</script>
