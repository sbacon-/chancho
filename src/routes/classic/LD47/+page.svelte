<script>
  import { onMount } from "svelte";
  import NavBar from "$lib/classic/NavBar.svelte";
  import Fa from "svelte-fa";
  import { faPlay } from "@fortawesome/free-solid-svg-icons";

  let progressLoaded = false;
  let loaderLoaded = false;

  onMount(() => {
    const progress = document.createElement("script");
    const loader = document.createElement("script");
    progress.src = "/res/scripts/Unity/UnityProgress.js";
    loader.src = "/res/scripts/Unity/UnityLoader.js";
    progress.onload = () => {
      progressLoaded = true;
    };
    progress.onerror = () => {
      console.error("Failed to load script: Progress");
    };
    loader.onload = () => {
      loaderLoaded = true;
    };
    loader.onerror = () => {
      console.error("Failed to load script: Loader");
    };
    document.head.appendChild(progress);
    document.head.appendChild(loader);
  });
</script>

<div class="page">
  <div class="pagesec">
    <NavBar />
    <article>
      {#if progressLoaded && loaderLoaded}
        <script>
          var unityInstance = UnityLoader.instantiate(
            "unityContainer",
            "/res/files/LD47/Build/LD47.json",
            { onProgress: UnityProgress },
          );
        </script>
        <div class="center">
          <div class="webgl-content">
            <div id="unityContainer" style="width: 100%; height: 85%"></div>
            <div class="footer">
              <div class="webgl-logo"></div>
              <button
                class="unity-fullscreen-button"
                onclick={unityInstance.SetFullscreen(1)}
                aria-label="fullscreen"
              ></button>
              <div class="title">LD47</div>
            </div>
          </div>
        </div>
        <br />
      {/if}
      <section class="text">
        <h2>Lazy River Racing</h2>
        <h4>Downloads:</h4>
        <ul>
          <li><a href="/res/files/LD47.zip">LRR - Standalone (31mb)</a></li>
        </ul>
        <br />
        <p>
          Game was created in 48 hours for the <a
            href="https://ldjam.com/events/ludum-dare/47/lazy-river-racing"
            >Ludum Dare #47 Compo</a
          ><br />
          Theme: "Stuck in a Loop"<br />
          All source code can be found here:
          <a href="https://github.com/sbacon-/LD47-LazyRiverRacing">source</a
          ><br />
          ___<br />
          Had a very lazy weekend completing this <br />
          By far my most relaxed LD yet<br />
          Hope you enjoy <br />
          ___<br />
          Results<br />
          Overall: 535th (2.953 average from 34 ratings)<br />
          Fun: 374th (3.129 average from 33 ratings)<br />
          Innovation: 592nd (2.433 average from 32 ratings)<br />
          Theme: 482nd (3.145 average from 33 ratings)<br />
          Graphics: 444th (3.063 average from 34 ratings)<br />
          Audio: 327th (2.984 average from 33 ratings)<br />
          Humor: 113th (3.333 average from 32 ratings)<br />
          Mood: 374th (3.017 average from 32 ratings)<br />
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
