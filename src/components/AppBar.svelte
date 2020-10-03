<script lang="ts">
  import type { AppBarProps } from './AppBar'
  import Row from './Row.svelte'
  export let props: AppBarProps
</script>

<style>
  header {
    height: var(--height);
    top: var(--top);
    bottom: var(--bottom);
    width: 100%;
    background-color: var(--main-bg-color, --main-text-color);
    color: var(--main-text-color);
    position: fixed;
    z-index: 1200;
    box-shadow: var(--boxShadow);
    transition: all 0.5s;
  }
</style>

<header
  style=" --height:{props.height}; --top:{props.top}; --bottom:{props.bottom};
  --boxShadow:{props.boxShadow}">
  <Row>
    <slot />
  </Row>
</header>
