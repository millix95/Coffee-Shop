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
	};


	// logika za mape
	let myMap = L.map('map');
	myMap.setView([37.974, 23.72], 13);

	L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
	}).addTo(myMap);
});
