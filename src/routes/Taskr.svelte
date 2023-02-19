<script>
	import Fa from 'svelte-fa';
	import { onMount } from 'svelte';
	import { faPencil } from '@fortawesome/free-solid-svg-icons';
	import { faBomb } from '@fortawesome/free-solid-svg-icons';
	import { faFloppyDisk } from '@fortawesome/free-solid-svg-icons';
	import { faFileImport } from '@fortawesome/free-solid-svg-icons';

	let widget_name="TASKR"
	let todos = [];
	let todoText = '';
	let confirm_dialogue = "Clear";

	onMount(()=>{
		const existingTodos = localStorage.getItem('todos');
		todos = JSON.parse(existingTodos) || [];
	});

	function addTodo(){
		if(todoText=="")
			return;
		todos = [...todos, todoText];
		localStorage.setItem('todos',JSON.stringify(todos));
		todoText="";
	}

	function deleteTodo(arg){
		//O(n) there must be a better way
		//Consider letting the element id be the index
		for(let i=0; i<todos.length; i++){
			if(todos[i]==arg){
				todos[i]="";
				break;
			}
		}
		localStorage.setItem('todos',JSON.stringify(todos));
	}
	function clearAll(){
		if(confirm()){
			todos=[];
			confirm_dialogue="Clear";
			localStorage.removeItem('todos');
		}
	}
	function confirm(){
		let confirm_text = "Clear All?";
		if(confirm_dialogue != confirm_text){
			confirm_dialogue = confirm_text;
			return false;
		}else{
			return true;
		}
	}
	function abortClear(){
		confirm_dialogue = "Clear";
	}
</script>

<div class="grow flex flex-col ">
	<h3 class="text-2xl text-center underline">{widget_name}</h3>
	<div class="w-[90vw] lg:w-[40vw] grow flex flex-col mainBorder border-4 border-dotted border-pri2 m-auto" >
	<!--READ TASKS-->
	<div class="basis-11/12 flex flex-col grow min-h-[10vh]">
		<ul>
			{#each todos as todo}
				<a on:click={deleteTodo(todo)}>
					<li class="text-center hover:bg-pri3 dark:hover:bg-pri2dark m-auto">
						{todo}
					</li>
				</a>
			{/each}
		</ul>
	</div>
	<!--WRITE TASKS-->
	<form on:submit|preventDefault={addTodo} class="m-3 border-dotted border-pri2 border-t-4" action="" >
		<div class="text-xl flex my-3">
			<a class="hover:bg-pri1 hover:dark:bg-pri1dark hover:text-textdark hover:dark:text-text flex grow m-auto transition-all duration-1000 rounded-3xl">
				<!--input bind:value={importKey}-->
				<Fa class="inline m-auto" icon="{faFileImport}"/>
				<p class="inline m-auto">Import File</p>
			</a>
			<a class="hover:bg-pri1 hover:dark:bg-pri1dark hover:text-textdark hover:dark:text-text flex grow m-auto transition-all duration-1000 rounded-3xl" on:mouseleave={abortClear} on:click={clearAll}>
				<!--input bind:value={importKey}-->
				<Fa class="inline m-auto" icon="{faBomb}"/>
				<p class="inline m-auto">
					{confirm_dialogue}
				</p>
			</a>
		</div>
		<div class="grow flex p-2 bg-pri3 dark:bg-pri2dark hover:dark:bg-pri2dark duration-1000 rounded-3xl">
			<Fa class="grow m-auto" icon="{faPencil}"/>
			<input bind:value={todoText} type="text" id="task" name="task" class="p-2 bg-pri3 dark:bg-pri2dark border-2 border-text rounded-3xl basis-10/12">
			<Fa class="grow m-auto" icon="{faFloppyDisk}"/>
			<!--Unnecessary Button-a on:click={addTodo} class=" grow text-center my-auto hBack rounded-3xl transition-all duration-1000"->
				<Fa class="" icon="{faFloppyDisk}"/>
			<!--/a-->
		</div>
	</form>
	</div>
</div>


