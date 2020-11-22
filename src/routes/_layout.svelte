<script lang="ts">
	//import AppBar from '../components/appbar/AppBar.svelte'
	import { themeStore, AppBar} from 'nekomata-ui'
	import { onMount } from 'svelte';
	export let segment: string;

	onMount(() => {
		themeStore.theme.setThemeOnLoad();
	});



	
</script>

<style>

	:global(html[data-theme='light']) {
  		--main-bg-color: white;
		--main-text-color: black;
		--appbar-backgroundColor: var(--main-bg-color);
		--appbar-color: var(--main-text-color);
		

	}
	:global(html[data-theme='dark']){
		--main-bg-color: black;
		--main-text-color: white;
		--appbar-backgroundColor: var(--main-bg-color);
		--appbar-color: var(--main-text-color);
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
<AppBar props={{boxShadow: "5px 10px" }}><div style="display:flex; min-height:64px;"><nav>
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