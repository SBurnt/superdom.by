const modalGallery = function() {
	const galleryItem = document.querySelectorAll('.gallery__img');
	const modalImg = document.querySelector('.modal-gallery__img');
	const modalTitle = document.querySelector('.modal-gallery__title');
	const modalDesc = document.querySelector('.modal-gallery__description');

	function setModalInfo(e) {
		const parent = this.closest('.gallery__item');
		const childImg = parent.querySelector('.gallery__img').src;
		const childTitle = parent.querySelector('.gallery__title').textContent;
		const childDesc = parent.querySelector('.gallery__description').textContent;

		modalImg.src = childImg;
		modalTitle.textContent = childTitle;
		modalDesc.textContent = childDesc;
	}

	galleryItem.forEach(item => {
		item.addEventListener('click', setModalInfo);
	});
};
modalGallery();
