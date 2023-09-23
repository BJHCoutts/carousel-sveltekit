<script lang='ts'>

	import PointingRightFinger from "$lib/icons/PointingRightFinger.svelte"

	import type { card } from "./types";

	export let cardData:card
	const {title, description, bgImagePath, bgImageAltText, bgVideoPath} = cardData

</script>
	
<div class="card-container">

	<div class="card-text-container">

		<div class="card-text">
			<div>
				<h3 class='card-title'>{title}</h3>
				<div class='card-description'>{@html description}</div>
			</div>
			<button>Learn More<PointingRightFinger /></button>
		</div>
		

		<video class='card-video' src={bgVideoPath} autoplay={false} loop>
			<track kind='captions' />
		</video>

	</div>

	<img class='card-image' src={bgImagePath} alt={bgImageAltText}>


</div>

<style lang='scss'>

	.card-container {
		position: relative;
		height: 22rem;
		width: 16rem;
		border-radius: 10px;
		overflow: hidden;
		cursor: pointer;
	}

	.card-image {
		height: 100%;
		width:100%;
		object-fit: cover;
	}
	
	.card-video {
		height: 100%;
		width: 100%;
		object-fit: cover;
		display: none;
	}

	.card-text-container {
		position: absolute;
		height: 100%;
		width: 100%;
		background-color: hsla(0, 0%, 0%, 0.65);

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
		color: $text-color;
		inset: 2em 3em;
		display: grid;
	}

	.card-title {
		text-align: center;
		font-weight: 600;
	}

	.card-description {
		font-size: .9rem;
	}

</style>