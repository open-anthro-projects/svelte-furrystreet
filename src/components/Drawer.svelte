<script lang="ts">
    import { slide } from 'svelte/transition';
	export let visible = true;
</script>

<style>
    .drawer{
        top: 0;
        flex: 1 0 auto;
        height: 100%;
        display: flex;
        outline: 0;
        z-index: 1099;
        width: 240px;
        position: fixed;
        overflow-y: auto;
        flex-direction: column;
        -webkit-overflow-scrolling: touch;
        background-color: #fff;
    }
</style>

{#if visible}
    <aside transition:slide class="drawer" style=""><slot/></aside>
{/if}
