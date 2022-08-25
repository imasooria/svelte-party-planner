import { writable } from 'svelte/store';
import { tweened } from 'svelte/motion';
import { cubicOut } from 'svelte/easing';

export const progress = tweened(0, {
    duration: 400,
    easing: cubicOut
})

export const state = writable({
    startParty: false,
    page: "home",
    partyMembers: [],
    headings: {
        "home": "",
        "partyMembers": "Phase 1 - Add Party Members",
        "partyDrinks": "Phase 3 - Add Food and Drinks",
        "partyGlimpse": "Here is the glimpse of you party"
    }
});