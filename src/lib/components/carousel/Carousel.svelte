<script lang='ts'>

	import CardBaked from "./CardBaked.svelte";
	import type { card } from "./types";

	export let cardsData:card[]

</script>

<section 
	class="carousel" 
>

	<div class="track">
		{#each cardsData as cardData, index (index)}
		<CardBaked {cardData} />
		{/each}
	</div>

</section>

<style>
	.carousel {
		position: relative;
		width: 100%;
	}
	
</style>