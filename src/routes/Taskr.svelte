<script>
	import Fa from 'svelte-fa';
	import { onMount } from 'svelte';
	import { faPencil } from '@fortawesome/free-solid-svg-icons';
	import { faBomb } from '@fortawesome/free-solid-svg-icons';
	import { faFloppyDisk } from '@fortawesome/free-solid-svg-icons';

	let todos = [];
	let todoText = '';
	let confirm_dialogue = "";

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
			confirm_dialogue="";
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
</script>

<div class="grow flex flex-col">
	<h3 class="text-2xl text-center underline">TODO:</h3>
	<div class="grow flex flex-col mainBorder border-4 border-dotted border-pri2 rounded-xl m-auto" >
	<!--READ TASKS-->
	<div class="basis-11/12 flex flex-col grow min-h-[10vh]">
		<ul>
			{#each todos as todo}
				<a on:click={deleteTodo(todo)}>
					<li class="text-center hover:bg-pri3 dark:hover:bg-pri2dark w-auto m-auto">
						{todo}
					</li>
				</a>
			{/each}
		</ul>
	</div>
	<!--WRITE TASKS-->
	<form on:submit|preventDefault={addTodo} class="basis-1/12 border-dotted border-pri2 border-t-4" action="" >
		<div class="text-xl underline flex">
			<label for="task" class="grow" >
				<Fa class="grow text-pri2" icon="{faPencil}"/>
			</label>
			<a class="flex" on:click={clearAll}>
				<Fa class="inline" icon="{faBomb}"/>
				<h3> 	{confirm_dialogue} </h3>
			</a>
		</div>
		<div class="w-[90vw] lg:w-[20vw] flex ">
			<input bind:value={todoText} type="text" id="task" name="task" class="px-2 bg-pri3 dark:bg-pri2dark border-1 border-pri3 dark:border-pri2dark rounded-xl basis-10/12">
			<a on:click={addTodo} class="grow text-center my-auto hBack rounded-xl transition-all duration-1000">
				<Fa class="" icon="{faFloppyDisk}"/>
			</a>
		</div>
	</form>
	</div>
</div>


