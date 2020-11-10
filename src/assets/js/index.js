import 'core-js/stable';
// import 'regenerator-runtime/runtime';
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';

document.addEventListener('DOMContentLoaded', function() {
	Swiper.use([Navigation, Pagination, Autoplay]);
	global.Swiper = Swiper;
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

	if (module.hot) {
		module.hot.accept();
		module.hot.dispose(function() {
			swiper.parentNode.removeChild(swiper);
		});
	}
});
