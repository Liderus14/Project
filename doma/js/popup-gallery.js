// Лавр

document.getElementById('open-modal3').addEventListener('click', openModal3)
document.getElementById('modal3').addEventListener('click', closeModal3)

function openModal3() {
	document.getElementById('modal3').style.display = 'block'
}

function closeModal3(event) {
	if (event.target === document.getElementById('modal3')) {
		document.getElementById('modal3').style.display = 'none'
	}
};

document
	.querySelector('.close3')
	.addEventListener('click', function () {
		document.querySelector('.modal3').style.display = 'none'
	});

	// Лазурит

	document.getElementById('open-modal4').addEventListener('click', openModal4)
document.getElementById('modal4').addEventListener('click', closeModal4)

function openModal4() {
	document.getElementById('modal4').style.display = 'block'
}

function closeModal4(event) {
	if (event.target === document.getElementById('modal4')) {
		document.getElementById('modal4').style.display = 'none'
	}
};

document
	.querySelector('.close4')
	.addEventListener('click', function () {
		document.querySelector('.modal4').style.display = 'none'
	});