<script lang="ts">
	//import AppBar from '../components/appbar/AppBar.svelte'
	import { themeStore, AppBar, Row, SvgIcon} from 'nekomata-ui'
	//import SvgPathIcon from '../components/SvgPathIcon.svelte'
	//import Row from '../components/Row.svelte'
	//import AppBar from '../components/appbar/AppBar.svelte'
	import { onMount } from 'svelte';
	export let segment: string;

	onMount(() => {
		themeStore.theme.setThemeOnLoad();
	});
	
</script>

<style>

	:global(html[data-theme='light']) {
  		--main-bg-color: yellow;
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

	section {
		height: inherit;
	}
	.test{
		margin-left: auto;
	}

	.appbar :global(.top) {
		--appbar-backgroundColor: Orange;
		--appbar-position: fixed;
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
<div class="appbar">
<AppBar props={{boxShadow: "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);" }} class="top" ><Row props={{}} >
	<SvgIcon props={{}} d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"></SvgIcon><nav>
	<a aria-current="{segment === undefined ? 'page' : undefined}" href=".">home</a>
		<a aria-current="{segment === 'about' ? 'page' : undefined}" href="about">about</a>

		<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
		<a rel=prefetch aria-current="{segment === 'blog' ? 'page' : undefined}" href="blog">blog</a>
	
</nav><section>Let's test this  </section> <section class="test">Let's test this</section>

<button on:click={() => themeStore.theme.switchTheme()}>
    Clicks are handled by the handleClick function!
</button>
</Row>
</AppBar>
</div>

<!--<Nav {segment}/> -->


	<slot></slot>

