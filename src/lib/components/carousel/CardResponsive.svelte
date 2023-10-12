<script lang='ts'>
	
	import PointingRightFinger from "$lib/icons/PointingRightFinger.svelte"
	
	import type { card } from "./types";
	
	export let cardData:card
	const {title, description, bgImagePath, bgImageAltText, bgVideoPath} = cardData

	function activateCard() {
	
		const activeFrame = this
		activeFrame.style.opacity = 100

		// this.style.transform = "scale(1.05)"
		// this.style.height = this.style.height * .01
		// this.style.width = this.style.width * .01
	}

	function deactivateCard() {

		const activeFrame = this
		activeFrame.style.opacity = 0

		// this.style.transform = "scale(1)"
		// this.style.height = "352px"
		// this.style.width = "256px"
	}
	
</script>

<div class="card-container" 
	on:mouseenter={activateCard} 
	on:mouseleave={deactivateCard}
	role='none'
>
	
	<!-- <div class="active-frame">

		<div class="card-text-container">
			
			<div class="card-text">
				<div>
					<h3 class='card-title'>{title}</h3>
					<div class='card-description'>{@html description}</div>
				</div>
				<button>Learn More<PointingRightFinger /></button>
			</div>
		</div>
		<video class='card-video' src={bgVideoPath} autoplay loop>
			<track kind='captions' />
		</video>
	</div>
		
	<img class='card-image' src={bgImagePath} alt={bgImageAltText}>

</div> -->


<style>

	.card-container {
		position: relative;
		height: 262px;
		width: 210px;
		border-radius: 10px;
		overflow: hidden;
		cursor: pointer;
		transition: 
			height .2s ease-in,
			width .2s ease-in
		;
	}

	.active-frame {
		position: absolute;
		height: 100%;
		width:100%;
		opacity: 0;
		transition: opacity .2s ease-in;
	}

	.card-image {
		height: 100%;
		width:100%;
		object-fit: cover;
	}

	.card-video {
		position: absolute;
		height: 100%;
		width: 100%;
		object-fit: cover;
	}

	.card-text-container {
		z-index: 1;
		position: absolute;
		height: 100%;
		width: 100%;
		background-color: hsla(0, 0%, 0%, 0.683);

		button {
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
	}


	.card-text {
		position: absolute;
		color: var(--text-color);
		inset: 25px 35px;
		display: grid;
	}

	.card-title {
		text-align: center;
		font-weight: 600;
		margin-top: 0;
	}

	.card-description {
		font-size: .9rem;
	}

</style>