<script>
    import PartyQuote from "./PartyQuote.svelte";
    import PartyMembers from "./PartyMembers.svelte";
    import PartyBooze from "./PartyBooze.svelte";

    import { state, progress } from "./store.js";

    $: heading = $state.headings[$state.page];
</script>

<nav class="border fixed">
    <div class="nav-brand">
        <h3>
            <a href="" on:click={$state.page="home"}>Party Planner</a>
            <i class="fa-solid fa-champagne-glasses"></i>
        </h3>
    </div>
</nav>

<div class="grid">
    <div class="paper container-xs r1 border ">
        <PartyQuote />
    </div>

    <progress class="r2" value= {$progress} max="100"></progress>

    <h2 class="r3"> {heading} </h2>

    <div class="container-md r4 ">
        {#if $state.page === "partyMembers"}
                <PartyMembers />
        {:else if $state.page === "partyDrinks"}
                <PartyBooze />
        {:else}
            <img class="center" src="/ppc.png" alt=" The office party ">
        {/if}
    </div>
</div>



<style>

    .grid{
        display: grid;
        padding-top: 40px;
        grid-template-rows: 1fr 5px 100px 4fr;
        grid-template-columns: 1fr 4fr 1fr;
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
        grid-row: 3/4;
        grid-column: 2/3;
    }

    .r4{
        grid-row: 4/5;
        grid-column: 2/3;
    }

    progress {
        display: block;
        width: 100%;
    }

    .center {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 50%;
    }


</style>