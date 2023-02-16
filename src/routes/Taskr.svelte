<script>
	import { onMount } from 'svelte';

	let todos = [];
	let todoText = '';

	onMount(()=>{
		const existingTodos = localStorage.getItem('todos');
		todos = JSON.parse(existingTodos) || [];
	});

	function addTodo(){
		if(todoText=="")
			return;
		todos = [...todos, todoText];
		localStorage.setItem('todos',JSON.stringify(todos));
	}

	function deleteTodo(){
		console.log("begone todo");
		todos = todos.slice(1);
		localStorage.setItem('todos',JSON.stringify(todos));
	}
</script>

<div class="grow flex flex-col">
	<h3 class="text-2xl text-center underline">TASKR: an unfriendly todo list</h3>
	<div class="grow flex flex-col border-4 border-dotted border-pri2 rounded-xl m-auto" >
	<!--READ TASKS-->
	<div class="basis-11/12 flex flex-col grow">
		<ul>
			{#each todos as todo}
				<a on:click={deleteTodo}>
					<li id={todo} class="text-center hover:bg-pri3 w-max m-auto">
						{todo}
					</li>
				</a>
			{/each}
		</ul>
	</div>
	<!--WRITE TASKS-->
	<form on:submit|preventDefault={addTodo} class="basis-1/12 border-dotted border-pri2 border-t-4" action="" >
		<h3 class="text-xl underline flex">
			<label for="task" class="grow" >Compose:</label>
			<label for="save">click on an item to remove</label>
		</h3>
		<div class="w-[90vw] lg:w-[20vw] flex bord">
			<input bind:value={todoText} type="text" id="task" name="task" class="px-2 bg-pri3 dark:bg-pri2dark border-2 border-pri3 dark:border-pri2dark basis-10/12">
			<input type="submit" value="save" class="grow transition-all hover:bg-pri3 dark:hover:bg-pri2dark">
		</div>
	</form>
	</div>
</div>


