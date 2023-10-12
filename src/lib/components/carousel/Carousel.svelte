<script lang='ts'>
	import { onMount } from "svelte";


	import DoubleArrowLeftBg from "../../icons/DoubleArrowLeftBg.svelte";
	import DoubleArrowRightBg from "../../icons/DoubleArrowRightBg.svelte";
	import CardBaked from "./CardBaked.svelte";
	import type { card } from "./types";

	export let cardsData:card[]

	onMount( () => {
		const track:HTMLElement = document.querySelector('.track')
		if (track) {track.style.opacity = '100'}
	})

	// function onHW(this:HTMLElement) {
	// 	this.style.height = '40px'
	// 	this.style.width = '40px'
	// }
	// function offHW(this:HTMLElement) {
	// 	this.style.height = '25px'
	// 	this.style.width = '25px'
	// }

</script>

<section 
	class="carousel" 
>

	<div class="track">

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

	</div>

		{#each cardsData as cardData, index (index)}
		<CardBaked {cardData} />
		{/each}

</section>
	
<!-- <div class='test'>
	<div class="card" on:mouseenter={onHW} on:mouseleave={offHW} style='background: red;'></div>
	<div class="card" on:mouseenter={onHW} on:mouseleave={offHW} style='background: blue;'></div>
	<div class="card" on:mouseenter={onHW} on:mouseleave={offHW} style='background: green;'></div>
	<div class="card" on:mouseenter={onHW} on:mouseleave={offHW} style='background: yellow;'></div>
</div> -->

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
		place-items: center flex-start;
	}

	button {
		border: none;
		background: none;
	}
		
	svg {
				top: 50%;
				transform: translateY(-50%);
				height: 100px;
				background: none;
	}

	.prev {
		left: 0;
	}

	.next {
		right: 0;
	}

	/* .test {
		height: 25px;
		overflow-y:visible;
		overflow-x: auto;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 10px;
	}

	.card {
		height: 25px; 
		width: 25px; 
		display: inline-block; 
		transition: 
			height .3s ease-in,
			width .3s ease-in
		;
	} */
	
</style>