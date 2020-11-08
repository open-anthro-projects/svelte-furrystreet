<script lang="ts">
  import type { AppBarProps } from './AppBar'
  import { buildCSSStyleString } from './AppBar'
  export let props: AppBarProps
</script>

<style>
  header {
    width: 100%;
    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    box-sizing: border-box;
    z-index: 1100;
  }

  .position {
    top: var(--appbar-top, initial);
    left: initial;
    right: initial;
    bottom: var(--appbar-bottom, initial);
    position: var(--appbar-position, "initial");
  }

  .style {
    color: var(--main-text-color);
    background-color: var(--main-bg-color);
    transition: all 0.5s;
    box-shadow: var(--appbar-boxShadow);
  }
</style>

<header class="style position" style="{buildCSSStyleString(props)}">
  <slot />
</header>
