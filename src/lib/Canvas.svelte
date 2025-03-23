<script>
    import {tick, onMount} from 'svelte';
    let {w, h, hex_len, hex_alt, dark} = $props();
    let canvas;
    function draw(){
        let neu = dark?"rgba(0,0,0,0.5)":"rgba(255,255,255,0.5)";
        let c2d = canvas.getContext('2d');
        let center = {x:w/2,y:h/2};
        let hex = [
            {x:center.x-hex_alt,y:center.y-hex_len/2},
            {x:center.x, y:center.y-hex_len},
            {x:center.x+hex_alt, y:center.y-hex_len/2},
            {x:center.x+hex_alt, y:center.y+hex_len/2},
            {x:center.x, y:center.y+hex_len},
            {x:center.x-hex_alt, y:center.y+hex_len/2}
        ];
        c2d.fillStyle = neu;
        
        c2d.beginPath();
        c2d.moveTo(hex[0].x,hex[0].y);
        for(let i=1; i<hex.length; i++){
            c2d.lineTo(hex[i].x, hex[i].y);
        }
        c2d.closePath();
        c2d.fill();

        c2d.beginPath();
        c2d.arc(center.x,center.y,hex_len,0,Math.PI*2,true);
        c2d.closePath();
        c2d.fill();
    }
    onMount(async ()=>{
        await tick();
        draw();
        addEventListener("resize",draw);
    });
</script>
<canvas 
    bind:this="{canvas}"
    width ="{w}"
    height="{h}"
    class="absolute 
        -z-50 
        bg-pri1
        dark:bg-pri1dark
        w-full
        h-full
    ">
</canvas>
