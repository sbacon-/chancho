<script src="/updates/updates.js">
  import Updates from './Updates.svelte'
</script>

<div class="col-span-6 text-left">
    <Updates/>
</div>
<div class="col-span-6 text-left">
<h3 class="">
Current Project: Rebuild the Site using the new stack.</h3>
<p class="text-left">
Working with a new stack for my website, previously this was mainly Apache and a 
custom HTML build framework I had written in
<a class="underline" href="https://github.com/sbacon-/chancho/tree/classic/what">
  C++.
</a>
Ultimately this has proved to be too limiting and due to my poor documentation on how to use, it became instant legacy code. So I've decided to make the move to a new stack.
Currently: Node, Svelte, TailwindCSS, NGINX
My hope is to use NGINX as a reverse proxy, which will allow me serve more dynamic content through Node.
Svelte and Tailwind are proving to be incredibly fast and light weight.
<br>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis id assumenda reiciendis laborum perferendis recusandae suscipit pariatur architecto dignissimos beatae ullam quos asperiores omnis necessitatibus accusantium ad labore dolorum, aliquam fugit provident sequi tempora nihil! Officia ea quasi, ut soluta minus expedita ducimus modi atque odit aperiam exercitationem beatae, voluptatum inventore!
</p>
<ul id="library"></ul>
</div>
