<script lang='ts'>
	import Carousel from "../lib/components/carousel/Carousel.svelte";
	import CardBaked from "../lib/components/carousel/CardBaked.svelte";
	import type { card } from "../lib/components/carousel/types";

	export let data:{cardsData:card[]}
	const {cardsData} = data
	let autoplay = 2200

</script>

<Carousel bind:autoplay >
	
	{#each cardsData as cardData, index (index)}
	<CardBaked {cardData} />
	{/each}

</Carousel>

