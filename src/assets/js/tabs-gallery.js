const tabsGallery = function() {
	const btnTab = document.querySelectorAll('.gallery__tab');
	const tabContent = document.querySelectorAll('.gallery__list');
	let tabName;

	function selectContentTab(name) {
		tabContent.forEach(item => {
			if (item.classList.contains(name)) {
				item.classList.add('is-active');
			} else {
				item.classList.remove('is-active');
			}
		});
	}

	function selectBtnTab() {
		btnTab.forEach(item => {
			item.classList.remove('is-active');
		});
		// console.log(this);
		this.classList.add('is-active');
		tabName = this.getAttribute('data-tab-gallery');
		// console.log(tabName);
		selectContentTab(tabName);
	}

	btnTab.forEach(item => {
		item.addEventListener('click', selectBtnTab);
	});
};

tabsGallery();
