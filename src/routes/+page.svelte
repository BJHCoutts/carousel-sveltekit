<script lang='ts'>

	import Carousel from '../lib/components/carousel/Carousel.svelte';
	import type { card } from '../lib/components/carousel/types.js';

	export let data

	let cardsData:[]|card[] = []

	if (data.cardsData.length) {
		cardsData = data.cardsData
	}

</script>

<h1>Welcome to SvelteKit</h1>

<Carousel {cardsData} />