const heaven = document.getElementById('heaven')

window.addEventListener('scroll', () => {
	const value = window.scrollY

	heaven.style.top = -value * 0.5 + 'px'
})