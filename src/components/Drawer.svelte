<script lang="ts">
	export let active = false;
</script>

<style>
    :not(.active){
        transform: translateX(-100%);
    }

    .drawer{
        top: 0;
        flex: 1 0 auto;
        height: 100%;
        display: flex;
        outline: 0;
        z-index: 1099;
        position: fixed;
        width: 256px;
        overflow: hidden;
        flex-direction: column;
        -webkit-overflow-scrolling: touch;
        background-color: #fff;
        transition-duration: 0.5s;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        will-change: transform;
        transition-property: transform, visibility, width;
    }
</style>

<aside class="drawer" class:active style=""><slot/></aside>
