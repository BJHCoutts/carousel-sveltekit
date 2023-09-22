<script lang='ts'>
	import type { slide } from "./types";

	export let slides:slide[] = []

</script>

<div class='carousel-container'>

	<div class='carousel-track'>
		<ul>
			{#each slides as slide}
				<li></li>
			{/each}
		</ul>
	</div>

	<ul>
		{#each {length: totalDots} as _, i}
			<li class/>
		{/each}
	</ul>

</div>

<style>

	.carousel-container {
		position: relative;
		width: 100%;
	}

</style>