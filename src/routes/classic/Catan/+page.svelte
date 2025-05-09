<script>
  import { onMount } from "svelte";
  import NavBar from "$lib/classic/NavBar.svelte";

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
      <section class="feature">
        {#if progressLoaded && loaderLoaded}
          <script>
            var unityInstance = UnityLoader.instantiate(
              "unityContainer",
              "/res/files/Catan/Build/Catan.json",
              { onProgress: UnityProgress },
            );
          </script>
          <div class="center">
            <div class="webgl-content">
              <div id="unityContainer" style="width: 100%; height:85%"></div>
              <div class="footer">
                <div class="webgl-logo"></div>
                <button
                  class="fullscreen"
                  onclick={unityInstance.SetFullscreen(1)}
                  aria-label="fullscreen"
                ></button>
                <div class="title">CATAN</div>
              </div>
            </div>
          </div>
        {/if}
      </section>
      <section class="text">
        <h3>CATAN (UNITY)</h3>
        <p>
          This is a <del>better</del>(different) version of the Java remake of
          Settlers of Catan. It was more an excercise in 3d modeling and
          programatic placement and rotation in Unity.<br />
          <em>A / D - Rotate Camera</em><br />
          <em>Shift - Get Dizzy </em><br />
        </p>
        <h3>CATAN (Pre-Alpha)</h3>
        <br />
        <h4>Downloads:</h4>
        <ul>
          <li><a href="/res/files/Catan.jar">Catan.jar a0.1.1</a></li>
        </ul>
        <br />
        <p>
          This is my current pet project, it is a recreation of my favorite
          boardgame Settlers of Catan<br />
          Latest update 11/19 includes new development card toasts to show built
          cards, and a few more cosmetic updates.<br />
          There is still much to accomplish for this project, but so far it has been
          good practice in implementing Toasts & Buttons<br />
          All source code can be found here:
          <a href="https://github.com/sbacon-/Catan.git">source</a><br />
          <strong>Screenshots:</strong><br />
          <img src="/res/img/Catan_1.png" alt="Catan Main Menu" />
          <img src="/res/img/Catan_2.png" alt="Catan Building Cost" />
          <img src="/res/img/Catan_3.png" alt="Catan Gameplay" /><br />
          <strong>TODO:</strong><br />
          Finishing Toasts<br />
          Add EndGame<br />
          Trade<br />
          Online<br />
        </p>
        <footer>
          <div>
            Contact:
            <a href="mailto:tom@chancho.dev">Email</a> or
            <a href="tel:+14703802933">Call</a>
          </div>
        </footer>
      </section>
    </article>
  </div>
</div>
