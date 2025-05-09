<script>
  import NavBar from "$lib/classic/NavBar.svelte";
  import UnityContainer from "$lib/classic/UnityContainer.svelte";
</script>

<div class="page">
  <div class="pagesec">
    <NavBar />
    <article>
      <section class="feature">
        <UnityContainer project="Wordle" , name="Wordle" />
      </section>
      <section class="text">
        <h2>Wordle</h2>
        <h4>Created in 48 hours in preparation for Ludum Dare #50</h4>
        Recently started playing<a
          href="https://www.nytimes.com/games/wordle/index.html">Wordle</a
        ><br />
        Frustrated with only being able to play one round per day, I decided to create
        my own version.<br />
        The functionality is a limited, but similar enough for a small project<br
        />
        Special thanks to
        <a href="https://gist.github.com/scholtes">Garrett Sholtes</a>
        for posting the World Dictionary to GitHub<br />
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
