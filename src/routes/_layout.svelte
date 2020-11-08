<script lang="ts">
	import AppBar from '../components/AppBar.svelte';
	import { themeStore } from 'nekomata-ui'
	import { onMount } from 'svelte';
	export let segment: string;
	let props = { top:"0px", boxShadow:"0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12)", left: "40px", position:"fixed"};

	onMount(() => {
		themeStore.theme.setThemeOnLoad();
	});



	
</script>

<style>

	:global(html) {
  		--main-bg-color: white;
		--main-text-color: black;

	}
	:global(html[data-theme='dark']){
		--main-bg-color: black;
		--main-text-color: white;
	}

	:global(body){
		background-color: var(--main-bg-color);
		transition: all 0.5s;
	}
	main {
		position: relative;
		max-width: 56em;
		background-color: var(--main-bg-color);
		color: var(--main-text-color);
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
</style>

<svelte:head>
	<script>
		(function() {
		let theme = localStorage.getItem("nekomata-ui-theme")
		if (theme === "dark" || theme === "light" ) {
			document.documentElement.setAttribute('data-theme', theme)
		} else {
			theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light"
			document.documentElement.setAttribute('data-theme', theme)
		} 
		})()
	</script>
</svelte:head>

<!--<svelte:window on:load={theme.setThemeOnLoad}/> -->
<AppBar props={props}><div style="display:flex; min-height:64px;"><nav>
	<a aria-current="{segment === undefined ? 'page' : undefined}" href=".">home</a>
		<a aria-current="{segment === 'about' ? 'page' : undefined}" href="about">about</a>

		<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
		<a rel=prefetch aria-current="{segment === 'blog' ? 'page' : undefined}" href="blog">blog</a>
	
</nav><section>Let's test this</section> <section class="test">Let's test this</section>

<button on:click={() => themeStore.theme.switchTheme()}>
    Clicks are handled by the handleClick function!
</button>
</div>
</AppBar>

<!--<Nav {segment}/> -->


<main>
	<slot></slot>
</main>