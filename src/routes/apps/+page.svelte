<script>
	/*Chancho Dot Dev v 23.02.07
	const siteData = {
		name:"chancho.dev",
		version:"23.2.8",
		frontend: ["Svelte","TailWindCSS, NodeJS"],
		backend: ["NGINX","Fedora Server 37"]
	}
	*/
    import Dice from "$lib/apps/Dice.svelte";
    import Taskr from "$lib/apps/Taskr.svelte";
    import Domino from "$lib/apps/Domino.svelte";
    import Pomodoro from "$lib/apps/Pomo.svelte";
    let apps = ["Home","Accord","Taskr"];
    let selection = 0;

    function back(){window.location.assign('/')};
</script>


<div class="page">
    <section class="pagesec">
        <Pomodoro/>
        <Domino/>
        <Taskr/>
        <Dice/>
        <button on:click={back} class="ui-button">back</button>
    </section>
	<!--<Footer/>-->
</div>
