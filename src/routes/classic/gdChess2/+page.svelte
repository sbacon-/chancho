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
                <iframe width={width} height={height} src="/res/files/gdChess2/gdChess.html" title="gdChess2" class="m-auto"></iframe><br/>
                <button class="text-sm w-[25%] pri2-bg ui-button ui-border pri2-bord" on:click={adjust_size}>big_picture: {big_picture}</button>
            </section>
            {#if !big_picture}
            <section class="text">
                <h3>Chess</h3>
                <p>
                    Click and drag to move, or type moves in the text-box (supports SAN: e4 e5 Nc3, you need to add ' e.p.' for en passant ex: exf6 e.p.)<br />
                    In addition to the buttons on the left you can type 'reset' to start over<br />
                    Downloads:<br/>
                    <a href="/res/files/gdChess2/gdChess_win.exe">Windows</a><br/>
                    <a href="/res/files/gdChess2/gdChess_linux.x86_64">Linux</a><br/>
                    <a href="https://github.com/sbacon-/gdScript-chess">
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
