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
      <section class="feature">
        {#if progressLoaded && loaderLoaded}
          <script>
            var unityInstance = UnityLoader.instantiate(
              "unityContainer",
              "/res/files/MazeGenerator/Build/Unity Builds.json",
              { onProgress: UnityProgress },
            );
          </script>
          <div class="center" style="width: 600px; height: 648px">
            <div class="webgl-content">
              <div
                id="unityContainer"
                style="width: 600px; height: 600px"
              ></div>
              <small>R - Generate A New Maze</small>
            </div>
          </div>
        {/if}
      </section>
      <section class="text">
        <h2>Algorithmic Maze Generation</h2>
        <p>
          This is a randomized variation of a depth first search algorithm, the
          basic structure is as follows:<br />
        </p>
        <ul>
          <li>
            At each iteration the current node checks which neigbors are
            unexplored.
          </li>
          <br />
          <ul>
            <li>
              If all neighbors are explored, we will begin backtracking through
              the stack to the first cell with unexplored neighbors
            </li>
          </ul>
          <br />
          <li>
            Picking a neigbor at random it will remove the wall that separates
            them.
          </li>
          <br />
          <li>
            The current node is added to the stack and the neighboring node will
            begin the next iteration
          </li>
          <br />
        </ul>
        <p>
          <a
            href="https://github.com/sbacon-/MazeAlgorithmScripts/blob/master/Depth%20First%20Search.cs"
            >View Source Code</a
          >
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
