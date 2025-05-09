<script>
  import NavBar from "$lib/classic/NavBar.svelte";
  import UnityContainer from "$lib/classic/UnityContainer.svelte";
</script>

<div class="page">
  <div class="pagesec">
    <NavBar />
    <article>
      <section class="feature">
        <UnityContainer project="LD50-PostJam" , name="LD50" />
      </section>
      <section class="text">
        <h2>Hotel Lazarus</h2>
        <h3>Hospitality for the recently departed</h3>
        Decided to try my hand at a tower building sim. I've been considering making
        this type of game for a while. Luckily, I was able to shoehorn the genre
        with the LD<i>L</i> theme.
        <br />
        <a href="/res/img/ld50_prep.png">
          <img
            src="/res/img/ld50_prep.png"
            alt="Hastily scribbled Game Ideas from the Final Round"
          />
        </a><br />
        <h4>Taking Lessons From Past Mistakes</h4>
        I didn't prepare as much as I typically do for the Compo. (Only one practice
        project the week before<a href="/Wordle"> Wordle Clone </a>). Before
        LD49, I spent weeks trying to learn C# best practices, Blender modeling
        techniques, and learning a new MIDI/Audio Sequencer (muse4). By the time
        the compo started I was unable to focus on what was really important:
        <br />
        <h4>Making the Project 'I' Wanted to Make</h4>
        <a href="/res/img/ld50_wb.png">
          <img
            src="/res/img/ld50_wb.png"
            alt="Whiteboard with themes: Tax Evasion, Sinking Ship, etc."
          />
        </a><br />
        Taking a more relaxed aproach this time, I made my list once the final round
        of voting started. Once the theme was announced - I wrote more ideas on the
        whiteboard to make a decision. The theme was so broad this time that I figured
        any game with a fail state could be a candidate. So I went with an idea that
        I've had since my career change into the hospitality industry.
        <br />
        <a href="/res/img/ld50_prog1.gif">
          <img
            src="/res/img/ld50_prog1.gif"
            alt="Prototype with building and Guest AI"
          />
        </a><br />
        Armed with enough chips, candy, and caffeine to feed a small village, I got
        to work; and after a few hours I had the basic structure finished. The guests
        looked a bit like a skeletons already, so with some slight adjustments a
        tone was established.
        <br />
        <h4>Lessons Learned</h4>
        <br />
        <a href="/res/img/ld50_notes.png">
          <img src="/res/img/ld50_notes.png" alt="notes for LD50" />
        </a><br />
        One of the biggest things that helped was PLAY-TESTING. In previous years,
        I've received tons of feedback on the controls in the game. I enlisted the
        help of my sister to try out the game before publishing. There were a ton
        of things I didn't consider: <br />
        <i
          >What will they do if they skip the control menu?<br />
          What if they are playing with only a mouse?<br />
          Why does nothing happen when you click the around the lobby?<br />
        </i>
        These questions never would have crossed my mind otherwise. Thanks Kass!
        <br />
        Overall, very happy with how this one turned out. Hope you enjoyed as much
        as I have, look out for a mobile release (coming soon... maybe)<br />
        See y'all in October
        <br />
        <h4>Created in 48 hours for Ludum Dare #50</h4>
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
