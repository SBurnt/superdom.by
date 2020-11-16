const modalWorkExx = function() {
	const btnBrick = document.querySelectorAll('.brick-desc__btn-detail');
	const modalImg = document.querySelector('.modal-work-exx__img');
	const modalTitle = document.querySelector('.modal-work-exx__title');
	const modalDesc = document.querySelector('.modal-work-exx__disсription');

	function setModalInfo(e) {
		// console.log(e.target.parentNode.parentNode);
		const parent = e.target.parentNode.parentNode;
		const child = parent.childNodes;
		const childimg = parent.previousElementSibling.src;
		const childTitle = child[1].childNodes[1].textContent;
		const childDisc = child[1].childNodes[3].textContent;

		modalImg.src = childimg;
		modalTitle.textContent = childTitle;
		modalDesc.textContent = childDisc;
	}

	btnBrick.forEach(item => {
		item.addEventListener('click', setModalInfo);
	});
};
modalWorkExx();
