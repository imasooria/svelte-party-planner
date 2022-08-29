<script>
    import MemberCard from "./MemberCard.svelte";
    import { state } from "./store.js";

    let members = $state.partyMembers;
    let description = $state.boozeDescription;
</script>

<div class=" paper border grid">
    <div class="container-md r1 ">
            <img class="center" src="/Party_ready.png" alt=" The office party ">
    </div>

    <div class="r2">
        {#each members as member}
            <MemberCard memberName={member} />
        {/each}
    </div>

    <div class="r3">
        <h4>{description}</h4>
    </div>
</div>

<style>

    .grid{
        display: grid;
        padding-top: 40px;
        grid-template-rows: 500px 100px 50px 200px ;
        grid-template-columns: 1fr 6fr 1fr;
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
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }
    .r4{
        grid-row: 4/5;
        grid-column: 2/3;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }
    progress {
        display: block;
        width: 100%;
    }
    .center {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 100%;
        height: 100%;
    }
    .gif {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 40%;
        height: 80%;
    }


</style>