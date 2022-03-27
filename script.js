window.addEventListener('load', function () {
	let menuBtn = document.getElementById('menu-btn');
	let mobileMenu = document.getElementById('mobile-menu');
	let closeBtn = document.getElementById('close-btn');
	let about = document.getElementById('about');
	let products = document.getElementById('products');
	let contact = document.getElementById('contact');
	let map = document.getElementById('map');

	menuBtn.addEventListener('click', function () {
		mobileMenu.style.display = 'block';
	});
	about.addEventListener('click', function () {
		mobileMenu.style.display = 'none';
	});
	products.addEventListener('click', function () {
		mobileMenu.style.display = 'none';
	});
	contact.addEventListener('click', function () {
		mobileMenu.style.display = 'none';
	});
	map.addEventListener('click', function () {
		mobileMenu.style.display = 'none';
	});
	closeBtn.addEventListener('click', function () {
		mobileMenu.style.display = 'none';
	});
});
