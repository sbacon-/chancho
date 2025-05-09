<script>
  import NavBar from "$lib/classic/NavBar.svelte";
  import UnityContainer from "$lib/classic/UnityContainer.svelte";
</script>

<div class="page">
  <div class="pagesec">
    <NavBar />
    <article>
      <section class="feature">
        <UnityContainer project="DolphinJump" , name="DolphinJump" />
      </section>
      <section class="text">
        <h2>DolphinJump</h2>
        <p>
          Went and got a 3D printer this week so I made a game out of a model I
          made to print. T-minus 5 days to Ludum Dare 48!<br />
          <a href="/res/img/dolphindesign1.png"
            ><img
              src="/res/img/dolphindesign1.png"
              alt="Dolphin Design Doc 1"
            /></a
          ><br />
          <a href="/res/img/dolphindesign2.png"
            ><img
              src="/res/img/dolphindesign2.png"
              alt="Dolphin Design Doc 2"
            /></a
          ><br />
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
