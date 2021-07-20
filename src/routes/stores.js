import { writable } from 'svelte/store';

export const themeStore = writable("light");
export const langStore = writable("it");
export const webStore = writable("https://it.pattern.monster");
