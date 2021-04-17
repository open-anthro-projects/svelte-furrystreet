<script lang="ts">
	export let active = false;

    const testje = {
        modal: true,
    }

    $: style = "--test:-100%,0";
</script>

<style>

    :not(.active){
        transform: translate(var(--test));
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
        flex: 1 0 auto;
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
    }
</style>

<aside class="drawer position" class:active class:modal = {testje.modal} style={style}><slot/></aside>
