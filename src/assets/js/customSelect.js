import Choices from 'choices.js';

const defaultSelect = () => {
	const selectCollection = document.querySelector('.js-collection-select');

	if (selectCollection) {
		// eslint-disable-next-line no-undef
		const choices = new Choices(selectCollection, {
			searchEnabled: false,
			// noResultsText: 'Ничего не найдено',
		});

		// const ariaLabel = selectCollection.getAttribute('aria-label');
		// selectCollection.closest('.choices').setAttribute('aria-label', ariaLabel);
	}
};

defaultSelect();
