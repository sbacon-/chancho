<script>
    import {tick, onMount} from 'svelte';
    export let w,h,hex_len,hex_alt,measure,dark;
    let canvas;
    function draw(){
        let neu = dark()?"rgba(34,34,34,0.5)":"rgba(239,239,239,0.5)";
        let grey = "#787878"
        let c = canvas.getContext('2d');
        let center = {x:w/2,y:h/2};
        let hex = [
            center.x-hex_alt,center.y-hex_len/2,
            center.x,center.y-hex_len,
            center.x+hex_alt,center.y-hex_len/2,
            center.x+hex_alt,center.y+hex_len/2,
            center.x,center.y+hex_len,
            center.x-hex_alt,center.y+hex_len/2,
        ];

        c.beginPath();
        c.moveTo(hex[0],hex[1]);
        for(let i=2; i<hex.length; i+=2){
            c.lineTo(hex[i],hex[i+1]);
        }
        c.closePath();
        c.strokeStyle = grey;
        c.lineWidth = 2;
        c.stroke();
        c.fillStyle = neu;
        c.fill();

        c.beginPath();
        c.arc(center.x,center.y,hex_len,0,Math.PI*2,true);
        c.closePath();
        c.fill();

        c.beginPath();
        c.arc(center.x,center.y,hex_alt,0,Math.PI*2,true);
        c.closePath();
        c.fill();
    }
    onMount(async ()=>{
        await tick();
        draw();
        addEventListener("resize",draw);
    });
</script>
<canvas 
        bind:this="{canvas}"
        id="canvas" 
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
