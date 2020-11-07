import { writable } from 'svelte/store';

<<<<<<< HEAD
export let themeKey = "nekomata-ui-theme"
=======
let themeKey = "nekomata-ui-theme"
>>>>>>> c43a2cd31dbac49b434c6fb6880f9f53ed774826

export function changeThemeKey(key:string){
    themeKey = key;
}

function setTheme() {
    const { subscribe, set, update } = writable("light");

<<<<<<< HEAD
=======
    

>>>>>>> c43a2cd31dbac49b434c6fb6880f9f53ed774826
    return {
        subscribe,
        switchTheme: () => {
            update(theme => {
                if (theme === "light") {
                    document.documentElement.setAttribute('data-theme', 'dark')
                    window.localStorage.setItem(themeKey, "dark")
                    return "dark"
                } else {
                    document.documentElement.setAttribute('data-theme', 'light')
                    window.localStorage.setItem(themeKey, "light")
                    return "light"
                }
            })
        },
        setThemeOnLoad: () => {
            let theme  = window.localStorage.getItem(themeKey);
            if (theme === "light" || theme === "dark") {
                set(theme)
            } else {
                theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light"
                set(theme) 
            }
        }
    };
}

<<<<<<< HEAD
export const theme = setTheme();
=======
export const theme = setTheme();
export const setThemeOnLoad = setTheme().setThemeOnLoad;
export const switchTheme = setTheme().switchTheme;

//window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

//const userPrefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;

//if(userPrefersDark){
//    console.log("User prefers a dark interface");
//}
>>>>>>> c43a2cd31dbac49b434c6fb6880f9f53ed774826
