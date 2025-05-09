<script>
    let { db, sign_up } = $props();
    let email = $state();
    let pass = $state();
    async function sign_in() {
        try {
            let token = await db.signin({
                namespace: "dev",
                database: "chancho",
                access: "account",
                variables: {
                    email: email,
                    pass: pass,
                },
            });
            localStorage.setItem("token", token);
            location.reload();
        } catch (err) {
            console.error(
                "Failed to Sign-In:",
                err instanceof Error ? err.message : String(err),
            );
            await db.close();
            throw err;
        }
    }
</script>

<form class="ui-form rounded-xl w-3/4 m-auto p-4">
    <label class="flex flex-row justify-between my-3 w-full place-content-end">
        email:
        <input
            bind:value={email}
            type="text"
            class="w-3/4 pri2-bg text-center"
        />
    </label>
    <label class="flex flex-row justify-between my-3 w-full place-content-end">
        pass:
        <input
            bind:value={pass}
            type="password"
            class="w-3/4 pri2-bg text-center"
        />
    </label>
    <button
        onclick={sign_in}
        type="submit"
        class="my-3 ui-border pri2-bord pri2-bg ui-button"
    >
        login
    </button>
    <button
        onclick={sign_up}
        class="my-3 ui-border pri2-bord pri2-bg ui-button"
    >
        create an account
    </button>
</form>
