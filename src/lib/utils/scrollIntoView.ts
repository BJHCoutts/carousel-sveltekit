export function scrollIntoView ({currentTarget}: Event) {
	if (currentTarget){
		const scrollToElement = document.querySelector(currentTarget.getAttribute('href'))
		const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce')

		scrollToElement.scrollIntoView({
			behavior: mediaQuery ? 'auto' : 'smooth',
		})
	}
}