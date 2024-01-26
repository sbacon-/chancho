<script>
    export let db;

    let email, pass
    async function sign_in(){
        try{
      let token = await db.signin({
      NS: 'chancho',
      DB: 'ai',
      SC: 'allusers',
      user: email,
      pass: pass,
      });
      localStorage.setItem('token',token);
        location.reload();
        }
        catch{
        }
    }
 
</script>
<form class="ui-form m-auto w-4/6">
    <label class="ui-label" > user 
    <input bind:value={email} type="text" class="ui-input">
    </label>
    <label class="ui-label" > pass 
    <input bind:value={pass} type="password" class="ui-input">
    </label>
    <button on:click={sign_in} type="submit" class="ui-button">login</button>
</form>
