<script>
    import { onMount } from "svelte";
    import NavBar from "$lib/classic/NavBar.svelte";

    let scriptLoaded = false;
</script>

<div class="page">
    <div class="pagesec">
        <NavBar />
        <article>
            <section class="feature">
                <iframe width=960 height=540 src="/res/files/gdChess2/gdChess.html" title="gdChess2"></iframe>
            </section>
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
