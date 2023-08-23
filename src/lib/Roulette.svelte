<script>
    export let w,h,hex_len,hex_alt;

    function apps(){
        window.location.assign("/apps");
    };
    
</script>
<div style="height: {hex_len/4}px; width:{hex_alt*2};">
    <button on:click={apps} class="ui-button">apps</button>
</div>
