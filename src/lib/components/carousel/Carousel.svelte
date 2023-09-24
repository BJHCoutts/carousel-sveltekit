<script lang='ts'>
	
	import Siema from 'siema'
	import CardBaked from "./CardBaked.svelte";
	import type { card } from "./types";

	export let cardsData:[]|card[] = []

	if (cardsData.length) {
		console.log('lets go')
	}

</script>

<div class='carousel-container'>

	<ul class='carousel-track siema'>
		{#if cardsData.length}
			{#each cardsData as cardData}
				<li>
					<CardBaked {cardData} />
				</li>
			{/each}
		{:else}
				<p>There are no card to display</p>
		{/if}
	</ul>

	<span class='control' >Left</span>
	<span class='control' >Right</span>

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
		position: relative;
		width: 100%;
	}

	.control {
		display: inline-block;
		margin-top: 6rem;
	}

</style>