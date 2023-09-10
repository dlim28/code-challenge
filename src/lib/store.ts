import {writable} from "svelte/store";

export const hideMobileMenu = writable(true)
export let preferredCoinData = writable({})