<script>
    let {hex_len, hex_alt,display_options_menu} = $props();
    function apps(){window.location.assign("/apps");};
    function ai(){window.location.assign("/ai");};
    function classic(){window.location.assign("/classic");};
    function options(){
      display_options_menu = !display_options_menu;
    }
    let button_width = $derived(hex_alt*1.5/(display_options_menu?4:3));
    let button_height = $derived((hex_len/4));
</script>
<div style="height:{button_height}px; padding: {button_height/4}px 0px;">
    <button onclick={apps} class="pri2-bg ui-button ui-border pri2-bord h-full">
        <h2 style="width:{button_width}px;" class="md:underline">apps</h2>
    </button>
    <button onclick={classic} class="pri2-bg ui-button ui-border pri2-bord h-full">
        <h2 style="width:{button_width}px;" class="md:underline">classic β</h2>
    </button>
    <button onclick={ai} class="pri2-bg ui-button ui-border pri2-bord h-full">
        <h2 style="width:{button_width}px;" class="md:underline">ai</h2>
    </button>
    {#if display_options_menu}
      <button onclick={options} class="pri2-bg ui-button ui-border pri2-bord h-full">
          <h2 style="width:{button_width}px;" class="md:underline">options</h2>
      </button>
    {/if}
</div>
