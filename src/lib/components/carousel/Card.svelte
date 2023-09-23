<script lang='ts'>

	import type { card } from "./types";

	export let cardData:card
	const {title, description, bgImagePath, bgImageAltText, bgVideoPath} = cardData

</script>
	
<div class="card-container">

	<div class="card-text-container">
		<div class="card-text">
			<h3 class='card-title'>{title}</h3>
			<div>{@html description}</div>
		</div>
		<video class='card-video' src={bgVideoPath} autoplay={false} loop>
			<track kind="captions" />
		</video>
	</div>

	<img class='card-image' src={bgImagePath} alt={bgImageAltText}>


</div>

<style lang='scss'>

	.card-container {
		position: relative;
		height: 20rem;
		width: 15rem;
		border-radius: 1em;
		overflow: hidden;
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
		background-color: hsla(0,0,0,.5);
	}

	.card-text {
		position: relative;
		color: white;
		inset: 1em;
		height: 100%;
		width: 100%;
		word-wrap: normal;
		border: red solid 2px;
	}

	.card-title {
		text-align: center;
	}

</style>