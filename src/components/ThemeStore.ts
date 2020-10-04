import { writable } from 'svelte/store';

function createTheme() {
    const { subscribe, set, update } = writable("dark");

    const key = "nekomata-ui-theme"

    return {
        subscribe,
        switchTheme: () => {
            update(theme => {
                if (theme === "light") {
                    document.documentElement.setAttribute('data-theme', 'dark')
                    window.localStorage.setItem(key, "dark")
                    return "dark"
                } else {
                    document.documentElement.setAttribute('data-theme', 'light')
                    window.localStorage.setItem(key, "light")
                    return "light"
                }
            })
        },
        setThemeOnLoad: () => {
            let theme  = window.localStorage.getItem(key) || 'light';
            document.documentElement.setAttribute('data-theme', theme)
            set(theme)
        }
    };
}

export const theme = createTheme();