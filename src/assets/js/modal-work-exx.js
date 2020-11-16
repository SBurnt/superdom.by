const modalWorkExx = function() {
	const btnBrick = document.querySelectorAll('.brick-desc__btn-detail');
	const modalImg = document.querySelector('.modal-work-exx__img');
	const modalTitle = document.querySelector('.modal-work-exx__title');
	const modalDisc = document.querySelector('.modal-work-exx__disсription');

	function setModalInfo(e) {
		// console.log(e.target.parentNode.parentNode);
		// const parent = e.target.parentNode.parentNode;
		// const child = parent.childNodes;
		// const childimg = parent.previousElementSibling.src;
		// const childTitle = child[1].childNodes[1].textContent;
		// const childDisc = child[1].childNodes[3].textContent;

		const parent = this.closest('.brick-desc');
		const childimg = parent.querySelector('.brick-desc__img').src;
		const childTitle = parent.querySelector('.brick-desc__title').textContent;
		const childDisc = parent.querySelector('.brick-desc__disсription').textContent;

		modalImg.src = childimg;
		modalTitle.textContent = childTitle;
		modalDisc.textContent = childDisc;
	}

	btnBrick.forEach(item => {
		item.addEventListener('click', setModalInfo);
	});
};
modalWorkExx();
