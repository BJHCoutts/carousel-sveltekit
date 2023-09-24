<h1>Welcome to SvelteKit</h1>

<div class="siema">
	<div class='slide'></div>
	<div class='slide'></div>
	<div class='slide'></div>
</div>

<button class="prev">prev</button>
<button class="next">next</button>


<script lang='ts'>
	import { onMount } from 'svelte';


	import Carousel from '../lib/components/carousel/Carousel.svelte';
	import type { card } from '../lib/components/carousel/types.js';
	import Siema from 'siema';

	export let data

	let cardsData:[]|card[] = []

	if (data.cardsData.length) {
		cardsData = data.cardsData
	}

	onMount( 
		() => {
		
		// document.querySelector('.prev').addEventListener('click', () => mySiema.prev());
		// document.querySelector('.next').addEventListener('click', () => mySiema.next());
		
		console.log('test')
		console.log(Siema)
		const mySiema = new Siema()
			// console.log(mySiema)
		}
	)


</script>




<style>
	.slide{
		background:blue;
		height: 3rem;
		width: 3rem;
		}
</style>

<!-- <Carousel {cardsData} /> -->