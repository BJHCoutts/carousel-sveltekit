<script lang='ts'>
	
	import PointingRightFinger from '$lib/icons/PointingRightFinger.svelte'
	
	import type { card } from './types';
	
	export let cardData:card
	const {bgImagePath, bgImageAltText, bgVideoPath} = cardData

	function activateCard(this:HTMLElement) {
	
		const cardContainer: HTMLElement | null = this
		const activeFrame: HTMLElement | null = this.querySelector('.active-frame')

		if (!activeFrame) {
			console.error('no active frame')
			return
		}

		activeFrame.style.opacity = '100'
		cardContainer.style.height = `${262 * 1.1}px`
		cardContainer.style.width = `${210 * 1.1}px`
		
		const video = this.querySelector('video')
		video?.play()
	}

	function deactivateCard(this:HTMLElement) {

		const cardContainer: HTMLElement | null = this
		const activeFrame: HTMLElement | null = this.querySelector('.active-frame')
		if (activeFrame) {activeFrame.style.opacity = '0'}
		if (cardContainer) {cardContainer.style.height = '262px'}
		if (cardContainer) {cardContainer.style.width = '210px'}

		const video = this.querySelector('video')
		video?.pause()

	}
	
</script>

<div class='card-container' 
	on:mouseenter={activateCard} 
	on:mouseleave={deactivateCard}
	role='none'
>
	
	<div class='active-frame'>
		
		<img class='card-image-baked' src='/assets/images/bakedTextNoBg.png' alt={bgImageAltText}>
		<div class='dimmer'/>
		<video class='card-video' muted src={bgVideoPath} loop >
			<track kind='captions' />
		</video>
		<div class='card-button-container'>
			<button class='card-button'>Learn More<PointingRightFinger /></button>
		</div>
	</div>
		
	<img class='card-image' src={bgImagePath} alt={bgImageAltText}>

</div>

<style>

	button {
		color: var(--accent-color);
		font-weight: 600;
	}

	.card-container {
		position: relative;
		height: 262px;
		width: 210px;
		border-radius: 10px;
		cursor: pointer;
		transition: 
			height .2s ease-in,
			width .2s ease-in,
			transform .2s ease-in
		;
	}

	.active-frame {
		position: absolute;
		height: 100%;
		width:100%;
		opacity: 0;
		border-radius: 10px;
		transition: opacity .25s ease-in;
		border-radius: 10px;
		overflow: hidden;
	}

	.card-image {
		height: 100%;
		width:100%;
		object-fit: cover;
		border-radius: 10px;
	}

	.card-image-baked {
		height: 100%;
		width:100%;
		object-fit: cover;
		position: absolute;
		z-index: 2;
	}

	.card-video {
		position: absolute;
		height: 100%;
		width: 100%;
		object-fit: cover;
	}

	.dimmer {
		z-index: 1;
		position: absolute;
		height: 100%;
		width: 100%;
		background-color: hsla(0, 0%, 0%, 0.683);
	}

	.card-button-container {
		position: absolute;
		z-index:3;
		inset: 25px 35px;
		display: grid;
	}

	.card-button {
		margin: 0 auto;
		padding: 0.5em 0;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: .75em;
		border-radius: 5px;
		place-self: flex-end;
		cursor: pointer;
	}

</style>