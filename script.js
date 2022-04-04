window.addEventListener('load', function () {
	let menuBtn = document.getElementById('menu-btn');
	let mobileMenu = document.getElementById('mobile-menu');

	menuBtn.addEventListener('click', function () {
		// mobileMenu.style.display = 'block';
		if (mobileMenu.style.display != 'block') {
			mobileMenu.style.display = 'block';
		} else {
			mobileMenu.style.display = 'none';
		}
	});

	let mobileMenuItems = document.getElementsByClassName('mobile-menu-item');

	for (let i = 0; i < mobileMenuItems.length; i++) {
		mobileMenuItems[i].addEventListener('click', function () {
			mobileMenu.style.display = 'none';
		});
	}


	// logika za mape
	var map = L.map('map').setView([51.505, -0.09], 13);
	L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
	}).addTo(map);

	L.marker([51.5, -0.09]).addTo(map)
		.bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
		.openPopup();


	// ZA PRELAZ SA JEDNE SEKCIJE NA DRUGU
	// let heroSection = getElementById('hero-section');
	// let heroSectionHeight = heroSection.clientHeight;
	// let header = document.getElementById('header');

	// document.addEventListener('scroll', function () {
	// 	if (document.documentElement.scrollTop > heroSectionHeight) {
	// 		if (!header.classList.contains('solid-header')) {
	// 			header.classList.add('solid-header');
	// 		}
	// 	} else {
	// 		if (header.classList.contains('solid-header')) {
	// 			header.classList.remove('solid-header');
	// 		}
	// 	}
	// });
});
