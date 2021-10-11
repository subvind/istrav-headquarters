import { writable } from 'svelte/store';

export let backend = writable('');
export let sidebarVisibility = writable(true)
export let sidebarActive = writable('')
export let sidebarMode = writable('')

// export let appData = writable({});