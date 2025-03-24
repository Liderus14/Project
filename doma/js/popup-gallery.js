
// Модальное окно 3 

document.getElementById('open-modal2').addEventListener('click', openModal2)
document.getElementById('modal2').addEventListener('click', closeModal2)

function openModal2() {
	document.getElementById('modal2').style.display = 'block'
}

function closeModal2(event) {
	if (event.target === document.getElementById('modal2')) {
		document.getElementById('modal2').style.display = 'none'
	}
};

    document
			.querySelector('.close2')
			.addEventListener('click', function () {
				document.querySelector('.modal2').style.display = 'none'
			});
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


// Уют

document.getElementById('open-modal5').addEventListener('click', openModal5)
document.getElementById('modal5').addEventListener('click', closeModal5)

function openModal5() {
	document.getElementById('modal5').style.display = 'block'
}

function closeModal5(event) {
	if (event.target === document.getElementById('modal5')) {
		document.getElementById('modal5').style.display = 'none'
	}
};

document
	.querySelector('.close5')
	.addEventListener('click', function () {
		document.querySelector('.modal5').style.display = 'none'
	});

