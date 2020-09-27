<script lang="ts">
  import type { AppBarProps } from "./AppBar";
  import Row from "./Row.svelte";
  export let props: AppBarProps;
</script>

<style>
  header {
    height: var(--height);
    top: var(--top);
    bottom: var(--bottom);
    width: 100%;
    background-color: black;
    color: white;
    position: fixed;
    z-index: 1200;
  }
</style>

<header style="--height:{props.height};--top:{props.top};--bottom:{props.bottom}">
  <Row>
    <slot />
  </Row>
</header>
