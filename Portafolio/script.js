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
