<script lang="ts">
	export let active = false;
    export let variant: "temporary" | "persistent" = "temporary";
    export let anchor: "left" | "right" | "top" | "bottom" = "left";
    export let id: string = null;

    const testje = {
        modal: true,
    }

    $: style = "";
</script>

<style>

    :not(.active){
        transform: translate(-100%,0);
    }

    .left{
        left: 0;
    }

    .position{
        left: 0;
        right: auto;
        top: auto;
        bottom: auto;
    }

    .modal{

    }
    

    .drawer{
        flex: var(--test);
        height: 100%;
        display: flex;
        outline: 0;
        z-index: 1200;
        position: fixed;
        width: 256px;
        overflow: auto;
        flex-direction: column;
        -webkit-overflow-scrolling: touch;
        background-color: #fff;
        transition-duration: 0.5s;
        transition-timing-function: cubic-bezier(0.2, 0, 0.5, 1);
        will-change: auto;
        transition-property: transform, visibility, width;
    }

    

    .drawer2{
        position: fixed;
        width: 256px;
        height: 100%;
        background: white;
        z-index: 3;
        transition: transform 0.2s ease;
        overflow: auto;
        max-width: calc(100% - 256px);
    min-width: calc(100% - 256px);
    }
</style>

<aside {id} class="drawer position" class:left = {anchor === 'left'} class:active class:modal = {variant === 'temporary'} style={style}><slot/></aside>
