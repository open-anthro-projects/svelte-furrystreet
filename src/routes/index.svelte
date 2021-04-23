<script>
	import {GridContainer} from "nekomata-ui"
</script>

<style>
	h1, figure, p {
		text-align: center;
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		text-transform: uppercase;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	figure {
		margin: 0 0 1em 0;
	}

	img {
		width: 100%;
		max-width: 400px;
		margin: 0 0 1em 0;
	}

	p {
		margin: 1em auto;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}

	.item {
  		grid-column-start: 1;
  		grid-column-end: 13;
		grid-area: a;
	}

	.item3 {
  		grid-column-start: 1;
  		grid-column-end: 13;
		grid-area: c;
	}

	.item2 {
  		grid-column-start: 1;
  		grid-column-end: 13;
		grid-area: b;
	}

	.content {
		background-color: var(--main-bg-color);
		color: var(--main-text-color);
		padding: 56px 0px 0px 0px;
		
	}

	@media (min-width: 600px){

		.grid {
			--grid-container-gridTemplateAreas:
		'a a a a a a a a b b b b' 'c c c c c c c c b b b b';
		padding: 64px 0px 0px 0px;
		}
	
		.item {
			grid-column-start: 1;
			grid-column-end: 8;
			grid-area: a;
		}

		.item3 {
			grid-column-start: 1;
			grid-column-end: 8;
			grid-area: c;
		}

		.item2 {
			grid-column-start: 9;
			grid-column-end: 13;
			grid-row-end:auto;
			grid-area: b;
		}
	}


</style>



<svelte:head>
	<title>Sapper project template</title>
</svelte:head>

<div class="grid">
<GridContainer props={{style:"flex-grow: 1"}}>

	<div class="item">
<h1>Great success!</h1>

<figure>
	<img alt='Success Kid' src='successkid.jpg'>
	<figcaption>Have fun with Sapper!</figcaption>
</figure>

<p><strong>Try editing this file (src/routes/index.svelte) to test live reloading.</strong></p>
</div>

<div class="item2">
	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc hendrerit faucibus diam eu aliquet. Nulla accumsan vel ipsum quis feugiat. Aliquam erat volutpat. Etiam pretium, lectus sit amet varius semper, diam sapien efficitur velit, vel lobortis enim justo ac libero. Curabitur lacinia eros sed placerat fringilla. Donec eu vehicula mauris. In imperdiet ligula nec magna posuere, sed efficitur orci elementum. Fusce fermentum felis et purus semper mollis. Curabitur pharetra volutpat nibh eget accumsan. Aenean massa augue, congue ut ullamcorper sed, sodales luctus nisl. Integer finibus, diam ut suscipit fringilla, lectus leo sollicitudin nisl, et vestibulum enim nulla vehicula urna. Duis dapibus magna sit amet lectus cursus maximus. Mauris lacinia aliquet ipsum, sed pretium tortor imperdiet nec.

In massa felis, vulputate ac accumsan ac, hendrerit vitae ante. Etiam eu urna auctor, viverra mauris ac, ornare tellus. Donec pulvinar ut erat et consequat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla in metus nunc. Sed aliquet nisl turpis, et bibendum massa ullamcorper vel. Maecenas porttitor ex rutrum porttitor sagittis. Proin efficitur convallis commodo. Morbi magna turpis, tempor quis vulputate vel, gravida ut magna. Etiam mattis vestibulum ipsum ac sollicitudin. Proin quis sodales elit, ut interdum risus. Curabitur suscipit leo quis mauris fermentum pretium. Etiam varius iaculis odio, sed mollis ligula congue ac.

In vitae nisl quis dolor sodales consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam sapien eget est hendrerit condimentum non vitae ante. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean mollis nulla nisi, in rhoncus nulla sagittis in. In porta at tellus sed facilisis. Etiam volutpat nisi eget purus consequat laoreet. In mollis massa ut placerat congue.

Vestibulum tempor nisl at pretium cursus. Nulla at tristique neque. Nullam finibus ante nec lacus ultrices convallis. Ut eget gravida augue. Etiam imperdiet tortor ut rhoncus placerat. Ut molestie odio ac purus finibus gravida. Curabitur venenatis tortor in quam ullamcorper, non aliquet felis blandit. Praesent enim est, vehicula eget neque sit amet, aliquet porta sapien. Nam et elit ac dolor iaculis condimentum. Vestibulum quis dui id felis lobortis volutpat.

Nam sodales lacus massa, in mollis ex porta eu. Sed egestas neque nec diam efficitur, tristique volutpat eros efficitur. Nullam pretium, velit nec aliquam euismod, lacus risus auctor sapien, sit amet imperdiet ex dolor vel turpis. Aliquam auctor vestibulum sem. Maecenas eget ligula ac felis pharetra tincidunt non a dui. Phasellus at dolor elementum, fermentum purus in, imperdiet tellus. Mauris cursus risus dapibus, faucibus augue vel, porta lorem. Morbi non nulla elit. Vestibulum rutrum nunc sed ante venenatis, sit amet euismod est accumsan. Phasellus at turpis vitae ipsum auctor euismod sed ut eros. Curabitur eu dolor urna. Vestibulum nec libero bibendum turpis tincidunt congue sit amet id erat.

</div>

<div class="item3">
	<h1>Great success!</h1>
	
	<figure>
		<img alt='Success Kid' src='successkid.jpg'>
		<figcaption>Have fun with Sapper!</figcaption>
	</figure>
	
	<p><strong>Try editing this file (src/routes/index.svelte) to test live reloading.</strong></p>

	</div>

</GridContainer>

</div>
