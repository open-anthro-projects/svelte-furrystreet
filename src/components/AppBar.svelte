<script lang="ts">
    interface AppBarProps {
        height: string;
        top: string;
    }
    export let props: AppBarProps
</script>

<style>
    header{
        height: var(--height);
        top: var(--top);
        width: 100%;
        background-color: black;
        color:white;
        position: fixed;
        z-index: 1200;
    }
</style>

<header style="--height:{props.height};--top:{props.top}">
    Let's test this.
</header>