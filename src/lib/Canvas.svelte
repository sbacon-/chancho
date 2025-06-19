<script>
	import { tick, onMount } from "svelte";
    	let { w, h, hex_len, hex_alt, dark } = $props();
    	let canvas;
	let degrees = 0;
    	function draw() {
        	let neu = dark ? "rgba(0,0,0,0.5)" : "rgba(255,255,255,0.5)";
		let c2d = canvas.getContext("2d");    
		let center = { x: w / 2, y: h / 2 };
		let radians = degrees * Math.PI/180;

		c2d.clearRect(0,0,canvas.width,canvas.height);
		c2d.fillStyle = neu;

		c2d.beginPath();
		c2d.moveTo(center.x + hex_len* Math.sin(-radians),center.y + hex_len * Math.cos(-radians));
		for (let i = 60; i < 360; i+= 60) {
			let rad = (degrees + i) * Math.PI/180
			c2d.lineTo(center.x + hex_len * Math.sin(-rad),center.y + hex_len * Math.cos(-rad));
		}
		c2d.closePath();
		c2d.fill();
		
		radians = (degrees+30) * Math.PI/180;
		c2d.beginPath();
		c2d.moveTo(center.x + hex_alt* Math.sin(-radians),center.y + hex_alt * Math.cos(-radians));
		for (let i = 60; i < 360; i+= 60) {
			let rad = (degrees+30 + i) * Math.PI/180
			c2d.lineTo(center.x + hex_alt * Math.sin(-rad),center.y + hex_alt * Math.cos(-rad));
		}
		c2d.closePath();
		c2d.fill()

		c2d.beginPath();
		c2d.arc(center.x, center.y, hex_len, 0, Math.PI * 2, true);
		c2d.closePath();
		c2d.fill();
	}
	onMount(async () => {
		await tick();
		draw();
		addEventListener("resize", draw);
		const id = setInterval(() => {
			degrees += 0.25;
			if (degrees >= 360) {
				degrees = 0;
			}
			draw();
		},1000/60);
	});
</script>

<canvas
    	bind:this={canvas}
    	width={w}
    	height={h}
    	class="absolute -z-50 bg-pri1 dark:bg-pri1dark w-full h-full"
>
</canvas>
