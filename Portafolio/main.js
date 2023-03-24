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


