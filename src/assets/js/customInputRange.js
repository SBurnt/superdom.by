import noUiSlider from 'nouislider';

const slider = document.querySelector('.js-filter-range');
const inputMinVal = document.querySelector('#filter__input-min');
const inputMaxVal = document.querySelector('#filter__input-max');

/**
 * @param filterRange - range
 * @param min - min value
 * @param max - max value
 * @param step - step range
 * @param initPositionArr - an array of the initial value of the sliders
 *
 * getData - getting values
 * setData - setting values, array
 */

const noUiSliderInit = function(filterRange, min, max, step, initPositionArr) {
	// const rangeSlider = document.querySelector(`.${filterRange}`);
	// const input0 = document.querySelector(filterRange);
	// const input1 = document.querySelector(filterRange);
	const input0 = inputMinVal;
	const input1 = inputMaxVal;
	const inputs = [input0, input1];

	noUiSlider.create(filterRange, {
		start: initPositionArr,
		connect: true,
		range: {
			min: [min, step],
			max: [max, step],
		},
	});

	filterRange.noUiSlider.on('update', function(values, handle) {
		// если нужны копейки, убрать parseInt
		// eslint-disable-next-line radix
		inputs[handle].value = parseInt(values[handle]);
		// inputs[handle].value = values[handle];
		// document.querySelector('.filter__form').submit();
	});

	// filterRange.noUiSlider.on('change', function(values, handle) {
	// 	// document.querySelector('.filter__form').submit();
	// });

	function setSliderHandle(i, value) {
		const r = [null, null];
		r[i] = value;
		filterRange.noUiSlider.set(r);
	}

	// Listen to keydown events on the input field.
	// eslint-disable-next-line no-shadow
	function keydownEventsNoUiSlider(inputs) {
		inputs.forEach(function(input, handle) {
			input.addEventListener('change', function() {
				setSliderHandle(handle, this.value);
			});

			input.addEventListener('keydown', function(e) {
				const values = filterRange.noUiSlider.get();

				const value = Number(values[handle]);

				// [[handle0_down, handle0_up], [handle1_down, handle1_up]]
				const steps = filterRange.noUiSlider.steps();

				// [down, up]
				// eslint-disable-next-line no-shadow
				const step = steps[handle];
				let position;

				// 13 is enter,
				// 38 is key up,
				// 40 is key down.

				// eslint-disable-next-line default-case
				switch (e.which) {
					case 13:
						setSliderHandle(handle, this.value);
						break;

					case 38:
						// Get step to go increase slider value (up)
						position = step[1];

						// false = no step is set
						if (position === false) {
							position = 1;
						}
						// null = edge of slider
						if (position !== null) {
							setSliderHandle(handle, value + position);
						}
						break;

					case 40:
						position = step[0];

						if (position === false) {
							position = 1;
						}
						if (position !== null) {
							setSliderHandle(handle, value - position);
						}
						break;
				}
			});
		});
	}

	//ввод данных с клавиатуры
	keydownEventsNoUiSlider(inputs);

	this.getData = function() {
		return filterRange.noUiSlider.get();
	};

	this.setData = function(data) {
		filterRange.noUiSlider.set(data);
	};
};

if (slider) {
	let minVal = 0;
	let maxVal = 0;
	let minValCurrent = 0;
	let maxValCurrent = 0;
	if (inputMinVal.value !== '') {
		minValCurrent = parseFloat(inputMinVal.value);
	} else {
		minValCurrent = parseFloat(inputMinVal.getAttribute('data-min-val'));
	}
	if (inputMaxVal.value !== '') {
		maxValCurrent = parseFloat(inputMaxVal.value);
	} else {
		maxValCurrent = parseFloat(inputMaxVal.getAttribute('data-max-val'));
	}
	minVal = parseFloat(inputMinVal.getAttribute('data-min-val'));
	maxVal = parseFloat(inputMaxVal.getAttribute('data-max-val'));

	// eslint-disable-next-line new-cap
	window.sliderAside = new noUiSliderInit(slider, minVal, maxVal, 1, [
		minValCurrent,
		maxValCurrent,
	]);
}
