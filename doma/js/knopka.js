document.addEventListener("DOMContentLoaded", function () {
	const backToTop = document.getElementById("back-to-top");
	
	// Показываем/скрываем кнопку при прокрутке
	window.addEventListener("scroll", function () {
			if (window.pageYOffset > 500) {
					backToTop.style.display = "block";
			} else {
					backToTop.style.display = "none";
			}
	});
	
	// Плавная прокрутка при клике
	backToTop.addEventListener("click", function (event) {
			event.preventDefault();
			window.scrollTo({
					top: 0,
					behavior: "smooth"
			});
	});
});