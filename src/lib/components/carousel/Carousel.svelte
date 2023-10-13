<script lang='ts'>
	import { onMount } from "svelte";
	import { flip } from 'svelte/animate'

	import DoubleArrowLeftBg from "../../icons/DoubleArrowLeftBg.svelte";
	import DoubleArrowRightBg from "../../icons/DoubleArrowRightBg.svelte";
	import CardBaked from "./CardBaked.svelte";
	import type { card } from "./types";
	import { scrollIntoView } from "../../utils/scrollIntoView";

	export let cardsData:card[]

	onMount( () => {
		const track:HTMLElement|null = document.querySelector('.track')
		if (track) {track.style.opacity = '100'}
	})

	function handlePrev() {
		cardsData = [cardsData[cardsData.length-1], ...cardsData.slice(0, cardsData.length-1)]
	}

	function handleNext() {
		cardsData = [...cardsData.slice(1, cardsData.length), cardsData[0]]
	}

</script>

<section 
	class="carousel" 
>

	<div class="track">

		{#each cardsData as cardData, i (cardData.title)}
			<a id={`card-${i}`} animate:flip>
				<CardBaked {cardData} />
			</a>
		{/each}

	</div>

	<div class="button-container button-container-prev">
		<button class="prev" on:click={handlePrev}>
			<DoubleArrowLeftBg/>
		</button>
	</div>

	<div class="button-container button-container-next">
		<button class="next" on:click={handleNext}>
			<DoubleArrowRightBg/>
		</button>
	</div>

	<nav>
		<ul>
			{#each cardsData as {title}, i}
				<li>
					<a class='dot' href={`#card-${i}`} on:click|preventDefault={scrollIntoView} on:keypress|preventDefault={scrollIntoView}>
						{i}
					</a>
				</li>
			{/each}
		</ul>
	</nav>

</section>

<nav>
	<ul class='card-list'>
		{#each cardsData as {title}, i}
			<li>
				<a href={`#card-${i}`} on:click|preventDefault={scrollIntoView} on:keypress|preventDefault={scrollIntoView}>
					{title}
				</a>
			</li>
		{/each}
	</ul>
</nav>

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
		scrollbar-width: none;  /* Firefox */
    -ms-overflow-style: none;  /* IE and Edge */
	}
	.track::-webkit-scrollbar { 
			display: none; /* Chrome, Safari, Opera */ 
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
		cursor: pointer;
	}

	.prev {
		place-self: center flex-start;
	}

	.next {
		place-self: center flex-end;
	}

	.dot {
		border-radius: 50%;
		background-color: hsla(0,0%,50%, 1);
	}

	.card-list {
		text-align: center;
	}
	
</style>