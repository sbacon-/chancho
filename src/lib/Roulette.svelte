<script>
    export let w,h,hex_len,hex_alt;

    function apps(){window.location.assign("/apps");};
    function ai(){window.location.assign("/ai");};
    
</script>
<div style="height: {hex_len/4}px; width:{hex_alt*2}px;">
    <button on:click={apps} class="ui-button">
        <h2 style="width:{hex_alt/2}px;"class="underline">apps<h2>
    </button>
    <button on:click={ai} class="ui-button">
        <h2 style="width:{hex_alt/2}px;"class="underline">llama2<h2>
    </button>
    <button on:click={ai} class="ui-button">
        <h2 style="width:{hex_alt/2}px;"class="underline">diffuse β<h2>
    </button>
</div>
