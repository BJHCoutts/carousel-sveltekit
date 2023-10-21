export function scrollIntoView ({currentTarget}: {currentTarget: HTMLElement}) {
	if (currentTarget.getAttribute('id') === typeof String){
		const scrollToElement = document.getElementById(currentTarget.getAttribute('id'))
		const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce')
		if (!scrollToElement) {return}

		scrollToElement.scrollIntoView({
			behavior: mediaQuery ? 'auto' : 'smooth',
			block: "center",
			inline: "center",
		})
	}
}