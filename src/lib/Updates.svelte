<script>
  import { onMount } from "svelte";
  import Fa from "svelte-fa";
  import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";
  import {
    faCookie,
    faVideo,
    faRobot,
    faGamepad
  } from "@fortawesome/free-solid-svg-icons";
  let { hex_len, hex_alt, db } = $props();
  let updates = $state({});
  let showing = $state(0);
  let updates_height = $derived(3 * (hex_len / 4));
  let updates_margin = $derived(hex_alt / 8);
  function increment() {
    if (showing < updates.length - 1) showing++;
  }
  function decrement() {
    if (showing != 0) showing--;
  }
  async function get_updates() {
    updates = await db.query(
      "SELECT date,icon,link,text FROM updates ORDER BY date DESC",
    );
    updates = updates[0];
  }
  onMount(() => {
    get_updates();
  });
</script>

<div
  style="height: {updates_height}px; margin: 0px {updates_margin}px;"
  class="lg:border-8 pri2-bord rounded-2xl grid grid-cols-3 grid-rows-8"
>
  <h3 class="lg:border-b-4 pri3-bord col-span-3 my-auto px-auto">
    Updates<em>!!</em>
  </h3>
  {#each updates as { date, icon, link, text }, i}
    {#if i == showing}
      <p
        class="lg:border-b-4 lg:border-r-4 pri3-bord col-span-2 py-auto underline"
      >
        {date.toDateString()}
      </p>
      {#if icon != ""}
        <a
          class="col-start-3 row-span-6
          text-7xl text-center m-auto p-3
          hover:border-4 rounded-xl pri2-bord
          hover:bg-pri3 dark:hover:bg-pri3dark transition-all"
          href={link}
        >
          {#if icon == "video"}
            <Fa icon={faVideo} />
          {:else if icon == "github"}
            <Fa icon={faGithubAlt} />
          {:else if icon == "game"}
            <Fa icon={faGamepad} />
          {:else if icon == "robot"}
            <Fa icon={faRobot} />
          {:else if icon == "cookie"}
            <Fa icon={faCookie} />
          {/if}
        </a>
      {/if}
      <p class="lg:border-r-4 pri3-bord overflow-scroll col-span-2 row-span-5">
        {text}
      </p>
    {/if}
  {/each}
  <div class="lg:border-t-4 pri3-bord col-span-3 flex justify-between">
    <button
      onclick={decrement}
      class="ui-button pri2-bord pri2-bg lg:border-8 rounded-bl-lg rounded-tr-lg"
    >
      <p class="px-3">&lt;</p>
    </button>
    <button
      onclick={increment}
      class="ui-button pri2-bord pri2-bg lg:border-8 rounded-br-lg rounded-tl-lg"
    >
      <p class="px-3">&gt;</p>
    </button>
  </div>
</div>
