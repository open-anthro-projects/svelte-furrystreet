<script lang="ts">
	export let active = false;
    export let variant: "modal" | "persistent" = "modal";
    export let anchor: "left" | "right" | "top" | "bottom" = "left";
    export let id: string = null;

</script>

<style>

    .left{
        left: 0;
        top: 0;
        bottom: 0;
        width: 256px;
        transform: translate(-100%,0);
    }

    
    .right{
        right: 0;
        top: 0;
        bottom: 0;
        width: 256px;
        transform: translate(100%,0);
    }

    .top{
        left: 0;
        top: 0;
        right: 0;
        height: 256px;
        transform: translate(0,-100%);
    }

    .bottom{
        left: 0;
        bottom: 0;
        right: 0;
        height: 256px;
        transform: translate(0,100%);
    }

    .active{
        transform: translate(0,0);
    }
    
    .modal{
        z-index: 1200;
        position: fixed;
    }

    .drawer{
        flex: 1 0 auto;
        display: flex;
        outline: 0;
        overflow: auto;
        flex-direction: column;
        -webkit-overflow-scrolling: touch;
        background-color: #fff;
        transition-duration: 0.5s;
        transition-timing-function: cubic-bezier(0.2, 0, 0.5, 1);
        will-change: auto;
        transition-property: transform, visibility, width;
    }

</style>

<aside {id} class="drawer" 
    class:left = {anchor === 'left'}
    class:right = {anchor === 'right'}
    class:top = {anchor === 'top'}  
    class:bottom = {anchor === 'bottom'}     
    class:active class:modal = 
    {variant === 'modal'}>
        <slot/>
</aside>
