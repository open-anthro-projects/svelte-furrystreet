<script lang="ts">
    interface SVGProps {
        height?: String;
        width?: String;
        fill?: String;
    }

    export let props: SVGProps;
    export let d: string;
    export let viewBox = "0 0 24 24"

    function buildCSSStyleString(svgProps:SVGProps){
    let styleString = ""; 
    for (const key in svgProps) {
        styleString = styleString + "--svgIcon-"+ `${key}`+ ": " + `${svgProps[key]};` + " " 
    }
    return styleString;
  }

  let cssStyleString = buildCSSStyleString(props);
</script>

<style>
    .svgIcon{
        height: var(--nm-ui-svgPathIcon-height, 1.5em);
        width: var(--nm-ui-svgPathIcon-width, 1.5em);
        fill: var(--nm-ui-svgPathIcon-fill, currentColor);
    }
</style>

{#if cssStyleString == ""}
    <svg class="{$$restProps.class || ''} svgIcon" focusable="false" viewBox={viewBox} aria-hidden="true" data-testid="svg">
        <path d={d} />
    </svg>
{:else}
    <svg class="{$$restProps.class || ''} svgIcon" style="{cssStyleString}" focusable="false" viewBox={viewBox} aria-hidden="true" data-testid="svg">
        <path d={d} />
    </svg>
{/if}

