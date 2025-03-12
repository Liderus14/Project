document.getElementById('open-modal').addEventListener('click', openModal)
document.getElementById('modal').addEventListener('click', closeModal)

function openModal() {
	document.getElementById('modal').style.display = 'block'
}

function closeModal(event) {
	if (event.target === document.getElementById('modal')) {
		document.getElementById('modal').style.display = 'none'
	}
};

    document
			.querySelector('.close')
			.addEventListener('click', function () {
				document.querySelector('.modal').style.display = 'none'
			});



			// Еще одна форма 

document.getElementById('open-modal1').addEventListener('click', openModal1)
document.getElementById('modal1').addEventListener('click', closeModal1)

function openModal1() {
	document.getElementById('modal1').style.display = 'block'
}

function closeModal1(event) {
	if (event.target === document.getElementById('modal1')) {
		document.getElementById('modal1').style.display = 'none'
	}
};

    document
			.querySelector('.close1')
			.addEventListener('click', function () {
				document.querySelector('.modal1').style.display = 'none'
			});