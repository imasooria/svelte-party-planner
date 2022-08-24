<script>
    import { state, progress } from "./store.js"
    import { updateStateMultiple } from "./lib/utils.js"

    const setStateMotivated = () => {

        let updatedState = updateStateMultiple(
            $state,
            {
                "startParty": true,
                "page": "partyMembers"
            }
        )
        progress.set(10)

        state.set(updatedState)
    }

    async function getRandomNumber() {
        const res = await fetch(`http://localhost:3000/`);
        const quote = await res.json();

        if (res.ok) {
            return quote;
        } else {
            throw new Error("res error");
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

    <button on:click={setStateMotivated}>
        motivated - plan a party
    </button>
</div>

<style>
    .f1{
        display: flex;
        justify-content: space-evenly;
    }
</style>