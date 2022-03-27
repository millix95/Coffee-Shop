window.addEventListener('load', function () {
	let menuBtn = document.getElementById('menu-btn');
	let mobileMenu = document.getElementById('mobile-menu');

	menuBtn.addEventListener('click', function () {
		mobileMenu.style.display = 'block';
	});

	let mobileMenuItems = document.getElementsByClassName('mobile-menu-item');

	for (let i = 0; i < mobileMenuItems.length; i++) {
		mobileMenuItems[i].addEventListener('click', function () {
			mobileMenu.style.display = 'none';
		});
	}

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
