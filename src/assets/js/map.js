/* eslint-disable no-sequences */
/* eslint-disable no-undef */
let myMap;
function init() {
	(myMap = new ymaps.Map('map', {
		center: [53.90223, 27.556422],
		zoom: 5,
		controls: ['zoomControl'],
	})),
		(clusterer = new ymaps.Clusterer({
			// preset: 'islands#redClusterIcons',
			// groupByCoordinates: false
		})),
		(geoObjects = []);
	geoObjects[0] = new ymaps.Placemark(
		[53.93558, 27.593407],
		{
			// hintContent: 'ул. Корш-Саблина, 5',
			// balloonContent: 'конт',
			// balloonContentBody: '<div><h4>Привет</h4><p>ghgh</p></div>',
			clusterCaption: 'ул. Корш-Саблина, 5',
			iconCaption: 'ул. Корш-Саблина, 5',
		},
		{
			iconColor: '#e10000',
		}
	);

	clusterer.add(geoObjects);
	myMap.geoObjects.add(clusterer);

	myMap
		.setBounds(clusterer.getBounds(), {
			checkZoomRange: true,
		})
		.then(function() {
			if (myMap.getZoom() > 14) myMap.setZoom(14);
		});
	myMap.behaviors.disable('scrollZoom');
}

ymaps.ready(init);
