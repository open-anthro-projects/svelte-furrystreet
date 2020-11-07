<script lang="ts">
  import type { AppBarProps } from './AppBar'
  export let props: AppBarProps
</script>

<style>
  header {
    display: flex;
    flex-direction: column;
    width: 100%;
    flex-shrink: 0;
    position: fixed;
    z-index: 1200;
    top: var(--top, initial);
    left: initial;
    right: initial;
    bottom: var(--bottom, initial);
    height: var(--height);
    background-color: var(--main-bg-color, --main-text-color);
    color: var(--main-text-color);
    box-shadow: var(--boxShadow);
    transition: all 0.5s;
  }
</style>

<header style=" --height:{props.height}; --top:{props.top}; --bottom:{props.bottom};
  --boxShadow:{props.boxShadow}">
    <slot />
</header>
