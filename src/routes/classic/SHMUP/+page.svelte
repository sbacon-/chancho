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
      {#if progressLoaded && loaderLoaded}
        <script>
          var unityInstance = UnityLoader.instantiate(
            "unityContainer",
            "/res/files/SHMUP/Build/SHMUP.json",
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
              <div class="title">Shoot 'Em Up Prototype</div>
            </div>
          </div>
        </div>
      {/if}
      <section class="text">
        <h2>SHMUP</h2>
        <p>
          Had a great weekend making this, wanted to complete a project on a LD
          Jam Timeline in the Unity Engine, this is about 2 days or work. Very
          happy with the results, collision is terrible and I had meant to
          implement some sort of boost system, but I decided to focus more on
          visuals and overall feel of the game.<br />
          <a
            href="https://github.com/sbacon-/MazeAlgorithmScripts/blob/master/Depth%20First%20Search.cs"
            >View Source Code</a
          >
        </p>
      </section>
    </article>
    <footer class="text-xs">
      <div>
        Contact:
        <a href="mailto:tom@chancho.dev">Email</a> or
        <a href="tel:+14703802933">Call</a>
      </div>
    </footer>
  </div>
</div>
