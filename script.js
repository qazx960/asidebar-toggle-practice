const expand = document.querySelector('#tab');
const expandedTab = document.querySelector('.nav-expanded');
const navBar = document.querySelector('#nav-bar');

expand.addEventListener('click', () => {
	expandedTab.classList.toggle('hide');
	if (expandedTab.classList.contains('hide')) {
		navBar.style.marginLeft = '0';
	} else {
		navBar.style.marginLeft = '200px';
	}
});
