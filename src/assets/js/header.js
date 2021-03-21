function headerScrollDesc() {
	const header = document.querySelector('.header');
	if (header.offsetHeight + 100 < window.pageYOffset) {
		header.classList.add('fixed');
	} else {
		header.classList.remove('fixed');
	}
}

if (window.innerWidth > 1024) {
	headerScrollDesc();

	window.addEventListener('scroll', function() {
		headerScrollDesc();
	});
}

if (window.innerWidth <= 1024) {
	// opening the mobile menu START
	const btnMobMenu = document.querySelector('.js-btn-mob-menu');
	const mobileMenu = document.querySelector('.header__nav');

	btnMobMenu.addEventListener('click', function() {
		mobileMenu.classList.toggle('active-mob');
	});

	mobileMenu.addEventListener('click', e => {
		const mobMenuDrop = e.target.closest('.mobMenuDrop');
		const mobMenuDropBack = e.target.closest('.submenu__back');

		if (mobMenuDrop) {
			mobMenuDrop.querySelector('.submenu').classList.add('active');
		}

		if (mobMenuDropBack) {
			mobMenuDropBack.parentElement.classList.remove('active');
		}
	});
	// opening the mobile menu END
}
