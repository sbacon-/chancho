<script>
	import Fa from "svelte-fa";
	import { onMount } from "svelte";
	import { faFileImport } from "@fortawesome/free-solid-svg-icons";
	import { faGear } from "@fortawesome/free-solid-svg-icons";
	import { faBomb } from "@fortawesome/free-solid-svg-icons";
	import { faPencil } from "@fortawesome/free-solid-svg-icons";
	import { faFloppyDisk } from "@fortawesome/free-solid-svg-icons";

	let widget_name = "Todo";
	let todoText = "";
	let confirm_dialogue = "Clear";

	let todos = [];
	onMount(() => {
		const existingTodos = localStorage.getItem("todos");
		todos = JSON.parse(existingTodos) || [];
	});

	function clickTodo(index) {
		console.log(index);
		todos = todos.filter((a) => a !== index);
		localStorage.setItem("todos", JSON.stringify(todos));
	}

	//FETCH
	function fetchData() {}

	function abortFetch() {}

	//CREATE

	function addTodo() {
		if (todoText == "") return;
		todos = [...todos, todoText];
		localStorage.setItem("todos", JSON.stringify(todos));
		todoText = "";
	}

	//UPDATE
	function selectMode() {
		alert("do something");
	}
	function abortGear() {}

	//DELETE
	function clearAll() {
		if (confirm()) {
			todos = [];
			confirm_dialogue = "Clear";
			localStorage.removeItem("todos");
		}
	}
	function confirm() {
		let confirm_text = "Clear All?";
		if (confirm_dialogue != confirm_text) {
			confirm_dialogue = confirm_text;
			return false;
		} else {
			return true;
		}
	}
	function abortClear() {
		confirm_dialogue = "Clear";
	}
</script>

<div class="grow flex flex-col updates">
	<div class="app bord">
		<h3 class="text-center underline">
			{widget_name}<em class="red-txt">!!</em>
		</h3>
		<!--READ TASKS-->
		<div class="basis-11/12 flex flex-col grow min-h-[10vh]">
			<ul>
				{#each todos as todo}
					<a on:click|preventDefault={clickTodo(todo)} href="/#">
						<li
							class="text-center hover:bg-pri3 dark:hover:bg-pri2dark m-auto text-xl"
						>
							{todo}
						</li>
					</a>
				{/each}
			</ul>
		</div>
		<!--WRITE TASKS-->
		<form
			on:submit|preventDefault={addTodo}
			class="flex flex-col m-3 border-dotted border-pri3 dark:border-pri2dark border-t-4"
			action=""
		>
			<div class="grow text-xl flex my-3">
				<a
					aria-label="update"
					class="taskFunction flex"
					href="/#"
					on:mouseleave={abortGear}
					on:click|preventDefault={selectMode}
				>
					<Fa icon={faGear} />
					UPDATE
				</a>
				<a
					aria-label="fetch"
					class="taskFunction flex"
					href="/#"
					on:mouseleave={abortFetch}
					on:click|preventDefault={fetchData}
				>
					<Fa icon={faFileImport} />
					FETCH
				</a>
				<a
					aria-label="delete"
					class="taskFunction flex"
					href="/#"
					on:mouseleave={abortClear}
					on:click|preventDefault={clearAll}
				>
					<Fa icon={faBomb} />
					DELETE
				</a>
			</div>
			<div
				class="grow flex p-2 bg-pri3 dark:bg-pri2dark hover:dark:bg-pri2dark duration-1000 rounded-3xl"
			>
				<Fa class="grow m-auto" icon={faPencil} />
				<input
					placeholder="CREATE"
					bind:value={todoText}
					type="text"
					id="task"
					name="task"
					class="p-3 bg-pri3 dark:bg-pri2dark border-2 border-text dark:border-textdark rounded-3xl basis-10/12 tranistion-color duration-1000"
				/>
				<Fa class="grow m-auto" icon={faFloppyDisk} />
			</div>
		</form>
	</div>
</div>
