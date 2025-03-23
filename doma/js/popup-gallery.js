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