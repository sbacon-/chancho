<script>
    import { onMount, onDestroy } from "svelte";
    import { Surreal } from "surrealdb";
    import TextComplete from "$lib/ai/TextComplete.svelte";
    const db = new Surreal();
    let user, id, rec_interval;
    let log_status = "";
    let mode = "Chat Complete";
    let response = true;
    let history = ["hello llama3", "..."];
    let prompt = "";
    let previous_msg = "";
    function back() {
        window.location.assign("/");
    }
    async function surrealdb() {
        await db.connect("https://www.chancho.dev/rpc", {
            namespace: "dev",
            database: "chancho",
        });
        auth();
    }
    async function auth() {
        try {
            await db.authenticate(localStorage.getItem("token"));
            let query = await db.query("SELECT id, username FROM user");
            user = query[0][0].username;
            id = query[0][0].id;
            log_status = "auth";
        } catch {
            log_status = "invalid";
        }
        receive();
    }
    async function send() {
        const created = await db.create("ai", {
            prompt: prompt.replaceAll(",", "").replaceAll("'",""),
            reply: "...",
            timestamp: new Date(),
            mode: mode,
            user: id,
            response: response,
        });
        if (mode == "Chat Complete" && response) {
            const query = await db.relate(
                created[0].id,
                "replies",
                previous_msg.id,
            );
        }
        prompt = "";
    }
    function switchText() {
        mode = mode == "Text Complete" ? "Chat Complete" : "Text Complete";
        receive();
    }
    async function receive() {
        try {
            let query = await db.query(
                "SELECT * FROM ai WHERE user=$id AND mode=$mode ORDER BY timestamp DESC",
                { mode: mode, id: id },
            );
            if (query[0].length != 0) {
                previous_msg = query[0][0];
            }
            history = [];
            query[0].forEach((result) => {
                history.push(result.reply);
                history.push(result.prompt);
            });
        } catch {
            log_status = "invalid";
        }
    }
    onMount(() => {
        receive();
        rec_interval = setInterval(receive, 1000);
        surrealdb();
    });
    onDestroy(() => {
        clearInterval(rec_interval);
    });
</script>

<div class="page">
    <section class="pagesec pri2-bord border-4">
        {#if log_status == "auth"}
            <form class="ui-form">
                <div>
                    <button
                        on:click={switchText}
                        class="p-2 m-2 border-2 rounded-xl pri2-bg pri2-bord ui-button"
                    >
                        {mode}
                    </button>
                    <button
                        on:click={back}
                        class="p-2 m-2 border-2 rounded-xl pri2-bg pri2-bord ui-button"
                    >
                        back
                    </button>
                </div>
                <h1 class="ui-label">
                    Welcome, {user == null ? "guest" : user}!
                </h1>
                <div>
                    <input
                        type="text"
                        class="p-2 m-2 w-[75%] rounded-xl pri2-bg ui-input bord"
                        bind:value={prompt}
                        placeholder="prompt..."
                    />
                    <button
                        on:click={send}
                        class="p-2 m-2 border-2 rounded-xl pri2-bg pri2-bord ui-button"
                    >
                        send
                    </button>
                </div>
                {#if mode == "Chat Complete"}
                    <label>
                        send as response
                        <input
                            class="p-2 ui-input"
                            type="checkbox"
                            bind:checked={response}
                        />
                    </label>
                {/if}
	    	<p>
			Llama 3.2-11B-Vision <i class="hidden md:inline">(please allow up to 60 seconds for a response)</i>
	    	</p>
            </form>
            <TextComplete {history} />
            <br />
        {:else if log_status == "invalid"}
            <h1>Something went wrong :(</h1>
            <button on:click={back} class="ui-button">back</button>
        {:else}
            <button on:click={back} class="ui-button">back</button>
        {/if}
    </section>
</div>
