<script>
    import PartyQuote from "./PartyQuote.svelte";
    import PartyMembers from "./PartyMembers.svelte";
    import PartyBooze from "./PartyBooze.svelte";

    import { state, progress } from "./store.js";

</script>

<nav class="border fixed">
    <div class="nav-brand">
        <h3><a href="#">Party Planner</a>  <i class="fa-solid fa-champagne-glasses"></i> </h3>
    </div>
</nav>

<div class="grid">
    <div class="paper container-xs r1 border ">
        <PartyQuote class="paper container-sm r1" />
    </div>

    <progress class="r2" value= {$progress} max="100"></progress>

    <div class="container-md r3 ">
        {#if $state.page === "partyMembers" && $state.startParty}
                <PartyMembers />
        {:else if $state.page === "booze"}
                <PartyBooze />
        {/if}
    </div>
</div>



<style>

    .grid{
        display: grid;
        padding-top: 40px;
        grid-template-rows: 1fr 5px 3fr 1fr;
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

    progress {
        display: block;
        width: 100%;
    }


</style>