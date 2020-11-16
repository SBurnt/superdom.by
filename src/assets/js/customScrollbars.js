import SimpleBar from 'simplebar/dist/simplebar';

const relatedProductsList = document.querySelectorAll('.related-products .products__list');

relatedProductsList.forEach(el => {
	// eslint-disable-next-line no-new
	new SimpleBar(el, {
		autoHide: false,
	});
});
