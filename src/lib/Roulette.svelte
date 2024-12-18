<script>
    export let w,h,hex_len,hex_alt,display_options_menu;
    function apps(){window.location.assign("/apps");};
    function ai(){window.location.assign("/ai");};
    function classic(){window.location.assign("/classics");};
    function options_menu(){
      display_options_menu = !display_options_menu;
    }

</script>
<div style="width:{hex_alt*2}px;" class="py-3">
    <button on:click={apps} class="bord ui-button hover:bg-pri3 dark:hover:bg-pri3dark transition-all">
        <h2 style="width:{hex_alt/2}px;"class="underline">apps<h2>
    </button>
    <button on:click={classic} class="bord ui-button hover:bg-pri3 dark:hover:bg-pri3dark transition-all">
        <h2 style="width:{hex_alt/2}px;"class="underline">classic β<h2>
    </button>
    {#if display_options_menu}
      <button on:click={options_menu} class="bord ui-button hover:bg-pri3 dark:hover:bg-pri3dark transition-all">
          <h2 style="width:{hex_alt/2}px;"class="underline">options<h2>
      </button>
    {/if}
</div>
