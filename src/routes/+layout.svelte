<style>

	:root {
		--text-color: hsla(0, 0%, 100%, 0.85);
		--accent-color: hsla(244, 67%, 26%, 0.85);
	}

	:global(*) {
		box-sizing: border-box;
		font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
		margin: 0;
		padding: 0;
	}

	:global(a) {
		text-decoration: none;
		color: inherit;
	}

	:global(p) {
		line-height: 1.25em;
	}

</style>

<slot />