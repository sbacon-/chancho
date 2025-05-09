<script>
  import NavBar from "$lib/classic/NavBar.svelte";
  import UnityContainer from "$lib/classic/UnityContainer.svelte";
</script>

<div class="page">
  <div class="pagesec">
    <NavBar />
    <article>
      <section class="feature">
        <UnityContainer project="Depths" , name="The Depths" />
      </section>
      <section class="text">
        <h2>The Depths</h2>
        <h3>
          <a href="/res/files/DepthsULTIMATEXII.zip"
            >WINDOWS STANDALONE VERION</a
          >
        </h3>
        Made in 48 for LD48 - Thanks for taking the time to play, if you would be
        so kind as to leave a review it would be much appreciated.
        <a
          href="https://ldjam.com/events/ludum-dare/48/the-depths-ultimate-edition-xxi"
          >LDJAM<em>.com</em></a
        >.<br />
        <br />
        <h3>Lessons Learned:</h3>
        <ol>
          <li><strong>HOW NOT TO DO A CAMERA ON A 2.5D PLATFORMER</strong></li>
          <img
            src="/res/img/LD48 Progress 42hr.gif"
            alt="Sea Level, Shark Attack Gif"
          /><br />
          I'll admit, during development I had gotten so used to seeing it in that
          perspective. Did not think anything was wrong with how I handled the camera.
          The bias of having made the levels and movement mechanics gave a sort of
          blindness to how bad it is. Upon release however, most of the criticisms
          are about how difficult the camera makes navigating the levels. I don't
          imagine this conveys the experience I was hoping for if you don't know
          where you're going. I considered fixing in an update, but it doesn't really
          seem in the spirit of the compo. May revisit once the compo is over, if
          you have any suggestions to improve the camera please include in your review.
          <li><strong>MAKING A LEVEL FROM A PNG</strong></li>
          One of the strategies I used as a time save here was to make a method in
          the Game Manager script that reads the color of pixels in a png to create
          the level; At this point all I had to do was draw out the images in paint
          and read out the colors to generate the level. EZ. Here are some of the
          source images.<br />
          <img src="/res/img/seaLVL3.png" alt="Sea Level 3" />
          <img src="/res/img/seaLVL5.png" alt="Sea Level 5" />
          <img src="/res/img/spaceL2.png" alt="Space Level 2" />
          <br />
          The Code is as follows:
          <code
            ><br />
            float layerZ = 0;<br />
            foreach(Sprite s in level)&lbrace;<em style="color:chartreuse"
              >//Serialized list of sprites, next time I'll likely use one large
              sprite and calculate which portions to use</em
            ><br />
            layerZ++;<em style="color:chartreuse"
              >//Only used 5 layers, but didn't know if I wanted to add more
              depth</em
            ><br />
            levelColors=s.texture.GetPixels32();<em style="color:chartreuse"
              >//STORES THE SPRITE AS AN ARRAY OF PIXELS</em
            ><br />
            for(int y = 0; y&lt;s.rect.height; y++)&lbrace;<br />
            for(int x = 0; x&lt;s.rect.width; x++)&lbrace;<br />
            Color32 c = levelColors[(int)(x+y*s.rect.width)];<br />
            Vector3 pos = new Vector3(x*2,y*2,layerZ*2);<em
              style="color:chartreuse"
              >//THE TERRAIN BLOCKS WERE ALL 2m<sup>3</sup></em
            ><br />
            <br />
            <em style="color:chartreuse"
              >//REALIZING NOW THIS WOULD HAVE BEEN MORE EFFICIENT AS A SWITCH
              STATEMENT</em
            ><br />
            if(CompareColor(c,black))&lbrace;<br />
            GameObject go = Instantiate(blockPrefab,pos,Quaternion.identity);<br
            />
            <em style="color:chartreuse"
              >//Block Prefab if the pixel is black</em
            ><br />
            &rbrace;<br />
            else if(CompareColor(c,gray4))&lbrace;<br />
            GameObject go = Instantiate(platPrefab,pos,Quaternion.identity);<br
            />
            <em style="color:chartreuse">//Vine Prefab</em><br />
            &rbrace; else if(CompareColor(c,cyan))&lbrace;<br />
            GameObject go = Instantiate(guardPrefab,pos,Quaternion.identity);<br
            />
            <em style="color:chartreuse"
              >//This was a transparent block to keep the enemies on their
              platforms</em
            ><br />
            &rbrace;<br />
            else if(CompareColor(c,yellow))&lbrace;<br />
            GameObject go = Instantiate(coinPrefab,pos,Quaternion.identity);<br
            />
            <em style="color:chartreuse">//Coins</em><br />
            &rbrace; <br />
            else if (CompareColor(c, red)) &lbrace;<br />
            GameObject go = Instantiate(enemyPrefab, pos, Quaternion.identity);<br
            />
            <em style="color:chartreuse">//Enemy-namely Gators</em><br />
            &rbrace; <br />
            else if (CompareColor(c, chartreuse)) &lbrace;<br />
            GameObject go = Instantiate(sharkPrefab, pos, Quaternion.identity);<br
            />
            <em style="color:chartreuse"
              >//Sharks or meteors on the space lvl</em
            ><br />
            ...<br />
          </code>
          Thanks to this technique I was able to do way more levels than I anticipated:
          didn't get to all of them<br />
          I had planned on a Dream level called Deep Sleep, and a Depths of Hell
          final level. But I would have had to do props and music for those and there
          was no way I'd have time for all that.<br />
          <li><strong>REUSING AND REPURPOSING ASSETS</strong></li>
          <img src="/res/img/LD48.jpg" alt="3D Print Low Poly Skull" /><img
            src="/res/img/LD48 Progress 45hr.gif"
            alt="Final Boss"
          /><br />
          I used the skull model in almost every level, and even as the final boss.<br
          />
          Used the same platform and vine block on every level recolored and resized.
          Repurposed the vines that I had made on the first level to be stalactites,
          kelp, and arms on the final boss.<br />
          The shark behaviour script was the exact same as the alligator script,
          with the ability to move on the Y-Axis; Come to think of it, I probably
          could have just used the same script with a bool to check if it could move
          along the Y. The sharks were a bit of an after though though, honestly
          didn't think I'd make it to that many levels in the 48 hrs.<br />
          The meteors on the space level is the exact same rock on the mine level,
          with some crater extrusion and the ruby particle system removed.<br />
          Particle effect of the bubbles was flipped and sprite swapped/sped up for
          the stars on the following level.<br />
          <br />
          Moral of this story is that it can be really fun to try to find lazy ways
          to add more content to the game with no additional work.
        </ol>
        <br /><br />
        <h5>I hope you enjoyed, I'll see you all in October.</h5>
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
