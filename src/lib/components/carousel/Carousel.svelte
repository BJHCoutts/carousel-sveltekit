<script lang='ts'>
	import Card from "./Card.svelte";
	import type { card } from "./types";

	export let cardsData:[]|card[] = []

</script>

<div class='carousel-container'>

		<ul class='carousel-track'>
			{#if cardsData.length}
				{#each cardsData as cardData}
					<li>
						<Card {cardData} />
					</li>
				{/each}
			{:else}
					<p>Loading</p>
			{/if}
		</ul>


	<ul>
		<!-- {#each {length: totalDots} as _, i}
			<li class/>
		{/each} -->
	</ul>

</div>

<style lang='scss'>

	.carousel-container {
		position: relative;
		width: 100%;
	}

	.carousel-track {
		list-style: none;
		display: grid;
		grid-gap: 2.5em;
	}

</style>