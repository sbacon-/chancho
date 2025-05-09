<script>
  import NavBar from "$lib/classic/NavBar.svelte";
  import UnityContainer from "$lib/classic/UnityContainer.svelte";
</script>

<div class="page">
  <div class="pagesec">
    <NavBar />
    <article>
      <section class="feature">
        <UnityContainer project="LD49" , name="LD49" />
      </section>
      <section class="text">
        <h2>Un-Named Stock Market Battle Simulator</h2>

        <h4>Created in 48 hours for Ludum Dare #49</h4>
        <br />
        <h3>Lesson's Learned</h3>
        <p>
          This project didn't turn out exactly like I'd hoped.<br />
          Not sure, but I think I had too many plans for mechanics to implement.
          After the first 12 hours of the Compo, I was already exhausted from trying
          to pull a coffee fueled 24 hour run. Ofcourse to the the detriment of the
          next few days. The scope was way beyond what I could realistically accomplish.<br
          />
        </p>
        <br />
        <h4>
          Here are the ideas I would have ignored if another theme was selected
        </h4>
        <br />
        <a href="/res/img/ld49prep.png"
          ><img
            src="/res/img/ld49prep.png"
            alt="16x2 first impressions, scribbled out in gimp"
          /></a
        >
        <p>
          The main issue I think is the game just isn't fun, (I'd opt out of
          that category on voting if I could lol). I couldn't really implement
          any incentive to trade other than to see the numbers go up. If that
          works it works, but with as little polish as I could put together in
          the time I don't think it does. I wanted to implement some sort of
          system to upgrade the hardware and enviroment, but I guess I couldn't
          be bothered.
        </p>
        <br />
        <h4>On a more positive note...</h4>
        <br />
        <p>
          I knew going into the compo that I wanted to implement a renderTexture
          of some sort. As a filter to the entire game or in the case of this
          game: as a second UI projected onto a computer screen. The vectors on
          the graph were a bit tricky, they kept disappearing when I was down
          scaling the texture to give it a more blocky look on the monitor, but
          one of my absolute favorite parts of development is the UI (as you can
          maybe tell from the game above that is about 90% UI), so I had a great
          time with it.
        </p>
        <br />
        <h5>I hope you enjoyed, I'll see you all in April.</h5>
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
