<script>
    import {getPartyMemberHeading, updateState} from "./lib/utils.js";
    import { fly } from 'svelte/transition';
    import { state } from "./store.js";
    let newMember = '';
    $: partyMembers = $state.partyMembers
    $: Heading = getPartyMemberHeading(partyMembers);

    const addMember = () => {
        partyMembers.push(newMember)
        state.set(updateState($state, "partyMembers", partyMembers))
        newMember = '';
    }

    const setPage = () => state.set(updateState($state, "page", "PartyFood"));

    const removeMember = (member) => {
        partyMembers = partyMembers.filter(t => t !== member);
        state.set(updateState($state, "partyMembers", partyMembers))
    }

</script>

<div class="paper border grid">

    <div class="r1 form">
        <input bind:value={newMember}
               type="text"
               placeholder="Add new Party member.">

        <button id="form-button" on:click={addMember} disabled={newMember.length <= 1}>
            Add
        </button>
    </div>

    <div class="r2">
        <h4>{Heading}</h4>

        {#each $state.partyMembers as member}

            <div in:fly="{{ x: -200, duration: 500 }}"
                 out:fly|local="{{ x: 200, duration: 500 }}"
                 class=" f1">

                <h3> {member} </h3>

                <button on:click="{() => removeMember(member)}">
                    <i class="fa-solid fa-user-slash"></i>
                </button>

            </div>

        {/each}

        <button class="text-secondary" on:click={setPage} >Next Phase</button>
    </div>

</div>


<style>
    .grid{
        display: grid;
        justify-content: center;
        grid-template-rows: 100px 10px 100px 10px;
        grid-template-columns: 1fr 4fr 1fr ;
        overflow: auto; height: 100%
    }
    .r1{
        grid-row: 1/2;
        grid-column: 2/3;
    }
    .r2{
        grid-row: 2/3;
        grid-column: 2/3;
        max-height: 200px;
    }

    .f1{
        display: flex;
        justify-content: space-between;
        border: #8f8d89;
    }

    .form {
        display: flex;
        align-items: stretch
    }
     input{
         flex-grow: 4;
     }

    #form-button{
        flex-grow: 1;
     }

     h4 {
         color: #8f8d89
     }



</style>