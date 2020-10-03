<script lang="ts">
	import Nav from '../components/Nav.svelte';
	import AppBar from '../components/AppBar.svelte';
	export let segment: string;
	let props = { height: "64px", top:"0px", bottom:"auto", boxShadow:"0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12)" };
	let bool = false; 
	function toggle() {
		if (bool){
			document.documentElement.setAttribute('data-theme', 'dark')
			bool = !bool;
		} else {
			document.documentElement.setAttribute('data-theme', 'light')
			bool = !bool;
		}
	}
	
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
	section {
		height: inherit;
	}
	.test{
		margin-left: auto;
	}
	:global(html) {
  		--main-bg-color: white;
		--main-text-color: black;

	}
	:global(html[data-theme='dark']){
		--main-bg-color: black;
		--main-text-color: white;
	}
</style>

<svelte:window on:load={toggle}/>
<AppBar props={props}><nav>
	<a aria-current="{segment === undefined ? 'page' : undefined}" href=".">home</a>
		<a aria-current="{segment === 'about' ? 'page' : undefined}" href="about">about</a>

		<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
		<a rel=prefetch aria-current="{segment === 'blog' ? 'page' : undefined}" href="blog">blog</a>
	
</nav><section>Let's test this</section> <section class="test">Let's test this</section>

<button on:click={toggle}>
    Clicks are handled by the handleClick function!
</button>
</AppBar>

<Nav {segment}/>


<main>
	<slot></slot>
</main>