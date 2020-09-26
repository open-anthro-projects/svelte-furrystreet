<script lang="ts">
	import Nav from '../components/Nav.svelte';
	import Appbar from '../components/AppBar.svelte';
	export let segment: string;
	let myObj = { height: "56px", top: "200px" };
</script>

<style>
	main {
		position: relative;
		max-width: 56em;
		background-color: white;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>

<Appbar props={myObj}/>

<Nav {segment}/>

<main>
	<slot></slot>
</main>