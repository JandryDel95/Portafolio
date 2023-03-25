const githubLink = document.getElementById("github-link");
githubLink.addEventListener("click", (event) => {
  event.preventDefault();
  window.open("https://github.com/JandryDel95", "_blank");
});

const twitterLink = document.getElementById("twitter");
twitterLink.addEventListener("click", (event) => {
  event.preventDefault();
  window.open("https://twitter.com/Jan_Del95", "_blank");
});

const linkedInLink = document.getElementById("linkeIn-link");
linkedInLink.addEventListener("click", (event) => {
  event.preventDefault();
  window.open("https://www.linkedin.com/in/jandel95/", "_blank");
});

const emailLink = document.getElementById("email");
emailLink.addEventListener("click", (event) => {
  event.preventDefault();
  window.open("mailto:jandelgado95@gmail.com", "_blank");
});


const links = document.querySelectorAll('nav ul li a');

for (const link of links) {
	link.addEventListener('click', (e) => {
		e.preventDefault();

		const href = link.getAttribute('href');
		const target = document.querySelector(href);

		target.scrollIntoView({
			behavior: 'smooth'
		});
	});
}
// Seleccionar todos los enlaces de popup
var popupLinks = document.querySelectorAll('.popup-link');

// Agregar un manejador de eventos de clic a cada enlace
for (var i = 0; i < popupLinks.length; i++) {
  popupLinks[i].addEventListener('click', function(event) {
    // Prevenir el comportamiento predeterminado del enlace
    event.preventDefault();

    // Obtener el ID del popup correspondiente
    var popupId = this.getAttribute('data-popup');

    // Seleccionar el popup correspondiente
    var popup = document.getElementById('popup-' + popupId);

    // Mostrar el popup
    popup.classList.add('active');
  });
}

// Seleccionar todos los botones de cierre de popup
var closeButtons = document.querySelectorAll('.popup-close');

// Agregar un manejador de eventos de clic a cada botón de cierre
for (var i = 0; i < closeButtons.length; i++) {
  closeButtons[i].addEventListener('click', function(event) {
    // Prevenir el comportamiento predeterminado del botón
    event.preventDefault();

    // Seleccionar el popup que contiene el botón de cierre
    var popup = this.closest('.popup');

    // Ocultar el popup
    popup.classList.remove('active');
  });
}
