$(document).ready(function () {
	var currentPosition = 0
	var slideWidth = 560
	var slides = $('.slide')
	var numberOfSlides = slides.length
	// Убираем прокрутку
	$('#slidesContainer').css('overflow', 'hidden')
	// Вставляем все .slides в блок #slideInner
	slides
		.wrapAll('<div id="slideInner"></div>')
		// Float left to display horizontally, readjust .slides width
		.css({
			float: 'left',
			width: slideWidth,
		})
	// Устанавливаем ширину #slideInner, равную ширине всех слайдов
	$('#slideInner').css('width', slideWidth * numberOfSlides)
	// Прячем правую стрелку при загрузке скрипта
	manageControls(currentPosition)
	// Отлавливаем клик на класс .controls
	$('.control').bind('click', function () {
		// Определение новой позиции
		currentPosition =
			$(this).attr('id') == 'rightControl'
				? currentPosition + 1
				: currentPosition - 1
		// Прячет / показывает элементы контроля
		manageControls(currentPosition)
		// Move slideInner using margin-left
		$('#slideInner').animate({
			marginLeft: slideWidth * -currentPosition,
		})
	})

	// Автопрокрутка, если не нужна, то просто удалите код ниже
	var mycolslide = 1
	setInterval(function () {
		if (mycolslide < 3) {
			//здесь указываем количество слайдов, которые есть у нас
			currentPosition = currentPosition + 1
			mycolslide = mycolslide + 1
		} else {
			currentPosition = 0
			mycolslide = 1
		}
		// Прячет / показывает элементы контроля
		manageControls(currentPosition)
		// Move slideInner using margin-left
		$('#slideInner').animate({
			marginLeft: slideWidth * -currentPosition,
		})
	}, 4000) // каждые 2 секунды будет меняться слайд
	// Конец автопрокрутки

	// manageControls: показывает или скрывает стрелки в зависимости от значения currentPosition
	function manageControls(position) {
		// Спрятать левую стрелку, если это левый слайд
		if (position == 0) {
			$('#leftControl').hide()
		} else {
			$('#leftControl').show()
		}
		// Спрятать правую стрелку, если это последний слайд
		if (position == numberOfSlides - 1) {
			$('#rightControl').hide()
		} else {
			$('#rightControl').show()
		}
	}
})
