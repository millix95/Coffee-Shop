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
});
