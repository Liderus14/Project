const currentDate = new Date()

// Форматируем дату в нужный формат
const options = { year: 'numeric', month: 'long', day: 'numeric' }
document.getElementById('currentDate').innerText = currentDate.toLocaleString(
	'ru-RU',
	options
);


document.getElementById('list1').addEventListener('change', function () {
	var selectedValue = this.value

	// Обновляем сумму
	document.getElementById('sum1').value = selectedValue
});

document.getElementById('list2').addEventListener('change', function () {
	var selectedValue = this.value

	// Обновляем сумму
	document.getElementById('sum2').value = selectedValue
});

document.getElementById('list3').addEventListener('change', function () {
	var selectedValue = this.value

	// Обновляем сумму
	document.getElementById('sum3').value = selectedValue
});

document.getElementById('list4').addEventListener('change', function () {
	var selectedValue = this.value

	// Обновляем сумму
	document.getElementById('sum4').value = selectedValue
});

document.getElementById('list5').addEventListener('change', function () {
	var selectedValue = this.value

	// Обновляем сумму
	document.getElementById('sum5').value = selectedValue
});

document.getElementById('list6').addEventListener('change', function () {
	var selectedValue = this.value

	// Обновляем сумму
	document.getElementById('sum6').value = selectedValue
});

document.getElementById('list7').addEventListener('change', function () {
	var selectedValue = this.value

	// Обновляем сумму
	document.getElementById('sum7').value = selectedValue
});

document.getElementById('list8').addEventListener('change', function () {
	var selectedValue = this.value

	// Обновляем сумму
	document.getElementById('sum8').value = selectedValue
});








