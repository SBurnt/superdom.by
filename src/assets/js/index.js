import 'core-js/stable';
// import 'regenerator-runtime/runtime';
import './lazyload';
import './header';
import './swiper';
import './tabs-gallery';
import './modals';
import './modal-work-exx';
import './customScrollbars';
import './customInputRange';
import './customSelect';
import './map';

if (module.hot) {
	module.hot.accept();
	// module.hot.dispose(function() {
	// swiper.parentNode.removeChild(swiper);
	// });
}
