import { writable } from 'svelte/store';

function setTheme() {
    const { subscribe, set, update } = writable("light");

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
            let theme  = window.localStorage.getItem(key);
            if (theme) {
                set(theme)
            }
        }
    };
}

export const theme = setTheme();

//window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

//const userPrefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;

//if(userPrefersDark){
//    console.log("User prefers a dark interface");
//}