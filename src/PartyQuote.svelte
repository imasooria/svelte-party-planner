<script>
    import { state, progress } from "./store.js"
    import { updateState } from "./lib/utils.js"
    let planText = "Motivated ? Plan a Party"

    const setStateMotivated = () => {
        planText = "Planning in progress";
        let updatedState = updateState($state, "page", "PartyMembers");
        state.set(updatedState)
        progress.set(10);
    }

    const getMotivationQuote = async () => {
        const res = await fetch(`https://partyquotes.herokuapp.com/`);
        return await res.json();
    }

    let promise = getMotivationQuote();

    const handleClick = () => promise = getMotivationQuote();


</script>

{#await promise}
    <p>...looking for motivation around the world</p>
{:then motivation}
    <div class="motivation">
        <i class="fa-solid fa-quote-left"></i>
        <h3> {motivation["quote"]}</h3>  <h4>{motivation["by"]}</h4>
    </div>
{:catch error}
    <p style="color: red">{error.message}</p>
{/await}

<div class="flex-buttons">
    <button on:click={handleClick}>
        Get More Motivation
    </button>

    <button class="text-secondary" on:click|once={setStateMotivated}>
        {planText}
    </button>
</div>

<style>

    .motivation{
        display: flex;
        align-content: center;
        justify-content: space-between;
    }

    .flex-buttons{
        display: flex;
        justify-content: space-evenly;
    }


</style>