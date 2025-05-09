<script>
  import { onMount } from "svelte";
  import { Surreal } from "surrealdb";
  import Canvas from "$lib/Canvas.svelte";
  import SignIn from "$lib/SignIn.svelte";
  import SignUp from "$lib/SignUp.svelte";
  import TownPortal from "$lib/TownPortal.svelte";
  import Roulette from "$lib/Roulette.svelte";
  import Updates from "$lib/Updates.svelte";
  let w,
    h,
    hex_len,
    hex_alt,
    dark,
    display_options_menu = false;
  const db = new Surreal();
  let log_status = "";
  async function surrealdb() {
    try {
      await db.connect("https://www.chancho.dev/rpc", {
        namespace: "dev",
        database: "chancho",
      });
      await db.ready;
      auth();
    } catch (err) {
      console.error(
        "Failed to connect to SurrealDB:",
        err instanceof Error ? err.message : String(err),
      );
      await db.close();
      throw err;
    }
  }
  async function auth() {
    try {
      let tok = await db.authenticate(localStorage.getItem("token"));
      log_status = "auth";
    } catch {
      log_status = "signin";
    }
  }
  function sign_in() {
    log_status = "signin";
  }
  function sign_up() {
    log_status = "signup";
  }
  function sign_out() {
    db.invalidate();
    log_status = "";
    localStorage.setItem("token", "");
    location.reload();
  }
  function measure() {
    w = window.innerWidth;
    h = window.innerHeight;
    hex_len = h < w ? h / 2 : w / 2;
    hex_alt = (Math.sqrt(3) / 2) * hex_len;
  }
  function initDarkMode() {
    dark = isDarkMode();
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }
  function lightMode() {
    localStorage.theme = "light";
    initDarkMode();
    location.reload();
  }
  function darkMode() {
    localStorage.theme = "dark";
    initDarkMode();
    location.reload();
  }
  function isDarkMode() {
    return (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  }
  onMount(() => {
    surrealdb();
    initDarkMode();
    measure();
    addEventListener("resize", measure);
    window.addEventListener("keydown", function (event) {
      if (event.ctrlKey && event.key == " ") {
        display_options_menu = !display_options_menu;
      }
    });
  });
</script>

<Canvas {w} {h} {hex_len} {hex_alt} {dark} />
<div
  style="width:{hex_alt * 2}px; height:{hex_len * 2}px;"
  class="m-auto text-center txt"
>
  <TownPortal
    {dark}
    {darkMode}
    {lightMode}
    {hex_len}
    adjust={h < w ? 0 : h / 2 - w / 2}
  />
  <section style="height: {hex_len}px;">
    {#if log_status == "signin"}
      <SignIn {db} {sign_up} />
    {:else if log_status == "signup"}
      <SignUp {db} {sign_in} />
    {:else if log_status == "auth"}
      <Roulette {hex_len} {hex_alt} {display_options_menu} />
      <Updates {hex_len} {hex_alt} {db} />
      <button
        onclick={sign_out}
        class="pri2-bg ui-button pri2-bord ui-border my-3 px-3">logout</button
      >
    {/if}
  </section>
</div>
