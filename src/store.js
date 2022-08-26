import { writable } from 'svelte/store';
import { tweened } from 'svelte/motion';
import { cubicOut } from 'svelte/easing';

export const progress = tweened(0, {
    duration: 400,
    easing: cubicOut
})

export const state = writable({
    startParty: false,
    page: "PartyHome",
    partyMembers: [],
    boozeDescription: "nothing",
    headings: {
        "PartyHome": "",
        "partyMembers": "Phase 1 - Add Party Members",
        "partyFood": "Phase 2 - Add Food and Drinks",
        "partyGlimpse": "Here is the glimpse of your party"
    }
});