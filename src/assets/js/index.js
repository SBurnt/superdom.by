import 'core-js/stable';
// import 'regenerator-runtime/runtime';
import './header';
import './swiper';
import './tabs-gallery';
import './modals';

if (module.hot) {
	module.hot.accept();
	// module.hot.dispose(function() {
	// swiper.parentNode.removeChild(swiper);
	// });
}
