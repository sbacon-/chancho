<script>
	/*Chancho Dot Dev v 23.02.07
	const siteData = {
		name:"chancho.dev",
		version:"23.2.8",
		frontend: ["Svelte","TailWindCSS, NodeJS"],
		backend: ["NGINX","Fedora Server 37"]
	}
	*/
    import Nav from "../Navbar.svelte";
    import Dice from "./Dice.svelte";
    import Taskr from "./Taskr.svelte";
    import Domino from "./Domino.svelte";
    import Pomodoro from "./Pomo.svelte";
    let apps = ["Home","Accord","Taskr"];
    let selection = 0;
</script>


<div class=page>
    <nav class="pagenav">
        <Nav/>
    </nav>
    <section class="pagesec">
        <Pomodoro/>
        <Domino/>
        <Dice/>
        <Taskr/>
    </section>
	<!--<Footer/>-->
</div>
