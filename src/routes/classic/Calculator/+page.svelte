<script>
  import NavBar from "$lib/classic/NavBar.svelte";
</script>

<div class="page">
  <div class="pagesec">
    <NavBar />
    <article>
      <section class="feature">
        <div id="calculator">
          <div class="calc-display calc-row">0</div>
          <div class="calc-row">
            <button class="calc-button calc-wide" onclick={clearContent}
              >CE</button
            >
            <button class="calc-button" onclick={backspace}>←</button>
            <button class="calc-button" onclick={flushToMemory(`divide`)}
              >÷</button
            >
          </div>
          <div class="calc-row">
            <button class="calc-button" onclick={appendContent(`7`)}>7</button>
            <button class="calc-button" onclick={appendContent(`8`)}>8</button>
            <button class="calc-button" onclick={appendContent(`9`)}>9</button>
            <button class="calc-button" onclick={flushToMemory(`multiply`)}
              >x</button
            >
          </div>
          <div class="calc-row">
            <button class="calc-button" onclick={appendContent(`4`)}>4</button>
            <button class="calc-button" onclick={appendContent(`5`)}>5</button>
            <button class="calc-button" onclick={appendContent(`6`)}>6</button>
            <button class="calc-button" onclick={flushToMemory(`subtract`)}
              >-</button
            >
          </div>
          <div class="calc-row">
            <button class="calc-button" onclick={appendContent(`1`)}>1</button>
            <button class="calc-button" onclick={appendContent(`2`)}>2</button>
            <button class="calc-button" onclick={appendContent(`3`)}>3</button>
            <button class="calc-button" onclick={flushToMemory(`add`)}>+</button
            >
          </div>
          <div class="calc-row">
            <button class="calc-button calc-wide" onclick={appendContent(`0`)}
              >0</button
            >
            <button class="calc-button" onclick={appendContent(`.`)}>.</button>
            <button class="calc-button" onclick={calculate}>=</button>
          </div>
        </div>
        <script type="text/javascript" src="/res/scripts/calc.js"></script>
      </section>
      <section class="text">
        <h3>Javascript Calculator</h3>
        <p>
          Made this as part of a <a
            href="https://frontendmasters.com/courses/web-development-v2"
            >course in web-dev</a
          >
        </p>
        <p>
          Also made an automation tool for <a
            href="/classic/Calculator/NumToWord">currency to word conversion</a
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

<style>
  #calculator {
    background-color: #333;
    padding: 5px 0;
    width: 40%;
  }
  .calc-row {
    display: flex;
    padding: 0 5px;
    justify-content: space-between;
  }
  .calc-button:last-child {
    background-color: orange;
    border-color: lightsalmon;
  }
  .calc-button {
    background-color: grey;
    border-color: silver;
    color: #eee;
    font-size: 2em;
    padding: 1px;
    margin: 1px;
    flex: 1;
    height: 100%;
  }
  .calc-button.calc-wide {
    flex: 2;
    padding-right: 8px;
  }
  .calc-row.calc-display {
    color: #eee;
    font-size: 2.5em;
    height: 100px;
    align-items: center;
    justify-content: end;
    padding: 0 10px;
  }
</style>
