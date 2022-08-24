<script>
    import {getPartyMemberHeading, updateState} from "./lib/utils.js";
    import { fly, fade } from 'svelte/transition';
    import { state } from "./store.js";
    let newItem = '';
    let todoList = []

    $: Heading = todoList.length > 0 ? pHead : "No Members Yet";
    $: pHead = getPartyMemberHeading(todoList);

    const addToList = () => {
        if(newItem.length > 0){
            todoList = [...todoList, {text: newItem}];
            newItem = '';
        }
    }

    const setPage = () => {
        state.set(updateState($state, "page", "booze"));
        state.set(updateState($state, "progress", "50"));
    }

    const remove = (todo) => todoList = todoList.filter(t => t !== todo);

</script>


<h2> Phase 1 - Add Party members</h2>
<div class="grid">

    <div class="r1" style="display: flex; align-items: stretch">
        <input style="flex-grow: 3;"
               bind:value={newItem}
               type="text"
               placeholder="Add new Party member.">

        <button style="flex-grow: 1;" on:click={addToList}>
            Add
        </button>
    </div>

    <div class="r3">
        <h4 style="color: #8f8d89">{Heading}</h4>
        {#each todoList as todo}
            <div transition:fly="{{ y: -200, duration: 1000 }}" class=" f1">
                <h3 > {todo.text} </h3>
                <button on:click="{() => remove(todo)}">
                    <i class="fa-solid fa-user-slash"></i>
                </button>
            </div>
        {/each}

        <button style="display: flex; justify-content: end" on:click={setPage} >next</button>
    </div>

</div>


<style>
    .grid{
        display: grid;
        justify-content: center;
        grid-template-rows: 100px 10px 100px 10px;
        grid-template-columns: 1fr 4fr 1fr ;
    }
    .r1{
        grid-row: 1/2;
        grid-column: 2/3;
    }
    .r2{
        grid-row: 2/3;
        grid-column: 2/3;
    }

    .r3{
        display: flex;
        flex-direction: column;
        grid-row: 3/4;
        grid-column: 2/3;
    }

    .r4{
        display: flex;
        flex-direction: column;
        grid-row: 5/6;
        grid-column: 2/3;
    }

    .f1{
        display: flex;
        justify-content: space-between;
    }

</style>