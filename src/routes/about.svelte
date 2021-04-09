<script lang="ts">
	import { onDestroy } from 'svelte';
	import { themeStore, AppBar, Row, SvgIcon} from 'nekomata-ui'

	import { onMount } from 'svelte';

	let mounted = false;

	onMount(() => {
		mounted = true;
	});


	onDestroy(() => {
		if (mounted) {
			themeStore.theme.switchTheme();
		}
	});
</script>
<svelte:head>
	<title>About</title>
</svelte:head>

<h1>About this site</h1>

<p>This is the 'about' page. There's not much here.</p>