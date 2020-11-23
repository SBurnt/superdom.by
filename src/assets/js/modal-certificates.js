const modalCertificates = function() {
	const certificatesItem = document.querySelectorAll('.certificates__link');
	const modalImg = document.querySelector('.modal-certificates__img');

	console.log(certificatesItem);
	function setModalInfo(e) {
		const parent = this.closest('.certificates__item');
		console.log(parent);
		const childImg = parent.querySelector('.certificates__img').src;

		modalImg.src = childImg;
	}

	certificatesItem.forEach(item => {
		item.addEventListener('click', setModalInfo);
	});
};
modalCertificates();
