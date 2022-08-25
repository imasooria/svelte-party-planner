<script>
    import { state, progress } from "./store.js"
    import { updateState } from "./lib/utils.js"
    let planText = "Motivated ? Plan a Party"

    const setStateMotivated = () => {
        planText = "Planning in progress";
        let updatedState = updateState($state, "page", "partyMembers");
        state.set(updatedState)
        progress.set(10);
    }

    async function getRandomNumber() {
        // const res = await fetch(`https://partyquotes.herokuapp.com/`);
        // const quote = await res.json();
        //
        // if (res.ok) {
        //     return quote;
        // } else {
        //     throw new Error("res error");
        // }

        return {
            quote: "Life is what you celebrate. All of it. Even its end.",
            by: "Joanne Harris"
        }
    }

    let promise = getRandomNumber();

    function handleClick() {
        promise = getRandomNumber();
    }
</script>

{#await promise}
    <p>...waiting</p>
{:then number}
    <div style="display: flex; align-content: center; justify-content: space-between">
        <i class="fa-solid fa-quote-left"></i>
        <h3> {number["quote"]}</h3>  <h4>{number["by"]}</h4>
    </div>
{:catch error}
    <p style="color: red">{error.message}</p>
{/await}

<div class = "f1">
    <button on:click={handleClick}>
        get more motivation
    </button>

    <button class="text-secondary" on:click|once={setStateMotivated}>
        {planText}
    </button>
</div>

<style>
    .f1{
        display: flex;
        justify-content: space-evenly;
    }
</style>