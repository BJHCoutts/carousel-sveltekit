<script lang='ts'>
	import { onMount } from "svelte";
	import { flip } from 'svelte/animate'

	import DoubleArrowLeftBg from "../../icons/DoubleArrowLeftBg.svelte";
	import DoubleArrowRightBg from "../../icons/DoubleArrowRightBg.svelte";
	import CardBaked from "./CardBaked.svelte";
	import type { card } from "./types";
	import Play from "../../icons/Play.svelte";
	import Stop from "../../icons/Stop.svelte";

	export let cardsData:card[]

	export let duration = 500

	let isPlaying = false

	onMount( () => {
		const track:HTMLElement|null = document.querySelector('.track')
		if (track) {track.style.opacity = '100'}
	})

	function handlePrev() {
		
		const cardData = cardsData[cardsData.length-1]
		const card = document.getElementById(cardData.id.toString())
		
		if (!card) {return console.error("No card element found")}
		
		cardsData = [cardsData[cardsData.length-1], ...cardsData.slice(0, cardsData.length-1)]
		
		card.style.opacity = '0'
		setTimeout( () => {card.style.opacity = '1'}, duration)
	}

	function handleNext() {
		const cardData = cardsData[0]
		const card = document.getElementById(cardData.id.toString())

		if (!card) {return console.error("No card element found")}

		cardsData = [...cardsData.slice(1, cardsData.length), cardsData[0]]
		card.style.opacity = '0'
		setTimeout( () => {card.style.opacity = '1'}, duration)
	}

	function handleScrollTo({currentTarget, target}: Event) {
		if (!currentTarget) {return console.error("No currentTarget")}
		const selectedCardIndex = parseInt(target.innerText)

		if (selectedCardIndex > cardsData[Math.floor(cardsData.length/2)].id) {
			const iterations = selectedCardIndex - cardsData[Math.floor(cardsData.length/2)].id
			for(let i = 0; i < iterations; i++) handleNext()
		}
		if (selectedCardIndex < cardsData[Math.floor(cardsData.length/2)].id) {
			const iterations = cardsData[Math.floor(cardsData.length/2)].id - selectedCardIndex
			for(let i = 0; i < iterations; i++) handlePrev()
		}

		// let firstHalfCards =[]
		// let lastHalfCards =[]

		// for(let i=0; i < Math.floor(cardsData.length/2); i++) {

		// 	if ((selectedCardIndex + (i+1))>(cardsData.length-1)) {
		// 		lastHalfCards.push(cardsData[selectedCardIndex + (i+1) - cardsData.length])
		// 	} else {
		// 		lastHalfCards.push(cardsData[selectedCardIndex + (i+1)])
		// 	}
			
		// 	if ((selectedCardIndex - i -1) < 0) {
		// 		firstHalfCards.unshift(cardsData[selectedCardIndex - i + cardsData.length - 1])
		// 	}else{
		// 		firstHalfCards.unshift(cardsData[selectedCardIndex - i - 1])
		// 	}
		// }

		// console.log([firstHalfCards], cardsData[selectedCardIndex], [lastHalfCards])
		// cardsData = [...firstHalfCards, cardsData[selectedCardIndex], ...lastHalfCards]
	}

	let playInterval = setInterval(() => {})

	function handlePlay() {
		isPlaying?clearInterval(playInterval):playInterval = setInterval( () => handleNext(), 1000)
		isPlaying = !isPlaying
	}

</script>

<section 
	class="carousel" 
>

	<div class="track">

		{#each cardsData as cardData (cardData.id)}
			<a id={cardData.id.toString()} class='card-link' animate:flip={{duration}}>
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

	<nav class='dot-nav'>
		<ul>
			{#each cardsData as {id} (id)}
					<a href={id.toString()} on:click|preventDefault={handleScrollTo} on:keypress|preventDefault={handleScrollTo}>
						<li class='dot' >{id}</li>
					</a>
			{/each}
		</ul>
	</nav>

</section>

<div class="play-icon-container">
	<button class="play-icon-button" on:click={handlePlay}>
		{#if isPlaying}
			<Stop/>
		{:else}
			<Play/>
		{/if}
	</button>
</div>

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
		gap: 25px;
		/* scroll-snap-type: x mandatory; */
		width: 100%;
		overflow-x: auto;
		height: 350px;
		transition: opacity .3s ease-in;
		opacity: 0;
		scrollbar-width: none;  /* Firefox */
    -ms-overflow-style: none;  /* IE and Edge */
		-webkit-mask-image: linear-gradient(to right, transparent, black 30%, black 70%, transparent);
		mask-image: linear-gradient(to right, transparent, black 30%, black 70%, transparent);
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
		width: 100px;
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

	.card-list {
		text-align: center;
	}

	.card-link {
		transition: opacity .25s ease-in;		
		flex-shrink: 0;
		scroll-snap-align: start;
		display: inline-block;

	}

	.dot-nav {
		position:absolute;
		z-index: 3;
		justify-content: center;
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);
	}

	.dot-nav ul {
		display: flex;
		gap: 10px;
	}

	.dot {
		border-radius: 50%;
		background-color: hsla(0,0%,50%, 1);
		height: 25px;
		width: 25px;
		display: grid;
		place-items: center;
		color: var(--text-color);
	}

	.play-icon-container {
		cursor: pointer;
		display: flex;
		justify-content: center;
		margin-top: 1em;
	}
	
</style>