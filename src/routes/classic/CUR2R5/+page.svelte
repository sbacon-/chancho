<script>
  import NavBar from "$lib/classic/NavBar.svelte";
  import UnityContainer from "$lib/classic/UnityContainer.svelte";
</script>

<div class="page">
  <div class="pagesec">
    <NavBar />
    <article>
      <section class="feature">
        <UnityContainer project="CUR2R5" , name="CUR2R5" />
      </section>
      <section class="text">
        <h2>Chancho's Unity Roundup 2k21 Remastered V</h2>
        It's that time of year again. Time to gear up and be ready for the most intense
        48 to 72 hours imaginable. That's right folks, Ludum Dare. I made this project
        as a refresher course. Had a ton of fun, especially with the UI. [MineSweeper].
        Ran into a few bugs with the Canvas not corresponding to the screen size
        and trying to hard code transform positions. It seems like Unity has also
        changed the way it handles exporting to Web. Overall it was a good few weeks.
        Hope you enjoy the roundup and good luck on your own Jams.
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
