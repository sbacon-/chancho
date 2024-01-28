<script>
    export let db, back;

    let email, pass1, pass2, mark, pass_help="";
    async function sign_up(){
        if(pass1==pass2){
            try{
          let token = await db.signup({
              NS: 'chancho',
              DB: 'ai',
              SC: 'allusers',
              user: email,
              pass: pass1,
              marketing: mark=="",
              tags: [],
          });
          localStorage.setItem('token',token);
            location.reload();
            }catch{}
        }else{
            pass_help="passwords do not match";
        }
    

    }
 
</script>
<form class="bord ui-form">
    <p>By creating an account you agree to our <a href="chancho_license.txt" class="underline"> Terms & License Agreements</a>
        <br>{pass_help}</p>
    <label class="ui-label">email
    <input bind:value={email} class="bord ui-input" type="text" required>
    </label>
    <label class="ui-label">pass1
    <input bind:value={pass1} class="bord ui-input" type="password" required>
    </label>
    <label class="ui-label">pass2
    <input bind:value={pass2} class="bord ui-input" type="password" required>
    </label>
    <label class="">
    <input bind:value={mark} class="bord ui-button" type="checkbox">
    Email me stuff
    </label>
    <button on:click={sign_up} class="bord ui-button w-1/5" type="submit">signup</button>
    <button on:click={back} class="bord ui-button w-1/5">back</button>
</form>

