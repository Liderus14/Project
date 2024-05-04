import { $, jQuery } from 'jquery'
window.jQuery = $
window.$ = $
;(() => {
	const button = $('#btn')
	const popup_window = $('.popup')
	const close_button = popup_window.find('.close')

	button.on('click', () => {
		popup_window.css({
			transform: 'translateY(0)',
			'z-index': '999',
		})
		$('body').addClass('overlay')
		popup_window.find('h1').animate(
			{
				left: '0',
			},
			900
		)
		$(this).css({
			'z-index': '-1',
		})
	})

	close_button.on('click', () => {
		$(this).parent('.popup').css({
			transform: 'translateY(-300%)',
		})

		$('body').removeClass('overlay')
		$(this).parent('.popup').siblings('.btn').css({
			'z-index': '1',
		})
	})
})()
