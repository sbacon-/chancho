<script>
    let { db, sign_in } = $props();
    let username = $state();
    let email = $state();
    let pass1 = $state();
    let pass2 = $state();
    let marketing = $state();
    let pass_help = $state();
    async function sign_up() {
        if (pass1 == pass2) {
            try {
                let token = await db.signup({
                    namespace: "dev",
                    database: "chancho",
                    access: "account",
                    variables: {
                        username: username,
                        email: email,
                        pass: pass1,
                        marketing: marketing,
                        tags: [],
                    },
                });
                localStorage.setItem("token", token);
                location.reload();
            } catch (err) {
                console.error(
                    "Failed to Sign-Up:",
                    err instanceof Error ? err.message : String(err),
                );
                await db.close();
                throw err;
            }
        } else {
            pass_help = "passwords do not match";
        }
    }
</script>

<form class="ui-form rounded-xl w-3/4 m-auto p-4">
    <p>By creating an account you agree to the</p>
    <a href="chancho_license.txt" class="underline">
        Terms & License Agreements</a
    >
    <br />
    <p>{pass_help}</p>
    <label class="flex flex-row justify-between my-3 w-full place-content-end">
        name:
        <input
            bind:value={username}
            class="w-3/4 pri2-bg text-center"
            type="text"
            required
        />
    </label>
    <label class="flex flex-row justify-between my-3 w-full place-content-end">
        email:
        <input
            bind:value={email}
            class="w-3/4 pri2-bg text-center"
            type="text"
            required
        />
    </label>
    <label class="flex flex-row justify-between my-3 w-full place-content-end">
        pass1:
        <input
            bind:value={pass1}
            class="w-3/4 pri2-bg text-center"
            type="password"
            required
        />
    </label>
    <label class="flex flex-row justify-between my-3 w-full place-content-end">
        pass2:
        <input
            bind:value={pass2}
            class="w-3/4 pri2-bg text-center"
            type="password"
            required
        />
    </label>
    <label class="flex flex-row justify-between my-3 w-full place-content-end">
        marketing:
        <input bind:checked={marketing} class="ui-button" type="checkbox" />
    </label>
    <button
        onclick={sign_up}
        class="my-3 ui-border pri2-bord pri2-bg ui-button"
        type="submit"
    >
        signup
    </button>
    <button
        onclick={sign_in}
        class="my-3 ui-border pri2-bord pri2-bg ui-button"
    >
        back
    </button>
</form>
<!--
<form class="ui-form rounded-xl w-3/4 m-auto p-4">
    <label class="flex flex-row justify-between my-3 w-full place-content-end">
        email:
        <input bind:value={email} type="text" class="w-3/4 pri2-bg text-center">
    </label>
    <label class="flex flex-row justify-between my-3 w-full place-content-end">
        pass:
        <input bind:value={pass} type="password" class="w-3/4 pri2-bg text-center">
    </label>
    <button onclick={sign_in} type="submit" class="ui-border pri2-bord pri2-bg ui-button">
        login
    </button>
</form>
-->
