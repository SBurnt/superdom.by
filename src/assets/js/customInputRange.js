import noUiSlider from 'nouislider';

const slider = document.querySelector('.js-filter-range');

if (slider) {
	noUiSlider.create(slider, {
		start: [1100, 2000],
		connect: true,
		range: {
			min: 1100,
			max: 2500,
		},
	});
}
