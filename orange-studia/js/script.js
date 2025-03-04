const currentDate = new Date()

// Форматируем дату в нужный формат
const options = { year: 'numeric', month: 'long', day: 'numeric' }
document.getElementById('currentDate').innerText = currentDate.toLocaleString(
	'ru-RU',
	options
)
