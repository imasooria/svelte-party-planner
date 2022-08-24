import { writable } from 'svelte/store';

export const state = writable({
    startParty: false,
    page: "home"
});