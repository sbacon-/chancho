<script>
    import { onMount } from "svelte";
    import NavBar from "$lib/classic/NavBar.svelte";
    import Fa from "svelte-fa";
    import { faPlay } from "@fortawesome/free-solid-svg-icons";

    let scriptLoaded = false;

    onMount(() => {
        const script = document.createElement("script");
        script.src = "/res/files/gdChess/index.js";
        script.onload = () => {
            scriptLoaded = true;
        };
        script.onerror = () => {
            console.error("Failed to load script");
        };
        document.head.appendChild(script);
    });
</script>

<div class="page">
    <div class="pagesec">
        <NavBar />
        <article>
            <section class="feature">
                <canvas id="canvas"></canvas>
                {#if scriptLoaded}
                    <button
                        id="play"
                        class="h-full w-full pri2-bg ui-button ui-border pri2-bord p-3"
                        onclick={() =>
                            engine.startGame({ onProgress: printProgress })}
                        aria-label="play"
                    >
                        <Fa icon={faPlay} />
                    </button>
                    <script>
                        var engine = new Engine({
                            args: [],
                            canvasResizePolicy: 1,
                            executable: "index",
                            experimentalVK: false,
                            fileSizes: {
                                "index.pck": 39696,
                                "index.wasm": 13351459,
                            },
                            focusCanvas: true,
                            gdnativeLibs: [],
                        });
                        var playButton = document.querySelector("#play");
                        var canvas = document.querySelector("#canvas");
                        canvas.setAttribute("style", "display:none");
                        function printProgress(current, total) {
                            var percentage = (current / total) * 100;
                            playButton.setAttribute(
                                "style",
                                "background:linear-gradient(45deg,var(--primary-dsat) 0%,var(--primary)" +
                                    percentage +
                                    "%, var(--complementary) " +
                                    percentage +
                                    "%,var(--complementary) 100%)",
                            );
                            console.log(
                                "Loaded " + current + " of " + total + " bytes",
                            );
                            if (current == total) {
                                playButton.setAttribute(
                                    "style",
                                    "display:none",
                                );
                                canvas.setAttribute("style", "");
                            }
                        }
                    </script>
                {/if}
            </section>
            <section class="text">
                <h3>Chess</h3>
                <p>
                    Press the play button to start.<br />
                    Click and drag to move, or type moves in the text-box<br />
                    Type 'reset' to start over<br />
                    <a href="https://github.com/sbacon-/gdScript-chess">
                        Source Code
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
