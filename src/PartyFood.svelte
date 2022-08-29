<script>

    import {progress, state} from "./store.js";
    import {getFoodDescription, updateState, updateStateMultiple} from "./lib/utils.js";

    let colas = 0;
    let beers = 0;
    let pizzas = 0;
    let IceScreams = 0;
    let flavours = ['Mint choc chip'];

    let menu = [
        'Cookies and cream',
        'Mint choc chip',
        'Raspberry ripple'
    ];

    const prevPage = () => state.set(updateState($state, "page", "PartyMembers"));

    const nextPage = () => {
        let newState = {
            "boozeDescription": getFoodDescription( colas, beers, pizzas, IceScreams),
            "page" : "PartyGlimpse"
        }
        state.set(updateStateMultiple($state, newState))
        progress.set(100);
    }

</script>

<div class="paper border grid form-group grid">

    <div class="r1">
        <button class="disabled">
            <i  class=" fa-solid fa-bottle-droplet"></i>
        </button>
        <h2>&nbsp; {colas} -  Colas</h2>
        <input  class="range" type=number bind:value={colas} min=0 max=10>
        <input type=range bind:value={colas} min=0 max=10>
    </div>

    <div class="r2">
        <button class="disabled">
            <i class="fa-solid fa-martini-glass"></i>
        </button>
        <h2>&nbsp; {beers} -  Booze</h2>
        <input class="range" type=number bind:value={beers} min=0 max=10>
        <input type=range bind:value={beers} min=0 max=10>
    </div>

    <div class="r3">
        <button class="disabled">
            <i class="fas fa-pizza-slice"></i>
        </button>
        <h2>&nbsp; {pizzas} -  Pizzas</h2>
        <input class="range" type=number bind:value={pizzas} min=0 max=10>
        <input type=range bind:value={pizzas} min=0 max=10>
    </div>


    <div class="r4">
        <button class="disabled">
            <i class="fas fa-ice-cream"></i>
        </button>
        <h2>&nbsp; {IceScreams} - I Screams </h2>
        <input class="range" type=number bind:value={IceScreams} min=0 max=10>
        <select  multiple bind:value={flavours}>
            {#each menu as flavour}
                <option value={flavour}>
                    {flavour}
                </option>
            {/each}
        </select>

    </div>
    <div class="r5">
        <button class="text-secondary " on:click={prevPage} >Prev Phase</button>
        <button class="text-secondary " on:click={nextPage} >Next Phase</button>
    </div>


</div>



<style>
    .grid{
        display: grid;
        justify-content: center;
        grid-template-rows: 100px 100px 100px 160px 100px;
        grid-template-columns: 1fr 4fr 1fr ;
        overflow: auto; height: 100%
    }
    .r1{
        grid-row: 1/2;
        grid-column: 2/3;
        display: flex;
        align-items: center;
        justify-content: end;
    }
    .r2{
        grid-row: 2/3;
        grid-column: 2/3;
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }

    .r3{
        grid-row: 3/4;
        grid-column: 2/3;
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }

    .r4{
        grid-row: 4/5;
        grid-column: 2/3;
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }

    .r5{
        grid-row: 5/6;
        grid-column: 1/4;
        display: flex;
        flex-direction: row;
        align-items: stretch;
        justify-content: space-evenly;
    }

    .f1{
        display: flex;
        justify-content: space-between;
        border: #8f8d89;
    }
    
    h2 {
        flex-grow: 2 
    }

    input{
        flex-grow: 4;
    }
    .range {
        flex-grow: 1
    }
    select{
        min-height: 150px;
        min-width: 250px;
    }

</style>