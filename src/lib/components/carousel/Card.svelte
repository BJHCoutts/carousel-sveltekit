<script lang='ts'>
	import type { card } from "./types";

	export let cardData:card
	const {title, description, bgImagePath, bgImageAltText} = cardData

</script>
	
<div class="card-container">
	<img class='card-image' src={bgImagePath} alt={bgImageAltText}>
	<h3>{title}</h3>
	<div>{description}</div>
</div>

<style lang='scss'>

	.card-container {
		height: 20rem;
		width: 15rem;
		border-radius: 1em;
		overflow: hidden;
	}

	.card-image {
		height: 100%;
		width:100%;
		object-fit: fill;
	}

</style>