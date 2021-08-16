<script lang="ts">
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    let clazz = '';
    export {clazz as class}
    export let id:string = null;
    export let style:string = null;
    export let data_testid:string = null;

    function click() {
        dispatch('click');
	}

  </script>

<style>
  .nm-ui-icon-button-base {
    border: 0px;
    border-radius: 50%;
    transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    color: inherit;
    padding: 12px;
  }

  .nm-ui-icon-button-base:hover {
    background-color: rgba(0, 0, 0, 0.04);
  }

  .nm-ui-icon-button-style {
    background-color: var(--nm-ui-button-background-color, transparent);
  }
</style>

<button on:click={click} {id} data-testid={data_testid} 
  class="nm-ui-icon-button-base nm-ui-icon-button-style {clazz} "
  style={style}>
  <slot />
</button>