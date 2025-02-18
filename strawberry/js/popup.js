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


			
