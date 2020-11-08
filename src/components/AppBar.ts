export interface AppBarProps {
    display?: string;
    flexDirection?: string;
    boxSizing?: string;
    width?: string;
    flexShrink?: string;
    position: string;
    zIndex?: number;
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
    backgroundColor?: string;
    color?: string;
    boxShadow?: string;
    transition?: string;
}

export function buildCSSStyleString(appBarProps:AppBarProps){
    let styleString = ""; 
    for (const key in appBarProps) {
        styleString = styleString + "--appbar-"+ `${key}`+ ": " + `${appBarProps[key]};` + " " 
    }
    return styleString;
}