<script>
    import NavBar from "$lib/classic/NavBar.svelte";
    import Fa from "svelte-fa";
    import { faClipboard } from "@fortawesome/free-solid-svg-icons";
</script>

<div class="page">
    <div class="pagesec">
        <NavBar />
        <article>
            <h5>Numbers to Word Calculator</h5>
            <p>
                Enter a number to convert to dollars and cents. Click to Copy!<br
                />
            </p>
            <div class="num-cash">
                <input
                    type="number"
                    class="num-cash-input"
                    placeholder="0000000.00"
                />
                <button class="num-result" onclick={clickToCopy}>
                    <h4 class="num-cash-output">zero dollars</h4>
                    <Fa icon={faClipboard} />
                </button>
                <script
                    type="text/javascript"
                    src="/res/scripts/numCash.js"
                ></script>
            </div>
            <p>
                Works with numbers up to one decicentillion &lbrace; 10
                <sup>333</sup> &rbrace; .<br />
                <a
                    href="https://github.com/sbacon-/chancho/blob/main/static/res/scripts/numCash.js"
                >
                    SourceCode
                </a> - (or just hit F12)
            </p>
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
