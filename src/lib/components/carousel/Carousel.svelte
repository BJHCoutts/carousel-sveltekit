<script lang='ts'>
	import { onMount } from "svelte";


	import DoubleArrowLeftBg from "../../icons/DoubleArrowLeftBg.svelte";
	import DoubleArrowRightBg from "../../icons/DoubleArrowRightBg.svelte";
	import CardBaked from "./CardBaked.svelte";
	import type { card } from "./types";

	export let cardsData:card[]

	onMount( () => {
		const track:HTMLElement|null = document.querySelector('.track')
		if (track) {track.style.opacity = '100'}
	})

</script>

<section 
	class="carousel" 
>

	<div class="track">

		{#each cardsData as cardData, index (index)}
		<CardBaked {cardData} />
		{/each}

	</div>
	<div class="button-container button-container-prev">
		<button class="prev">
			<DoubleArrowLeftBg/>
		</button>
	</div>

	<div class="button-container button-container-next">
		<button class="next">
			<DoubleArrowRightBg/>
		</button>
	</div>



</section>

<style>
	
	.carousel {
		position: relative;
		width: 100%;
		display: flex;
		align-items: center;
		overflow-x: hidden;
		overflow-y:visible;
	}
	
	.track {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 10px;
		scroll-snap-type: x mandatory;
		width: 100%;
		overflow-x: auto;
		height: 350px;
		transition: opacity .3s ease-in;
		opacity: 0;
	}

	.button-container-prev {
		top: 0;
		bottom: 0;
		left: 0;
	}
	
	.button-container-next {
		top: 0;
		bottom: 0;
		right: 0;
	}

	.button-container {
		position: absolute;
		z-index: 3;
		height: 100%;
		width: 150px;
		background-color: hsla(0,0%,0%, .7);
		display: grid;
	}

	button {
		border: none;
		background: none;
	}

	.prev {
		place-self: center flex-start;
	}

	.next {
		place-self: center flex-end;
	}
	
</style>