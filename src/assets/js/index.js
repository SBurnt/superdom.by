import 'core-js/stable';
// import 'regenerator-runtime/runtime';
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';

document.addEventListener('DOMContentLoaded', function() {
	Swiper.use([Navigation, Pagination, Autoplay]);
	// global.Swiper = Swiper;
	const sliderPartners = document.querySelector('.js-partners-slider');

	const swiper = new Swiper(sliderPartners, {
		slidesPerView: 2,
		slidesPerGroup: 2,
		// spaceBetween: 10,
		// centeredSlides: true,
		// loop: true,
		// autoplay: {
		// 	delay: 3000,
		// },
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		breakpoints: {
			768: {
				slidesPerView: 3,
				slidesPerGroup: 3,
			},
			992: {
				slidesPerView: 6,
				slidesPerGroup: 6,
			},
		},
	});

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
		// opening the mobile menu END

		const mobItemsSubmenu = document.querySelectorAll('.mobMenuDrop');
		mobItemsSubmenu.forEach(function(items) {
			items.addEventListener('click', function(e) {
				// console.log('this ', this);
				// console.log('items last ', e.target.lastElementChild.className);
				// this.lastElementChild.classList.add('active');
				e.target.lastElementChild.classList.add('active');
			});
		});

		const mobItemsSubmenuBack = document.querySelectorAll('.submenu__back');
		mobItemsSubmenuBack.forEach(function(items) {
			items.addEventListener('click', function(e) {
				// console.log('itemsBack ', e);
				// console.log('this back', this);
				// this.parentElement.classList.remove('active');
				e.target.parentElement.classList.remove('active');
			});
		});

		// document.addEventListener('click', function(e) {
		// 	console.log(e.target);
		// });
	}

	if (module.hot) {
		module.hot.accept();
		// module.hot.dispose(function() {
		// swiper.parentNode.removeChild(swiper);
		// });
	}
});
