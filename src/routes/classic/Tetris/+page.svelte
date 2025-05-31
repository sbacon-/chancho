<script>
    import NavBar from "$lib/classic/NavBar.svelte";

    let big_picture = false
    
    let width = 1280
    let height = 720

    function adjust_size() {
        if (big_picture) {
            width = 1280
            height = 720
        }else{
            width=1600
            height=900
        }
        big_picture = !big_picture
    }
</script>

<div class="page">
    <div class="pagesec">
        <NavBar />
        <article>
            <section class="full">
                <iframe width={width} height={height} src="/res/files/Tetris/index.html" title="Tetris" class="m-auto"></iframe><br/>
                <button class="text-sm w-[25%] pri2-bg ui-button ui-border pri2-bord" on:click={adjust_size}>big_picture: {big_picture}</button>
            </section>
            {#if !big_picture}
            <section class="text">
                <h3>Tetris</h3>
                <p>
                    Move - Left and Right Arrow Keys (Delayed Autoshift) <br/>
                    Hard Drop - Space <br/>
                    Soft Drop - Down Arrow <br/>
                    Rotate Clockwise - Up Arrow or X <br/>
                    Rotate CounterClockwise - Control or Z <br/>
                    Hold Tetrimino - Shift or C <br/>
                    
                    Downloads:<br/>
                    <a href="/res/files/Tetris/tetris.zip">Windows</a><br/>
                    <a href="/res/files/Tetris/tetris.x86_64">Linux</a><br/>
                    <a href="https://github.com/sbacon-/tetris">
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
