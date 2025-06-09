/*
//dropdown vs collapse
const navbarDropdowns = document.querySelectorAll('.navbar-dropdown');
navbarDropdowns.forEach((button) => {
	button.addEventListener('click', () => {
		// toggle the collapse state of the target element
		console.log(button.getAttribute("id"));
		navbarDropdowns.forEach((el) => {
			if (el !== button) {
				el.classList.remove('collapse');
			}
		});
	});
});
*/
