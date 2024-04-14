<script>
    export let w,h,hex_len,hex_alt;

    function apps(){window.location.assign("/apps");};
    function ai(){window.location.assign("/ai");};
    function classic(){window.location.assign("/classics");};
</script>
<div style="width:{hex_alt*2}px;" class="py-3">
    <button on:click={apps} class="bord ui-button hover:bg-pri3 dark:hover:bg-pri3dark transition-all">
        <h2 style="width:{hex_alt/2}px;"class="underline">apps<h2>
    </button>
    <button on:click={ai} class="bord ui-button hover:bg-pri3 dark:hover:bg-pri3dark transition-all">
        <h2 style="width:{hex_alt/2}px;"class="underline">llama2<h2>
    </button>
    <button on:click={classic} class="bord ui-button hover:bg-pri3 dark:hover:bg-pri3dark transition-all">
        <h2 style="width:{hex_alt/2}px;"class="underline">classic β<h2>
    </button>
</div>
