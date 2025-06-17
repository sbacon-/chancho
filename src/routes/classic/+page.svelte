<script>
    import { onMount } from "svelte";
    import NavBar from "$lib/classic/NavBar.svelte";
    onMount(() => {
        populate_library();
    });
    let library = [];
    function populate_library() {
        fetch("/res/scripts/library.json")
            .then((response) => response.json())
            .then((data) => {
                library = data;
            });

        var element = document.getElementById("library");
        element.addEventListener("wheel", (evt) => {
            evt.preventDefault();
            element.scrollLeft += evt.deltaY;
        });
    }
</script>

<div class="page">
    <div class="pagesec">
        <NavBar />
        <article>
            <section class="md:mx-8 text">
                <ul
                    class="list-none flex overflow-scroll overflow-x-scroll"
                    id="library"
                >
                    {#each library as project}
                        <a
                            href="/classic{project.reference}"
                            aria-label={project.title}
                        >
                            <li
                                class="w-[25vh] h-[25vh] bg-contain border-4 rounded-[40%] pri3-bord"
                                style="background-image: url({project.card});"
                            ></li>
                        </a>
                    {/each}
                </ul>
            </section>
            <section class="h-[60%]">
                <h3 class="text-xl text-center">Updates</h3>
                <p>
                    Welcome to the new & improved Chancho.dev 3.0<br />
                    Complete with a fresh coat of paint!!<br />
                    <br />
                    I've setup a server to host the site locally to allow for POST
                    requests.<br />
                    This will allow me to create leader boards, and other PHP functionality.<br
                    />
                    Excited to add new features and pages<br />
                    <br />
                    I've also created a new C++ program that writes the HTML for
                    me.<br />
                    Making it far easier to frequently add new content. So stay tuned.<br
                    />
                    Check it out over on
                    <a href="https://github.com/sbacon-/chancho">
                        gitHub
                    </a>.<br />
                    On a semi-related note, the minecraft server is back:
                    <em>mc.chancho.dev</em><br />
                    <br />
                    11/27/22<br />
                    Updated the CSS again, made some changes to the 'Amoeba' java
                    project for repurposing to my new job.<br />
                    Github Link:
                    <a href="https://github.com/sbacon-/AMOEBA">AMOEBA</a><br />
                    06/20/22<br />
                    Getting back from vacation, considering refactoring the gdChess
                    Trainer to better utilize UCI<br />
                    06/08/22<br />
                    Just completed some consulting work for peer reviewing macros
                    in excel<br />
                    Email me your sheets if you'd like to join the queue.<br />
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
