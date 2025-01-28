const swiper = new Swiper('.swiper', {
	// Настройки Swiper
	loop: true, // Бесконечная прокрутка
	pagination: {
		el: '.swiper-pagination',
		clickable: true, // Делает пагинацию кликабельной
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
})
