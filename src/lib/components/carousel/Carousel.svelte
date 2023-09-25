<div 
	class="carousel" 
	on:mouseenter={() => clearInterval(timer)}
	on:mouseleave={() => timer = setInterval(right, autoplay)}
>

	<div class="slides" bind:this={siema}>
		<slot />
	</div>

	{#if controls}

	  <button class="left" on:click={left} use:resetInterval={autoplay} aria-label="left">
			<span class="left-control">
				<DoubleArrowLeftBg />
			</span>
	  </button>

	  <button class="right" on:click={right} use:resetInterval={autoplay} aria-label="right">
			<DoubleArrowRightBg />
	  </button>

	{/if}

	{#if dots}
	
		<ul>
			{#each {length: totalDots} as _, i}
				<li
					on:click={() => go(i*currentPerPage)} 
					on:keypress={() => go(i*currentPerPage)} 
					class={isDotActive(currentIndex, i) ? "active dot" : "dot"}
					role='button'
					tabindex={i}
				/>
			{/each}
		</ul>
	{/if}
</div>

<style>
	.carousel {
		position: relative;
		width: 100%;
		justify-content: center;
		align-items: center;
		opacity: 0;
		transition: opacity .2s ease-in;
	}
	
	button {
		position: absolute;
		width: 100px;
		height: 100px;
		top: 50%;
		z-index: 5;
		border: none;
		background-color: transparent;
		transform: translateY(-50%);
	}
  button:focus {
    outline: none;
  }
	
	.left {
		left: .5vw;
		cursor: pointer;
	}
	
	.right {
		right: .5vw;
		cursor: pointer;
	}
	ul {
		list-style-type: none;
		position: absolute;
		display: flex;
		justify-content: center;
		width: 100%;
		margin-top: -30px;
		padding: 0;
	}

	.dot {
		cursor: pointer;
	}
	ul li {
		margin: 6px;
		border-radius: 100%;
		background-color: rgba(255,255,255,0.5);
		height: 8px;
		width: 8px;
	}
	ul li:hover {
		background-color: rgba(255,255,255,0.85);
	}
	ul li.active {
		background-color: rgba(255,255,255,1);
	}

</style>

<script>
	import Siema from 'siema'
	import { onMount, createEventDispatcher } from 'svelte'
	import DoubleArrowLeftBg from '../../icons/DoubleArrowLeftBg.svelte';
	import DoubleArrowRightBg from '../../icons/DoubleArrowRightBg.svelte';
	
	export let perPage = 5
	export let loop = true
	export let autoplay = 2200
	export let duration = 200
	export let easing = 'ease-in'
	export let startIndex = 0
	export let draggable = true
	export let multipleDrag = true	
	export let dots = true	
	export let controls = true
	export let threshold = 20
	export let rtl = false
	let currentIndex = startIndex;
	
	let siema
	let controller
	let timer
	const dispatch = createEventDispatcher()
	
	$: pips = controller ? controller.innerElements : []
	$: currentPerPage = controller ? controller.perPage : perPage
	$: totalDots = controller ? Math.ceil(controller.innerElements.length / currentPerPage) : []
	
	onMount(() => {
		controller = new Siema({
			selector: siema,
			perPage: typeof perPage === 'object' ? perPage : Number(perPage),
			loop,
  			duration,
  			easing,
  			startIndex,
  			draggable,
 			multipleDrag,
  			threshold,
  			rtl,
			onChange: handleChange
		})
		
		if(autoplay) {
			timer = setInterval(right, autoplay);
		}

		const carousel = document.querySelector(".carousel")
		carousel.style.opacity = "100%"

		return () => {
			autoplay && clearInterval(timer)
			controller.destroy()
		}
	})
	
	export function isDotActive (currentIndex, dotIndex) {
        if (currentIndex < 0) currentIndex = pips.length + currentIndex;
        return currentIndex >= dotIndex*currentPerPage && currentIndex < (dotIndex*currentPerPage)+currentPerPage
    }
	
	export function left () {
		controller.prev()
	}
	
	export function right () {
		controller.next()
	}
	
	export function go (index) {
		controller.goTo(index)
	}
	
	export function pause() {
		clearInterval(timer);
	}
	
	export function resume() {
		if (autoplay) {
			timer = setInterval(right, autoplay);
		}
	}
	
	function handleChange (event) {
		currentIndex = controller.currentSlide
		dispatch('change', {
			currentSlide: controller.currentSlide,
			slideCount: controller.innerElements.length
		} )
	}
	
	function resetInterval(node, condition) {
		function handleReset(event) {
			pause();
			resume();
		}
		
		if(condition) {
			node.addEventListener('click', handleReset);
		}
		
		return {
		  destroy() {
			  node.removeEventListener('click', handleReset);
		  }
	  }
  }

</script>