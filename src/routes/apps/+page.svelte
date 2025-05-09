<script>
    import Dice from "$lib/apps/Dice.svelte";
    import Taskr from "$lib/apps/Taskr.svelte";
    import Domino from "$lib/apps/Domino.svelte";
    import Pomodoro from "$lib/apps/Pomo.svelte";
    function back() {
        window.location.assign("/");
    }
</script>

<div class="page">
    <section class="pagesec">
        <Pomodoro />
        <Domino />
        <Taskr />
        <Dice />
        <button
            onclick={back}
            class="pri2-bg ui-button pri2-bord ui-border my-3 px-3"
        >
            back
        </button>
    </section>
    <!--<Footer/>-->
</div>
