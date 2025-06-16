<script>
    import NavBar from "$lib/classic/NavBar.svelte";

    let big_picture = false
    
    let width = 256 * 3
    let height = 240 * 3

    function adjust_size() {
        if (big_picture) {
            width = 256 * 3
            height = 240 * 3
        }else{
            width= 256 * 4
            height= 240 * 4
        }
        big_picture = !big_picture
    }
</script>

<div class="page">
    <div class="pagesec">
        <NavBar />
        <article>
            <section class="full">
                <iframe width={width} height={height} src="/res/files/gdPacman/index.html" title="Pacman" class="m-auto"></iframe><br/>
                <button class="text-sm w-[25%] pri2-bg ui-button ui-border pri2-bord" on:click={adjust_size}>big_picture: {big_picture}</button>
            </section>
            {#if !big_picture}
            <section class="text">
                <h3>Pacman</h3>
                <p>
                    Move - Arrow Keys or WASD <br/>
		    Start - Spacebar <br/>
		    Alt Movement - JKL; (vim movement)
                    Downloads:<br/>
                    <a href="/res/files/gdPacman/Pacman.exe">Windows</a><br/>
                    <a href="/res/files/gdPacman/Pacman.x86_64">Linux</a><br/>
                    <a href="https://github.com/sbacon-/pacman">
                        Source Code - Godot Project
                    </a>
                </p>
            </section>
            {/if}
        </article>
        <footer>
            <div>
                Contact:
                <a href="mailto:tom@chancho.dev">Email</a> or
                <a href="tel:+14703802933">Call</a>
            </div>
        </footer>
    </div>
</div>
