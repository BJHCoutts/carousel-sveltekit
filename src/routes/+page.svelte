<script lang='ts'>
	import Carousel from "../lib/components/carousel/Carousel.svelte";
	import type { card } from "../lib/components/carousel/types";

	export let data:{cardsData:card[]}
	const {cardsData} = data

</script>

<Carousel {cardsData} />