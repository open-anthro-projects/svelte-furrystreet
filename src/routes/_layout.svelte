<script lang="ts">
	import type AppBarCSSProps from '../components/AppBarCSSProps'
	//import AppBar from '../components/AppBar.svelte'
	import { AppBar, themeStore, Row, SvgIcon} from 'nekomata-ui'
	import breakpoint from '../components/BreakpointStore';
	import {setBreakpoint} from '../components/BreakpointStore';
	//import {breakpoints, setBreakPointsOnLoad} from '../components/breakpointStore';
	//import SvgPathIcon from '../components/SvgPathIcon.svelte'
	//import Row from '../components/Row.svelte'
	//import AppBar from '../components/appbar/AppBar.svelte'
	import Drawer from '../components/Drawer.svelte'
	import Button from '../components/Button.svelte'
	import { onMount } from 'svelte';
	export let segment: string;

	const test = {
		'--test-1': "X",
		'--test-2': "Z"
	};

	function writeStyleStringFrom(cssProps:Object):string{
    	return Object.entries(cssProps).reduce((pair, [key, value]) => `${pair} ${key}: ${value}` + ';', '')
	}

	//let style = writeStyleStringFrom(test);


	let probeersel = '--test-drawer';
	let visible = false;

	let test2: AppBarCSSProps = {
		"--nm-ui-appbar-top": "50px"
	}

	let style = Object.entries(test).reduce((acc, [key, value]) => `${acc} ${key}: ${value}; `, '');

	onMount(() => {
		//setBreakPointsOnLoad();
		themeStore.theme.setThemeOnLoad();
	});


	setBreakpoint(1279,'xl');
	setBreakpoint(1023,'lg');
	setBreakpoint(767,'md');
	setBreakpoint(0,'sm');





	let y:number;
	$:t = y;
	$:bp = breakpoint();

</script>

<style>

	:global(html[data-theme='light']) {
  		--main-bg-color: yellow;
		--main-text-color: black;
		--nm-ui-appbar-background-color: var(--main-bg-color);
		--nm-ui-appbar-color: var(--main-text-color);
		

	}
	:global(html[data-theme='dark']){
		--main-bg-color: black;
		--main-text-color: white;
		--nm-ui-appbar-background-color: var(--main-bg-color);
		--nm-ui-appbar-color: var(--main-text-color);
	}

	:global(body){
		background-color: var(--main-bg-color);
		transition: all 0.5s;
	}

	:global(body.noscroll){
		padding-right: 17px; 
		overflow: hidden;
	}

	section {
		height: inherit;
	}
	.test{
		margin-left: auto;
	}

/*	.testje{
		--test: 1 1 auto;
	}*/

	.appbar :global(.top) {
		--nm-ui-appbar-background-color: Orange;
	}

	.appbar{
		/*--nm-ui-appbar-color: white; */
	}

	:global(#drawer){
		--test: 1 0 auto;
	}

	/*.backdrop{
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: flex;
		z-index: 1100;
		position: fixed;
		align-items: center;
		justify-content: center;
		background-color: rgba(0, 0, 0, 0.5);
		-webkit-tap-highlight-color: transparent;
	}*/
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

<svelte:window bind:innerWidth={y}/>

<!--<svelte:window on:load={theme.setThemeOnLoad}/> -->
<div class="appbar" style="display:flex; --nm-ui-svgIcon-height: 1.50rem; --nm-ui-svgIcon-width: 1.50rem;">
	<Drawer active={visible} variant="modal" anchor="left">	<AppBar class="top" style="--nm-ui-appbar-position: static;" ><Row><Button on:click={() => visible = !visible}>
		<SvgIcon d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"></SvgIcon>
	</Button></Row></AppBar><button on:click={() => themeStore.theme.switchTheme()}>
		Clicks are handled by the handleClick function!
	</button></Drawer>
<div class="appbar" {style}>
<AppBar class="top" ><Row>
	<Button on:click={() => visible = !visible}>
		<SvgIcon d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"></SvgIcon>
	</Button>
	<label>
		<input type="checkbox" bind:checked={visible}>
		visible
	</label><nav>
	<a aria-current="{segment === undefined ? 'page' : undefined}" href=".">home</a>
		<a aria-current="{segment === 'about' ? 'page' : undefined}" href="about">about</a>

		<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
		<a rel=prefetch aria-current="{segment === 'blog' ? 'page' : undefined}" href="blog">blog</a>
	
</nav><section>Let's test this  </section> <section class="test">Let's test this</section>


<button on:click={() => themeStore.theme.switchTheme()}>
    Clicks are handled by the handleClick function!
</button>
<label>
	<input type="checkbox" bind:checked={visible}>
	visible
</label>
</Row>
</AppBar>
<!-- <div on:click={() => themeStore.theme.switchTheme()} class="backdrop"></div>-->


</div>


<!--<Nav {segment}/> -->

{#if $bp === 'md' }
<div>{y}{$bp}</div>
{/if}
	<slot></slot>
</div>

